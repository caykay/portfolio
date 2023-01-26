import styled from "styled-components";

const StyledMenuIcon = styled.button`
  appearance: none;
  padding: 5px;
  border: none;
  outline: none;
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--primary-color);
  background-color: transparent;
  z-index: 3;

  &:hover {
    cursor: pointer;
  }

  ${(props) => props.menuIsActive && ""}
`;

export default function ({ handleClick, menuActive }) {
  return (
    // if menu is active then set menu icon to inactive
    <StyledMenuIcon onClick={() => handleClick()} menuIsActive={menuActive}>
      <svg
        width="40"
        // height="107"
        viewBox="0 0 185 120"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg">
        <rect
          className="icon-line top"
          x="35"
          y="0"
          width="150"
          height="20"
          rx="9"
        />
        <rect
          className="icon-line middle"
          y="50"
          x="0"
          width="185"
          height="20"
          rx="9"
        />
        <rect
          className="icon-line bottom"
          x="35"
          y="100"
          width="150"
          height="20"
          rx="9"
        />
      </svg>
    </StyledMenuIcon>
  );
}
