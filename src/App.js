import React from "react";
import "./App.css";
import AppProvider, { AppContext } from "./context/AppContext";
import { APP_PAGES } from "./context/settings";
import { HomeScreen } from "./Screens/HomeScreen";
import { LoginScreen } from "./Screens/LoginScreen";
import { RegisterScreen } from "./Screens/RegisterScreen";

function App() {
  return (
    <AppProvider>
      <NavWrapper />
    </AppProvider>
  );
}

const NavWrapper = () => {
  const { navPage, setNavPage, userAccountReg } = React.useContext(AppContext);
  const onSetNavPage = (e) => {
    setNavPage(e);
  };

  React.useEffect(() => {
    console.log("App Nav: ", navPage);
  }, [navPage]);

  return (
    <>
      {/* {userData.length > 0 && navPage === APP_PAGES.APP.HOME ? (
        <HomeScreen />
      ) : (
        <LoginScreen />
      )} */}

      {navPage === APP_PAGES.APP.HOME && <HomeScreen />}
      {navPage === APP_PAGES.APP.LOGIN && <LoginScreen />}

      {navPage === APP_PAGES.APP.REGISTER && <RegisterScreen />}
    </>
  );
};

export default App;
