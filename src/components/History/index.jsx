
import { HistoriaContainer, Titulo } from "./styles";



export default () => {
  
  // Texto da história
  const textoHistoria = `
    Em uma floresta antiga, onde os ventos sussurravam segredos ancestrais e as sombras dançavam com a luz da lua, vivia uma árvore singular. Diziam que ela era a mais velha da floresta, suas raízes se entrelaçavam com a terra há séculos, testemunhando o passar das estações e a mudança das eras.

    Mas o que tornava essa árvore especial era a sua capacidade de falar. Sim, você leu certo! Ela conversava com os animais, com as flores e até mesmo com o vento. Seus galhos se moviam como braços, e suas folhas sussurravam palavras sábias e enigmáticas.

    Muitos animais vinham de longe para ouvi-la. A coruja sábia, com seus grandes olhos atentos, buscava seus conselhos sobre os mistérios da vida. O esquilo tagarela, sempre curioso, a questionava sobre as histórias da floresta. E o cervo, com sua natureza gentil, buscava conforto em suas palavras nos momentos de tristeza.

    A árvore, por sua vez, amava todos os seres da floresta. Ela compartilhava suas histórias, ensinava a importância da união e da natureza, e sempre tinha uma palavra de conforto para aqueles que a procuravam.

    Um dia, um grande incêndio se aproximou da floresta. Os animais entraram em pânico, mas a árvore permaneceu calma. Com sua voz poderosa, ela convocou todos os seres da floresta para uma reunião.

    "Não temam!", ela anunciou. "Juntos, podemos vencer este desafio. Cada um de vocês tem um papel importante a desempenhar."

    Os animais, inspirados por suas palavras, uniram suas forças. As aves carregaram água em seus bicos, os esquilos cavaram valas para conter o fogo, e os cervos usaram seus chifres para afastar os galhos em chamas.

    Graças à sabedoria e à união de todos, o fogo foi contido, e a floresta foi salva. A árvore, que havia se sacrificado para proteger seus amigos, tornou-se ainda mais amada e respeitada.

    E assim, a lenda da árvore que falava continuou a ser contada por gerações, um lembrete de que a natureza é cheia de mistérios e que a união é a chave para superar qualquer desafio.
  `;




  return (
    <>
       <Titulo>A Lenda da Árvore que Falava</Titulo>
       <HistoriaContainer>{textoHistoria}</HistoriaContainer>
    </>
  );
};
