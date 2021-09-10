import {
  CommentTitle,
  CommentsInnerDiv,
  CommentConTentsInput,
  CommentsWriteDiv,
  EnterOut,
} from "./commentsWrite.styles";

export default function CommentsWriteUI(props) {
  return (
    <CommentsWriteDiv>
      <CommentTitle>댓글작성</CommentTitle>
      <CommentsInnerDiv>
        <CommentConTentsInput onChange={props.onChange} />
        <EnterOut />
      </CommentsInnerDiv>
      <div onClick={props.onClickSubmit}>클릭</div>
    </CommentsWriteDiv>
  );
}
