import { Dispatch, SetStateAction } from "react";
import { Wrapper, ItemContainer } from "./item.styles";

interface Iprops {
  onClickEnterToItemDetail: (event: any) => () => void;
  isAdd: boolean;
  setIsAdd: Dispatch<SetStateAction<boolean>>;
  ItemData: never[];
  basketId: string;
  colorCode: string;
}

export default function ItemUI(props: Iprops) {
  return (
    <Wrapper>
      {props.ItemData.map((data: any) => (
        <div key={data.id}>
          {data.basketId === props.basketId && (
            <ItemContainer
              onClick={props.onClickEnterToItemDetail(data)}
              color={props.colorCode}
            >
              {data.itemTitle}
            </ItemContainer>
          )}
        </div>
      ))}
    </Wrapper>
  );
}
