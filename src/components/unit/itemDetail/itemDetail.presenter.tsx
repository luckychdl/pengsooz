import {
  Wrapper,
  TopWrapper,
  ArrowLeftOut,
  DetailTitle,
  Text,
  InnerDiv,
  DetailTitleInput,
  DetailTitleDiv,
  ConfirmButton,
  DetailContents,
  DetailContentsTextArea,
  DetailContentsDiv,
  DeleteOut,
} from "./itemDetail.styles";
import Comments from "../comments/comment.container";
import Select from "../../commons/modal/Select.modal";

export default function ItemDetailUI(props: any) {
  return (
    <div>
      {props.isOpenModal && (
        <Select
          content="아이템을 삭제하시겠습니까?"
          buttonNameLeft="예!"
          buttonNameRight="아니요?"
          onClickLeft={props.onClickDeleteItem}
          onClickRight={() => props.setIsOpenModal(false)}
        />
      )}

      <Wrapper>
        <TopWrapper>
          <ArrowLeftOut onClick={props.onClickEnterToBoard} />
          <DeleteOut onClick={() => props.setIsOpenModal(true)} />
        </TopWrapper>
        <DetailTitle>
          <Text>제목</Text>

          <InnerDiv>
            {props.isOpenTitle ? (
              <>
                <DetailTitleInput
                  defaultValue={props.itemData.itemTitle}
                  onChange={props.onChangeItemTitle}
                  ref={props.inputRef}
                />
                <ConfirmButton onClick={props.updateItemTitle}>
                  Okay
                </ConfirmButton>
              </>
            ) : (
              <DetailTitleDiv onClick={props.onClickItemTitel}>
                {props.itemData.itemTitle}
              </DetailTitleDiv>
            )}
          </InnerDiv>
        </DetailTitle>
        <DetailContents>
          <Text>내용</Text>
          <InnerDiv>
            {props.isOpenContents ? (
              <>
                <DetailContentsTextArea
                  placeholder={props.itemData.itemContents}
                  defaultValue={props.itemData.itemContents}
                  ref={props.inputRef}
                  onChange={props.onChangeItemContents}
                />
                <ConfirmButton onClick={props.updateItemContents}>
                  Okay
                </ConfirmButton>
              </>
            ) : (
              <DetailContentsDiv onClick={props.onClickItemContents}>
                {props.itemData.itemContents}
              </DetailContentsDiv>
            )}
          </InnerDiv>
        </DetailContents>
        <Comments />
      </Wrapper>
    </div>
  );
}
