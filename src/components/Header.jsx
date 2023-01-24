import styled from "styled-components";
import Logo from "./Logo";

const NavBar = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  padding: 0 40px;
  background: var(--bg-color-light);
  backdrop-filter: blur(8px);
  height: 70px;
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
`;

const NavLinks = styled.ol`
  display: flex;
  gap: 40px;
  margin: 0;
  padding: 0;
  list-style: none;
  counter-reset: item 0;
  a {
    color: var(--secondary-color);
    counter-increment: item 1;
    &::before {
      content: "0" counter(item) ".";
      color: var(--primary-color);
    }
  }
`;

export default function Header() {
  return (
    <NavBar>
      <a href="/">
        <Logo className="logo" />
      </a>
      <NavLinks className="nav-links">
        <li>
          <a href="#about">About</a>
        </li>

        <li>
          <a href="#projects">Projects</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </NavLinks>
    </NavBar>
  );
}
