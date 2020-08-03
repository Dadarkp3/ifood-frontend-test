import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    font-family: 'Ubuntu', sans-serif;
  }

  body{
    background-color: #ffffff;
    background-image: url("https://www.transparenttextures.com/patterns/ag-square.png");
  }

  main{
    min-height: calc(100vh - 140px);
  }

`;
