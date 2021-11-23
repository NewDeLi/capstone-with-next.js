import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  };
  body{
    text-align: center;
    font-family: 'Oswald', sans-serif;
    color: #606060;
  };
  a{
    color: #ff0000ab;
    text-decoration: none;
  };
  h1{
    letter-spacing: 2px;
    font-size: 2.25rem;
  };
  h5{
    color:#56a8e1;
    letter-spacing: 1px;
  }
`;
