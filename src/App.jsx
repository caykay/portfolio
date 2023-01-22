import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Main from "./components/content/Main";
import Footer from "./components/Footer";
import styled from "styled-components";

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
    </StyledApp>
  );
}

export default App;
