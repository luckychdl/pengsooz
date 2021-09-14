import Basket from "../basket/basket.container";
import SmallButton from "../../commons/button/small.Button";
import CreateBoard from "../../commons/modal/CustomBoard.modal";
import MenuModal from "../../commons/modal/Menu.modal";
import { Dropdown } from "antd";

import {
  HeadWrapper,
  TopWrapper,
  ArrowLeftOut,
  MenuOut,
  BodyWrapper,
  BoardBoxImg,
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
        />
      )}
      <HeadWrapper>
        <TopWrapper>
          <ArrowLeftOut onClick={props.onClickEnterToWS} />
          <Dropdown
            overlay={
              <MenuModal
                buttonNameUpdate="보드 수정하기"
                buttonNameDelete="보드 삭제하기"
              />
            }
            trigger={["click"]}
            placement="bottomRight"
          >
            <MenuOut />
          </Dropdown>
        </TopWrapper>
        <BodyWrapper>
          <BoardBoxImg></BoardBoxImg>
          <RightWrapper>
            <BoardTitle>코로나 예방활동</BoardTitle>
            <SmallButton
              buttonName="보드 정보 수정"
              onClick={props.onClickCreateBoardModal}
            />
          </RightWrapper>
        </BodyWrapper>
      </HeadWrapper>
      <BasketWrapper>
        <BeforeBasket />
        <CurrentPage>
          <Basket />
        </CurrentPage>
        <AfterBasket />
      </BasketWrapper>
      <BasketPageWrapper>
        <Pages /> <Pages /> <Pages /> <Pages />
      </BasketPageWrapper>
    </div>
  );
}
