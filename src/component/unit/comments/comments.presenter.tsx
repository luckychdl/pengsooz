import {
  Wrapper,
  CommentTitle,
  CommentsListDiv,
  Avater,
  CommentsInnerWrapper,
  CommentsInnerDiv,
  DispalayName,
  CommentConTentsInput,
  CommentUpdataButton,
  CommentsWriteDiv,
  EnterOut,
} from "./comments.styles";

export default function CommentsUI() {
  return (
    <>
      <Wrapper>
        <CommentTitle>댓글</CommentTitle>
        <div style={{ overflow: "auto", height: "224px" }}>
          <CommentsListDiv>
            <Avater />
            <CommentsInnerWrapper>
              <DispalayName>고라니</DispalayName>
              <CommentsInnerDiv>
                <CommentConTentsInput />
                <CommentUpdataButton />
              </CommentsInnerDiv>
            </CommentsInnerWrapper>
          </CommentsListDiv>
          <CommentsListDiv>
            <Avater />
            <CommentsInnerWrapper>
              <DispalayName>고라니</DispalayName>
              <CommentsInnerDiv>
                <CommentConTentsInput />
                <CommentUpdataButton />
              </CommentsInnerDiv>
            </CommentsInnerWrapper>
          </CommentsListDiv>
          <CommentsListDiv>
            <Avater />
            <CommentsInnerWrapper>
              <DispalayName>고라니</DispalayName>
              <CommentsInnerDiv>
                <CommentConTentsInput />
                <CommentUpdataButton />
              </CommentsInnerDiv>
            </CommentsInnerWrapper>
          </CommentsListDiv>
          <CommentsListDiv>
            <Avater />
            <CommentsInnerWrapper>
              <DispalayName>고라니</DispalayName>
              <CommentsInnerDiv>
                <CommentConTentsInput />
                <CommentUpdataButton />
              </CommentsInnerDiv>
            </CommentsInnerWrapper>
          </CommentsListDiv>
          <CommentsListDiv>
            <Avater />
            <CommentsInnerWrapper>
              <DispalayName>고라니</DispalayName>
              <CommentsInnerDiv>
                <CommentConTentsInput />
                <CommentUpdataButton />
              </CommentsInnerDiv>
            </CommentsInnerWrapper>
          </CommentsListDiv>
          <CommentsListDiv>
            <Avater />
            <CommentsInnerWrapper>
              <DispalayName>고라니</DispalayName>
              <CommentsInnerDiv>
                <CommentConTentsInput />
                <CommentUpdataButton />
              </CommentsInnerDiv>
            </CommentsInnerWrapper>
          </CommentsListDiv>
          <CommentsListDiv>
            <Avater />
            <CommentsInnerWrapper>
              <DispalayName>고라니</DispalayName>
              <CommentsInnerDiv>
                <CommentConTentsInput />
                <CommentUpdataButton />
              </CommentsInnerDiv>
            </CommentsInnerWrapper>
          </CommentsListDiv>
        </div>
      </Wrapper>

      <CommentsWriteDiv>
        <CommentTitle>댓글작성</CommentTitle>
        <CommentsInnerDiv>
          <CommentConTentsInput />
          <EnterOut />
        </CommentsInnerDiv>
      </CommentsWriteDiv>
    </>
  );
}
