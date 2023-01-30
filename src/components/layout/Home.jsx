import styled from "styled-components";
import { ContactBtn } from "./Contact";

export default function Home(props) {
  return (
    <StyledHome>
      <div className="welcome">Welcome, my name is</div>
      <div>
        <StyledTitle className="name">Cassian Kahema.</StyledTitle>
        <StyledTitle className="title">
          A Graduate Software developer.
        </StyledTitle>
      </div>
      <p className="summary">
        I am a software developer with a passion for web development, back-end
        technologies and image processing, specifically OCR tools.
        {/* I am excited to bring my knowledge
        and expertise to any project in the web development field. Thank you for
        visiting. */}
      </p>
      <ContactBtn btnText={"Contact Me"} />
    </StyledHome>
  );
}

const StyledHome = styled.section`
  height: 100vh;
  padding-top: 140px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  max-width: 1000px;
  margin: 0 auto;
  .welcome {
    font-family: "PT Mono", monospace;
  }
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

  @media (max-height: 500px), (max-width: 450px) {
    height: auto;
  }
`;

const StyledTitle = styled.div`
  font-size: clamp(2.5rem, 8vw, 5rem);
  line-height: 1.1;

  font-weight: 600;
`;
