import { useEffect, useState } from "react";

function getMediaQuery() {
  return window.matchMedia("(prefers-reduced-motion: reduce)");
}

export default function useReducedMotion() {
  const [reducedMotion, setReducedMotion] = useState(
    () => getMediaQuery().matches
  );

  useEffect(() => {
    const mediaQuery = getMediaQuery();

    const listener = (event) => {
      setReducedMotion(event.matches);
    };

    mediaQuery.addEventListener("change", listener);

    return () => mediaQuery.removeEventListener("change", listener);
  }, []);

  return reducedMotion;
}
