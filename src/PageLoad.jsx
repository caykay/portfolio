import Logo from "./components/Logo";
import styled from "styled-components";
import { Helmet } from "react-helmet-async";
import { useEffect, useState } from "react";

const StyledLoadingPage = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.6);

  .logo-wrapper {
    position: absolute;
    top: 50%;
    left: 50%;
    max-width: 100px;
    width: max-content;
    transform: translate(-50%, -50%);

    ${
      "" /* --duration: 300ms;
    --delay: 500ms; */
    }

    transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);

    opacity: ${({ mounted }) => (mounted ? 1 : 0)};

    svg {
      width: 100%;
      display: block;
      user-select: none;
      .path-c {
        opacity: 0;
      }
    }
  }
`;

function PageLoad({ finishLoading }) {
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    // set logo as mounted after
    const timeout = setTimeout(() => setIsMounted(true), 10);

    // todo: animation function here

    return () => clearTimeout(timeout);
  }, []);

  return (
    <StyledLoadingPage mounted={isMounted}>
      <Helmet bodyAttributes={{ class: "hidden" }} />
      <div className="logo-wrapper">
        <Logo className="LoadingLogo" />
      </div>
    </StyledLoadingPage>
  );
}

export default PageLoad;
