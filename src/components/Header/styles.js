import styled from "styled-components";
import { textoFocoHover, textoPrimario, HeaderFooter, fundoPrincipal,} from "../../styles/Variaveis";
import { marginConteudoLaterais } from "../../styles/Variaveis";
import { Link } from "react-router-dom";

export const Header = styled.header`
  width: 100%;  
  height: 150px;
  margin: 0;
  padding: 0; //
  position: relative;
  background: ${HeaderFooter};
      
  `
export const Logo = styled(Link)` 
  display: inline-flex;
  width: fit-content;
  height: fit-content;
  padding: 0;
  z-index: 0;
`

export const ContainerGeral = styled.div`  
  display: flex; 
  flex-direction: column;  
  width: auto;
  height: 100%;
  position: relative; 
`

export const LogoImg = styled.img`
  width: 100px;
  height: auto;
  display: block; // remove o espaçamento extra para imagens inline
  cursor: pointer;
  padding: 0;
  z-index: 1;
`

export const Container = styled.div`
  left: 0; // inicia na borda esquerda do pai
  right: 0; 
  margin: 0 ${marginConteudoLaterais};
  height: 100%;
  width: auto;
  display: flex;
  justify-content: space-between;
  position: absolute;
`
export const ContainerDois = styled(Container)`
  height: auto;
  margin-top: auto;
  position: static;  
`

export const Div = styled.div ` 
 height: 100%;
 display: flex;
 justify-content: space-between; /* Distribui os itens igualmente */
 align-items: center; /* Centraliza verticalmente */
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

export const HeaderCategorias = styled(Header)`
   height: 25px;
   z-index: 1;
`

export const  ContainerCategorias = styled(Container)`
  margin: 0 ${marginConteudoLaterais} 0 ${marginConteudoLaterais};
  height: 100%;
  display: flex;
  justify-content: space-between; //  Distribui os itens igualmente, com espaço igual
  align-items: center; // Centraliza o conteúdo verticalmente 1 
`
