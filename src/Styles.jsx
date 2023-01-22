import styled from "styled-components";

const StyledTitle = styled.div`
  font-size: clamp(2.5rem, 8vw, 5rem);
  line-height: 1.1;

  font-weight: 600;
`;

const StyledHeading = styled.div`
  font-size: var(--fs-heading);
  font-weight: 600;
  color: var(--tertiary-color);
`;

const StlyedBtn = styled.button`
  appearance: none;
  background-color: transparent;
  color: var(--primary-color);
  border: 1px solid var(--primary-color);
  border-radius: 5px;
  padding: 10px 20px;
  font-size: var(--fs-xs);
  font-family: "PT Mono", monospace;
  cursor: pointer;
  width: fit-content;
  &:hover {
    background-color: var(--primary-color-light);
  }
`;

export { StyledTitle, StyledHeading, StlyedBtn };
