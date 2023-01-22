import styled from "styled-components";
import { StyledTitle, StlyedBtn } from "../../Styles";

const StyledHome = styled.section`
  height: 100vh;
  padding-top: 140px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  .name {
    color: var(--tertiary-color);
  }
  .title {
    color: var(--secondary-color);
    margin-top: 10px;
  }
  .summary {
    color: var(--secondary-color);
    max-width: 520px;
  }
`;

export default function Home(props) {
  return (
    <StyledHome>
      <div>Hi, my name is</div>
      <div>
        <StyledTitle className="name">Cassian Kahema</StyledTitle>
        <StyledTitle className="title">
          A Graduate Software developer
        </StyledTitle>
      </div>
      <p className="summary">
        Welcome to my software development portfolio. I am a graduate developer
        with a passion for web development, back-end technologies and image
        processing, specifically OCR tools.
        {/* I am excited to bring my knowledge
        and expertise to any project in the web development field. Thank you for
        visiting. */}
      </p>
      <StlyedBtn className="">Contact Me</StlyedBtn>
    </StyledHome>
  );
}
