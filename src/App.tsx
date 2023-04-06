import React from "react";
import styled from "styled-components";

import GlobalStyle from "./style/GlobalStyle";
import SideBar from "./components/SideBar";
import Viewer from "./components/Viewer";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Main>
        <SideBar />
        <Viewer />
      </Main>
    </div>
  );
}

export default App;

const Main = styled.main`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
`;
