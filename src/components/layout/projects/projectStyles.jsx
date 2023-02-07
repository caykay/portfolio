import styled from "styled-components";

const StyledProjectsSection = styled.section`
  margin: 0 auto;
  max-width: 1000px;

  .projects-container {
    display: flex;
    flex-direction: column;
    gap: 150px;
  }
`;

const StyledProjectItem = styled.div`
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
      background: linear-gradient(0.4turn, lightblue, var(--primary-color));
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
        /* transition: all 0.3s ease-in-out; */
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
      transition: all 0.3s ease-in-out;
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
      background: var(--project-description-color, rgba(30, 20, 60));
      padding: 20px;
      border-radius: 5px;
      font-size: var(--fs-md);

      @media Screen and (min-width: 770px) {
        box-shadow: 0 5px 0.5rem -0.2rem rgba(0, 0, 0, 0.5);
        font-size: var(--fs-sm);
      }
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

    & :nth-child(1n) {
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
          width: 100%;
          a {
            width: 100%;
          }
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

export { StyledProjectItem, StyledProjectsSection };
