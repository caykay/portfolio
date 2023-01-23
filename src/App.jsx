import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Main from "./components/content/Main";
import Footer from "./components/Footer";
import styled from "styled-components";
import Sidebars from "./components/SideBars";

const StyledApp = styled.div`
  display: flex;
  flex-direction: column;
  gap: 100px;
`;

function App() {
  return (
    <StyledApp className="App">
      <Header />
      <Main />
      <Footer />
      <Sidebars />
    </StyledApp>
  );
}

export default App;
