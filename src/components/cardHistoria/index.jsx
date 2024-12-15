import { CardContainer }  from "./styles";
import { exibirCards } from "../../service/api";

export default () => {
    return (
      <>
        <CardContainer>
          {exibirCards()}
        </CardContainer>
      </>
    );
  };