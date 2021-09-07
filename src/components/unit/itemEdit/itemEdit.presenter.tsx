import {
  Wrapper,
 
  ItemContainerEdit,
  ItemEditInput,
  ItemBtnDiv,
} from "./itemEdit.styles";

import MicroButton from "../../commons/button/micro.Button";

export default function ItemEditUI(props) {
  return (
    <div>
      <Wrapper>
        <ItemContainerEdit>
          <ItemEditInput />
          <ItemBtnDiv>
            <MicroButton buttonName="Cancle" />
            <MicroButton buttonName="Add" />
          </ItemBtnDiv>
        </ItemContainerEdit>
      </Wrapper>
    </div>
  );
}
