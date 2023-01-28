import { useContext } from "react";
import { MenuActiveContext } from "../context/MenuActiveContext";
import MenuIcon from "./MenuIcon";
import {
  StyledNavLinks,
  StlyedPopupMenu,
  StyledPopupVeil,
} from "../styles/Styles";

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
    console.log("link clicked");
    windowWidth <= 500 && toggleMenu();
  }
  return (
    <>
      <StlyedPopupMenu menuActive={menuActive}>
        <NavLinks menuActive={menuActive} handleLinkClick={handleLinkClicked} />
      </StlyedPopupMenu>
      {menuActive && (
        <StyledPopupVeil
          className="veil"
          onClick={toggleMenu}></StyledPopupVeil>
      )}
    </>
  );
}

function MenuContainer() {
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

export default MenuContainer;
