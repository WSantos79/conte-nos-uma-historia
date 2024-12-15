import styled from "styled-components";
import { textoPrimario } from "../../styles/Variaveis";


export const Titulo = styled.h1`   
  font-weight: bold;
  margin: 0;  
  color: ${textoPrimario};
  font-size: 30px;
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
  word-wrap: break-word;
  font-family: 'ATypewriterForMe', sans-serif;
`;


export const DivOpcoes = styled.div`
  margin: 0 25% 10px 25%;
  display: flex;
  justify-content: space-between;  
  gap: 10px;
`
export const Div = styled.div`  
  display: flex;
  justify-content: flex-start;
  gap: 1px;
  width: 10%;
  
`
export const DivDois = styled.div`    
  display: flex;    
  gap: 10px;
 ` 
export const Select = styled.select`
    display: flex;

`

export const BotaoFont = styled.button`
    width: 50%;
    margin-right: 5px;    
    font-size: 1rem;
    align-itens: center;
`

export const BotaoCompart = styled.button`
  width: auto;
  padding: 0 10px 0 10px;  
`