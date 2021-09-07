import {
  Wrapper,
  TopWrapper,
  ArrowLeftOut,
  DetailTitle,
  Text,
  InnerDiv,
  DetailTitleInput,
  ConfirmButton,
  DetailContents,
  DetailContentsTextArea,
} from "./itemDetail.styles";

import Comments from "../comments/comments.container";

export default function ItemDetailUI(props) {
  return (
    <div>
      <Wrapper>
        <TopWrapper>
          <ArrowLeftOut onClick={props.onClickEnterToBoard} />
        </TopWrapper>
        <DetailTitle>
          <Text>제목</Text>
          <InnerDiv>
            <DetailTitleInput />
            <ConfirmButton>Okay</ConfirmButton>
          </InnerDiv>
        </DetailTitle>
        <DetailContents>
          <Text>내용</Text>
          <InnerDiv>
            <DetailContentsTextArea />
            <ConfirmButton>Okay</ConfirmButton>
          </InnerDiv>
        </DetailContents>
      </Wrapper>
      <Comments />
    </div>
  );
}
