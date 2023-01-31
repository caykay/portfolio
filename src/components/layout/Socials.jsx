import {
  FaGithub,
  FaGithubAlt,
  FaLinkedin,
  FaDiscord,
  FaInstagram,
  FaTwitter,
  FaCodepen,
} from "react-icons/fa";
import styled from "styled-components";
import { motion } from "framer-motion";
import { forwardRef, useContext } from "react";
import { ContentContext } from "../../context";

const StyledSideBar = styled.aside`
  position: fixed;
  bottom: 0;

  ${(props) =>
    props.position === "left"
      ? "left: 60px; transform:translateX(-50%);"
      : "right: 60px; transform:translateX(50%);"}

  @media (max-width: 1080px) {
    ${(props) => (props.position === "left" ? "left: 40px; " : "right: 40px; ")}
  }

  @media (max-width: 770px) {
    ${(props) => (props.position === "left" ? "left: 30px; " : "right: 30px; ")}
  }

  a {
    color: var(--secondary-color);
    display: inline-block;
    transition: all 0.3s ease;
    &:hover {
      transform: translateX(-5px);
    }
  }

  .sidebar--wrapper {
    rotate: 90deg;
    transform: translate(-40%, 0%);
    display: flex;
    align-items: center;
    gap: 30px;

    &::after {
      content: "";
      display: inline-block;
      width: 100px;
      height: 2px;
      border-radius: 5px;
      background: var(--secondary-color);
    }
  }

  svg {
    font-size: var(--fs-xl);
    cursor: pointer;
    rotate: -90deg;
  }

  .email {
    font-size: var(--fs-md);
    font-family: "PT Mono", monospace;
  }

  @media Screen and (max-width: 500px), (max-height: 500px) {
    ${(props) => props.position === "right" && "display: none;"}

    // fix position when screen is too small
  ${(props) =>
      props.position === "left" &&
      "opacity: 1 !important;\
       position: relative;\
    left:auto;bottom: auto; transform:translateX(0%);\
    .sidebar--wrapper{\
      rotate: 0deg;\
      transform: translate(0%, 0%);\
    };\
    .sidebar--wrapper::after {display: none;}\
    svg {rotate: 0deg;}\
    a:hover {\
      transform: translateY(-5px);\
    }"}
  }
`;

const variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
  },
};

const CustomSideBar = forwardRef((props, ref) => {
  const { animStates, dispatch } = useContext(ContentContext);
  const { heroDone } = animStates;

  return (
    <StyledSideBar
      ref={ref}
      {...props}
      as={motion.aside}
      initial="hidden"
      animate={heroDone && "visible"}
      variants={variants}
    />
  );
});

function Socials() {
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
      <CustomSideBar className="sidebar" position="left">
        <div className="sidebar--wrapper">
          {socials.length > 0 &&
            socials.map((social, index) => (
              <a href={social.link} target="_blank" key={index}>
                {social.icon}
              </a>
            ))}
        </div>
      </CustomSideBar>
      <CustomSideBar className="sidebar" position="right">
        <div className="sidebar--wrapper">
          <a href="mailto:kahemacassian@gmail.coms" className="email">
            kahemacassian@gmail.com
          </a>
        </div>
      </CustomSideBar>
    </>
  );
}

export default Socials;
