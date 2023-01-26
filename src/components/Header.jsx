import styled from "styled-components";
import Logo from "./Logo";
import HeaderMenu from "./HeaderMenu";
import { useState, useContext } from "react";
import useWindowDimensions from "../hooks/useWindowDimensions";
import { MenuActiveContext } from "../context/MenuActiveContext";

const NavBar = styled.header`
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

  // ${(props) => props.menuActive && "background: #112240;"}
`;

export default function Header() {
  const windowDimensions = useWindowDimensions();
  const [menuActive] = useContext(MenuActiveContext);

  return (
    <NavBar menuActive={menuActive}>
      <a href="/">
        <Logo className="logo" />
      </a>
      <HeaderMenu width={windowDimensions.width} />
    </NavBar>
  );
}
