import styled from "styled-components";
import { makeFadeEnter } from "../motions";
import ContactBtn from "./ThemeBtn";

const StyledContact = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  max-width: 600px;
  margin: 0 auto;
  gap: 10px;
  padding: 50px 0;

  .contact--title {
    font-size: clamp(40px, 5vw, 60px);
    font-weight: 600;
    color: var(--tertiary-color);
  }
`;

const CustomStyledContact = makeFadeEnter(StyledContact);

function Contact() {
  return (
    <CustomStyledContact id="contact">
      <div className="section-title">What's Next?</div>
      <div className="contact--title">Get in Touch</div>
      <p
        style={{
          color: "var(--secondary-color)",
        }}>
        Thank you for visiting my portfolio. Please don't hesitate to reach out
        to me if you have any questions or would like to work on an interesting
        project.
        {/* {or if you would like to discuss potential job opportunities.} */}
      </p>
      <ContactBtn
        className="contact-btn"
        btnText="Say Hello!"
        link="mailto:kahemacassian@gmail.com"
      />
    </CustomStyledContact>
  );
}

export { Contact as default };
