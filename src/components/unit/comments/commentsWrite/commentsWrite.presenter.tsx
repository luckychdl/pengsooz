import {
  CommentTitle,
  CommentsInnerDiv,
  CommentContentsInput,
  CommentsWriteDiv,
  EnterOut,
} from "./commentsWrite.styles";

export default function CommentsWriteUI(props: any) {
  return (
    <CommentsWriteDiv>
      <CommentTitle>댓글작성</CommentTitle>
      <CommentsInnerDiv>
        <CommentContentsInput
          onChange={props.onChange}
          value={props.contents}
          maxLength={50}
        />
        <EnterOut onClick={props.onClickSubmit} />
      </CommentsInnerDiv>
    </CommentsWriteDiv>
  );
}
