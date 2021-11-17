import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  };
  body{
    text-align: center;
    font-family: 'Rubik', sans-serif;
    background-color: #f0d8a4;
  };
  a{
    color: #ff0000ab;
    text-decoration: none;
  };
  h1{
    color: white;
    -webkit-text-stroke-width: 2.5px;
    -webkit-text-stroke-color: black;
    letter-spacing: 1px;
  };
`;
