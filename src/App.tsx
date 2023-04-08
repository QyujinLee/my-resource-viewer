import React from 'react';
import { RecoilRoot } from 'recoil';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import GlobalStyle from './style/GlobalStyle';
import { containerOptions } from './hooks/useToast';
import MainContainer from './components/MainContainer';

function App() {
  return (
    <div className="App">
      <RecoilRoot>
        <GlobalStyle />
        <ToastContainer {...containerOptions} />
        <MainContainer />
      </RecoilRoot>
    </div>
  );
}

export default App;
