import styled from "styled-components";
import Logo from "./Logo";

const NavBar = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  padding: 0 4%;
  background: var(--bg-color);
  height: 90px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: var(--fs-xs);
  font-family: "PT Mono", monospace;
  .logo {
    flex-shrink: 0;
    width: 40px;
    height: 40px;
  }
`;

const NavLinks = styled.ol`
  display: flex;
  gap: 40px;
  margin: 0;
  padding: 0;

  a {
    color: var(--secondary-color);
  }
`;

export default function Header() {
  return (
    <NavBar>
      <a href="/">
        <Logo className="logo" />
      </a>
      <NavLinks className="nav-links" start="01">
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="github.com/caykay" target="_blank">
            Projects
          </a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </NavLinks>
    </NavBar>
  );
}
