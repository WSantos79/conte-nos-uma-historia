import { Header, Container, Titulo, BotoesDiv,Div, Logo, LogoImg} from "./styles";
import { BotaoPrimario, InputBusca } from "../../styles/elementos";
import React from "react";
import { Link, useNavigate } from "react-router-dom";

export default () => {
    const navigate = useNavigate(); 

    return (
        <>
            <Header>
                <Logo to="/">
                    <LogoImg src="/images/logo.webp" alt="Um livro aberto com uma pena, simbolizando as histórias"></LogoImg>
                </Logo>
                <Container>
                    <Div>
                        <Titulo to="/">Conte-nos uma história</Titulo>
                        
                        <InputBusca
                                   
                        required
                        placeholder="Deixe sua curiosidade te guiar!"
                        type="search"
                        onKeyUp={(e) => {
                        const busca = document.querySelector("[data-busca]")
                        const key = e.which || e.keyCode;
                        const digitado = e.target.value;
                        
                        if (key == 13) { // codigo da tecla enter    
                            busca.blur(); // tirando o foco
                            if (digitado.length < 4) {
                            /*const alert = document.querySelector("[data-found]");
                            //alert.style.display = 'block';

                            /setTimeout(function(){
                                alert.style.display = 'none';
                            },5000);*/
                            } else {
                            //setProduto(false);
                            //getBusca(digitado, setProduto);
                            e.target.value = '';
                            navigate(`/search`);       
                            }
                        } 
                        }}           
                    >
                        </InputBusca>               
                    </Div>          
                    <BotoesDiv>
                        <BotaoPrimario to="/login" data-login><span>Entrar</span></BotaoPrimario>
                        <BotaoPrimario to="/register" data-register><span>Cadastrar</span></BotaoPrimario>
                    </BotoesDiv>

                </Container>
            </Header>
        </>
    )
}