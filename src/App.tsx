import React from 'react';
import styled from 'styled-components';
import { RecoilRoot } from 'recoil';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import GlobalStyle from './style/GlobalStyle';
import SideBar from './components/SideBar';
import Viewer from './components/Viewer';
import { containerOptions } from './hooks/useToast';

function App() {
  return (
    <div className="App">
      <RecoilRoot>
        <GlobalStyle />
        <ToastContainer {...containerOptions} />
        <Main>
          <SideBar />
          <Viewer />
        </Main>
      </RecoilRoot>
    </div>
  );
}

export default App;

const Main = styled.main`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
`;
