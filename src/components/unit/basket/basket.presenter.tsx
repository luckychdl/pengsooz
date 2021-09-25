import BasketDetail from "./basketDetail/basketDetail.container";
import BasketWrite from "./basketWrite/basketWrite.container";
import { Wrapper } from "./basket.styles";
import { useEffect, useRef } from "react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import { dbservice } from "../../../commons/firebase/firebase";

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

  let state: number[] = [];

  const resultsRef = useRef<HTMLDivElement | null>(null);
  const scrollToLeft = () => {
    resultsRef.current?.scrollIntoView({ behavior: "smooth", inline: "start" });
  };
  useEffect(scrollToLeft, [props.loading]);

  const onDragEnd = async (result: any) => {
    const dbIdx: number[] = [0.1, ...state, state[state.length - 1] + 1];
    const { destination: dst, source: src, draggableId } = result;

    console.log("==================");
    console.log(result);
    console.log("==================");

    console.log("dbIdx", dbIdx);
    console.log(dst.index);
    console.log(src.index);
    // console.log(dbIdx[dst.index - 1]);
    // console.log(dbIdx[dst.index]);
    // console.log(dbIdx[dst.index + 1]);

    const temp =
      dst.index - src.index > 0
        ? (dbIdx[dst.index] + dbIdx[dst.index + 1]) / 2
        : (dbIdx[dst.index] + dbIdx[dst.index - 1]) / 2;

    //   const temp =
    // dst.index - src.index > 0
    //   ? (dbIdx[dst.index - 1] + dbIdx[dst.index]) / 2
    //   : (dbIdx[dst.index - 1] + dbIdx[dst.index - 2]) / 2;

    console.log(temp);

    try {
      await dbservice.collection(result.type).doc(draggableId).update({
        index: temp,
      });
    } catch (err) {}
  };

  const filteredDocs = props.value?.docs.filter(
    (doc: any) => props.boardId === doc.data().boardId
  );

  // const filteredItemDocs = props.itemValue?.docs.filter(
  // (doc: any) => doc.data().basketId === draggableId
  // );

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
              if (state.length < filteredDocs.length)
                state = [...state, doc.data().index];

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
