import { Editable } from "slate-react";
import styled from "styled-components";
import { segundaMarginLaterias, textoPrimario } from "../../styles/Variaveis";

export const DivTitulo = styled.div`
  display: flex;
  margin: 0 ${segundaMarginLaterias} 15px ${segundaMarginLaterias};
  gap: 8px;
  align-items: center;
  justify-content: space-around;
`
export const DivInputImg = styled(DivTitulo)`
  
  justify-content: flex-start;
`
export const Linha = styled.div`
  margin: 0 ${segundaMarginLaterias} 15px ${segundaMarginLaterias};  
  height: 2px;
  background-color: #CCC;  
`
export const TituloInput = styled.input`
  width: 40%;
  height: 30px;
  font-weight: bold;
  padding-left: 1%;
`

export const DivPre = styled.div`
  margin: 0 ${segundaMarginLaterias} 5px ${segundaMarginLaterias};
  display: flex;
  justify-content: space-between;
`
export const StyledEditable = styled(Editable)`
  font-family: Arial, sans-serif;
  padding: 16px;
  border: 1px solid #ccc; 
  min-height: 150px;
  white-space: pre-wrap;
  overflow-wrap: break-word;
`;

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  padding: 8px 15px;
  border: 1px solid #CCC; 
  width: 120px;
  height: 30px;
  color: black;
  border-radius: 2px;
  cursor: pointer;
  font-size: 13px;
  font-weight: 400;
  background: none;
  transition: all 0.3s ease;
  &:hover {
    font-size: 14px;    
  }
`
export const ButtonVoltaPre = styled(Button)`
  width: 150px;
`

export const ButtonN = styled(Button)`
  &:hover {
    font-weight: 600;    
  }
`;

export const ButtonI = styled(Button)`
&:hover {
    font-style: italic;    
  }
`
export const ButtonS = styled(Button)`
&:hover {
    text-decoration: underline;   
  }
`

export const DivBotao = styled.div`
  display: flex;
  gap: 8px;
  margin-top: 1%;
  margin-left: 1%;

`

export const DivGeral = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 100%;
  height: 100%;
  
`