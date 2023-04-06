import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * { 
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background-color: #f0f0f0;
  }

  ::-webkit-scrollbar {
    display: none;
  }

  :root {
    --color-white : #ffffff;
    --color-gray : #c4c4c4;
    --color-light-gray : #f7f7f7;
    --color-dark-white : #E5E5E5;

    --font-regular: 20px;
    --font-small: 16px;
    --font-semi-small: 14px;
    --font-micro: 12px;

    --weight-regular: 400;
    --weight-semi-bold: 500;
  }
`;

export default GlobalStyle;
