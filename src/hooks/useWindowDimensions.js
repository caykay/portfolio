import { useState, useEffect } from "react";

// return the current window dimensions
function getWindowDimension() {
  const { innerWidth: width, innerHeight: height } = window;
  return { width, height };
}

export default function useWindowDimensions() {
  // windows dimension state
  const [windowDimensions, setWindowDimensions] = useState(() =>
    getWindowDimension()
  );

  // use effect only runs once when component mounts
  // the event listener will be responsible for updating the state
  useEffect(() => {
    // handle resize event
    function handleResize() {
      setWindowDimensions(getWindowDimension());
    }

    // add resize event listener
    window.addEventListener("resize", handleResize);
    // remove resize event listener when component unmounts
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowDimensions;
}
