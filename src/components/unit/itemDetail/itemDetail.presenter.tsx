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

import Comments from "../comments/comments.container";

export default function ItemDetailUI(props) {
  return (
    <div>
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
                  onBlur={() => props.setIsOpenTitle(false)}
                />
                <ConfirmButton onClick={() => props.setIsOpenTitle(false)}>
                  Okay
                </ConfirmButton>
              </>
            ) : (
              <DetailTitleDiv onClick={() => props.setIsOpenTitle(true)}>
                {`{ItemTitle}`} {`{ItemTitle}`} {`{ItemTitle}`} {`{ItemTitle}`}{" "}
                {`{ItemTitle}`} {`{ItemTitle}`} {`{ItemTitle}`} {`{ItemTitle}`}
                {`{ItemTitle}`}
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
                  defaultValue="ddd"
                  onBlur={() => props.setIsOpenContents(false)}
                />
                <ConfirmButton onClick={() => props.setIsOpenContents(false)}>
                  Okay
                </ConfirmButton>
              </>
            ) : (
              <DetailContentsDiv onClick={() => props.setIsOpenContents(true)}>
                {`{ItemContents}`} dddddddddddddddddddddddddddddd
                dddddddddddddddddddddddddddddd dddddddddddddddddddddddddddddd
                dddddddddddddddddddddddddddddd dddddddddddddddddddddddddddddd
                dddddddddddddddddddddddddddddd dddddddddddddddddddddddddddddd
                dddddddddddddddddddddddddddddd dddddddddddddddddddddddddddddd
                dddddddddddddddddddddddddddddd
              </DetailContentsDiv>
            )}
          </InnerDiv>
        </DetailContents>
      </Wrapper>
      <Comments />
    </div>
  );
}
