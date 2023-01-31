import { Logo } from "../icons";
import HeaderMenu from "./HeaderMenu";
import { useContext } from "react";
import { ContentContext } from "../../context";
import styled from "styled-components";
import { motion } from "framer-motion";

const variants = {
  hidden: {
    opacity: 0,
  },

  visible: {
    opacity: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.3,
    },
  },
};

export default function Header() {
  const { menuActive, dispatch } = useContext(ContentContext);

  return (
    <StyledHeader
      as={motion.header}
      initial="hidden"
      // viewport={{ once: true }}
      animate="visible"
      variants={variants}
      onAnimationComplete={(definition) => dispatch({ type: "navIsDone" })}
      menuActive={menuActive}>
      <a href="/" className="logo-link">
        <Logo className="logo" />
      </a>
      <HeaderMenu />
    </StyledHeader>
  );
}

const StyledHeader = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  padding: 0 40px;
  background: var(--bg-color-light);
  backdrop-filter: blur(8px);
  height: var(--header-height);
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: var(--fs-xs);
  font-family: "PT Mono", monospace;
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