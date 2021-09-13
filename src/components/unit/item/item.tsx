import Items from "./items/item.container";
import ItemEdit from "./itemEdit/itemEdit.container";

export default function Item(props) {
  return (
    <>
      <Items basketId={props.basketId} />
      <ItemEdit basketId={props.basketId} />
    </>
  );
}
