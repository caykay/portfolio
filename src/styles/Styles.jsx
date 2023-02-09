import styled from "styled-components";

export const StyledHeading = styled.div`
  font-size: var(--fs-heading);
  font-weight: 600;
  color: var(--tertiary-color);
  line-height: 1.1;
  margin-bottom: 1.5rem;

  &::before {
    font-size: var(--fs-xxl);
  }

  ${(props) =>
    props.className === "section-title" &&
    "font-size: clamp(1.525rem, 4vw,var(--fs-heading)); "}
  ${(props) => props.subheading && "font-size: var(--fs-xxl);"}
`;
