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
    setImage(user?.photoURL);
    setName(user.displayName);
    await dbservice.collection("comments").add({
      writer: name,
      contents: contents,
      image: image,
      basketId: "1",
    });
  };

  const onChange = (event) => {
    setContents(event.target.value);
  };
  console.log(firebase.auth());
  return <CommentsWriteUI onClickSubmit={onClickSubmit} onChange={onChange} />;
}
