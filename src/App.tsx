import React from 'react';
import { RecoilRoot } from 'recoil';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import GlobalStyle from './style/GlobalStyle';
import { containerOptions } from './hooks/useToast';
import Main from './components/Main';

function App() {
  return (
    <div className="App">
      <RecoilRoot>
        <GlobalStyle />
        <ToastContainer {...containerOptions} />
        <Main />
      </RecoilRoot>
    </div>
  );
}

export default App;
