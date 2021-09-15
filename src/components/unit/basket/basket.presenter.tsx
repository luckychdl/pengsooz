import BasketWritePage from "./basketWrite/basketWrite.container";
import { MainWrapper } from "./basket.styles";
import BasketDetailPage from "./basketDetail/basketDetail.container";
import { useEffect, useRef } from "react";
export default function BasketUI(props: any) {
  const messagesEndRef = useRef<HTMLDivElement | null>(null);
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  };
  useEffect(scrollToBottom, [props.value]);

  const resultsRef = useRef<HTMLDivElement | null>(null);
  const scrollToLeft = () => {
    resultsRef.current?.scrollIntoView({ behavior: "smooth", inline: "start" });
  };
  useEffect(scrollToLeft, [props.loading]);
  return (
    <MainWrapper>
      <div ref={resultsRef} />
      {props.value?.docs.map((doc: any) => (
        <>
          <BasketDetailPage
            key={doc.id}
            doc={doc}
            messagesEndRef={messagesEndRef}
            boardId={props.boardId}
            onClickBasketUpdate={props.onClickBasketUpdate}
            scrollToBottom={scrollToBottom}
          />
        </>
      ))}
      <BasketWritePage messagesEndRef={messagesEndRef} />
    </MainWrapper>
  );
}
