import MenuModal from "../../../commons/modal/Menu.modal";
import Item from "../../item/item";
import {
  SubWrapper,
  BasketTitle,
  Wrapper,
  DetailWrapper,
  BasketMenu,
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
  isMenu: any;
  updateTitle: string;
  setIsMenu: any;
  boardId: string;
  messagesRef: any;
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
      {props.boardId === props.doc.data().boardId && (
        <SubWrapper ref={props.messagesRef}>
          <Wrapper>
            {props.isUpdate ? (
              <SubWrapper>
                <AddWrapper>
                  <BasketContainerEdit>
                    <BasketEditInput
                      onChange={props.onChangeUpdateTitle}
                      defaultValue={props.doc.data().title}
                      maxLength={10}
                    />
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
                  overlayStyle={{ paddingTop: "10px" }}
                  overlay={
                    <MenuModal
                      buttonNameTop="바스켓 수정하기"
                      buttonNameBottom="바스켓 삭제하기"
                      onClickTop={props.onClickBasketUpdate}
                      onClickBottom={props.onClickDeleteComfirm}
                    />
                  }
                  trigger={["click"]}
                  placement="bottomRight"
                  visible={props.isMenu}
                >
                  <BasketMenu onClick={props.onClickMenu}>...</BasketMenu>
                </Dropdown>
              </DetailWrapper>
            )}
            <Item basketId={props.doc.data().basketId} />
          </Wrapper>
        </SubWrapper>
      )}
    </>
  );
};

export default BasketDetailPageUI;
