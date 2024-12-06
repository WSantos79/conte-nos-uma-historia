import React from 'react';
import styled from 'styled-components';

export const CardContainer = styled.div`
  background: gray;
  margin: 10%;
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* 3 colunas de tamanho igual */
  gap: 20px; /* Espaçamento entre os cards */
`;

export const Card = styled.div`
  background-color: #f5f5f5;
  border: 1px solid #ccc;
  padding: 20px;
  text-align: center;
`;

export const CardLogo = styled.img`
  width: 50px;
  height: 50px;
  margin-bottom: 10px;
`;

export const CardText = styled.p`
  font-size: 14px;
`;
