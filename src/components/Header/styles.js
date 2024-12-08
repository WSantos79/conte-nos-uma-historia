import styled from "styled-components";
import { textoFocoHover, textoPrimario, HeaderFooter, fundoPrincipal,} from "../../styles/Variaveis";
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
export const Logo = styled(Link)``

export const LogoImg = styled.img`
  cursor: pointer;
  width: 7%; 
  height: auto;
  margin: 1% 0 0 2.5%;
  padding: 0;
  position: absolute;
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
    
    text-align: center;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5); // Adiciona uma sombra ao texto

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
  width: 17%;
  display: flex;
  justify-content: space-between;
  align-items: center; /* Alinha os itens verticalmente no centro */

  position: relative;
  border-radius: 5px; /* Adiciona bordas arredondadas */
`;
