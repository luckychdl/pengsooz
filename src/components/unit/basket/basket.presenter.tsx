import BasketDetail from "./basketDetail/basketDetail.container";
import BasketWrite from "./basketWrite/basketWrite.container";
import { Wrapper } from "./basket.styles";
import { useEffect, useRef } from "react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import { dbservice } from "../../../commons/firebase/firebase";

declare const window: typeof globalThis & {
  state: number[];
  stateItem: {
    [key: string]: number[];
  };
};

if (typeof window !== "undefined") window.state = [];
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

  const onDragEnd = async (result: any) => {
    console.log("hi~");
    console.log(window.stateItem);
    console.log("hi~");
    if (result.type === "basket") {
      const state = window.state;
      const dbIdx: number[] = [0.1, ...state, state[state.length - 1] + 1];
      const { destination: dst, source: src, draggableId } = result;
      const temp =
        dst.index - src.index > 0
          ? (dbIdx[dst.index] + dbIdx[dst.index + 1]) / 2
          : (dbIdx[dst.index] + dbIdx[dst.index - 1]) / 2;

      try {
        await dbservice.collection(result.type).doc(draggableId).update({
          index: temp,
        });
      } catch (err) {
        console.log(err);
      }
      console.log(state);
    }
  };

  const filteredDocs = props.value?.docs.filter(
    (doc: any) => props.boardId === doc.data().boardId
  );

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable
        droppableId={props.boardId}
        direction={"horizontal"}
        type="basket"
      >
        {(provided) => (
          <Wrapper ref={provided.innerRef}>
            <div ref={resultsRef} />
            {filteredDocs?.map((doc: any, index: number) => {
              if (window.state.length < filteredDocs.length)
                window.state = [...window.state, doc.data().index];

              const isPrev = props.value?.docs.length - 1 === index;
              return (
                <Draggable
                  draggableId={doc.data().basketId}
                  index={index + 1}
                  key={doc.data().basketId + index}
                >
                  {(provided) => (
                    <div
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      ref={provided.innerRef}
                    >
                      <BasketDetail
                        doc={doc}
                        messagesRef={
                          isPrev ? messagesEndPrevRef : messagesEndRef
                        }
                        boardId={props.boardId}
                        onClickBasketUpdate={props.onClickBasketUpdate}
                        scrollToBottom={scrollToBottom}
                      />
                    </div>
                  )}
                </Draggable>
              );
            })}
            {provided.placeholder}
            <BasketWrite messagesEndRef={messagesEndRef} />
          </Wrapper>
        )}
      </Droppable>
    </DragDropContext>
  );
}
