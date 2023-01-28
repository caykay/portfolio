import ProjectsList from "../../assets/projects/index";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import {
  StyledHeading,
  StyledProjectItem,
  StyledProjectsSection,
} from "../../styles/Styles";
import { useState } from "react";
import useWindowDimensions from "../../hooks/useWindowDimensions";

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
