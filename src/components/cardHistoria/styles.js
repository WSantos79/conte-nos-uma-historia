import React from 'react';
import styled from 'styled-components';

export const CardContainer = styled.section`
  background: gray;
  margin: 5% 4% 0% 4%; // cima direito inferior esquerdo
  display: grid;
  grid-template-columns: repeat(5, 1fr); /* 3 colunas de tamanho igual */
  gap: 20px; /* Espaçamento entre os cards */
`;

export const Card = styled.div`
  background-color: green;
  border: 1px solid #ccc;
  padding: 0px;
  margin: 0;
  text-align: center;

  display: grid;
  place-items: center;
`;

export const CardImg = styled.div`
  width: 100%;
  height: 15vw;
  padding: 0px;
  margin: 0;
  overflow: hidden;
  
`
export const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`

export const CardUser = styled.div`  
  width: 80%;
  height: 3vw;
  padding: 0px;
  margin: 2% 0 0 0;
  overflow: hidden;
  background: black;
  display: flex;
  justify-content: space-between;

`
export const UserImg = styled.img`
  width: 20%;
  height: 100%;
  object-fit: cover;
  border-radius: 50%;
  
`
export const Div = styled.div`
  margin-right: 40%;
  text-align: left
`
export const UserName = styled.p`
  margin: 5% 0 7% 0;
  font-weight: bold;
`

export const CardHistoria = styled.div`
 margin: 4% 0 4% 0;
 width:80% ;
text-align: left
`
export const TituloHistoria = styled.p`
  font-weight: bold;
  margin: 0 0 4% 0;
`
export const Traco = styled.hr`
  border-top: 1px solid #CCC;
  width: 80%;
  margin: 30px auto;
`

export const CardInteracao = styled.div`

`

export const CardText = styled.p`
  font-size: 14px;
  margin: 0 0 7% 0;
  padding: 0;
`;
  

