import styled from "styled-components";
import { fundoPrincipal, textoFocoHover, fundoSecundario, textoPrimario,} from "../../styles/Variaveis";
import search from "../../assets/images/search.svg";

export const Container = styled.div`
  width: 100%; 
  height: 115px;  
  
  margin: 0; // Remove margens padrão
  padding: 0; //
  position: relative; /* Padrão para manter a posição no fluxo do layout */
  background: ${fundoSecundario};
  
  display: flex;
  justify-content: space-between; //  Distribui os itens igualmente, com espaço igual
  align-items: center; // Centraliza o conteúdo verticalmente 1 `


export const Div = styled.div `
 display: flex;
 justify-content: space-between; /* Distribui os itens igualmente */
 align-items: center; /* Centraliza verticalmente */
`

export const Titulo = styled.h1`
    font-family: 'ATypewriterForMe', sans-serif;

    font-size: 2rem;
    font-weight: bold;

    margin: 70px;
    
    cursor: pointer; // Indica que é clicável
    text-decoration: none; // Remove o sublinhado padrão dos links
    color: ${textoPrimario}; // Mantém a cor do texto do link
    
    &:hover {
    color: ${textoFocoHover}; /* Cor ao passar o mouse */
    color: inherit;
  }

 
`
export const Busca = styled.input`
  padding:0;
  background: ${fundoPrincipal} 360px url(${search});
  background-repeat: no-repeat;
  background-position: center right 10px;

  width: 493px;
  height: 30px;

  border-radius: 0px;
  margin-left: 2rem; 
  text-indent: 10px;
  box-shadow: none;
  border: none;
  margin: 0px;
 &:focus {
  outline: none; /* Remove o contorno padrão */
  border: none;  /* Remove a borda padrão */
  
  
  transform: scale(1.02); /* Aumenta o tamanho em 20% */
  background-color: #f0f0f0; /* (Opcional) Muda a cor de fundo ao focar */
  border: 1px solid #aaa; /* (Opcional) Adiciona uma borda personalizada */
}
`

export const BotoesDiv = styled.div`
  margin:50px;  
  width: 15%;
  display: flex;
  justify-content: space-between;
  align-items: center; /* Alinha os itens verticalmente no centro */
  padding: 20px; /* Adiciona um padding interno para criar mais espaço */
 
  border-radius: 5px; /* Adiciona bordas arredondadas */
`;
