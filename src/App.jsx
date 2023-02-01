import styled from "styled-components";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { useState, useEffect, useReducer } from "react";
import { ThemeContext, ContentContext } from "./context";
import { useReducedMotion, useWindowDimensions } from "./hooks";
import { GlobalStyles } from "./styles/GlobalStyles";
import { LoadingPage, MainContent, Header, Footer } from "./components/layout";
import { MotionConfig, useScroll } from "framer-motion";

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

const INITIAL_ANIMATION_STATES = {
  navDone: false,
  heroDone: false,
  socialsDone: false,
};

// similar to enums
export const ACTION_TYPES = {
  NAV_DONE: 1,
  HERO_DONE: 2,
  SOCIALS_DONE: 3,
};

const animationReducer = (state, action) => {
  switch (action.type) {
    case ACTION_TYPES.NAV_DONE:
      return { ...state, navDone: true };
    case ACTION_TYPES.HERO_DONE:
      return { ...state, heroDone: true };
    case ACTION_TYPES.SOCIALS_DONE:
      return { ...state, socialsDone: true };
    default:
      break;
  }
};

function getInitialStates(isMotionReduced) {
  const reducedAnimationStates = {
    navDone: true,
    heroDone: true,
    socialsDone: true,
  };
  return isMotionReduced ? reducedAnimationStates : INITIAL_ANIMATION_STATES;
}

function App() {
  const [menuActive, setMenuActive] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [themeColor, setThemeColor] = useState("rgb(35, 147, 227)");
  const [pageLoading, setPageLoading] = useState(true);

  const { width } = useWindowDimensions();
  const reducedMotion = useReducedMotion();
  // animation statuses for (nav, hero and socials (if on side))
  const [animStates, dispatch] = useReducer(
    animationReducer,
    INITIAL_ANIMATION_STATES,
    getInitialStates
  );
  // y-axis scroll progress of the main content
  const [scrollProgress, setScrollProgress] = useState(0);
  const { scrollYProgress } = useScroll();

  function toggleMenu() {
    setMenuActive(!menuActive);
  }

  function toggleDarkMode() {
    setDarkMode((mode) => !mode);
  }

  function updateScrollProgress(n) {
    setScrollProgress(n);
  }

  // close side menu on window resize
  useEffect(() => {
    if (width > 770) {
      setMenuActive(false);
    }

    // disable scroll when menu is active (most effective in mobile)
    if (menuActive) document.querySelector("body").classList.add("no-scroll");
    else document.querySelector("body").classList.remove("no-scroll");
  }, [width, menuActive]);

  useEffect(() => {
    scrollYProgress.on("change", (n) => updateScrollProgress(n));

    return () => scrollYProgress.destroy();
  }, []);

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
      <ThemeContext.Provider
        value={{ darkMode, toggleDarkMode, themeColor, reducedMotion }}>
        {/* activate loading page is the page is loaded */}
        {pageLoading && <LoadingPage finishLoading={finishLoading} />}

        {/* Only show main app content once page is done loading */}
        {!pageLoading && (
          <MotionConfig reducedMotion="user">
            <StyledApp className="App" menuActive={menuActive}>
              <ContentContext.Provider
                value={{
                  menuActive,
                  toggleMenu,
                  width,
                  animStates,
                  dispatch,
                }}>
                <Header pageScroll={scrollProgress} />
                <MainContent />
                <Footer />
              </ContentContext.Provider>
            </StyledApp>
          </MotionConfig>
        )}
      </ThemeContext.Provider>
    </HelmetProvider>
  );
}

export default App;
