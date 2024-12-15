import { FormateContainer,InputGenerico, BotaoSecundario, H3 } from "../../styles/elementos";



export default () => {
  return (
    <>
    <FormateContainer>
        <H3>Nome</H3>
        <InputGenerico type="text" required placeholder="Digite seu nome"></InputGenerico>
        <H3>Data Nascimento</H3>
        <InputGenerico type="date" required placeholder="Digite sua data de nascimento"></InputGenerico>
        <H3>Cidade/Estado</H3>
        <InputGenerico required placeholder="Digite seu Estado e cidade"></InputGenerico>
        <H3>Email</H3>
        <InputGenerico type="email" required placeholder="Digite seu email"></InputGenerico>
        <H3>Senha</H3>
        <InputGenerico type="password" required placeholder="Digite sua senha"></InputGenerico>
        <BotaoSecundario>
          <svg>
            <rect x="0" y="0" width="100%" height="100%" />
          </svg>
          Cadastrar
        </BotaoSecundario>
    </FormateContainer>      
    </>
  );
};
