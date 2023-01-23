import { StyledBtn, StyledHeading } from "../../Styles";

export function ContactBtn({ btnText }) {
  return (
    <a href="mailto:kahemacassian@gmail.com">
      <StyledBtn className="contact--btn">{btnText}</StyledBtn>
    </a>
  );
}

function Contact() {
  return (
    <section id="contact">
      <div>What's Next?</div>
      <StyledHeading className="contact--title">Get in Touch</StyledHeading>
      <p
        style={{
          color: "var(--secondary-color)",
        }}>
        Thank you for visiting my portfolio. Please don't hesitate to reach out
        to me if you have any questions, want to work on an interesting project
        or if you would like to discuss potential job opportunities.
      </p>
      <ContactBtn btnText="Say Hello!" />
    </section>
  );
}

export default Contact;
