import { Wrapper, ItemContainer } from "./item.styles";

export default function ItemUI(props: any) {
  return (
    <div>
      <Wrapper>
        {props.ItemData.map((data: any) => (
          <div key={data.id}>
            <ItemContainer onClick={props.onClickEnterToItemDetail(data)}>
              {data.itemTitle}
            </ItemContainer>
          </div>
        ))}
      </Wrapper>
    </div>
  );
}
