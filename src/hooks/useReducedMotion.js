import { useEffect, useState } from "react";

const renderingOnServer = typeof window === "undefined";
const QUERY = "(prefers-reduced-motion: reduce)";

function getInitialState() {
  return renderingOnServer
    ? renderingOnServer
    : window.matchMedia(QUERY).matches;
}

export default function useReducedMotion() {
  const [reducedMotion, setReducedMotion] = useState(() => getInitialState());

  useEffect(() => {
    const mediaQuery = window.matchMedia(QUERY);

    const listener = (event) => {
      setReducedMotion(event.matches);
    };

    mediaQuery.addEventListener("change", listener);

    return () => mediaQuery.removeEventListener("change", listener);
  }, []);

  return reducedMotion;
}
