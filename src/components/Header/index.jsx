import { Faixa, Container, Busca, Titulo, BotoesDiv,Div } from "./styles";
import { BotaoPrimario } from "../../styles/elementos";
import React from "react";
import { Link, useNavigate } from "react-router-dom";

export default () => {
    const navigate = useNavigate(); 

    return (
        <>
            <Faixa>
                <Container>
                    <Div>
                        <Titulo to="/">Conte-nos uma história</Titulo>
                        
                        <Busca
                        data-busca            
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
                        </Busca>               
                    </Div>          
                    <BotoesDiv>
                        <BotaoPrimario class="BotaoPrimario" to="/login" data-login>
                        Entrar
                        <span></span>
                        </BotaoPrimario>
                        <BotaoPrimario to="/login" data-login>
                            <span>Cadastrar</span>
                        </BotaoPrimario>
                    </BotoesDiv>

                </Container>
            </Faixa>
        </>
    )
}