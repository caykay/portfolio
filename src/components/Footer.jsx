import styled from "styled-components";
import Sidebars from "./SideBars";
import reactLogo from "../assets/react.svg";
import viteLogo from "../assets/vite.svg";

const StyledFooter = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: var(--fs-xs);
  font-family: "PT Mono", monospace;
  color: var(--secondary-color);
  padding: 20px 0;
  gap: 10px;

  .footer--logo-group {
    display: flex;
    gap: 20px;
  }

  .logo-react,
  .logo-vite {
    transition: all 0.25s ease;
  }

  .logo-react:hover,
  .logo-vite:hover {
    transform: scale(1.1);
  }

  .logo-react:hover {
    filter: drop-shadow(0 0 0.75rem var(--primary-color));
  }

  .logo-vite:hover {
    filter: drop-shadow(0 0 0.75rem var(--secondary-color));
  }

  a {
    font-size: var(--fs-xxs);
    display: block;
    color: inherit;
    &::after {
      display: none;
    }
  }
`;

function Footer() {
  return (
    <StyledFooter className="footer">
      <Sidebars />
      <span>Made With:</span>

      <div className="footer--logo-group">
        <a href="https://reactjs.org/" target={"_blank"} className="logo-react">
          <img src={reactLogo} alt="React Logo" />
        </a>
        <a href="https://vitejs.dev/" target={"_blank"} className="logo-vite">
          <img src={viteLogo} alt="Vite Logo" />
        </a>
      </div>
      <span>Deployed on Netlify</span>

      <a href="https://github.com/bchiang7/v4" target={"_blank"}>
        Design adopted from Brittany Chian
      </a>
    </StyledFooter>
  );
}

export default Footer;
