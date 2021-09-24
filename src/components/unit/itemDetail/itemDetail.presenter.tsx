import {
  Wrapper,
  IconWrapper,
  ArrowLeftIcon,
  DeleteIcon,
  TitleWrapper,
  Text,
  DetailTitleInput,
  DetailTitleDiv,
  ConfirmTitleButton,
  ContentWrapper,
  DetailContentsTextArea,
  DetailContentsDiv,
  ConfirmContentButton,
} from "./itemDetail.styles";
import Comments from "../comments/comment.container";
import Select from "../../commons/modal/Select.modal";

export default function ItemDetailUI(props: any) {
  const colorCode = props.value?.data()?.colorCode;
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
      <Wrapper color={`/images/${colorCode?.slice(1).concat(".jpeg")}`}>
        <IconWrapper>
          <ArrowLeftIcon onClick={props.onClickEnterToBoard} />
          <DeleteIcon onClick={() => props.setIsOpenModal(true)} />
        </IconWrapper>
        <TitleWrapper>
          <Text>제목</Text>
          {props.isOpenTitle ? (
            <>
              <DetailTitleInput
                defaultValue={props.itemData?.itemTitle}
                onChange={props.onChangeItemTitle}
                ref={props.inputRef}
                maxLength={22}
              />
              <ConfirmTitleButton onClick={props.updateItemTitle}>
                Okay
              </ConfirmTitleButton>
            </>
          ) : (
            <DetailTitleDiv onClick={props.onClickItemTitle}>
              {props.itemData?.itemTitle}
            </DetailTitleDiv>
          )}
        </TitleWrapper>
        <ContentWrapper>
          <Text>내용</Text>
          {props.isOpenContents ? (
            <>
              <DetailContentsTextArea
                placeholder="상세내용을 입력해주세요."
                defaultValue={props.itemData?.itemContents}
                ref={props.inputRef}
                onChange={props.onChangeItemContents}
              />
              <ConfirmContentButton onClick={props.updateItemContents}>
                Okay
              </ConfirmContentButton>
            </>
          ) : (
            <DetailContentsDiv
              onClick={props.onClickItemContents}
              defaultValue={props.ItemContents}
              readOnly
            />
          )}
        </ContentWrapper>
        <Comments />
      </Wrapper>
    </div>
  );
}
