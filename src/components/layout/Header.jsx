import { Logo } from "../icons";
import SideMenu from "./SideMenu";
import { useContext } from "react";
import { ContentContext, ThemeContext } from "../../context";
import styled from "styled-components";
import { motion } from "framer-motion";
import { ACTION_TYPES } from "../../App";

const variants = {
  hidden: {
    opacity: 0,
  },

  visible: {
    opacity: 1,
    transition: {
      duration: 0.5,
      staggerChildren: 0.1,
    },
  },
};

export default function Header({ pageScroll }) {
  const { menuActive, dispatch } = useContext(ContentContext);
  const { reducedMotion } = useContext(ThemeContext);

  return (
    <StyledHeader
      as={motion.header}
      initial={reducedMotion ? false : "hidden"}
      // viewport={{ once: true }}
      animate="visible"
      variants={variants}
      onAnimationComplete={(definition) =>
        dispatch({ type: ACTION_TYPES.NAV_DONE })
      }
      menuActive={menuActive}
      shadow={pageScroll > 0 ? true : false}>
      <a href="/" className="logo-link">
        <Logo className="logo" />
      </a>
      <SideMenu />
    </StyledHeader>
  );
}

const StyledHeader = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  padding: 0 40px;
  background: var(--bg-color-light);
  backdrop-filter: blur(8px);
  height: var(--header-height);
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: var(--fs-xs);
  font-family: "PT Mono", monospace;

  ${({ shadow }) =>
    shadow &&
    "box-shadow: 0 0 0.75rem -0.2rem #000000; height:calc(var(--header-height) - 20px);"}

  transition: height 0.25s ease-in;

  z-index: 100;

  .logo {
    flex-shrink: 0;
    width: 40px;
    height: 40px;
  }

  @media (max-width: 770px) {
    padding: 0 20px;
  }

  @media (max-width: 500px) {
    .logo-link {
      z-index: 3;
    }
  }

  // ${(props) => props.menuActive && "background: #112240;"}
`;
