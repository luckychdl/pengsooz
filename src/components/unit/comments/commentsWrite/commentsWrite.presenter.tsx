import { ChangeEvent } from "react";
import {
  CommentTitle,
  CommentsInnerDiv,
  CommentContentsInput,
  CommentsWriteDiv,
  EnterIcon,
} from "./commentsWrite.styles";

interface ICommentsWriteUI {
  colorCode: string;
  onClickSubmit: () => Promise<void>;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  contents: string;
}

export default function CommentsWriteUI(props: ICommentsWriteUI) {
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
