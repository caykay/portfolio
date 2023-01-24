import styled from "styled-components";

const StyledFooter = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: var(--fs-xs);
  font-family: "PT Mono", monospace;
  color: var(--secondary-color);
  padding: 20px 0;

  a {
    display: block;
    color: inherit;
    &::after {
      display: none;
    }
  }
`;

function Footer() {
  return (
    <StyledFooter className="footer">
      <a href="https://github.com/bchiang7/v4" target={"_blank"}>
        Design adopted from Brittany Chian
      </a>
      <span>Deployed on Netlify</span>
    </StyledFooter>
  );
}

export default Footer;
