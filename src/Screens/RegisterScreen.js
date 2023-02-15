import React from "react";
import { Input } from "../Components/Inputs/Input";
import { AppContext } from "../context/AppContext";
import { APP_ICONS, APP_PAGES } from "../context/settings";
import { ApiServices, AuthServices } from "../utils/ApiServices";

export const RegisterScreen = () => {
  const {
    setNavPage,
    errorMsg,
    setErrorMsg,
    setUserAccountReg,
    userAccountReg
  } = React.useContext(AppContext);

  const [userEmail, setUserEmail] = React.useState("");
  const [userUsername, setUserUsername] = React.useState("");
  const [userPassword, setUserPassword] = React.useState("");
  const [userPasswordConfirm, setUserPasswordConfirm] = React.useState("");

  // const handleRegister = async () => {
  //   try {
  //     const response = await AuthServices.on_register({
  //       name: userUsername,
  //       email: userEmail,
  //       password: userPassword
  //     });

  //     if (response.token) {
  //       // setUserData({
  //       //   account_name: response.user.name,
  //       //   account_email: response.user.email,
  //       //   token: response.token
  //       // });
  //       console.log(response);
  //     }
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  React.useEffect(() => {
    console.log(userAccountReg);
  }, [userAccountReg]);

  const demo_login = () => {
    if (
      userEmail === "" ||
      userUsername === "" ||
      userPassword === "" ||
      userPasswordConfirm === ""
    ) {
      setErrorMsg("Please provide the necessary information to continue.");
    } else if (userPassword !== userPasswordConfirm) {
      setErrorMsg("Password does not match");
    }
    setUserAccountReg({
      email: userEmail,
      username: userUsername
    });
  };

  return (
    <div className="container login-container">
      <div className="login-container-header">
        <h4>{APP_ICONS.BULB}</h4>

        <h4>Join over 25 million learners from around the globe</h4>
        <h2>{errorMsg}</h2>
        <h6>
          Laborum exercitation reprehenderit ea amet laborum nulla tempor. Enim
          minim sunt enim esse. Occaecat consequat culpa eu aliqua irure tempor
          pariatur quis do ut nisi pariatur. Ex nulla do labore culpa culpa
          mollit sit ullamco quis mollit in ex.
        </h6>
        <Input
          placeholder={"Someone@something.com"}
          type={"email"}
          onChange={(e) => setUserEmail(e.target.value)}
        />
        <Input
          placeholder={"Username"}
          onChange={(e) => setUserUsername(e.target.value)}
        />
        <Input
          placeholder={"••••••••"}
          type={"password"}
          onChange={(e) => setUserPassword(e.target.value)}
        />
        <Input
          placeholder={"••••••••"}
          type={"password"}
          onChange={(e) => setUserPasswordConfirm(e.target.value)}
        />
        <div className="login-container-grid">
          <Input type={"checkbox"} className={"default-checkbox"} />
          <h5>I agree to all statements included in Terms and Conditions</h5>
        </div>
        <Input
          type={"button"}
          className={"default-btn"}
          value={"Register"}
          onClick={demo_login}
        />
        <Input
          type={"button"}
          className={"btn outline-btn"}
          value={"Sign in"}
          onClick={() => {
            setNavPage(APP_PAGES.APP.LOGIN);
            setErrorMsg("");
          }}
        />
      </div>
    </div>
  );
};
