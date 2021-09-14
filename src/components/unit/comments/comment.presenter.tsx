import CommentsDetail from "./commentsDetail/commentsDetail.container";
import CommentsWrite from "./commentsWrite/commentsWrite.container";
import { Wrapper, CommentTitle } from "./comment.styles";
import { useEffect, useRef } from "react";

export default function CommentUI(props: any) {
  const messagesEndRef = useRef<HTMLDivElement | null>(null);
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  useEffect(scrollToBottom, [props.value?.docs]);

  return (
    <>
      <CommentTitle>댓글</CommentTitle>
      <Wrapper>
        {props.error && <strong>Error: {JSON.stringify(props.error)}</strong>}
        {props.loading && <span>Collection: Loading...</span>}
        {props.value &&
          props.value.docs.map((doc: any) => (
            <>
              <div key={doc.id}>
                <CommentsDetail
                  value={doc}
                  itemId={props.itemId}
                  user={props.user}
                />
              </div>
              <div ref={messagesEndRef} />
            </>
          ))}
      </Wrapper>
      <CommentsWrite itemId={props.itemId} user={props.user} />
    </>
  );
}
