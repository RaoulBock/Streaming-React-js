import React from "react";
import { APP_PAGES } from "./settings";

export const AppContext = React.createContext({
  navPage: "",
  setNavPage: (val) => {},
  userAccountReg: null,
  setUserAccountReg: (val) => {}
});

const AppProvider = ({ children }) => {
  const [navPage, setNavPage] = React.useState(APP_PAGES.APP.HOME);
  const [userData, setUserData] = React.useState();
  const [userAccountReg, setUserAccountReg] = React.useState({
    email: "dev@dev.com",
    username: "dev"
  });

  const [errorMsg, setErrorMsg] = React.useState("");

  const [tab, setTab] = React.useState(0);

  return (
    <AppContext.Provider
      value={{
        navPage,
        setNavPage,

        errorMsg,
        setErrorMsg,
        userData,
        setUserData,
        tab,
        setTab,
        userAccountReg,
        setUserAccountReg
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
