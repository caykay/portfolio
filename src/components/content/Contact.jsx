import { StyledBtn, StyledContact } from "../../styles/Styles";

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
