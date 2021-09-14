import MenuModal from "../../../commons/modal/Menu.modal";
import Item from "../../item/item";
import {
  SubWrapper,
  BasketTitle,
  Wrapper,
  DetailWrapper,
  ShowDetail,
  AlignWrapper,
  AddWrapper,
  BasketContainerEdit,
  BasketEditInput,
  BasketBtnDiv,
} from "./basketDetail.styles";
import MicroButton from "../../../commons/button/micro.Button";
import { Dropdown } from "antd";
import SelectModal from "../../../commons/modal/Select.modal";
import { ChangeEvent } from "react";
interface IBasketDetailPageUI {
  isModal: boolean;
  isUpdate: boolean;
  doc: any;
  isMenu: boolean;
  onClickLeft: () => void;
  onClickRight: () => void;
  onClickCancel: () => void;
  onClickUpdate: () => void;
  onClickMenu: () => void;
  onClickBasketUpdate: () => void;
  onClickDeleteComfirm: () => void;
  onChangeUpdateTitle: (event: ChangeEvent<HTMLInputElement>) => void;
}
const BasketDetailPageUI = (props: IBasketDetailPageUI) => {
  return (
    <>
      <div style={{ width: "60px", backgroundColor: "aqua", color: "aqua" }}>
        asd
      </div>
      {props.isModal && (
        <SelectModal
          buttonNameLeft="예"
          buttonNameRight="아니요"
          onClickLeft={props.onClickLeft}
          onClickRight={props.onClickRight}
          content="정말로 삭제 하시겠습니까?"
        />
      )}
      <SubWrapper>
        <Wrapper>
          {props.isUpdate ? (
            <SubWrapper>
              <AddWrapper>
                <BasketContainerEdit>
                  <BasketEditInput onChange={props.onChangeUpdateTitle} />
                  <BasketBtnDiv>
                    <MicroButton
                      buttonName="취소하기"
                      onClick={props.onClickCancel}
                    />
                    <MicroButton
                      buttonName="수정하기"
                      onClick={props.onClickUpdate}
                    />
                  </BasketBtnDiv>
                </BasketContainerEdit>
              </AddWrapper>
            </SubWrapper>
          ) : (
            <DetailWrapper>
              <AlignWrapper>
                <BasketTitle>{props.doc.data().title}</BasketTitle>
              </AlignWrapper>

              <Dropdown
                overlay={
                  <MenuModal
                    buttonNameUpdate="바스켓 수정하기"
                    onClickUpdate={props.onClickBasketUpdate}
                    onClickDelete={props.onClickDeleteComfirm}
                    buttonNameDelete="바스켓 삭제하기"
                  />
                }
                trigger={["click"]}
                placement="bottomRight"
                visible={props.isMenu}
                arrow
              >
                <ShowDetail onClick={props.onClickMenu}>...</ShowDetail>
              </Dropdown>
            </DetailWrapper>
          )}
          <Item basketId={props.doc.data().basketId} />
        </Wrapper>
      </SubWrapper>
    </>
  );
};

export default BasketDetailPageUI;
