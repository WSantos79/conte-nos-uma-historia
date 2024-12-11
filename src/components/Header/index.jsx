import {
  Header,
  Container,
  Titulo,
  BotoesDiv,
  Div,
  Logo,
  LogoImg,
  ContainerCategorias,
  HeaderCategorias,
  ContainerGeral,
  ContainerDois,
} from "./styles";
import {
  BotaoCategorias,
  Line,
  DivBotao,
  BotaoPrimario,
  InputBusca,
} from "../../styles/elementos";
import React from "react";
import { Link, useNavigate } from "react-router-dom";

export default () => {
  const navigate = useNavigate();

  return (
    <>
      <Header>
        <ContainerGeral>
          <Container>
            <Div>
              <Logo to="/">
                <LogoImg
                  src="/images/logo.webp"
                  alt="Um livro aberto com uma pena, simbolizando as histórias"
                ></LogoImg>
              </Logo>
              <Titulo to="/">Conte-nos uma história</Titulo>

              <InputBusca
                required
                placeholder="Deixe sua curiosidade te guiar!"
                type="search"
                onKeyUp={(e) => {
                  const busca = document.querySelector("[data-busca]");
                  const key = e.which || e.keyCode;
                  const digitado = e.target.value;

                  if (key == 13) {
                    // codigo da tecla enter
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
                      e.target.value = "";
                      navigate(`/search`);
                    }
                  }
                }}
              ></InputBusca>
            </Div>
            <BotoesDiv>
              <BotaoPrimario to="/login" data-login>
                <span>Entrar</span>
              </BotaoPrimario>
              <BotaoPrimario to="/register" data-register>
                <span>Cadastrar</span>
              </BotaoPrimario>
            </BotoesDiv>
          </Container>

          <ContainerDois>
            <DivBotao>
              <BotaoCategorias>
                <span className="text">Top</span>
                <Line className="-right" />
                <Line className="-top" />
                <Line className="-left" />
                <Line className="-bottom" />
              </BotaoCategorias>
            </DivBotao>

            <DivBotao>
              <BotaoCategorias>
                <span className="text">Recentes</span>
                <Line className="-right" />
                <Line className="-top" />
                <Line className="-left" />
                <Line className="-bottom" />
              </BotaoCategorias>
            </DivBotao>

            <DivBotao>
              <BotaoCategorias>
                <span className="text">Romance</span>
                <Line className="-right" />
                <Line className="-top" />
                <Line className="-left" />
                <Line className="-bottom" />
              </BotaoCategorias>
            </DivBotao>

            <DivBotao>
              <BotaoCategorias>
                <span className="text">Mistério</span>
                <Line className="-right" />
                <Line className="-top" />
                <Line className="-left" />
                <Line className="-bottom" />
              </BotaoCategorias>
            </DivBotao>

            <DivBotao>
              <BotaoCategorias>
                <span className="text">Fantasia</span>
                <Line className="-right" />
                <Line className="-top" />
                <Line className="-left" />
                <Line className="-bottom" />
              </BotaoCategorias>
            </DivBotao>

            <DivBotao>
              <BotaoCategorias>
                <span className="text">Terror</span>
                <Line className="-right" />
                <Line className="-top" />
                <Line className="-left" />
                <Line className="-bottom" />
              </BotaoCategorias>
            </DivBotao>

            <DivBotao>
              <BotaoCategorias>
                <span className="text">Drama</span>
                <Line className="-right" />
                <Line className="-top" />
                <Line className="-left" />
                <Line className="-bottom" />
              </BotaoCategorias>
            </DivBotao>

            <DivBotao>
              <BotaoCategorias>
                <span className="text">Aventura</span>
                <Line className="-right" />
                <Line className="-top" />
                <Line className="-left" />
                <Line className="-bottom" />
              </BotaoCategorias>
            </DivBotao>

            <DivBotao>
              <BotaoCategorias>
                <span className="text">Comédia</span>
                <Line className="-right" />
                <Line className="-top" />
                <Line className="-left" />
                <Line className="-bottom" />
              </BotaoCategorias>
            </DivBotao>

            <DivBotao>
              <BotaoCategorias>
                <span className="text">Ficção</span>
                <Line className="-right" />
                <Line className="-top" />
                <Line className="-left" />
                <Line className="-bottom" />
              </BotaoCategorias>
            </DivBotao>

            <DivBotao>
              <BotaoCategorias>
                <span className="text">História Reais</span>
                <Line className="-right" />
                <Line className="-top" />
                <Line className="-left" />
                <Line className="-bottom" />
              </BotaoCategorias>
            </DivBotao>

            <DivBotao>
              <BotaoCategorias>
                <span className="text">Adulto</span>{" "}
                {/* desativar depois para todos, e ativar conforme vou ver haha */}
                <Line className="-right" />
                <Line className="-top" />
                <Line className="-left" />
                <Line className="-bottom" />
              </BotaoCategorias>
            </DivBotao>
          </ContainerDois>
        </ContainerGeral>
      </Header>
    </>
  );
};
