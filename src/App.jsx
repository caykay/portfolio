import styled from "styled-components";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { useState, useEffect } from "react";
import { MenuActiveContext } from "./context/MenuActiveContext";
import useWindowDimensions from "./hooks/useWindowDimensions";
import { GlobalStyles } from "./styles/GlobalStyles";
import PageLoad from "./PageLoad";
import Header from "./components/Header";
import Main from "./components/content/Main";
import Footer from "./components/Footer";

const StyledApp = styled.div`
  display: grid;
  // flex-direction: column;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr auto;
  grid-template-areas: "main" "footer";
  gap: 100px;

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

  const [pageLoading, setPageLoading] = useState(true);

  function finishLoading() {
    setPageLoading((loading) => false);
  }

  return (
    // todo: pass in a context provider for the dark/light theme
    <HelmetProvider>
      <Helmet>
        <style>
          @import
          url("https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&family=Karla:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;1,200;1,300;1,400;1,500;1,600;1,700;1,800&family=PT+Mono&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");
        </style>
      </Helmet>
      <GlobalStyles />
      {pageLoading && <PageLoad finishLoading={finishLoading} />}
      {!pageLoading && (
        <>
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
      )}
    </HelmetProvider>
  );
}

export default App;
