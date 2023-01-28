import Sidebars from "./SideBars";
import reactLogo from "../assets/react.svg";
import viteLogo from "../assets/vite.svg";
import { StyledFooter } from "../styles/Styles";

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
      <span>
        Deployed on{" "}
        <a href="https://www.netlify.com/?utm_medium=paid_search&utm_source=google&utm_campaign=12755510784&utm_term=netlify%20hosting">
          Netlify
        </a>
      </span>

      <a href="https://github.com/bchiang7/v4" target={"_blank"}>
        Design adopted from Brittany Chiang
      </a>
    </StyledFooter>
  );
}

export default Footer;
