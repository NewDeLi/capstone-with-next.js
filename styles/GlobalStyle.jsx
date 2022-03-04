import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root{

    --fixed-background: #ffffff;
    --fixed-color-one: #606060;
    --fixed-color-two: #56a8e1;
  };

  html,body{
    margin: 0px;
    padding: 0px;
    list-style-type: none;
    text-align: center;
    user-select:none;
    font-family: 'Oswald', sans-serif;
    color: var(--fixed-color-one);
    width:100vw;
    max-width: 100%;
    height: 100vh;
    -ms-overflow-style: none;
    scrollbar-width: none;
    background: #ecececfd;
  
  };

  body::-webkit-scrollbar{
    display:none;
  }

  a{
    color: #56a8e1;
    display:flex;
    align-items:center;
  };

`;
