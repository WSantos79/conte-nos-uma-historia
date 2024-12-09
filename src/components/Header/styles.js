import styled from "styled-components";
import { textoFocoHover, textoPrimario, HeaderFooter,} from "../../styles/Variaveis";
import { marginConteudoLaterais } from "../../styles/Variaveis";
import { Link } from "react-router-dom";

export const Header = styled.header`
  width: 100%; 
  height: 115px;
  
  margin: 0; // Remove margens padrão
  padding: 0; //
  position: relative; /* Padrão para manter a posição no fluxo do layout */
  background: ${HeaderFooter};
  
  
  `


export const Container = styled.div`
  margin: 0 ${marginConteudoLaterais} 0 ${marginConteudoLaterais};  
  height: 100%;
  display: flex;
  justify-content: space-between; //  Distribui os itens igualmente, com espaço igual
  align-items: center; // Centraliza o conteúdo verticalmente 1 
  
`


export const Div = styled.div ` 
 height: 100%;
 display: flex;
 justify-content: space-between; /* Distribui os itens igualmente */
 align-items: center; /* Centraliza verticalmente */
 margin: 0;
`

export const Titulo = styled(Link)`
    font-family: 'ATypewriterForMe', sans-serif;

    font-size: 2rem;
    font-weight: bold;

    margin: 0 40px 0 0px;
    
    cursor: pointer; // Indica que é clicável
    text-decoration: none; // Remove o sublinhado padrão dos links
    color: ${textoPrimario}; // Mantém a cor do texto do link
    
    &:hover {
      color: ${textoFocoHover}; /* Cor ao passar o mouse */
      
  }

 
`


export const BotoesDiv = styled.div`
  margin: 0;  
  width: 20%;
  display: flex;
  justify-content: space-between;
  align-items: center; /* Alinha os itens verticalmente no centro */
  padding: 20px; /* Adiciona um padding interno para criar mais espaço */
  position: relative;
  border-radius: 5px; /* Adiciona bordas arredondadas */
`;
