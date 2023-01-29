import { createGlobalStyle } from "styled-components";
import { variables } from "./Variables";

export const GlobalStyles = createGlobalStyle`
    @import url("https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&family=Karla:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;1,200;1,300;1,400;1,500;1,600;1,700;1,800&family=PT+Mono&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");
    ${variables};

    *,
    *::before,
    *::after {
        box-sizing: border-box;
    }

    html {
        scroll-behavior: smooth;
    }

    body {
        height: 100vh;
        margin: 0;
        background: var(--bg-color);
        font-family: "Inter", "Poppins", sans-serif;
        font-size: var(--fs-xl);

        overflow: overlay;
        overscroll-behavior: none;

        line-height: 1.5;
    }

    body.no-scroll {
        overflow: hidden;
    }

    #root {
        height: 100%;
        color: var(--primary-color);
        padding: 0 160px;
    }

    a {
        text-decoration: none;
        color: var(--primary-color);
        position: relative;
        width: fit-content;
    }

    a:not(:has(svg, button, img, .headline), :is(.email)):after {
        content: "";
        position: absolute;
        bottom: -2px;
        left: 50%;
        transform: translateX(-50%);
        width: 0%;
        height: 2px;
        background: var(--primary-color);
        border-radius: 10px;
        transition: width 0.2s ease-in-out;
    }

    a:hover {
        color: var(--primary-color) !important;
    }

    a:not(:has(svg, button, img), :is(.email)):hover:after {
        width: 100%;
    }

    section {
        font-size: clamp(var(--fs-sm), 5vw, var(--fs-md));
        padding: 100px 0;
    }

    @media screen and (max-width: 1080px) {
        #root {
            padding: 0 100px;
        }
    }

    @media screen and (max-width: 770px) {
        #root {
            padding: 0 60px;
        }
    }

    @media screen and (max-width: 450px) {
        #root {
            padding: 0 30px;
        }
    }

    ::-webkit-scrollbar {
        width: 20px;
    }

    ::-webkit-scrollbar-thumb {
        background: var(--scrollbar-thumb);
        border-radius: 10px;
        border: 7px solid rgba(0, 0, 0, 0);
        background-clip: padding-box;
    }

    ::-webkit-scrollbar-track {
        background: transparent;
    }

    .blur {
        filter: blur(5px);
    }

`;