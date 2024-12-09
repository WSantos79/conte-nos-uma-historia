import { createGlobalStyle } from "styled-components";
import { fundoPrincipal } from "./Variaveis";

export const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.cdnfonts.com/css/atypewriterforme');

  
  * {
  
  margin: 0;
  padding: 0;
  outline: 0;
  box-sizing: border-box;  
  
  font-family: 'Raleway', sans-serif;
  
  font-style: normal;
  font-weight: 400;
  }

  body { 
    background: ${fundoPrincipal};
}



`