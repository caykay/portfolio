import { useContext } from "react";
import { MenuActiveContext } from "../context/MenuActiveContext";
import MenuIcon from "./MenuIcon";
import styled from "styled-components";

function NavLinks({ menuActive, handleLinkClick }) {
  const links = ["about", "projects", "contact"];
  return (
    <StyledNavLinks className="nav-links" menuActive={menuActive || false}>
      {links &&
        links.map((link) => (
          <li key={link}>
            <a href={`#${link}`} onClick={handleLinkClick}>
              {link[0].toUpperCase() + link.slice(1)}
            </a>
          </li>
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
      <StlyedPopupMenu menuActive={menuActive}>
        <NavLinks menuActive={menuActive} handleLinkClick={handleLinkClicked} />
      </StlyedPopupMenu>
      {menuActive && windowWidth > 500 && (
        <StyledPopupVeil
          className="veil"
          onClick={toggleMenu}
        ></StyledPopupVeil>
      )}
    </>
  );
}

export default function MenuContainer() {
  const [menuActive, toggleMenu, windowWidth] = useContext(MenuActiveContext);

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
  transform: translateX(100%);
  visibility: hidden;
  transition: transform 0.3s ease-in-out, visibility 0.3s ease-in-out;

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

  ${(props) =>
    props.menuActive && "transform: translateX(0); visibility: visible;"}
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
