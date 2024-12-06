import { createGlobalStyle } from "styled-components";
import { fundoPrincipal } from "./Variaveis";


                

export const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.cdnfonts.com/css/1942-report-2');
  @import url('https://fonts.cdnfonts.com/css/atypewriterforme');
  body { 
    background: ${fundoPrincipal};
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}



`