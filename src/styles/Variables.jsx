import { css } from "styled-components";

function extractRGBValues(rgb) {
  // return /(?<=\()(.*?)(?=\))/.exec(rgb)[0]; // works in chrome but not safari(lookbehind not yet supported)
  return /\((.*?)\)/.exec(rgb)[1];
}

export const variables = css`
  :root {
    --bg-color: rgb(18, 13, 39);
    --bg-color-loading: rgb(18, 13, 49);
    --bg-color-light: rgba(18, 13, 39, 0.8);
    --bg-color-secondary: rgba(30, 20, 60);
    --bg-color-secondary-light: rgba(30, 20, 60, 0.88);
    --project-photo-veil: rgba(0, 0, 0, 0.5);
    /* dynamically set the primary color */
    --primary-color: ${({ primaryColor }) =>
      primaryColor
        ? `rgba(${extractRGBValues(primaryColor)})`
        : "rgba(35, 147, 227)"};
    --primary-color-light: ${({ primaryColor }) =>
      primaryColor
        ? `rgba(${extractRGBValues(primaryColor)}, 0.2)`
        : "rgba(35, 147, 227, 0.2)"};

    --secondary-color: rgb(163, 168, 195);
    --tertiary-color: rgb(255, 255, 255);
    --project-description-color: rgba(20, 23, 60, 0.97);
    --scrollbar-thumb: rgba(255, 255, 255, 0.3);
    --popup-menu-bg: rgb(26, 19, 54);

    --fs-xxs: 0.7rem;
    --fs-xs: 0.8125rem;
    --fs-sm: 0.875rem;
    --fs-md: 1rem;
    --fs-lg: 1.125rem;
    --fs-xl: 1.25rem;
    --fs-xxl: 1.375rem;
    --fs-heading: 1.75rem;

    --header-height: 90px;
  }
`;
