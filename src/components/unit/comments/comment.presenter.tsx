import CommentsDetail from "./commentsDetail/commentsDetail.container";
import CommentsWrite from "./commentsWrite/commentsWrite.container";
import { Wrapper, CommentTitle } from "./comment.styles";
export default function CommentUI(props) {
  return (
    <Wrapper>
      <CommentTitle>댓글</CommentTitle>
      {props.error && <strong>Error: {JSON.stringify(props.error)}</strong>}
      {props.loading && <span>Collection: Loading...</span>}
      {props.value &&
        props.value.docs.map((doc) => (
          <div key={doc.id}>
            <CommentsDetail value={doc} />
          </div>
        ))}
      <CommentsWrite />
    </Wrapper>
  );
}
