import styled from "styled-components";
import { textoPrimario } from "../../styles/Variaveis";


export const Texto = styled.p`
    display: inline;
    font-size: 1.3rem; // Tamanho da fonte confortável para leitura
    line-height: 1.4; // Mais espaço entre as linhas
    text-align: justify; // Justifica o texto
    margin: 0 2rem 1rem 2rem; // Espaçamento lateral e inferior
    padding: 1px; // Espaçamento interno
    color: ${textoPrimario};    
    white-space: pre-wrap;
`

export const Div = styled.div`
    width: 70%;    
    display: flex;
    justify-content: space-around;
    
    

`