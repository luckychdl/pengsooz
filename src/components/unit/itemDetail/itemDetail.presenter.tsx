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
} from "./itemDetail.styles";
import Comments from "../comments/comment.container";

export default function ItemDetailUI(props) {
  return (
    <div style={{ height: "640px" }}>
      <Wrapper>
        <TopWrapper>
          <ArrowLeftOut onClick={() => props.setIsOpenTitle(false)} />
        </TopWrapper>
        <DetailTitle>
          <Text>제목</Text>

          <InnerDiv>
            {props.isOpenTitle ? (
              <>
                <DetailTitleInput
                  defaultValue="ddd"
                  // onBlur={() => props.setIsOpenTitle(false)}
                  onChange={props.onChangeItemTitle}
                  ref={props.inputRef}
                />
                <ConfirmButton onClick={props.updateItemTitle}>
                  Okay
                </ConfirmButton>
              </>
            ) : (
              <DetailTitleDiv onClick={() => props.setIsOpenTitle(true)}>
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
                  // onBlur={() => props.setIsOpenContents(false)}
                  ref={props.inputRef}
                  onChange={props.onChangeItemContents}
                />
                <ConfirmButton onClick={props.updateItemContents}>
                  Okay
                </ConfirmButton>
              </>
            ) : (
              <DetailContentsDiv onClick={() => props.setIsOpenContents(true)}>
                {props.itemData.itemContents}
              </DetailContentsDiv>
            )}
          </InnerDiv>
        </DetailContents>
      </Wrapper>
      <Comments />
    </div>
  );
}
