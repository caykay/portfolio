import { StyledBtn, StyledHeading } from "../../Styles";
import styled from "styled-components";

const StyledContact = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  max-width: 600px;
  margin: 0 auto;
  gap: 10px;

  .contact--title {
    font-size: clamp(40px, 5vw, 60px);
    font-weight: 600;
    color: var(--tertiary-color);
  }
`;

export function ContactBtn({ btnText }) {
  return (
    <a href="mailto:kahemacassian@gmail.com">
      <StyledBtn className="contact--btn">{btnText}</StyledBtn>
    </a>
  );
}

function Contact() {
  return (
    <StyledContact id="contact">
      <div className="section-title">What's Next?</div>
      <div className="contact--title">Get in Touch</div>
      <p
        style={{
          color: "var(--secondary-color)",
        }}>
        Thank you for visiting my portfolio. Please don't hesitate to reach out
        to me if you have any questions, want to work on an interesting project
        or if you would like to discuss potential job opportunities.
      </p>
      <ContactBtn btnText="Say Hello!" />
    </StyledContact>
  );
}

export default Contact;