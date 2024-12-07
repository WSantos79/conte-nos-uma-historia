import { Img, Card, CardUser, CardText, CardImg, UserImg, Div, UserName, CardHistoria, TituloHistoria, Traco, UserData, CardInteracao, ViewsComments, DivVC, Like, Likes, NLikes, Comments, LerMais, DivHist }  from "../components/cardHistoria/styles.js";

export function exibirCards() {
    const cards = [];
      
    
    for (let i = 0; i < 12; i++) {
      cards.push(
        <Card key={i}>
          <CardImg>
            <Img src="/images/historia.jpg" alt="Logo" />
          </CardImg>
          <CardUser>
            <UserImg src="/images/user.jpg" alt="Logo" onClick={() => alert('Você clicou no botão de comentários!')}/>
            <Div>
                <UserName onClick={() => alert('Você clicou no botão de comentários!')}>Tarcia Mara</UserName>
                <UserData>3 dias atrás</UserData>
            </Div>
          </CardUser>
          <CardHistoria>
            <TituloHistoria onClick={() => alert('Você clicou no botão de comentários!')}>A Lenda da Árvore que Falava</TituloHistoria>
            <DivHist>
              <CardText>Em uma floresta antiga, onde os ventos sussurravam segredos ancestrais e as sombras dançavam com a luz da lua, vivia uma árvore singular. Diziam que ela era a mais velha da floresta, suas raízes se entrelaçavam com a terra há séculos</CardText><LerMais>...mais</LerMais>
            </DivHist>
          </CardHistoria>
          <Traco></Traco>
          <CardInteracao>
            <DivVC>             
                <ViewsComments>
                    200 Views
                </ViewsComments>
                <Comments onClick={() => alert('Você clicou no botão de comentários!')}>             
                    13 Comentários                 
                </Comments>                
            </DivVC>    
            <Likes onClick={() => alert('Você clicou no botão de like!')}>            
                <Like src="/images/like.webp" alt="Logo" />
                <NLikes>911</NLikes>
            </Likes>
          </CardInteracao>
        </Card>
      );
    }
    return cards;
  }
