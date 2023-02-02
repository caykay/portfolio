import { useState, useEffect } from "react";

const QUERY = "(prefers-color-scheme: dark)";

function getInitialState() {
  return window.matchMedia(QUERY).matches;
}

function usePrefersColorScheme() {
  const [isDarkMode, setIsDarkMode] = useState(() => getInitialState());

  useEffect(() => {
    const mediaQuery = window.matchMedia(QUERY);

    const listener = (event) => setIsDarkMode(event.matches);

    mediaQuery.addEventListener("change", listener);

    return mediaQuery.removeEventListener("change", listener);
  }, []);

  return isDarkMode;
}

export default usePrefersColorScheme;
