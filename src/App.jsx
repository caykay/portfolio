import { useState, useEffect } from "react";
import { MenuActiveContext } from "./context/MenuActiveContext";
import useWindowDimensions from "./hooks/useWindowDimensions";
import { GlobalStyles } from "./styles/GlobalStyles";
import Header from "./components/Header";
import Main from "./components/content/Main";
import Footer from "./components/Footer";
import { StyledApp } from "./styles/Styles";

function App() {
  const [menuActive, setMenuActive] = useState(false);
  const { width } = useWindowDimensions();

  function toggleMenu() {
    setMenuActive(!menuActive);
    console.log("click");
  }

  // close menu on window resize
  useEffect(() => {
    if (width > 770) {
      setMenuActive(false);
    }

    // disable scroll when menu is active (most effective in mobile)
    if (menuActive) document.querySelector("body").classList.add("no-scroll");
    else document.querySelector("body").classList.remove("no-scroll");
  }, [width, menuActive]);

  return (
    // todo: pass in a context provider for the dark/light theme
    <>
      <GlobalStyles />
      <StyledApp className="App" menuActive={menuActive}>
        <MenuActiveContext.Provider value={[menuActive, toggleMenu, width]}>
          <Header />
        </MenuActiveContext.Provider>
        {/* 
      TODO: Add routes (when scaling up)
      */}
        <MenuActiveContext.Provider value={[menuActive]}>
          <Main />
          <Footer />
        </MenuActiveContext.Provider>
      </StyledApp>
    </>
  );
}

export default App;
