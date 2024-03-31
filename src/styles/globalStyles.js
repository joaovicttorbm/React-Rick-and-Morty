import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    font-family: sans-serif;
  }

  body { 
    background: white;
    fontColor: rgb(32, 35, 41)
  }
`;

export default GlobalStyle;
