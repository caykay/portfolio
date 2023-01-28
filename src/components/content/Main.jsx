import Home from "./Home";
import Contact from "./Contact";
import AboutMe from "./AboutMe";
import Projects from "./Projects";
import { StyledMain } from "../../styles/Styles";

export default function Main() {
  return (
    <StyledMain>
      <Home />
      <AboutMe />
      <Projects />
      <Contact />
    </StyledMain>
  );
}
