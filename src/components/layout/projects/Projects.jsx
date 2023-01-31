import FeaturedProjects from "../../../assets/projects_data";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import { useState } from "react";
import { StyledHeading } from "../../../styles/Styles";
import { StyledProjectItem, StyledProjectsSection } from "./projectStyles";
import useWindowDimensions from "../../../hooks/useWindowDimensions";
import { makeFadeEnter } from "../../motions";

// Transform styled components to pre-defined motion components
const CustomStyledHeading = makeFadeEnter(StyledHeading);
const CustomProjectListItem = makeFadeEnter(StyledProjectItem);

const ProjectListElements = ({ projects, windowDimensions }) =>
  projects.map((project, index) => {
    return (
      <CustomProjectListItem
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
      </CustomProjectListItem>
    );
  });

function Projects() {
  const [projects, setProjects] = useState(FeaturedProjects);
  const windowDimensions = useWindowDimensions();
  return (
    <StyledProjectsSection id="projects">
      <CustomStyledHeading className="section-title">
        Projects I've worked on
      </CustomStyledHeading>
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
