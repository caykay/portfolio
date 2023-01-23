import Home from "./Home";
import Contact from "./Contact";
import AboutMe from "./AboutMe";
import styled from "styled-components";

const StyledMain = styled.main`
  display: flex;
  flex-direction: column;
  gap: 100px;
`;

export default function Main(props) {
  return (
    <StyledMain>
      <Home />
      <AboutMe />
      <Contact />
    </StyledMain>
  );
}
