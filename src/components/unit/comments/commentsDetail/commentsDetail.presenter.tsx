import {
  Wrapper,
  CommentsWrapper,
  CommentsListWrapper,
  Avatar,
  CommentsInnerWrapper,
  DispalayName,
  CommentEdit,
  CommentContents,
  CommentUpdateButton,
  CommentDeleteButton,
} from "./commentsDetail.styles";

export default function CommentsDetailUi(props: any) {
  const itemId = "1";
  return (
    <Wrapper>
      <CommentsWrapper>
        {props.value.data().itemId === itemId && (
          <div key={props.value.id}>
            {props.isEdit ? (
              <CommentsListWrapper>
                <Avatar src={props.value.data().image} />
                <CommentsInnerWrapper>
                  <DispalayName> {props.value.data().writer}</DispalayName>
                  <CommentEdit
                    defaultValue={props.value.data().contents}
                    onChange={props.onChange}
                  />
                </CommentsInnerWrapper>
                <CommentUpdateButton
                  onClick={props.onClickUpdate(props.value.id)}
                />
              </CommentsListWrapper>
            ) : (
              <CommentsListWrapper>
                <Avatar src={props.value.data().image} />
                <CommentsInnerWrapper>
                  <DispalayName> {props.value.data().writer}</DispalayName>
                  <CommentContents>
                    {props.value.data().contents}
                  </CommentContents>
                </CommentsInnerWrapper>
                <CommentUpdateButton onClick={props.onClickSwitchEdit} />
                <CommentDeleteButton
                  onClick={props.onClickDelete(props.value.id)}
                />
              </CommentsListWrapper>
            )}
          </div>
        )}
      </CommentsWrapper>
    </Wrapper>
  );
}
