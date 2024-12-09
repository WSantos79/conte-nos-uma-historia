import styled from "styled-components";
import { fundoPrincipal, fundoSecundario, textoPrimario } from "./Variaveis"
import { textoBotao } from "./Variaveis";
import { Link } from "react-router-dom";


export const BotaoPrimario = styled(Link)`
  border: 1px solid #FFF;
  border-radius: 10px;
  padding: 10px 20px;
  background: none;
  cursor: pointer;
  font-weight: 400;
  font-size: 1rem;
  line-height: 19px;
  color: ${textoBotao};
  transition-duration: 300ms;  
  transition-timing-function: ease-out;
  position: relative;
  text-decoration: none;

  display: block;
  overflow: hidden;
   

  &::before,
  &::after,
  span::before,
  span::after {
    content: '';
    position: absolute;
    width: 25%;
    height: 0;
    background-color: rgba(255, 215, 0, 0.25);
    transition: height 0.4s ease-in-out;  
  }

  &::before {
    top: 0;
    left: 0;
  }

  &::after {
    top: 0;
    left: 50%;
  }

  span::before {
    bottom: 0;
    left: 25%;
  }

  span::after {
    bottom: 0;
    left: 75%;
    color: #000;
    
  }

  &:hover {
    color:  #000;
    border: 1px solid #000;

    &::before,
    &::after,
    span::before,
    span::after {
      height: 100%;
    }
  }
`
export const BotaoSecundario = styled(Link)`
  display: inline-block;
  position: relative;
  max-width: 160px;
  width: 100%;
  font-size: 16px;
  font-weight: 100;
  line-height: 45px;
  color: ${textoPrimario};
  text-transform: uppercase;
  text-decoration: none;
  cursor: pointer;
  background: none;
  overflow: hidden;

  svg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  rect {
    fill: none;
    stroke: ${textoPrimario};
    stroke-width: 2;
    stroke-dasharray: 422, 0;
    transition: all 0.35s linear;
  }

  &:hover {
    background: transparent;
    font-weight: 900;
    letter-spacing: 1px;

    rect {
      stroke-width: 5;
      stroke-dasharray: 15, 310;
      stroke-dashoffset: 48;
      transition: all 1.35s cubic-bezier(0.19, 1, 0.22, 1);
    }
  }
`
/*
 <DivBotao>
      <BotaoCategorias>
        <span className="text">Hover me</span>
        <Line className="-right" />
        <Line className="-top" />
        <Line className="-left" />
        <Line className="-bottom" />
      </BotaoCategorias>
    </DivBotao>
*/


export const DivBotao = styled.section`
  height: 100vh;
  overflow: hidden;
  display: flex;
  flex-wrap: wrap;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  justify-content: center;
  align-items: center;
  background: #2d2d2d;
`;

export const BotaoCategorias = styled(Link)`
  color: white;
  padding: 0.7em calc(0.7em * 1.2);
  display: inline-block;
  border: 3px solid transparent;
  position: relative;
  font-size: 1.5em;
  cursor: pointer;
  letter-spacing: 0.07em;

  .text {
    font-family: proxima-nova, monospace;
    transform: translate3d(0, 0.7em, 0);
    display: block;
    transition: transform 0.4s cubic-bezier(0.2, 0, 0, 1) 0.4s;
  }

  &:after {
    position: absolute;
    content: "";
    bottom: -3px;
    left: calc(0.7em * 1.2);
    right: calc(0.7em * 1.2);
    height: 3px;
    background: #f26522;
    transition: transform 0.8s cubic-bezier(1, 0, 0.37, 1) 0.2s,
      right 0.2s cubic-bezier(0.04, 0.48, 0, 1) 0.6s,
      left 0.4s cubic-bezier(0.04, 0.48, 0, 1) 0.6s;
    transform-origin: left;
  }

  &:hover .text,
  &:active .text {
    transform: translate3d(0, 0, 0);
    transition: transform 0.6s cubic-bezier(0.2, 0, 0, 1) 0.4s;
  }

  &:hover:after,
  &:active:after {
    transform: scale3d(0, 1, 1);
    right: -3px;
    left: -3px;
    transform-origin: right;
    transition: transform 0.2s cubic-bezier(1, 0, 0.65, 1.01) 0.17s,
      right 0.2s cubic-bezier(1, 0, 0.65, 1.01),
      left 0s 0.3s;
  }
`;

export const Line = styled.span`
  position: absolute;
  background: #f26522;

  &.-right,
  &.-left {
    width: 3px;
    bottom: -3px;
    top: -3px;
    transform: scale3d(1, 0, 1);
  }

  &.-top,
  &.-bottom {
    height: 3px;
    left: -3px;
    right: -3px;
    transform: scale3d(0, 1, 1);
  }

  &.-right {
    right: -3px;
    transition: transform 0.1s cubic-bezier(1, 0, 0.65, 1.01) 0.23s;
    transform-origin: top;
  }

  &.-top {
    top: -3px;
    transition: transform 0.08s linear 0.43s;
    transform-origin: left;
  }

  &.-left {
    left: -3px;
    transition: transform 0.08s linear 0.51s;
    transform-origin: bottom;
  }

  &.-bottom {
    bottom: -3px;
    transition: transform 0.3s cubic-bezier(1, 0, 0.65, 1.01);
    transform-origin: right;
  }

  ${BotaoCategorias}:hover &,
  ${BotaoCategorias}:active & {
    transform: scale3d(1, 1, 1);
  }

  ${BotaoCategorias}:hover &.-right,
  ${BotaoCategorias}:active &.-right {
    transition: transform 0.1s cubic-bezier(1, 0, 0.65, 1.01) 0.2s;
    transform-origin: bottom;
  }

  ${BotaoCategorias}:hover &.-top,
  ${BotaoCategorias}:active &.-top {
    transition: transform 0.08s linear 0.4s;
    transform-origin: right;
  }

  ${BotaoCategorias}:hover &.-left,
  ${BotaoCategorias}:active &.-left {
    transition: transform 0.08s linear 0.48s;
    transform-origin: top;
  }

  ${BotaoCategorias}:hover &.-bottom,
  ${BotaoCategorias}:active &.-bottom {
    transition: transform 0.5s cubic-bezier(0, 0.53, 0.29, 1) 0.56s;
    transform-origin: left;
  }
`;



export const InputBusca = styled.input`
  padding:0;  
  background: ${fundoPrincipal} 360px url('/images/search.svg');
  background-repeat: no-repeat;
  background-position: center right 10px;
  
  width: 450px;
  height: 30px;

  border-radius: 6px;  
  text-indent: 10px;
  box-shadow: none;
  border: none;
  
 &:focus {
  outline: none; /* Remove o contorno padrão */
  border: none;  /* Remove a borda padrão */
  
  
  transform: scale(1.02); /* Aumenta o tamanho em 20% */
  background-color: #f0f0f0; /* (Opcional) Muda a cor de fundo ao focar */
  border: 1px solid #aaa; /* (Opcional) Adiciona uma borda personalizada */
}
`

export const InputGenerico = styled(InputBusca)`
  
  border: 1px solid gray;
  background: #F8F8FF 360px;
  
  width: 350px;
  height: 35px;

  
 &:focus {
  background-color: #F8F8FF; 
  border: 1px solid #000; 
}


`
const margin = '25%';

export const FormContainer = styled.section`
  
  margin: 5% ${margin} 0% ${margin}; // cima direito inferior esquerdo
  padding: 1% 0 5% 0;
  
  border: 1px solid gray;  
  background: ${fundoSecundario};
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 15px;

  `;
export const H3 = styled.h3`
  color: ${textoPrimario};
`





/*
tecnologias de gerenciamento de estados
Context API.



CSS Botao categorias



.portfolio-experiment, .scene {
  height: 100vh;
  overflow: hidden;
  display: flex;
  flex-wrap: wrap;
  flex-wrap: wrap;
  -webkit-display: flex;
  -webkit-flex-wrap: wrap;
  -webkit-flex-wrap: wrap;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  justify-content: center;
  align-items: center;
  -webkit-justify-content: center;
  -webkit-align-items: center;
}

.portfolio-experiment {
  background: #2d2d2d;
}
.portfolio-experiment a {
  color: white;
  padding: 0.7em calc(0.7em * 1.2);
  display: inline-block;
  border: 3px solid transparent;
  position: relative;
  font-size: 1.5em;
  cursor: pointer;
  letter-spacing: 0.07em;
}
.portfolio-experiment a .text {
  font-family: proxima-nova, monospace;
  transform: translate3d(0, 0.7em, 0);
  display: block;
  transition: transform 0.4s cubic-bezier(0.2, 0, 0, 1) 0.4s;
}
.portfolio-experiment a:after {
  position: absolute;
  content: "";
  bottom: -3px;
  left: calc(0.7em * 1.2);
  right: calc(0.7em * 1.2);
  height: 3px;
  background: #f26522;
  transition: transform 0.8s cubic-bezier(1, 0, 0.37, 1) 0.2s, right 0.2s cubic-bezier(0.04, 0.48, 0, 1) 0.6s, left 0.4s cubic-bezier(0.04, 0.48, 0, 1) 0.6s;
  transform-origin: left;
}
.portfolio-experiment .line {
  position: absolute;
  background: #f26522;
}
.portfolio-experiment .line.-right, .portfolio-experiment .line.-left {
  width: 3px;
  bottom: -3px;
  top: -3px;
  transform: scale3d(1, 0, 1);
}
.portfolio-experiment .line.-top, .portfolio-experiment .line.-bottom {
  height: 3px;
  left: -3px;
  right: -3px;
  transform: scale3d(0, 1, 1);
}
.portfolio-experiment .line.-right {
  right: -3px;
  transition: transform 0.1s cubic-bezier(1, 0, 0.65, 1.01) 0.23s;
  transform-origin: top;
}
.portfolio-experiment .line.-top {
  top: -3px;
  transition: transform 0.08s linear 0.43s;
  transform-origin: left;
}
.portfolio-experiment .line.-left {
  left: -3px;
  transition: transform 0.08s linear 0.51s;
  transform-origin: bottom;
}
.portfolio-experiment .line.-bottom {
  bottom: -3px;
  transition: transform 0.3s cubic-bezier(1, 0, 0.65, 1.01);
  transform-origin: right;
}
.portfolio-experiment a:hover .text,
.portfolio-experiment a:active .text {
  transform: translate3d(0, 0, 0);
  transition: transform 0.6s cubic-bezier(0.2, 0, 0, 1) 0.4s;
}
.portfolio-experiment a:hover:after,
.portfolio-experiment a:active:after {
  transform: scale3d(0, 1, 1);
  right: -3px;
  left: -3px;
  transform-origin: right;
  transition: transform 0.2s cubic-bezier(1, 0, 0.65, 1.01) 0.17s, right 0.2s cubic-bezier(1, 0, 0.65, 1.01), left 0s 0.3s;
}
.portfolio-experiment a:hover .line,
.portfolio-experiment a:active .line {
  transform: scale3d(1, 1, 1);
}
.portfolio-experiment a:hover .line.-right,
.portfolio-experiment a:active .line.-right {
  transition: transform 0.1s cubic-bezier(1, 0, 0.65, 1.01) 0.2s;
  transform-origin: bottom;
}
.portfolio-experiment a:hover .line.-top,
.portfolio-experiment a:active .line.-top {
  transition: transform 0.08s linear 0.4s;
  transform-origin: right;
}
.portfolio-experiment a:hover .line.-left,
.portfolio-experiment a:active .line.-left {
  transition: transform 0.08s linear 0.48s;
  transform-origin: top;
}
.portfolio-experiment a:hover .line.-bottom,
.portfolio-experiment a:active .line.-bottom {
  transition: transform 0.5s cubic-bezier(0, 0.53, 0.29, 1) 0.56s;
  transform-origin: left;
}

View SCSS Code

HTML BOTAO CATEGORIAS



<section class="portfolio-experiment">
  <a>
    <span class="text">Hover me</span>
    <span class="line -right"></span>
    <span class="line -top"></span>
    <span class="line -left"></span>
    <span class="line -bottom"></span>
  </a>
</section>

*/ 