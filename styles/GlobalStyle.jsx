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
  };

  body::-webkit-scrollbar{
    display:none;
  }


  li{
    list-style-type: none;
  }

  .buttonAnimation {
    border-radius: 5px;
    border: 5px solid var(--fixed-color-two);
    font-size: 1.25rem;
    padding: 1vh 5vw;
    margin: 1rem auto;
    background-color: var(--fixed-color-two);
    color: var(--fixed-background);
    letter-spacing: 2px;
    position: relative;
    -webkit-transition-duration: 0.8s; /* Safari */
    transition-duration: 0.8s;
    text-decoration: none;
    cursor: pointer;
  }
  .buttonAnimation:active{
    border: 1px solid red;
    border-color: black;
  }

  .buttonAnimation:hover {
      background: var(--fixed-background);
      color: var(--fixed-color-two);
    }

`;
