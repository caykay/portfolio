import { StyledMenuIcon } from "../styles/Styles";

export default function ({ handleClick, menuActive }) {
  return (
    // if menu is active then set menu icon to inactive
    <StyledMenuIcon onClick={() => handleClick()}>
      <svg
        className={!menuActive ? "open-menu" : "close-menu"}
        width="40"
        // height="107"
        viewBox="0 0 185 150"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg">
        <rect
          className="icon-line top"
          x="17.5"
          y="15"
          width="150"
          height="20"
          rx="9"
        />
        <rect className="dot" x="17.5" y="65" width="20" height="20" rx="9" />
        <rect
          className="icon-line middle"
          x="52.5"
          y="65"
          width="115"
          height="20"
          rx="9"
        />
        <rect
          className="icon-line bottom"
          x="17.5"
          y="115"
          width="150"
          height="20"
          rx="9"
        />
        <rect
          className="icon-line hidden"
          x="17.5"
          y="65"
          width="150"
          height="20"
          rx="9"
        />
      </svg>
    </StyledMenuIcon>
  );
}
