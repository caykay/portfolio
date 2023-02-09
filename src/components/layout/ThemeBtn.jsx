import styled from "styled-components";
import { forwardRef } from "react";

const StyledBtn = styled.a`
  /* appearance: none; */
  background-color: transparent;
  color: var(--primary-color);
  border: 1px solid var(--primary-color);
  border-radius: 5px;
  padding: 1rem 1.5rem;
  font-size: var(--fs-sm);
  font-family: "PT Mono", monospace;
  cursor: pointer;
  width: fit-content;
  &:hover {
    background-color: var(--primary-color-light);
  }

  &:after {
    display: none;
  }
`;

const ThemeBtn = forwardRef(({ btnText, link, className }, ref) => {
  return (
    <>
      {/* Display semantic html components */}
      {link ? (
        <StyledBtn className={className} href={link} ref={ref} target="_blank">
          {btnText}
        </StyledBtn>
      ) : (
        <StyledBtn as="button" className={className} ref={ref}>
          {btnText}
        </StyledBtn>
      )}
    </>
  );
});

export default ThemeBtn;
