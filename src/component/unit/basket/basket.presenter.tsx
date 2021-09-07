import { Wrapper, BasketTitle, AddBasket } from "./basket.styles";

import Item from "../item/item.container";
import ItemEdit from "../itemEdit/itemEdit.container";

export default function BasketUI() {
  return (
    <div>
      <Wrapper>
        <BasketTitle>예정 사항</BasketTitle>
        <Item />
        <Item />
        <Item />
        <Item />
        <Item /> <Item /> <Item /> <Item /> <Item /> <Item /> <Item /> <Item />{" "}
        <Item />
        <ItemEdit />
        <AddBasket>+ Add Item</AddBasket>
      </Wrapper>
    </div>
  );
}
