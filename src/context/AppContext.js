import React from "react";
import { APP_PAGES } from "./settings";

export const AppContext = React.createContext({
  navPage: "",
  setNavPage: (val) => {},
});

const AppProvider = ({ children }) => {
  const [navPage, setNavPage] = React.useState(APP_PAGES.APP.HOME);
  const [sideTab, setSideTab] = React.useState(0);

  return (
    <AppContext.Provider
      value={{
        navPage,
        setNavPage,
        sideTab,
        setSideTab,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
