import CommentsDetail from "./commentsDetail/commentsDetail.container";
import CommentsWrite from "./commentsWrite/commentsWrite.container";
import { Wrapper, CommentTitle } from "./comment.styles";
import { Key } from "react";
export default function CommentUI(props: any) {
  return (
    <>
      <CommentTitle>댓글</CommentTitle>
      <Wrapper>
        {props.error && <strong>Error: {JSON.stringify(props.error)}</strong>}
        {props.loading && <span>Collection: Loading...</span>}
        {props.value &&
          props.value.docs.map((doc: { id: Key | null | undefined }) => (
            <div key={doc.id}>
              <CommentsDetail
                value={doc}
                itemId={props.itemId}
                user={props.user}
              />
            </div>
          ))}
      </Wrapper>
      <CommentsWrite itemId={props.itemId} user={props.user} />
    </>
  );
}
