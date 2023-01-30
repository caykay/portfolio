import styled from "styled-components";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { useState, useEffect } from "react";
import { ThemeContext, MenuActiveContext } from "./context";
import { useWindowDimensions } from "./hooks";
import { GlobalStyles } from "./styles/GlobalStyles";
import { LoadingPage, MainContent, Header, Footer } from "./components/layout";

const StyledApp = styled.div`
  display: grid;
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
  const [darkMode, setDarkMode] = useState(false);
  const [themeColor, setThemeColor] = useState("rgb(35, 147, 227)");
  const { width } = useWindowDimensions();

  function toggleMenu() {
    setMenuActive(!menuActive);
  }

  function toggleDarkMode() {
    setDarkMode((mode) => !mode);
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
    // todo: pass in a context provider for the dark/light theme and theme color
    <HelmetProvider>
      <Helmet>
        <style>
          @import
          url("https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&family=Karla:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;1,200;1,300;1,400;1,500;1,600;1,700;1,800&family=PT+Mono&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");
        </style>
      </Helmet>
      <GlobalStyles primaryColor={themeColor} />
      <ThemeContext.Provider value={{ darkMode, toggleDarkMode, themeColor }}>
        {/* activate loading page is the page is loaded */}
        {pageLoading && <LoadingPage finishLoading={finishLoading} />}

        {/* Only show main app content once page is done loading */}
        {!pageLoading && (
          <>
            <StyledApp className="App" menuActive={menuActive}>
              <MenuActiveContext.Provider
                value={{ menuActive, toggleMenu, width }}
              >
                <Header />
                <MainContent />
                <Footer />
              </MenuActiveContext.Provider>
            </StyledApp>
          </>
        )}
      </ThemeContext.Provider>
    </HelmetProvider>
  );
}

export default App;
