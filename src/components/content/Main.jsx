import Home from "./Home";
import Contact from "./Contact";
import AboutMe from "./AboutMe";
import Projects from "./Projects";
import styled from "styled-components";

const StyledMain = styled.main`
  display: flex;
  flex-direction: column;
  gap: 100px;

  counter-reset: section 0;

  // add a number to the main section titles (About Me, Experience, Projects and Contact)
  .section-title {
    counter-increment: section 1;
    &::before {
      content: "0" counter(section) ". ";
      color: var(--primary-color);
      font-family: "PT Mono", monospace;
    }
  }
`;

export default function Main(props) {
  return (
    <StyledMain>
      <Home />
      <AboutMe />
      <Projects />
      <Contact />
    </StyledMain>
  );
}
