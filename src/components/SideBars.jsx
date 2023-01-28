import {
  FaGithub,
  FaGithubAlt,
  FaLinkedin,
  FaDiscord,
  FaInstagram,
  FaTwitter,
  FaCodepen,
} from "react-icons/fa";
import { StyledSideBar } from "../styles/Styles";

function SideBars() {
  const socials = [
    { link: "https://github.com/caykay", icon: <FaGithub /> },
    {
      link: "https://www.linkedin.com/in/cassian-kahema/",
      icon: <FaLinkedin />,
    },
    // {
    //   link: "https://discordapp.com/users/558883203872587786/",
    //   icon: <FaDiscord />,
    // },
    { link: "https://www.instagram.com/_.cassian/", icon: <FaInstagram /> },
    { link: "https://twitter.com/caykay2", icon: <FaTwitter /> },
    { link: "https://codepen.io/caykay", icon: <FaCodepen /> },
  ];
  return (
    <>
      <StyledSideBar className="sidebar" position="left">
        <div className="sidebar--wrapper">
          {socials.length > 0 &&
            socials.map((social, index) => (
              <a href={social.link} target="_blank" key={index}>
                {social.icon}
              </a>
            ))}
        </div>
      </StyledSideBar>
      <StyledSideBar className="sidebar" position="right">
        <div className="sidebar--wrapper">
          <a href="mailto:kahemacassian@gmail.coms" className="email">
            kahemacassian@gmail.com
          </a>
        </div>
      </StyledSideBar>
    </>
  );
}

export default SideBars;
