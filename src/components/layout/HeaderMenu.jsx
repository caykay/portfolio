import { useContext, useEffect, useState } from "react";
import { ContentContext } from "../../context";
import { MenuIcon } from "../icons";
import styled from "styled-components";
import { motion } from "framer-motion";

// default variants for links motion
const defaultVariants = {
  default: true,
  hidden: {
    opacity: 0,
    y: -100,
  },

  visible: (custom) => ({
    opacity: 1,
    y: 0,
    transition: {
      ease: "anticipate",
      duration: 0.3,
      // delay: custom * 0.1,
    },
  }),
};

const popupMenuVariants = {
  open: (width) => ({
    clipPath: `circle(200% at 86% 4.5%)`,
    transition: {
      // when: "beforeChildren",
      type: "spring",
      stiffness: 40,
      restDelta: 2,
      delayChildren: 0.2,
    },
  }),

  closed: (width) => ({
    clipPath: `circle(0% at 86% 4.5%)`,
    transition: {
      // delay: 0.5,
      type: "spring",
      stiffness: 35,
      // restDelta: 2,
    },
  }),
};

// motion variants for links when in popup menu
const popupMenuLinksVariants = {
  open: (i) => ({
    y: 0,
    opacity: 1,
    transition: {
      delay: i * 0.1,
    },
  }),
  closed: {
    y: 50,
    opacity: 0,
  },
};

function NavLinks({ menuActive, handleLinkClick, variants = defaultVariants }) {
  const links = ["about", "projects", "contact"];
  const { animStates } = useContext(ContentContext);
  const { navDone } = animStates;

  return (
    <StyledNavLinks className="nav-links" menuActive={menuActive}>
      {links &&
        links.map((link, i) => (
          <motion.li
            initial={!navDone ? undefined : false} // do not reanimate if not in popup menu
            key={link}
            custom={i}
            variants={variants}>
            <a href={`#${link}`} onClick={handleLinkClick}>
              {link[0].toUpperCase() + link.slice(1)}
            </a>
          </motion.li>
        ))}
    </StyledNavLinks>
  );
}

function PopupMenu({ toggleMenu, windowWidth, menuActive }) {
  // Close menu on mobile when link is clicked
  function handleLinkClicked() {
    windowWidth <= 500 && toggleMenu();
  }
  return (
    <>
      <StlyedPopupMenu
        as={motion.aside}
        initial={false}
        animate={menuActive ? "open" : "closed"}
        custom={windowWidth}
        variants={popupMenuVariants}
        onAnimationComplete={(definition) =>
          console.log("Animation complete", definition)
        }
        menuActive={menuActive}>
        {/* Pass different motion variants for links in popup menu */}
        <NavLinks
          menuActive={menuActive}
          variants={popupMenuLinksVariants}
          handleLinkClick={handleLinkClicked}
        />
      </StlyedPopupMenu>
      {menuActive && windowWidth > 500 && (
        <StyledPopupVeil
          className="veil"
          onClick={toggleMenu}></StyledPopupVeil>
      )}
    </>
  );
}

export default function MenuContainer() {
  const {
    menuActive,
    toggleMenu,
    width: windowWidth,
  } = useContext(ContentContext);

  return (
    <>
      {windowWidth > 770 ? (
        <NavLinks />
      ) : (
        <>
          <MenuIcon
            className="menu-icon"
            handleClick={toggleMenu}
            menuActive={menuActive}
          />
          <PopupMenu
            menuActive={menuActive}
            toggleMenu={toggleMenu}
            windowWidth={windowWidth}
          />
        </>
      )}
    </>
  );
}

const StyledNavLinks = styled.ol`
  display: flex;
  gap: 40px;
  margin: 0;
  padding: 0;
  list-style: none;
  counter-reset: item 0;
  a {
    display: flex;
    gap: 10px;
    color: var(--secondary-color);
    counter-increment: item 1;
    &::before {
      content: "0" counter(item) ".";
      color: var(--primary-color);
    }
  }
`;

const StlyedPopupMenu = styled.aside`
  position: fixed;
  top: 0;
  right: 0;
  padding: 40px;
  padding-top: calc(40px + var(--header-height));
  height: 100vh;
  width: 50%;
  background: var(--popup-menu-bg, #112240);
  z-index: 2;
  /* transform: translateX(100%);
  visibility: hidden;
  transition: transform 0.3s ease-in-out, visibility 0.3s ease-in-out; */

  .nav-links {
    flex-direction: column;
    align-items: center;
    font-size: var(--fs-lg);
    a {
      flex-direction: column;
      align-items: center;
    }
  }

  @media (max-width: 500px) {
    width: 100%;
    background: var(--bg-color);
    .nav-links {
      a {
        color: var(--tertiary-color);
      }
    }
  }

  /* ${(props) =>
    props.menuActive && "transform: translateX(0); visibility: visible;"} */
`;

const StyledPopupVeil = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  z-index: 1;
`;
