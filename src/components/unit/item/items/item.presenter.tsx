import { Wrapper, ItemContainer } from "./item.styles";

export default function ItemUI(props: any) {
  return (
    <>
      <Wrapper>
        {props.ItemData.map((data: any) => (
          <div key={data.id}>
            {data.basketId === props.basketId && (
              <ItemContainer onClick={props.onClickEnterToItemDetail(data)}>
                {/* <div style={{ backgroundColor: "green", width: "200px" }}> */}
                {data.itemTitle}
                {/* </div> */}
              </ItemContainer>
            )}
          </div>
        ))}
      </Wrapper>
    </>
  );
}
