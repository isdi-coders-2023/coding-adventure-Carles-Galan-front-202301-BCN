import { createGlobalStyle } from "styled-components";
import "@fontsource/saira-stencil-one";
const GlobalStyles = createGlobalStyle`

:root{
  --color-primary-black: rgba(30, 30, 30, 1); 
  --color-primary-yellow: rgba(204, 207, 24, 1);

  --font-primary: "Saira Stencil One";
}

*, ::after, ::before {
  box-sizing: border-box;
}

body {
  padding: 50px;
  background-color: #fff;
  font-family: monospace;
  width: 100%;
  min-height: 100vh;
  
}

h1,h2{
  padding: 0;
  margin: 0;
}

ol, ul, li {
  list-style: none;
  margin: 0;
  padding: 0;
  text-decoration: none;
}

button{
  background-color: transparent;
  border: none;
  cursor: pointer;
  font-family: inherit;
  
}
`;

export default GlobalStyles;
