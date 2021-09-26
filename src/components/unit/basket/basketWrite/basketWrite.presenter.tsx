import {
  MainWrapper,
  SubWrapper,
  AddWrapper,
  BasketCreate,
  BasketCreateInput,
  BasketCreateBtn,
  AddBasket,
  Wrapper,
} from "./basketWrite.styles";
import MicroButton from "../../../commons/button/micro.Button";
import { ChangeEvent } from "react";

interface IBasketWritePageUIProps {
  isAdd: boolean;
  colorCode: string;
  onClickAddBasket: () => void;
  onClickCreateBasket: () => void;
  onChangeAddBasket: (event: ChangeEvent<HTMLInputElement>) => void;
  inputRef: any;
}
const BasketWritePageUI = (props: IBasketWritePageUIProps) => {
  return (
    <MainWrapper>
      {props.isAdd ? (
        <SubWrapper>
          <AddWrapper>
            <BasketCreate color={props.colorCode}>
              <BasketCreateInput
                onChange={props.onChangeAddBasket}
                maxLength={10}
                ref={props.inputRef}
              />
              <BasketCreateBtn>
                <MicroButton
                  buttonName="등록하기"
                  onClick={props.onClickCreateBasket}
                />
                <MicroButton
                  buttonName="취소하기"
                  onClick={props.onClickAddBasket}
                />
              </BasketCreateBtn>
            </BasketCreate>
          </AddWrapper>
        </SubWrapper>
      ) : (
        <Wrapper>
          <AddBasket onClick={props.onClickAddBasket}>+ Add Basket</AddBasket>
        </Wrapper>
      )}
    </MainWrapper>
  );
};

export default BasketWritePageUI;
