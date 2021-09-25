import { ChangeEvent, useEffect, useRef, useState } from "react";
import ItemEditUI from "./itemEdit.presenter";
import firebase, { dbservice } from "../../../../commons/firebase/firebase";
import { Modal } from "antd";
import { useRouter } from "next/router";
import { useDocument } from "react-firebase-hooks/firestore";

interface Iprops {
  basketId: string;
}

export default function ItemEdit(props: Iprops) {
  const [isAdd, setIsAdd] = useState(false);
  const [ItemTitle, setItemTitle] = useState("");
  const router = useRouter();
  const boardId = router.query.boardId;
  const [value] = useDocument(dbservice.doc(`boards/${boardId}`), {
    snapshotListenOptions: { includeMetadataChanges: true },
  });

  const inputRef = useRef<HTMLInputElement>(null);
  useEffect(() => {
    inputRef.current?.focus();
  });

  const onClickAddItem = () => {
    if (ItemTitle === "") {
      Modal.error({ content: "내용을 입력해주세요." });

      return;
    }

    const itemId = firebase.firestore().collection("itme").doc().id;
    const data = {
      itemTitle: ItemTitle,
      createdAt: new Date(),
      itemId: itemId,
      itemContents: "",
      basketId: props.basketId,
      isAlive: true,
    };

    firebase.firestore().collection("item").doc(itemId).set(data);
    setIsAdd(false);
    setItemTitle("");
  };

  const onChangeItemTitle = (event: ChangeEvent<HTMLInputElement>) => {
    setItemTitle(event.target.value);
  };

  return (
    <div>
      <ItemEditUI
        colorCode={value?.data()?.colorCode}
        onChangeItemTitle={onChangeItemTitle}
        onClickAddItem={onClickAddItem}
        isAdd={isAdd}
        setIsAdd={setIsAdd}
        inputRef={inputRef}
      />
    </div>
  );
}
