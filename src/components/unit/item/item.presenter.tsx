import { Wrapper, ItemContainer } from "./item.styles";

export default function ItemUI(props) {
  return (
    <div>
      <Wrapper>
        <ItemContainer onClick={props.onClickEnterToItemDetail}>
          1. 아이템 디테일
        </ItemContainer>
      </Wrapper>
    </div>
  );
}
