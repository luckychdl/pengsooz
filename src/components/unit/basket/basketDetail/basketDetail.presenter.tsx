import Item from "../../item/item.container";
import {
  SubWrapper,
  BasketTitle,
  Wrapper,
  AddBasket,
} from "./basketDetail.styles";
const BasketDetailPageUI = (props) => {
  return (
    <>
      <div style={{ width: "60px", backgroundColor: "aqua", color: "aqua" }}>
        asd
      </div>

      <SubWrapper>
        <Wrapper>
          <BasketTitle>{props.doc.data().title}</BasketTitle>
          <Item />
          <AddBasket>+ Add item</AddBasket>
        </Wrapper>
      </SubWrapper>
    </>
  );
};

export default BasketDetailPageUI;
