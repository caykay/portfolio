import { useState, useContext } from "react";
import { MenuActiveContext } from "../context/MenuActiveContext";
import styled from "styled-components";
import MenuIcon from "./MenuIcon";

const StyledLinks = styled.ol`
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

  ${(props) =>
    props.menuActive &&
    "flex-direction:column; align-items: center;font-size:var(--fs-lg); a {flex-direction: column; align-items: center;} "}
`;

const StlyedPopupMenu = styled.aside`
  position: fixed;
  top: 0;
  right: 0;
  padding: 40px;
  padding-top: calc(40px + var(--header-height));
  height: 100vh;
  width: 50%;
  background: #112240;
  z-index: 2;
`;

const StyledVeil = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  z-index: 1;
`;

function NavLinks({ menuActive }) {
  return (
    <StyledLinks className="nav-links" menuActive={menuActive || false}>
      <li>
        <a href="#about">About</a>
      </li>

      <li>
        <a href="#projects">Projects</a>
      </li>
      <li>
        <a href="#contact">Contact</a>
      </li>
    </StyledLinks>
  );
}

function PopupMenu({ toggleMenu }) {
  return (
    <>
      <StlyedPopupMenu>
        <NavLinks menuActive={true} />
      </StlyedPopupMenu>
      <StyledVeil className="veil" onClick={toggleMenu}></StyledVeil>{" "}
    </>
  );
}

function MenuContainer({ width }) {
  const [active, toggleMenu] = useContext(MenuActiveContext);

  return (
    <>
      {width > 770 ? (
        <NavLinks />
      ) : (
        <>
          <MenuIcon
            className="menu-icon"
            handleClick={toggleMenu}
            menuActive={active}
          />
          {active && <PopupMenu toggleMenu={toggleMenu} />}
        </>
      )}
    </>
  );
}

export default MenuContainer;
