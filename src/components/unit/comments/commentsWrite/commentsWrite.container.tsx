import { useState } from "react";
import firebase, { dbservice } from "../../../../commons/firebase/firebase";
import CommentsWriteUI from "./commentsWrite.presenter";
import { useAuthState } from "react-firebase-hooks/auth";

export default function CommentsWrite() {
  const [contents, setContents] = useState("");
  const [image, setImage] = useState("");
  const [name, setName] = useState("");
  const [user] = useAuthState(firebase.auth());

  const onClickSubmit = async () => {
    setImage(user?.photoURL || "");
    setName(user?.displayName || "");
    if (!contents) {
      alert("내용을 입력해주세요");
      return;
    }
    await dbservice.collection("comments").add({
      writer: name,
      contents: contents,
      image: image,
      itemId: "1",
    });
  };

  const onChange = (event: any) => {
    setContents(event.target.value);
  };

  return <CommentsWriteUI onClickSubmit={onClickSubmit} onChange={onChange} />;
}
