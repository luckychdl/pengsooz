import { Draggable, Droppable } from "react-beautiful-dnd";
import { Dispatch, SetStateAction } from "react";
import { Wrapper, ItemContainer } from "./item.styles";

declare const window: typeof globalThis & {
  state: number[];
  stateItem: {
    [key: string]: number[];
  };
};

interface Iprops {
  onClickEnterToItemDetail: (event: any) => () => void;
  isAdd: boolean;
  setIsAdd: Dispatch<SetStateAction<boolean>>;
  ItemData: never[];
  basketId: string;
  colorCode: string;
}

if (typeof window !== "undefined") window.stateItem = {};
export default function ItemUI(props: Iprops) {
  console.log(window.state);
  console.log(window.stateItem);
  const filteredDocs = props.ItemData.filter(
    (doc: any) => props.basketId === doc.basketId
  );
  window.stateItem = {
    aaa: [1, 2, 3, 4, 5],
  };
  return (
    <Wrapper>
      <Droppable droppableId={props.basketId} type="items">
        {(provided) => (
          <div ref={provided.innerRef}>
            {filteredDocs.map((data: any, index: number) => (
              <div key={data.itemId}>
                {data.basketId === props.basketId && (
                  <Draggable draggableId={data.itemId} index={index}>
                    {(provided) => (
                      <div
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        ref={provided.innerRef}
                      >
                        <ItemContainer
                          onClick={props.onClickEnterToItemDetail(data)}
                          color={props.colorCode}
                        >
                          {data.itemTitle}
                        </ItemContainer>
                      </div>
                    )}
                  </Draggable>
                )}
              </div>
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </Wrapper>
  );
}
