import React from "react";
import { Input } from "../Components/Inputs/Input";
import { AppContext } from "../context/AppContext";
import { APP_ICONS, APP_PAGES } from "../context/settings";
import { ApiServices } from "../utils/ApiServices";

export const LoginScreen = () => {
  const {
    setNavPage,
    userEmail,
    setUserEmail,
    userPassword,
    setUserPassword,
    setErrorMsg,
    errorMsg,
    userAccountReg,
    setUserAccountReg
  } = React.useContext(AppContext);

  const onLogin = async () => {
    if (userEmail === "" || userPassword === "") {
      setErrorMsg("Provide the necessary information to continue.");
    }

    try {
      const response = await ApiServices.on_login({
        email: userEmail,
        password: userPassword
      });

      if (response.token) {
        console.log(response);
        setUserAccountReg({
          access_group: response.user.access_group,
          account_name: response.user.name,
          account_record: [],
          active_companies: [
            {
              company_name: "Deepcatch Group",
              comp_address: "33 Nickle Street, Windhoek"
            }
          ],
          user: response
        });
        console.log(response);
      }
    } catch (err) {
      console.log(err);
      setErrorMsg("Something went wrong, please try again later.");
    }
  };

  const onSetPassword = (e) => {
    setUserPassword(e);
  };

  const onSetUsername = (e) => {
    setUserEmail(e);
  };

  return (
    <div className="container login-container">
      <div className="login-container-header">
        <h4>{APP_ICONS.BULB}</h4>
        <h4>Login and learners from around the globe</h4>
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
          onChange={(e) => {
            onSetUsername(e.target.value);
          }}
        />
        <Input
          placeholder={"••••••••"}
          type={"password"}
          onChange={(e) => {
            onSetPassword(e.target.value);
          }}
        />
        <div className="login-container-text">
          <h5>forgot password</h5>
        </div>
        <Input
          type={"button"}
          className={"btn default-btn"}
          value={"Login"}
          onClick={onLogin}
        />
        <Input
          type={"button"}
          className={"btn outline-btn"}
          value={"Create an account"}
          onClick={() => {
            setNavPage(APP_PAGES.APP.REGISTER);
            setErrorMsg("");
          }}
        />
      </div>
      {/* {userAccountReg && } */}
    </div>
  );
};
