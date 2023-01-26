import { useState, useContext, useEffect } from "react";
import { MenuActiveContext } from "./context/MenuActiveContext";
import useWindowDimensions from "./hooks/useWindowDimensions";
import "./App.css";
import Header from "./components/Header";
import Main from "./components/content/Main";
import Footer from "./components/Footer";
import styled from "styled-components";

const StyledApp = styled.div`
  display: grid;
  // flex-direction: column;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr auto;
  grid-template-areas: "main" "footer";
  gap: 100px;

  // todo: delegate to actual components
  main {
    grid-area: main;
  }

  footer {
    grid-area: footer;
  }
`;

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
  }, [width]);

  return (
    <StyledApp className="App">
      <MenuActiveContext.Provider value={[menuActive, toggleMenu]}>
        <Header />
      </MenuActiveContext.Provider>
      {/* 
      TODO: Add routes (when scaling up)
      */}
      <Main />
      <Footer />
    </StyledApp>
  );
}

export default App;
