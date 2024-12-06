import { CardContainer, Card, CardLogo, CardText }  from "./styles";


export default () => {
    return (
      <>
        <CardContainer>
            <Card>
                <CardLogo src="/path/to/your/logo.png" alt="Logo" />
                <CardText>Seu texto aqui</CardText>
            </Card>
            
            <Card>
                <CardLogo src="/path/to/your/logo.png" alt="Logo" />
                <CardText>Seu texto aqui</CardText>
            </Card>
        
        </CardContainer>
      </>
    );
  };