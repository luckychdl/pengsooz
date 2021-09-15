import Basket from "../basket/basket.container";
import CreateBoard from "../../commons/modal/CustomBoard.modal";
import MenuModal from "../../commons/modal/Menu.modal";
import { Dropdown } from "antd";
import SelectModal from "../../commons/modal/Select.modal";
import {
  HeadWrapper,
  TopWrapper,
  ArrowLeftOut,
  MenuOut,
  BodyWrapper,
  RightWrapper,
  BoardTitle,
  BasketWrapper,
  BeforeBasket,
  CurrentPage,
  AfterBasket,
  BasketPageWrapper,
  Pages,
} from "./board.styles";

export default function BoardUI(props: any) {
  return (
    <div>
      {props.isOpen && (
        <CreateBoard
          buttonNameLeft="보드 수정하기"
          buttonNameRight="취소하기"
          onClickRight={props.onClickCancel}
          onClickLeft={props.onClickUpdate}
          onChangeTitle={props.onChangeTitle}
          onClickColor={props.onClickColor}
          defaultValue={props.value.data().title}
        />
      )}
      {props.isModal && (
        <SelectModal
          buttonNameLeft="예"
          buttonNameRight="아니요"
          onClickLeft={props.onClickDelete}
          onClickRight={props.onClickDeleteConfirm}
          content="정말로 삭제 하시겠습니까?"
        />
      )}
      {props.value?.data()?.title ? (
        <>
          <HeadWrapper>
            <TopWrapper>
              <ArrowLeftOut onClick={props.onClickEnterToWS} />
              <Dropdown
                overlay={
                  <MenuModal
                    buttonNameUpdate="보드 수정하기"
                    buttonNameDelete="보드 삭제하기"
                    onClickDelete={props.onClickDeleteConfirm}
                    onClickUpdate={props.onClickCreateBoardModal}
                  />
                }
                trigger={["click"]}
                placement="bottomRight"
                visible={props.isMenu}
                arrow
              >
                <MenuOut onClick={props.onClickMenu} />
              </Dropdown>
            </TopWrapper>
            <BodyWrapper>
              <RightWrapper>
                <BoardTitle>{props.value.data().title}</BoardTitle>
              </RightWrapper>
            </BodyWrapper>
          </HeadWrapper>
          <BasketWrapper>
            <BeforeBasket />
            <CurrentPage>
              <Basket boardId={props.boardId} />
            </CurrentPage>
            <AfterBasket />
          </BasketWrapper>
          <BasketPageWrapper>
            <Pages /> <Pages /> <Pages /> <Pages />
          </BasketPageWrapper>
        </>
      ) : (
        <></>
      )}
    </div>
  );
}
