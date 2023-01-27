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

  svg {
    .icon-line {
      --delay: 200ms;
      --duration: 200ms;
      transform-origin: center;
    }

    .hidden {
      opacity: 0;
    }
  }

  .close-menu {
    .icon-line {
      y: 65;
    }

    .icon-line.middle,
    .icon-line.bottom {
      opacity: 0;
    }

    .icon-line.top {
      // rotate: 225deg;
      transform: rotate(225deg);
    }

    .icon-line.hidden {
      opacity: 1;
      // rotate: 135deg;
      transform: rotate(135deg);
    }
  }

  @media (prefers-reduced-motion: no-preference) {
    .open-menu {
      .icon-line {
        transition: transform var(--duration) ease-in,
          opacity 0ms ease var(--delay), y var(--duration) ease-out var(--delay);
      }
    }

    .close-menu {
      .icon-line {
        transition: y var(--duration) ease-out,
          transform var(--duration) ease var(--delay),
          opacity 0ms ease var(--delay);
      }
    }
  }
`;

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
        <rect
          className="icon-line middle"
          y="65"
          x="32.5"
          width="135"
          height="20"
          rx="9"
        />
        <rect
          className="icon-line bottom"
          x="47.5"
          y="115"
          width="120"
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
