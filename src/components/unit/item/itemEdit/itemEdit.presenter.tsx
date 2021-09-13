import {
  Wrapper,
  AddItem,
  ItemContainerEdit,
  ItemEditInput,
  ItemBtnDiv,
} from "./itemEdit.styles";

import MicroButton from "../../../commons/button/micro.Button";
import { ChangeEvent } from "react";

interface Iprops {
  onChangeItemTitle: (event: ChangeEvent<HTMLInputElement>) => void;
  onClickAddItem: () => void;
  isAdd: boolean;
  setIsAdd: any;
}

export default function ItemEditUI(props: Iprops) {
  return (
    <>
      {props.isAdd ? (
        <div>
          <Wrapper>
            <ItemContainerEdit>
              <ItemEditInput onChange={props.onChangeItemTitle} />
              <ItemBtnDiv>
                <MicroButton
                  buttonName="Cancle"
                  onClick={() => props.setIsAdd(false)}
                />
                <MicroButton
                  buttonName="Adddd"
                  onClick={props.onClickAddItem}
                />
              </ItemBtnDiv>
            </ItemContainerEdit>
          </Wrapper>
        </div>
      ) : (
        <AddItem onClick={() => props.setIsAdd(true)}>+ Add Item</AddItem>
      )}
    </>
  );
}
