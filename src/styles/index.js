import styled from "styled-components";
import { botaoNormal, botaoHover } from "./Variaveis"
import { textoBotao } from "./Variaveis";

export const BotaoPrimario = styled.button`
  border: none;
  padding: 1rem;
  background: ${botaoNormal};
  
  font-weight: 400;
  font-size: 1rem;
  line-height: 19px;
  color: ${textoBotao};

  transition-duration: 300ms;  
  transition-timing-function: ease-out;

  &:hover {
      cursor: pointer;
      background: ${botaoHover};
  }

  @media (max-width: 1080px) {
    font-weight: 600;
    padding: 12px 1rem;
    font-size: 14px
  }
`
