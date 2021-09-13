import Basket from "../basket/basket.container";
// import { ArrowLeftOutlined, MenuOutlined } from "@ant-design/icons";
import SmallButton from "../../commons/button/small.Button";
import CreateBoard from "../../commons/modal/createBoard.Modal";
import MenuModal from "../../commons/modal/menu.Modal";
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
      {props.isOpen && <CreateBoard setIsOpen={props.setIsOpen} />}
      <HeadWrapper>
        <TopWrapper>
          <ArrowLeftOut onClick={props.onClickEnterToWS} />
          <Dropdown
            overlay={MenuModal}
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
