const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const compress = require("compression");
const cors = require("cors");
const helmet = require("helmet");
const userRoutes = require("./routes/user.routes");
const authRoutes = require("./routes/auth.routes");

//comment out before building for production
const devBundle = require("./devBundle");
const { corsOptions } = require("../config/network");

const CURRENT_WORKING_DIR = process.cwd();
const app = express();

// enable CORS - Cross Origin Resource Sharing
app.use(cors());

//comment out before building for production
// devBundle.compile(app);

app.use(express.json({ limit: "500mb" }));
app.use(express.urlencoded({ limit: "500mb" }));
app.use(express.urlencoded({ extended: false }));

// parse body params and attache them to req.body
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(compress());
// secure apps by setting various HTTP headers
// app.use(helmet({ crossOriginResourcePolicy: false, }));
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));

app.use("/dist", express.static(path.join(CURRENT_WORKING_DIR, "dist")));
app.use(express.static(path.join(CURRENT_WORKING_DIR, "public")));

// mount routes
app.use("/", userRoutes);
app.use("/", authRoutes);

app.get("*", (req, res) => {
  res.status(200).send("invalid request!");
});

// Catch unauthorised errors
app.use((err, req, res, next) => {
  if (err.name === "UnauthorizedError") {
    res.status(401).json({ error: err.name + ": " + err.message });
  } else if (err) {
    res.status(400).json({ error: err.name + ": " + err.message });
    console.log(err);
  }
});

module.exports = app;
