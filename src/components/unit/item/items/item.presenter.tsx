import { Draggable, Droppable } from "react-beautiful-dnd";
import { Dispatch, SetStateAction } from "react";
import { Wrapper, ItemContainer } from "./item.styles";

interface Iprops {
  onClickEnterToItemDetail: (event: any) => () => void;
  isAdd: boolean;
  setIsAdd: Dispatch<SetStateAction<boolean>>;
  ItemData: never[];
  basketId: string;
  colorCode: string;
}

export default function ItemUI(props: Iprops) {
  return (
    <Wrapper>
      <Droppable droppableId={props.basketId} type="items">
        {(provided) => (
          <div ref={provided.innerRef}>
            {props.ItemData.map((data: any, index: number) => (
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
