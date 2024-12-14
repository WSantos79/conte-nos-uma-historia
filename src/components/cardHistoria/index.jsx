import { CardContainer, DivSelect, Select }  from "./styles";
import { exibirCards } from "../../service/api";
export default () => {
    return (
      <>
        <DivSelect>
          <Select name="escola">
            <option value="escola1">Top</option>
            <option value="escola2">Recentes</option>            
          </Select>
        </DivSelect>
        <CardContainer>
          {exibirCards()}
        </CardContainer>
      </>
    );
  };