import { Texto } from "./styles";
import {
  BotoesSimples,
  FormateContainer,
  User,
} from "../../styles/elementos";
import { Div } from "./styles";

const texto = `Conte-nos uma história!

Você já parou para pensar nas histórias incríveis que só você pode contar? Pode ser uma memória especial, um momento de superação, uma ideia que sempre esteve na sua mente ou até mesmo uma aventura imaginária. Aqui é o lugar para dar vida a essas histórias e inspirar outras pessoas!

Escreva, compartilhe e deixe sua criatividade fluir. Não importa se é real ou inventada, toda história tem o poder de conectar, emocionar e transformar quem a lê.

Então, o que está esperando? Comece agora mesmo e mostre ao mundo o seu jeito único de contar histórias!
`;

export default () => {
  return (
    <>
      <FormateContainer>
        <User>Tarcia Mara</User>
        <Texto>{texto}</Texto>
        <Div>
          <BotoesSimples>
            <svg>
              <rect x="0" y="0" width="100%" height="100%" />
            </svg>
            Novas histórias
          </BotoesSimples>
          <BotoesSimples>
            <svg>
              <rect x="0" y="0" width="100%" height="100%" />
            </svg>
            Minhas histórias
          </BotoesSimples>
          <BotoesSimples>
            <svg>
              <rect x="0" y="0" width="100%" height="100%" />
            </svg>
            Sobre mim
          </BotoesSimples>
        </Div>
      </FormateContainer>
    </>
  );
};
