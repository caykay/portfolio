import styled from "styled-components";

export const StyledApp = styled.div`
  display: grid;
  // flex-direction: column;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr auto;
  grid-template-areas: "main" "footer";
  gap: 100px;

  main {
    grid-area: main;
  }

  footer {
    grid-area: footer;
  }
`;

export const StyledHeader = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  padding: 0 40px;
  background: var(--bg-color-light);
  backdrop-filter: blur(8px);
  height: var(--header-height);
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: var(--fs-xs);
  font-family: "PT Mono", monospace;
  z-index: 100;
  .logo {
    flex-shrink: 0;
    width: 40px;
    height: 40px;
  }

  @media (max-width: 770px) {
    padding: 0 20px;
  }

  @media (max-width: 500px) {
    .logo-link {
      z-index: 3;
    }
  }

  // ${(props) => props.menuActive && "background: #112240;"}
`;

export const StyledMain = styled.main`
  display: flex;
  flex-direction: column;
  gap: 100px;

  counter-reset: section 0;

  // add a number to the main section titles (About Me, Experience, Projects and Contact)
  .section-title {
    counter-increment: section 1;
    &::before {
      content: "0" counter(section) ". ";
      color: var(--primary-color);
      font-family: "PT Mono", monospace;
    }
  }
`;

export const StyledTitle = styled.div`
  font-size: clamp(2.5rem, 8vw, 5rem);
  line-height: 1.1;

  font-weight: 600;
`;

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

export const StyledNavLinks = styled.ol`
  display: flex;
  gap: 40px;
  margin: 0;
  padding: 0;
  list-style: none;
  counter-reset: item 0;
  a {
    display: flex;
    gap: 10px;
    color: var(--secondary-color);
    counter-increment: item 1;
    &::before {
      content: "0" counter(item) ".";
      color: var(--primary-color);
    }
  }
`;

export const StlyedPopupMenu = styled.aside`
  position: fixed;
  top: 0;
  right: 0;
  padding: 40px;
  padding-top: calc(40px + var(--header-height));
  height: 100vh;
  width: 50%;
  background: var(--popup-menu-bg, #112240);
  z-index: 2;
  transform: translateX(100%);
  visibility: hidden;
  transition: transform 0.3s ease-in-out, visibility 0.3s ease-in-out;

  .nav-links {
    flex-direction: column;
    align-items: center;
    font-size: var(--fs-lg);
    a {
      flex-direction: column;
      align-items: center;
    }
  }

  @media (max-width: 500px) {
    width: 100%;
    background: var(--bg-color);
    .nav-links {
      a {
        color: var(--tertiary-color);
      }
    }
  }

  ${(props) =>
    props.menuActive && "transform: translateX(0); visibility: visible;"}
`;

export const StyledPopupVeil = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  z-index: 1;
`;

export const StyledBtn = styled.button`
  appearance: none;
  background-color: transparent;
  color: var(--primary-color);
  border: 1px solid var(--primary-color);
  border-radius: 5px;
  padding: 20px 40px;
  font-size: var(--fs-sm);
  font-family: "PT Mono", monospace;
  cursor: pointer;
  width: fit-content;
  &:hover {
    background-color: var(--primary-color-light);
  }
`;

export const StyledMenuIcon = styled.button`
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
    .icon-line,
    .dot {
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
    .icon-line.bottom,
    .dot {
      opacity: 0;
    }

    .icon-line.top {
      transform: rotate(225deg);
    }

    .icon-line.hidden {
      opacity: 1;
      transform: rotate(135deg);
    }
  }

  @media (prefers-reduced-motion: no-preference) {
    .open-menu {
      .icon-line,
      .dot {
        transition: transform var(--duration) ease-in,
          opacity 0ms ease var(--delay), y var(--duration) ease-out var(--delay);
      }
    }

    .close-menu {
      .icon-line,
      .dot {
        transition: y var(--duration) ease-out,
          transform var(--duration) ease var(--delay),
          opacity 0ms ease var(--delay);
      }
    }
  }
`;

export const StyledHome = styled.section`
  height: 100vh;
  padding-top: 140px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  max-width: 1000px;
  margin: 0 auto;
  .welcome {
    font-family: "PT Mono", monospace;
  }
  .name {
    color: var(--tertiary-color);
  }
  .title {
    color: var(--secondary-color);
    margin-top: 10px;
  }
  .summary {
    color: var(--secondary-color);
    max-width: 520px;
  }

  @media (max-height: 500px) {
    height: auto;
  }
`;

export const StyledContact = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  max-width: 600px;
  margin: 0 auto;
  gap: 10px;

  .contact--title {
    font-size: clamp(40px, 5vw, 60px);
    font-weight: 600;
    color: var(--tertiary-color);
  }
`;

export const StyledAboutMe = styled.section`
  display: flex;
  flex-direction: column;
  max-width: 900px;
  margin: 0 auto;

  .about--content {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(2, auto);
    grid-template-rows: auto;
    gap: 50px;
    justify-items: space-between;

    .about--photo {
      min-width: 250px;
      max-width: 350px;
      aspect-ratio: 1;
      border-radius: 10px;
      background: url(/prof_pic.jpg) no-repeat center center / cover;
      position: relative;
      &::after {
        content: "";
        display: block;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        border-radius: inherit;
        border: 3px solid var(--primary-color);
        transform: translate(5%, 5%);
        transition: transform 0.2s ease-in-out;
        z-index: -1;
      }

      &:hover::after {
        transform: translate(2.5%, 2.5%);
      }
    }

    .about--text {
      color: var(--secondary-color);
      min-width: 300px;
      max-width: 600px;
    }

    .about--tech-stack {
      display: grid;
      grid-template-columns: repeat(2, auto);
      row-gap: 10px;
      list-style: none;
      font-size: var(--fs-xs);
      padding: 0;

      li {
        display: flex;
        align-items: center;
        gap: 10px;

        svg {
          fill: var(--primary-color);
          font-size: var(--fs-md);
        }
      }
    }

    @media (max-width: 770px) {
      grid-template-columns: 1fr;
      .about--photo {
        width: clamp(250px, 50%, 350px);
        margin: 0 auto;
      }
    }
  }
`;

export const StyledFooter = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: var(--fs-xs);
  font-family: "PT Mono", monospace;
  color: var(--secondary-color);
  padding: 20px 0;
  gap: 10px;

  .footer--logo-group {
    display: flex;
    gap: 20px;
  }

  .logo-react,
  .logo-vite {
    transition: all 0.25s ease;
  }

  .logo-react:hover,
  .logo-vite:hover {
    transform: scale(1.1);
  }

  .logo-react:hover {
    filter: drop-shadow(0 0 0.75rem var(--primary-color));
  }

  .logo-vite:hover {
    filter: drop-shadow(0 0 0.75rem var(--secondary-color));
  }

  a {
    font-size: var(--fs-xxs);
    display: inline-block;
    color: inherit;
    &::after {
      display: none;
    }
  }

  // disable shawdow on hover when screen is too small (safari gets buggy)
  @media Screen and (max-width: 500px), (max-height: 500px) {
    .logo-react:hover,
    .logo-vite:hover {
      filter: none;
    }
  }
`;

export const StyledSideBar = styled.aside`
  position: fixed;
  bottom: 0;

  ${(props) =>
    props.position === "left"
      ? "left: 60px; transform:translateX(-50%);"
      : "right: 60px; transform:translateX(50%);"}

  @media (max-width: 1080px) {
    ${(props) => (props.position === "left" ? "left: 40px; " : "right: 40px; ")}
  }

  @media (max-width: 770px) {
    ${(props) => (props.position === "left" ? "left: 30px; " : "right: 30px; ")}
  }

  a {
    color: var(--secondary-color);
    display: inline-block;
    transition: all 0.3s ease;
    &:hover {
      transform: translateX(-5px);
    }
  }

  .sidebar--wrapper {
    rotate: 90deg;
    transform: translate(-40%, 0%);
    display: flex;
    align-items: center;
    gap: 30px;

    &::after {
      content: "";
      display: inline-block;
      width: 100px;
      height: 2px;
      border-radius: 5px;
      background: var(--secondary-color);
    }
  }

  svg {
    font-size: var(--fs-xl);
    cursor: pointer;
    rotate: -90deg;
  }

  .email {
    font-size: var(--fs-md);
    font-family: "PT Mono", monospace;
  }

  @media Screen and (max-width: 500px), (max-height: 500px) {
    ${(props) => props.position === "right" && "display: none;"}

    // fix position when screen is too small
    ${(props) =>
      props.position === "left" &&
      "position: relative;\
      left:auto;bottom: auto; transform:translateX(0%);\
      .sidebar--wrapper{\
        rotate: 0deg;\
        transform: translate(0%, 0%);\
      };\
      .sidebar--wrapper::after {display: none;}\
      svg {rotate: 0deg;}\
      a:hover {\
        transform: translateY(-5px);\
      }"}
  }
`;

export const StyledProjectsSection = styled.section`
  margin: 0 auto;
  max-width: 1000px;

  .projects-container {
    display: flex;
    flex-direction: column;
    gap: 150px;
  }
`;

export const StyledProjectItem = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: 1fr;
  align-items: center;

  .project-item--image {
    border-radius: 5px;
    overflow: hidden;
    position: relative;
    height: fit-content;
    box-shadow: 0px 10px 0.875rem -0.5rem rgba(0, 0, 0, 1);

    a {
      width: 100%;
      height: 100%;
      max-width: 100%;
      display: inline-block;
      background: linear-gradient(0.4turn, #64ffda, var(--primary-color));
      position: relative;
      z-index: 1; // so that the link can be clicked
      vertical-align: middle;

      img {
        width: 100%;
        aspect-ratio: 16 / 9;
        object-fit: cover;
        display: block;
        filter: grayscale(100%) contrast(1) brightness(80%);
        mix-blend-mode: multiply;
      }
    }

    a::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: #0a192f;
      mix-blend-mode: screen;
      z-index: 2;
    }
    @media screen and (min-width: 770px) {
      a:hover {
        img {
          filter: grayscale(0%) contrast(1);
          mix-blend-mode: normal;
        }
        &::before {
          background: transparent;
        }
      }
    }
  }

  .project-item--info {
    display: flex;
    flex-direction: column;

    gap: 20px;

    .project-item--info--header {
      display: flex;
      flex-direction: column;
      gap: 8px;
      span {
        font-size: var(--fs-xs);
        color: var(--primary-color);
        font-family: "PT Mono", monospace;
      }
    }

    .project-item--info--description {
      max-width: 500px;
      color: var(--secondary-color);
      background: var(--bg-color-secondary);
      padding: 20px;
      border-radius: 5px;
    }

    .project-item--info--tech-stack {
      display: flex;
      flex-wrap: wrap;
      column-gap: 20px;
      row-gap: 10px;
      font-size: var(--fs-xs);
      font-family: "PT Mono", monospace;
      color: var(--secondary-color);
    }

    .project-item--external-links {
      display: flex;
      gap: 20px;
      a {
        color: var(--tertiary-color);
        font-size: var(--fs-xl);
      }
    }

    :nth-child(1n) {
      z-index: 3;
    }
  }

  &:nth-child(odd) {
    .project-item--info {
      grid-column: 3 / 6;
      grid-row: 1 / -1;
      align-items: flex-end;
      text-align: right;

      .project-item--info--description {
        text-align: right;
      }
    }

    .project-item--image {
      grid-column: 1 / 4;
      grid-row: 1 / -1;
    }
  }

  &:nth-child(even) {
    .project-item--info {
      grid-column: 1 / 4;
      grid-row: 1 / -1;
      align-items: flex-start;
      text-align: left;

      .project-item--info--description {
        text-align: left;
      }
    }

    .project-item--image {
      grid-column: 3 / 6;
      grid-row: 1 / -1;
    }
  }

  &:nth-child(1) {
    margin-top: 50px;
  }

  @media screen and (max-width: 770px) {
    grid-template-columns: 1fr;
    border-radius: 5px;
    position: relative;

    &:nth-child(1n) {
      .project-item--image,
      .project-item--info {
        grid-column: 1 / 6;
        grid-row: 1 / -1;
      }

      .project-item--image {
        opacity: 0.25;
        height: 100%;
        box-shadow: 0 0.5rem 0.9rem -0.3rem #000000,
          0 -0.3rem 0.9rem -0.3rem #000000;

        a img {
          height: 100%;
          filter: grayscale(100%) contrast(1) brightness(50%);
        }
      }

      .project-item--info {
        align-items: flex-start;
        text-align: left;
        padding: 50px 40px 30px;

        .project-item--info--header {
          a:hover .project-item--info--header--link-heading {
            color: inherit;
          }
        }
        .project-item--info--description {
          max-width: 100%;
          text-align: left;
          background: transparent;
          padding: 0;
        }
      }

      .project-item--info::after {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        // background: var(--bg-color-secondary-light);
        pointer-events: none;
      }
    }
  }
`;
