import { StlyedBtn, StyledHeading } from "../../Styles";

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
        to me if you have any questions or if you would like to discuss
        potential job opportunities.
      </p>
      <StlyedBtn className="contact--btn">Message Me</StlyedBtn>
    </section>
  );
}

export default Contact;
