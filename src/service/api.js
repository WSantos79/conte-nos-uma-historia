import { Img, Card, CardUser, CardText, CardImg, UserImg, Div, UserName, CardHistoria, TituloHistoria, Traco }  from "../components/cardHistoria/styles.js";

export function exibirCards() {
    const cards = [];
    for (let i = 0; i < 12; i++) {
      cards.push(
        <Card key={i}>
          <CardImg>
            <Img src="/images/historia.jpg" alt="Logo" />
          </CardImg>
          <CardUser>
            <UserImg src="/images/user.jpg" alt="Logo" />
            <Div>
                <UserName>Tarcia Mara</UserName>
                <CardText>3 days ago</CardText>
            </Div>
          </CardUser>
          <CardHistoria>
            <TituloHistoria>A Lenda da Árvore que Falava</TituloHistoria>
            <CardText>Em uma floresta antiga, onde os ventos sussurravam segredos ancestrais e as sombras dançavam com a luz da lua, vivia uma árvore singular. Diziam que ela era a mais velha da floresta, suas raízes se entrelaçavam com a terra há séculos...</CardText>
          </CardHistoria>
          <Traco></Traco>
        </Card>
      );
    }
    return cards;
  }