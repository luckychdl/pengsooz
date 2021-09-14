import { useState } from "react";
import { dbservice } from "../../../../commons/firebase/firebase";
import CommentsWriteUI from "./commentsWrite.presenter";

export default function CommentsWrite(props: any) {
  const [contents, setContents] = useState("");

  const onChange = (event: any) => {
    setContents(event.target.value);
  };
  const onClickSubmit = async () => {
    if (!contents) {
      alert("내용을 입력해주세요");
      return;
    }
    await dbservice.collection("comments").add({
      writer: props.user?.displayName,
      uid: props.user?.uid,
      contents: contents,
      image: props.user?.photoURL,
      itemId: props.itemId,
      createdAt: new Date(),
    });
    setContents("");
  };

  return (
    <CommentsWriteUI
      onClickSubmit={onClickSubmit}
      onChange={onChange}
      contents={contents}
    />
  );
}
