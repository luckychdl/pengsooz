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
  inputRef: any;
}

export default function ItemEditUI(props: Iprops) {
  return (
    <>
      {props.isAdd ? (
        <div>
          <Wrapper>
            <ItemContainerEdit>
              <ItemEditInput
                onChange={props.onChangeItemTitle}
                maxLength={30}
                // onBlur={() => props.setIsAdd(false)}
                ref={props.inputRef}
              />
              <ItemBtnDiv>
                <MicroButton
                  buttonName="취소하기"
                  onClick={() => props.setIsAdd(false)}
                />
                <MicroButton
                  buttonName="생성하기!"
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
