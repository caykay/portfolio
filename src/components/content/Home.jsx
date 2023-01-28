import { StyledTitle, StyledHome } from "../../styles/Styles";
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
