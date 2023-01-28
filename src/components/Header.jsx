import Logo from "./Logo";
import HeaderMenu from "./HeaderMenu";
import { useContext } from "react";
import { MenuActiveContext } from "../context/MenuActiveContext";
import { StyledHeader } from "../styles/Styles";

export default function Header() {
  const [menuActive] = useContext(MenuActiveContext);

  return (
    <StyledHeader menuActive={menuActive}>
      <a href="/" className="logo-link">
        <Logo className="logo" />
      </a>
      <HeaderMenu />
    </StyledHeader>
  );
}
