import { BotaoSecundario, FormateContainer, InputGenerico, H3 } from "../../styles/elementos";





export default () => {
  return (
    <>
    <FormateContainer>
        <H3>Email</H3>
        <InputGenerico required placeholder="Seu email"></InputGenerico>
        <H3>Senha</H3>
        <InputGenerico required placeholder="Sua senha"></InputGenerico>
        <BotaoSecundario>
          <svg>
            <rect x="0" y="0" width="100%" height="100%" />
          </svg>
          Entrar
        </BotaoSecundario>
    </FormateContainer>      
    </>
  );
};
