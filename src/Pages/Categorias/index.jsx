import { DivSelect, Select } from "./styles";
import CardHistoria from "../../components/cardHistoria";

export default () => {
    return (
      <>
        <DivSelect>
          <Select name="escola">
            <option value="escola1">Top</option>
            <option value="escola2">Recentes</option>            
          </Select>
        </DivSelect>
        <CardHistoria/>
      </>
    );
  };
  