import React from "react";
import "./App.css";
import { SideNav } from "./Components/Nav/SideNav";
import AppProvider, { AppContext } from "./context/AppContext";
import { APP_PAGES } from "./context/settings";
import { HomeScreen } from "./Screens/HomeScreen";

function App() {
  return (
    <AppProvider>
      <NavWrapper />
    </AppProvider>
  );
}

const NavWrapper = () => {
  const { navPage, setNavPage, showMenu, setShowMenu } =
    React.useContext(AppContext);
  const onSetNavPage = (e) => {
    setNavPage(e);
  };

  React.useEffect(() => {
    console.log("App Nav: ", navPage);
  }, [navPage]);

  return (
    <>
      <div className="main_container">
        {showMenu && <SideNav />}

        <div className="screen_container">
          {navPage === APP_PAGES.APP.HOME && <HomeScreen />}
        </div>
      </div>
    </>
  );
};

export default App;
