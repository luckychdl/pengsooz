import BasketWritePage from "./basketWrite/basketWrite.container";
import { MainWrapper } from "./basket.styles";
import BasketDetailPage from "./basketDetail/basketDetail.container";
export default function BasketUI(props: any) {
  return (
    <MainWrapper>
      {props.value?.docs.map((doc: any) => (
        <BasketDetailPage key={doc.id} doc={doc} ref={props.basketDetail} />
      ))}
      <BasketWritePage basketDetail={props.basketDetail} />
    </MainWrapper>
  );
}
