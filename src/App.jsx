import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Main from "./components/content/Main";
import Footer from "./components/Footer";
import styled from "styled-components";

const StyledApp = styled.div`
  display: grid;
  // flex-direction: column;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr auto;
  grid-template-areas: "main" "footer";
  gap: 100px;

  // todo: delegate to actual components
  main {
    grid-area: main;
  }

  footer {
    grid-area: footer;
  }
`;

function App() {
  return (
    <StyledApp className="App">
      <Header />
      {/* 
      TODO: Add routes (when scaling up)
      */}
      <Main />
      <Footer />
    </StyledApp>
  );
}

export default App;
