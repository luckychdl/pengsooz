import BasketWritePage from "./basketWrite/basketWrite.container";
import { MainWrapper } from "./basket.styles";
import BasketDetailPage from "./basketDetail/basketDetail.container";
import { useEffect, useRef } from "react";
export default function BasketUI(props: any) {
  const messagesEndRef = useRef<HTMLDivElement | null>(null);
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    props.setIsSwitch(false);
  };
  useEffect(scrollToBottom, [props.isSwitch]);
  const resultsRef = useRef<HTMLDivElement | null>(null);
  const scrollToLeft = () => {
    resultsRef.current?.scrollIntoView({ behavior: "smooth", inline: "start" });
  };
  useEffect(scrollToLeft, [props.loading]);
  return (
    <MainWrapper>
      <div ref={resultsRef} />
      {props.value?.docs.map((doc: any) => (
        <BasketDetailPage
          key={doc.id}
          doc={doc}
          messagesEndRef={messagesEndRef}
          isSwitch={props.isSwitch}
          setIsSwitch={props.setIsSwitch}
          boardId={props.boardId}
          onClickBasketUpdate={props.onClickBasketUpdate}
        />
      ))}
      <BasketWritePage
        isSwitch={props.isSwitch}
        setIsSwitch={props.setIsSwitch}
      />
    </MainWrapper>
  );
}
