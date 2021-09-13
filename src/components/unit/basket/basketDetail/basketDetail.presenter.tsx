import Items from "../../item/item";
import { SubWrapper, BasketTitle, Wrapper } from "./basketDetail.styles";
const BasketDetailPageUI = (props: any) => {
  return (
    <>
      <div style={{ width: "60px", backgroundColor: "aqua", color: "aqua" }}>
        asd
      </div>

      <SubWrapper>
        <Wrapper>
          <BasketTitle>{props.doc.data().title}</BasketTitle>
          <Items basketId={props.doc.data().basketId} />
        </Wrapper>
      </SubWrapper>
    </>
  );
};

export default BasketDetailPageUI;
