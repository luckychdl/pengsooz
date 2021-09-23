import {
  CommentTitle,
  CommentsInnerDiv,
  CommentContentsInput,
  CommentsWriteDiv,
  EnterIcon,
} from "./commentsWrite.styles";

export default function CommentsWriteUI(props: any) {
  return (
    <CommentsWriteDiv>
      <CommentTitle>댓글 작성</CommentTitle>
      <CommentsInnerDiv>
        <CommentContentsInput
          onChange={props.onChange}
          value={props.contents}
          maxLength={50}
        />
        <EnterIcon onClick={props.onClickSubmit} color={props.colorCode} />
      </CommentsInnerDiv>
    </CommentsWriteDiv>
  );
}
