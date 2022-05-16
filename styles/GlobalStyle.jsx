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
    all: unset;
    border-radius: 5px;
    border: 5px solid var(--fixed-color-two);
    font-size: 1.25rem;
    padding: 1vh 5vw;
    margin: 1rem auto;
    background-color: var(--fixed-color-two);
    color: var(--fixed-background);
    letter-spacing: 2px;
    position: relative;
    -webkit-transition-duration: 0.4s; /* Safari */
    transition-duration: 0.4s;
    text-decoration: none;
    overflow: hidden;
    cursor: pointer;
  }
  .buttonAnimation:after {
    content: "";
    display: block;
    position: absolute;
    padding-top: 300%;
    padding-left: 390%;
    margin-left: -100% !important;
    margin-top: -130%;
    opacity: 0;
    transition: all 0.8s;
    background:var(--fixed-background);
    color: var(--fixed-color-two)
  }

  .buttonAnimation:active:after {
    padding: 0;
    margin: 0;
    opacity: 1;
    transition: 0s;
  }

`;
