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
  return (
    <Wrapper>
      <CommentsWrapper>
        {props.value.data().itemId === props.itemId && (
          <div key={props.value.id}>
            {props.isEdit ? (
              <CommentsListWrapper>
                <Avatar src={props.value.data().image} />
                <CommentsInnerWrapper>
                  <DispalayName> {props.value.data().writer}</DispalayName>
                  <CommentEdit
                    defaultValue={props.value.data().contents}
                    onChange={props.onChange}
                    maxLength={50}
                    color={props.colorCode}
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
                  <CommentContents color={props.colorCode}>
                    {props.value.data().contents}
                  </CommentContents>
                </CommentsInnerWrapper>
                {props.value.data().uid === props.user.uid ? (
                  <>
                    <CommentUpdateButton onClick={props.onClickSwitchEdit} />
                    <CommentDeleteButton
                      onClick={props.onClickDelete(props.value.id)}
                    />
                  </>
                ) : (
                  <></>
                )}
              </CommentsListWrapper>
            )}
          </div>
        )}
      </CommentsWrapper>
    </Wrapper>
  );
}
