import styled from "styled-components";
import { StyledHeading } from "../../styles/Styles";
import {
  FaPython,
  FaGithub,
  FaFigma,
  FaJs,
  FaReact,
  FaNodeJs,
} from "react-icons/fa";
import { SiCsharp } from "react-icons/si";

const StyledAboutMe = styled.section`
  display: flex;
  flex-direction: column;
  max-width: 900px;
  margin: 0 auto;

  .about--content {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(2, auto);
    grid-template-rows: auto;
    gap: 50px;
    justify-items: space-between;

    .about--photo {
      min-width: 250px;
      max-width: 350px;
      aspect-ratio: 1;
      border-radius: 10px;
      background: url(/prof_pic.jpg) no-repeat center center / cover;
      position: relative;
      &::after {
        content: "";
        display: block;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        border-radius: inherit;
        border: 3px solid var(--primary-color);
        transform: translate(5%, 5%);
        transition: transform 0.2s ease-in-out;
        z-index: -1;
      }

      &:hover::after {
        transform: translate(2.5%, 2.5%);
      }
    }

    .about--text {
      color: var(--secondary-color);
      min-width: 300px;
      max-width: 600px;
    }

    .about--tech-stack {
      display: grid;
      grid-template-columns: repeat(2, auto);
      row-gap: 10px;
      list-style: none;
      font-size: var(--fs-xs);
      padding: 0;

      li {
        display: flex;
        align-items: center;
        gap: 10px;

        svg {
          fill: var(--primary-color);
          font-size: var(--fs-md);
        }
      }
    }

    @media (max-width: 770px) {
      grid-template-columns: 1fr;
      .about--photo {
        width: clamp(250px, 50%, 350px);
        margin: 0 auto;
      }
    }
  }
`;

function AboutMe() {
  return (
    <StyledAboutMe id="about">
      <StyledHeading className="section-title">About Me</StyledHeading>
      <AboutMeContent />
    </StyledAboutMe>
  );
}

function AboutMeContent() {
  const techStack = [
    { name: "JavaScript", icon: <FaJs /> },
    { name: "React", icon: <FaReact /> },
    { name: "NodeJs", icon: <FaNodeJs /> },
    { name: "Python", icon: <FaPython /> },
    { name: "C#", icon: <SiCsharp /> },
    { name: "Github", icon: <FaGithub /> },
    { name: "Figma", icon: <FaFigma /> },
  ];
  return (
    <div className="about--content">
      <div className="about--text">
        <p>
          Hello there, My name is Cassian Kahema, a recent software engineering
          graduate from the{" "}
          <a href="https://www.unisa.edu.au/" target="_blank">
            University of South Australia
          </a>
          . Watching Hacking and Cyber Security Movies and TV Shows like{" "}
          <a
            href="https://en.wikipedia.org/wiki/Nikita_(TV_series)"
            target="_blank"
          >
            Nikita
          </a>{" "}
          when I was young is what inspired me to pursue a developer career.
        </p>
        <p>
          As a problem solver at heart I have always tried to find solutions to
          some of the problems that I had been facing as a student. After
          graduating I started a web development journey to help me bring my
          ideas and solutions to life. I have been learning about the frontend
          and the backend.
        </p>
        {/* <p>
          I have recently been exploring the backend and hoping to soon deploy
          microservices that could be used in areas like gaming and surveillance
          cameras, If this interests you and you wish to collaborate feel free
          to reach out through any of my <a href="#contact">contacts</a>.
        </p> */}
        <p>
          I am currently looking for a full-time position as a software
          developer and I am excited to bring my knowledge and expertise to any
          project.{" "}
        </p>
        <p>Tech Stack and Technologies (competent):</p>
        <ul className="about--tech-stack">
          {techStack.map((tech) => (
            <li key={tech.name}>
              {tech.icon}
              <span>{tech.name}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="about--photo">
        {/* <img src="/prof_pic.jpg" alt="profile photo" /> */}
      </div>
    </div>
  );
}

export default AboutMe;
