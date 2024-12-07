import styled from "styled-components";
import { botaoNormal, botaoHover } from "./Variaveis"
import { textoBotao } from "./Variaveis";


export const BotaoPrimario = styled.a`
  border: 1px solid #000;
  border-radius: 10px;
  padding: 10px 20px;
  background: none;
  z-index: 1;
  position: relative;
  overflow: hidden; /* Garante que os pseudo-elementos fiquem dentro do botão */
  
  cursor: pointer;
  
  font-weight: 400;
  font-size: 1rem;
  line-height: 19px;
  color: ${textoBotao};


  display: block;
 
  text-align: center;
  transition: color 0.4s ease-in-out;

  &::before,
  &::after,
  span::before,
  span::after {
    content: '';
    position: absolute;
    width: 25%;
    height: 0;
    background-color: #000;
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
  }
  
  &:hover {
    color: #fff;
    &::before,
    &::after,
    span::before,
    span::after {
      height: 100%;
      
    }
  }

  span {
    position: relative;
    z-index: 2; // retirar para voltar ao 'normal'
    color: #fff;
  }
`;





export const xxxx = styled.a`
  border: 1px solid #000;
  border-radius: 10px;
  padding: 10px 20px;
  background: none;

  position: relative;
  overflow: hidden; /* Garante que os pseudo-elementos fiquem dentro do botão */
 
  cursor: pointer;
  
  font-weight: 400;
  font-size: 1rem;
  line-height: 19px;
  color: ${textoBotao};
  
  transition-duration: 300ms;  
  transition-timing-function: ease-out;

  &:before,
  &:after,
  span:before,
  span:after {
    content: "";
    position: absolute;
    top: 0;
    width: 25.25%;
    height: 0;
    background-color: #000;
    
  }

  &:before {
    left: 0;
  }

  &:after {
    left: 50%;    
  }

  span:before,
  span:after {
    top: auto;
    bottom: 0;
    
  }

  span:before {
    left: 25%;
  }

  span:after {
    left: 75%;
  }

  &:hover {
    color: red;
  }

  &:hover:before,
  &:hover:after,
  span:hover:before,
  span:hover:after {
    height: 80px; /* Define a altura no hover */
  }

  span {
    position: relative;
   
    color: #fff;
    transition: color 0.4s ease-in-out;
  }


  @media (max-width: 1080px) {
    font-weight: 600;
    padding: 12px 1rem;
    font-size: 14px
  }
`
/*
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