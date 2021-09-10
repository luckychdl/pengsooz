import {
  Wrapper,
  CommentTitle,
  CommentsListDiv,
  Avater,
  CommentsInnerWrapper,
  CommentsInnerDiv,
  DispalayName,
  CommentContents,
  CommentUpdataButton,
} from "./commentsDetail.styles";

export default function CommentsDetailUi(props) {
  const basketId = "1";
  return (
    <Wrapper>
      <CommentTitle>댓글</CommentTitle>

      <div>
        {props.error && <strong>Error: {JSON.stringify(props.error)}</strong>}
        {props.loading && <span>Collection: Loading...</span>}
        {props.value && (
          <>
            {props.value.docs.map(
              (doc) =>
                doc.data().basketId === basketId && (
                  <div key={doc.id}>
                    <CommentsListDiv>
                      <Avater src={doc.data().image} />
                      <CommentsInnerWrapper>
                        <DispalayName> {doc.data().writer}</DispalayName>
                        <CommentsInnerDiv>
                          <CommentContents>
                            {doc.data().contents}
                          </CommentContents>
                          <CommentUpdataButton />
                        </CommentsInnerDiv>
                      </CommentsInnerWrapper>
                    </CommentsListDiv>
                  </div>
                )
            )}
          </>
        )}
      </div>
    </Wrapper>
  );
}
