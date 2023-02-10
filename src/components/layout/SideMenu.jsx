import { useContext, useEffect } from "react";
import { ContentContext, ThemeContext } from "../../context";
import { MenuIcon } from "../icons";
import styled from "styled-components";
import { motion } from "framer-motion";
import ThemeBtn from "./ThemeBtn";

// STYLED COMPONENTS
const StyledNavLinks = styled.ol`
  display: flex;
  align-items: center;
  gap: 40px;
  margin: 0;
  padding: 0;
  list-style: none;
  counter-reset: item 0;
  .nav-link a {
    display: flex;
    gap: 10px;
    color: var(--secondary-color);
    counter-increment: item 1;
    &::before {
      content: "0" counter(item) ".";
      color: var(--primary-color);
    }
  }

  .resume-btn {
    padding: 0.5rem 1rem;
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

  .nav-links {
    flex-direction: column;
    align-items: center;
    font-size: var(--fs-lg);
    a {
      flex-direction: column;
      align-items: center;
    }

    .resume-btn {
      padding: 1rem 2.5rem;
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
`;

// a veil is what obstructs all content when a side menu is active
// also when clicked the closes the pop menu and makes content available
const StyledPopupVeil = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  z-index: 1;
`;

// default variants for links motion
const defaultVariants = {
  default: true,
  hidden: {
    opacity: 0,
    y: -100,
  },

  visible: {
    opacity: 1,
    y: 0,
    transition: {
      ease: "anticipate",
      duration: 0.3,
    },
  },
};

const popupMenuVariants = {
  open: {
    clipPath: `circle(200% at 86% 4.5%)`,
    transition: {
      type: "spring",
      stiffness: 40,
      restDelta: 2,
      delayChildren: 0.2,
    },
  },

  closed: {
    clipPath: `circle(0% at 86% 4.5%)`,
    transition: {
      type: "spring",
      stiffness: 35,
    },
  },
};

// motion variants for links when in popup menu
const popupMenuLinksVariants = {
  open: ({ index }) => ({
    y: 0,
    opacity: 1,
    transition: {
      delay: index * 0.1,
    },
  }),

  closed: ({ reducedMotion }) => ({
    y: reducedMotion ? 0 : 50,
    opacity: 0,
  }),
};

// custom resume btn with fade in animation along side the nav links
const ResumeBtn = motion(ThemeBtn);

function NavLinks({ menuActive, handleLinkClick, variants = defaultVariants }) {
  const links = ["about", "projects", "contact"];
  const { animStates } = useContext(ContentContext);
  const { navDone } = animStates;
  const { reducedMotion } = useContext(ThemeContext);

  return (
    <StyledNavLinks className="nav-links" menuActive={menuActive}>
      {links &&
        links.map((link, i) => (
          <motion.li
            className="nav-link"
            initial={!navDone ? undefined : false} // do not reanimate if not in popup menu
            key={link}
            custom={{ index: i, reducedMotion }}
            variants={variants}>
            <a href={`#${link}`} onClick={handleLinkClick}>
              {link[0].toUpperCase() + link.slice(1)}
            </a>
          </motion.li>
        ))}
      <ResumeBtn
        className="resume-btn"
        btnText="Resume"
        link="/resume.pdf"
        initial={!navDone ? undefined : false}
        custom={{ index: links.length, reducedMotion }}
        variants={variants}
      />
    </StyledNavLinks>
  );
}

function SideMenu({ toggleMenu, windowWidth, menuActive }) {
  // Close menu on mobile when link is clicked
  function handleLinkClicked() {
    windowWidth <= 500 && toggleMenu();
  }

  const { reducedMotion } = useContext(ThemeContext);

  return (
    <>
      <StlyedPopupMenu
        as={motion.aside}
        initial={false}
        custom={reducedMotion}
        animate={menuActive ? "open" : "closed"}
        variants={popupMenuVariants}
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

  // close side menu on window resize
  useEffect(() => {
    if (windowWidth > 770) {
      menuActive && toggleMenu();
    }

    // disable scroll when menu is active (most effective in mobile)
    if (menuActive) document.querySelector("body").classList.add("no-scroll");
    else document.querySelector("body").classList.remove("no-scroll");
  }, [windowWidth, menuActive]);

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
          <SideMenu
            menuActive={menuActive}
            toggleMenu={toggleMenu}
            windowWidth={windowWidth}
          />
        </>
      )}
    </>
  );
}
