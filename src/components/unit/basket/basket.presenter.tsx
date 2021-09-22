import BasketDetail from "./basketDetail/basketDetail.container";
import BasketWrite from "./basketWrite/basketWrite.container";
import { Wrapper } from "./basket.styles";
import { useEffect, useRef } from "react";

export default function BasketUI(props: any) {
  const messagesEndRef = useRef<HTMLDivElement | null>(null);
  const messagesEndPrevRef = useRef<HTMLDivElement | null>(null);
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({
      behavior: "smooth",
    });
    messagesEndPrevRef.current?.scrollIntoView({
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
    <Wrapper>
      <div ref={resultsRef} />
      {props.value?.docs.map((doc: any, index: number) => {
        const isPrev = props.value?.docs.length - 1 === index;
        return (
          <>
            <BasketDetail
              key={doc.id}
              doc={doc}
              messagesRef={isPrev ? messagesEndPrevRef : messagesEndRef}
              boardId={props.boardId}
              onClickBasketUpdate={props.onClickBasketUpdate}
              scrollToBottom={scrollToBottom}
            />
          </>
        );
      })}
      <BasketWrite messagesEndRef={messagesEndRef} />
    </Wrapper>
  );
}
