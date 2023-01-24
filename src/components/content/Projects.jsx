import ProjectsList from "../../assets/projects/index";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import styled from "styled-components";
import { StyledHeading } from "../../Styles";
import { useState } from "react";
import useWindowDimensions from "../../hooks/useWindowDimensions";

const StyledProjectsSection = styled.section`
  .projects-container {
    display: flex;
    flex-direction: column;
    gap: 150px;
  }
`;

const StyledProjectItem = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: 1fr;

  .project-item--image {
    border-radius: 5px;
    overflow: hidden;
    position: relative;
    img {
      width: 100%;
      height: 100%;
      // max-height: 350px;
      object-fit: cover;
      vertical-align: middle;
    }

    // veil to reduce image brightness
    &::after {
      content: "";
      display: block;
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.5);
      z-index: 2;
      pointer-events: none; // so that the link can be clicked
    }

    &:hover::after {
      background: rgba(0, 0, 0, 0.2);
    }

    a {
      position: relative;
      height: 100%;
      width: 100%;
      z-index: 1; // so that the link can be clicked
    }
  }

  .project-item--info {
    display: flex;
    flex-direction: column;

    gap: 20px;

    .project-item--info--header {
      display: flex;
      flex-direction: column;
      gap: 8px;
      span {
        font-size: var(--fs-xs);
        color: var(--primary-color);
        font-family: "PT Mono", monospace;
      }
    }

    .project-item--info--description {
      max-width: 500px;
      // text-align: justify; // todo: remove this
      font-size: var(--fs-sm);
      color: var(--secondary-color);
      background: var(--bg-color-secondary);
      padding: 20px;
      border-radius: 5px;
      z-index: 3;
    }

    .project-item--info--tech-stack {
      display: flex;
      flex-wrap: wrap;
      gap: 20px;
      font-size: var(--fs-xs);
      font-family: "PT Mono", monospace;
      color: var(--secondary-color);
    }

    .project-item--external-links {
      display: flex;
      gap: 20px;
      a {
        color: var(--tertiary-color);
        font-size: var(--fs-xl);
      }
    }
  }

  &:nth-child(odd) {
    .project-item--info {
      grid-column: 3 / 6;
      grid-row: 1 / 2;
      align-items: flex-end;
      text-align: right;

      .project-item--info--description {
        text-align: right;
      }
    }

    .project-item--image {
      grid-column: 1 / 4;
      grid-row: 1 / 2;
    }
  }

  &:nth-child(even) {
    .project-item--info {
      grid-column: 1 / 4;
      grid-row: 1 / 2;
      align-items: flex-start;
      text-align: left;

      .project-item--info--description {
        text-align: left;
      }
    }

    .project-item--image {
      grid-column: 3 / 6;
      grid-row: 1 / 2;
    }
  }

  &:nth-child(1) {
    margin-top: 50px;
  }

  @media screen and (max-width: 770px) {
    grid-template-columns: 1fr;
    border-radius: 5px;
    overflow: hidden;
    position: relative;

    &:nth-child(1n) {
      .project-item--image,
      .project-item--info {
        grid-column: 1 / 6;
        grid-row: 1 / 2;
      }

      .project-item--image {
        opacity: 0.3;

        &:after {
          display: none;
        }
      }

      .project-item--info {
        align-items: flex-start;
        text-align: left;
        padding: 60px 30px;
        margin: 0 auto;

        .project-item--info--header {
          a:hover .project-item--info--header--link-heading {
            color: inherit;
          }
        }
        .project-item--info--description {
          text-align: left;
          background: transparent;
          padding: 0;
        }
      }

      .project-item--info :nth-child(1n) {
        z-index: 3;
      }

      .project-item--info::after {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        background: var(--bg-color-secondary-light);
        pointer-events: none;
      }
    }
  }
`;

const ProjectListElements = ({ projects, windowDimensions }) =>
  projects.map((project, index) => {
    return (
      <StyledProjectItem
        className="project-item"
        key={index}
        id={project.title}>
        <div className="project-item--image">
          <a href={project.repo} target="_blank">
            <img src={project.image} alt={project.title} />
          </a>
        </div>
        <div className="project-item--info">
          <div className="project-item--info--header">
            {windowDimensions.width > 770 ? (
              <>
                <span>Featured Project</span>
                <StyledHeading subheading>{project.title}</StyledHeading>
              </>
            ) : (
              <a href={project.repo} target="_blank">
                <span className="headline">Featured Project</span>
                <StyledHeading
                  className="project-item--info--header--link-heading"
                  subheading>
                  {project.title}
                </StyledHeading>
              </a>
            )}
          </div>
          <div className="project-item--info--description">
            {project.description}
          </div>
          <div className="project-item--info--tech-stack">
            {project.techStack.map((tech, index) => (
              <span key={index}>{tech}</span>
            ))}
          </div>
          <div className="project-item--external-links">
            <a href={project.repo} target="_blank">
              <FiGithub />
            </a>
            {project.url && (
              <a href={project.url} target="_blank">
                <FiExternalLink />
              </a>
            )}
          </div>
        </div>
      </StyledProjectItem>
    );
  });

function Projects() {
  const [projects, setProjects] = useState(ProjectsList);
  const windowDimensions = useWindowDimensions();
  return (
    <StyledProjectsSection id="projects">
      <StyledHeading className="section-title">
        Projects I've worked on
      </StyledHeading>
      <div className="projects-container">
        <ProjectListElements
          projects={projects}
          windowDimensions={windowDimensions}
        />
      </div>
    </StyledProjectsSection>
  );
}

export default Projects;
