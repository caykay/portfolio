// import Logo from "./components/icons/Logo";
import LoadingIcon from "../icons/LoadingIcon";
import styled from "styled-components";
import { Helmet } from "react-helmet-async";
import { useEffect, useState, useContext } from "react";
import { ThemeContext } from "../../context";
import anime from "animejs";

const StyledLoadingPage = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.6);

  .logo-wrapper {
    position: absolute;
    top: 50%;
    left: 50%;
    max-width: 100px;
    width: max-content;
    transform: translate(-50%, -50%);

    transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);

    opacity: ${({ mounted }) => (mounted ? 1 : 0)};

    svg {
      width: 100%;
      display: block;
      user-select: none;
      #C {
        opacity: 0;
      }
    }
  }
`;

function PageLoad({ finishLoading }) {
  const [isMounted, setIsMounted] = useState(false);
  const { themeColor } = useContext(ThemeContext);

  function animate() {
    // setup timeline animations and parent properties
    var animation = anime.timeline({
      easing: "easeInOutQuart",
      duration: 2000,
      direction: "linear",
      loop: false,
      complete: () => finishLoading(),
    });

    // path animation
    animation.add({
      targets: "#path",
      strokeDashoffset: [anime.setDashoffset, 0],
    });

    // letter c fade in animation
    animation.add(
      {
        targets: "#C",
        opacity: 1,
        duration: 500,
      },
      "-=500"
    );

    // whole icon minimize animation
    animation.add(
      {
        targets: ".LoadingIcon",
        scale: 0,
        duration: 200,
      },
      "+=600"
    );

    // page dissapear animation
    animation.add({
      targets: ".startupPage",
      duration: 200,
      opacity: 0,
      zIndex: -1,
    });
  }

  useEffect(() => {
    // set logo as mounted after 10 milliseconds (slight animation)
    const timeout = setTimeout(() => setIsMounted(true), 10);

    animate();

    return () => clearTimeout(timeout);
  }, []);

  return (
    <StyledLoadingPage className="startupPage" mounted={isMounted}>
      <Helmet bodyAttributes={{ class: "hidden" }} />

      <div className="logo-wrapper">
        <LoadingIcon className="LoadingIcon" color={themeColor} />
      </div>
    </StyledLoadingPage>
  );
}

export default PageLoad;
