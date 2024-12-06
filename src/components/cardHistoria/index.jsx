import { CardContainer, Card, CardLogo, CardText }  from "./styles";
import { exibirCards, teste } from "../../service/api";
export default () => {
    return (
      <>
        <CardContainer>
          {exibirCards()}
            
           
        </CardContainer>
      </>
    );
  };