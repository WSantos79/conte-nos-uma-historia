import styled from 'styled-components';
import { fundoSecundario, marginConteudoLaterais, textoClicavel, textoFocoHover, textoPrimario } from '../../styles/Variaveis';


export const CardContainer = styled.section`
  
  margin: 0 ${marginConteudoLaterais} 0% ${marginConteudoLaterais}; // cima direito inferior esquerdo
  display: grid;
  grid-template-columns: repeat(4, 1fr); /* 3 colunas de tamanho igual */
  gap: 20px; /* Espaçamento entre os cards */
`;


export const Card = styled.div`
  
  border: 1px solid gray;
  padding: 0px;
  margin: 0;
  text-align: center;
  background: ${fundoSecundario};
  display: grid;
  place-items: center;
  
`;

export const CardImg = styled.div`
  width: 100%;
  height: 15vw;
  padding: 0px;
  margin: 0;
  
`
export const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`

export const CardUser = styled.div`  
  width: 80%;
  height: 40px;
  padding: 0px;
  margin: 2% 0 0 0;
  
  display: flex;
  justify-content: flex-start;

`
export const UserImg = styled.img`
  width: 40px;
  height: 40px;
  object-fit: cover;
  border-radius: 50%;
  cursor: pointer;
  color: ${textoClicavel};
  &:hover {
    border: 1px solid #000;
  };
  
`
export const Div = styled.div`
  height: 100%;
  margin-left: 2%;
  text-align: left;  
  display: flex;
  flex-direction: column;
  justify-content: space-between; 
  
`
export const UserName = styled.p`
  margin: 3px 0 0 0;
  font-weight: bold;
  cursor: pointer;
  color: ${textoPrimario};
  &:hover {
    text-decoration: underline;
    color: ${textoFocoHover};
  };
`
export const UserData = styled.p`
  font-size: 13px;
  margin: 0 0 0 2px;
  padding: 0;
  position: relative; /* Necessário para posicionar o pseudo-elemento */
  color: ${textoClicavel};
  &::after {
    content: '10 dez 12:23'; /* Mensagem exibida no hover */
    position: absolute;
    top: 100%; /* Posiciona abaixo do elemento */
    left: 0;
    background-color: #f0f0f0;
    color: #333;
    padding: 5px 10px;
    border-radius: 4px;
    border: 1px solid #ccc;
    font-size: 12px;
    white-space: nowrap;
    visibility: hidden; /* Oculta inicialmente */
    opacity: 0; /* Torna invisível */
    transition: opacity 0.3s ease; /* Transição suave */
    z-index: 10; /* Garante que esteja acima de outros elementos */
  }

  &:hover::after {
    visibility: visible; /* Torna visível no hover */
    opacity: 1; /* Torna totalmente opaco */
  }
  &:hover {
    text-decoration: underline;
    color: ${textoFocoHover};
  };
`;


export const CardHistoria = styled.div`
 margin: 4% 0 0 0;
 width:80% ;
 text-align: left; 
`
export const TituloHistoria = styled.p`
  font-weight: bold;
  margin: 0 0 4% 0;
  cursor: pointer;
  color: ${textoPrimario};
  &:hover {
    text-decoration: underline;
    color: ${textoFocoHover};
  };
`
export const DivHist = styled.div`
  
`
export const Traco = styled.hr`
  border-top: 1px solid #CCC;
  width: 80%;
  margin: 15px auto;
`

export const CardInteracao = styled.div`
  display: flex;
  justify-content: space-between;
  width: 80%;
  padding: 0;
  margin: 0 0 20px 0;
  height: 14px;
`
export const DivVC = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0;
  
  width: 70%;
`
export const ViewsComments = styled.span`
  font-size: 13px;
  margin: 0 0 7% 0;
  padding: 0;
  color: ${textoPrimario};
  
`
export const Comments = styled(ViewsComments)`
  cursor: pointer;
  color: ${textoClicavel};
  text-decoration: underline;
  &:hover {
    color: ${textoFocoHover};
  };
`;

export const Likes = styled.span` 
  display: flex;
  justify-content: flex-end;
  
  margin: 0;
  padding: 0;
  cursor: pointer;  
  &:hover {
    text-decoration: underline;
    color: ${textoFocoHover};
  };
  
  `
export const Like = styled.img`  
  margin: 0 3px 0 0;
  padding: 0;
  
  
`
export const NLikes = styled.p`
  font-size: 13px;
  margin-top: -1px;
  padding: 0;
  color: ${textoClicavel};
`
export const CardText = styled.span`
  font-size: 14px;  
  padding: 0;
  display: inline;
  color: ${textoPrimario};
`;
export const LerMais = styled(CardText)`
  cursor: pointer;
  margin: 0 0 7% 0;
  padding: 0;
  display: inline; /* Altera para inline */
  color: ${textoClicavel}; /* Diferencia visualmente */
  text-decoration: underline;
  &:hover {   
    color: ${textoFocoHover};
  };
`

