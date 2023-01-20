import React from "react";
import { APP_PAGES } from "./settings";

export const AppContext = React.createContext({
  navPage: "",
  setNavPage: (val) => {},
});

const AppProvider = ({ children }) => {
  const [navPage, setNavPage] = React.useState(APP_PAGES.APP.HOME);
  const [sideTab, setSideTab] = React.useState(0);
  const [showMenu, setShowMenu] = React.useState(false);

  return (
    <AppContext.Provider
      value={{
        navPage,
        setNavPage,
        sideTab,
        setSideTab,
        showMenu,
        setShowMenu,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
