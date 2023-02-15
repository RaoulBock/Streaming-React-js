const User = require("../models/user.model");
const jwt = require("jsonwebtoken");
const { expressjwt } = require("express-jwt");
const config = require("../../config/config");

const signin = async (req, res) => {
  try {
    let user = await User.findOne({
      email: req.body.email
    }).populate(
      "enrollements",
      "_id name description sales_price sales_code rating score image category master_category updated instructor published lessons created"
    );
    if (!user)
      return res.status("401").json({
        error: "User not found"
      });

    if (!user.authenticate(req.body.password)) {
      return res.status("401").send({
        error: "Email and password don't match."
      });
    }

    const token = jwt.sign(
      {
        _id: user._id,
        algorithms: ["RS256"]
      },
      config.jwtSecret
    );

    res.cookie("t", token, {
      expire: new Date() + 9999
    });

    return res.json({
      token,
      user: {
        _id: user._id,
        name: user.name,
        email: user.email,
        educator: user.educator,
        occupation: user.occupation,
        phone: user.phone,
        access_group: user.access_group,
        shopping_cart: user.shopping_cart,
        enrollements: user.enrollements
      }
    });
  } catch (err) {
    return res.status("401").json({
      error: "Could not sign in"
    });
  }
};

const signout = (req, res) => {
  res.clearCookie("t");
  return res.status("200").json({
    message: "signed out"
  });
};

const requireSignin = expressjwt({
  secret: config.jwtSecret,
  userProperty: "auth",
  algorithms: ["sha1", "RS256", "HS256"]
});

const hasAuthorization = (req, res, next) => {
  const authorized = req.profile && req.auth && req.profile._id == req.auth._id;
  if (!authorized) {
    return res.status("403").json({
      error: "User is not authorized"
    });
  }
  next();
};

module.exports = {
  signin,
  signout,
  requireSignin,
  hasAuthorization
};
