import styled from "styled-components";
import { textoFocoHover, textoPrimario, HeaderFooter, fundoPrincipal,} from "../../styles/Variaveis";


export const Titulo = styled.h1`   
  font-weight: bold;
  margin: 0;  
  color: ${textoPrimario};
  font-family: 'ATypewriterForMe', sans-serif;
`


export const HistoriaContainer = styled.h2`
  display: inline;
  font-size: 1.3rem; // Tamanho da fonte confortável para leitura
  line-height: 1.8; // Mais espaço entre as linhas
  text-align: justify; // Justifica o texto
  margin: 0 2rem 1rem 2rem; // Espaçamento lateral e inferior
  padding: 1.5rem; // Espaçamento interno
  color: ${textoPrimario};  
  border-radius: 8px; // Cantos arredondados para suavidade  
  white-space: pre-wrap;
  font-family: 'ATypewriterForMe', sans-serif;
`;