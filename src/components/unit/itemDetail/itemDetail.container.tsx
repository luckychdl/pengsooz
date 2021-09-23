import ItemDetailUI from "./itemDetail.presenter";
import { useRouter } from "next/router";
import { ChangeEvent, useEffect, useRef, useState } from "react";
import firebase, { dbservice } from "../../../commons/firebase/firebase";
import { Modal } from "antd";
import { useDocument } from "react-firebase-hooks/firestore";

export default function ItemDetail() {
  const router = useRouter();
  const boardId = router.query.boardId;
  const [value] = useDocument(dbservice.doc(`boards/${boardId}`), {
    snapshotListenOptions: { includeMetadataChanges: true },
  });
  const [itemData, setItemData] = useState({ isAlive: true });
  const [isOpenTitle, setIsOpenTitle] = useState(false);
  const [isOpenContents, setIsOpenContents] = useState(false);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [ItemTitle, setItemTitle] = useState("");
  const [ItemContents, setItemContents] = useState("");
  const itemId: any = router.query.itemDetail;

  const inputRef = useRef<HTMLInputElement>(null);
  useEffect(() => {
    inputRef.current?.focus();
  });

  useEffect(() => {
    if (itemData?.isAlive === false) {
      router.push(`/workspace/${boardId}`);
    }
  }, [itemData?.isAlive]);

  useEffect(() => {
    async function getItemData() {
      firebase
        .firestore()
        .collection("item")
        .doc(String(itemId))
        .onSnapshot((result: any) => {
          setItemData(result.data());
          setItemTitle(result.data()?.itemTitle);
          setItemContents(result.data()?.itemContents);
        });
    }
    getItemData();
  }, [boardId]);

  const onClickEnterToBoard = () => {
    router.push(`/workspace/${boardId}`);
  };

  const onClickDeleteItem = () => {
    const data = {
      itemTitle: ItemTitle,
      createdAt: new Date(),
      isAlive: false,
    };
    firebase.firestore().collection("item").doc(itemId).update(data);
    firebase.firestore().collection("item").doc(itemId).delete();
  };
  const updateItemTitle = async () => {
    if (ItemTitle === "") {
      Modal.error({ content: "내용을 입력해주세요." });
      return;
    }

    const data = {
      itemTitle: ItemTitle,
      createdAt: new Date(),
    };
    await firebase.firestore().collection("item").doc(itemId).update(data);
    setIsOpenTitle(false);
  };

  const updateItemContents = () => {
    if (ItemContents === "") {
      Modal.error({ content: "내용을 입력해주세요." });
      return;
    }
    const data = {
      createdAt: new Date(),
      itemContents: ItemContents,
    };
    firebase.firestore().collection("item").doc(itemId).update(data);
    setIsOpenContents(false);
  };

  const onChangeItemTitle = (event: ChangeEvent<HTMLInputElement>) => {
    setItemTitle(event.target.value);
  };

  const onChangeItemContents = (event: ChangeEvent<HTMLInputElement>) => {
    setItemContents(event.target.value);
  };

  const onClickItemTitle = () => {
    setIsOpenTitle(true);
    setIsOpenContents(false);
  };
  const onClickItemContents = () => {
    setIsOpenContents(true);
    setIsOpenTitle(false);
  };

  return (
    <div>
      <ItemDetailUI
        value={value}
        onClickEnterToBoard={onClickEnterToBoard}
        onClickDeleteItem={onClickDeleteItem}
        isOpenTitle={isOpenTitle}
        isOpenContents={isOpenContents}
        setIsOpenContents={setIsOpenContents}
        setIsOpenTitle={setIsOpenTitle}
        itemData={itemData}
        inputRef={inputRef}
        updateItemTitle={updateItemTitle}
        onChangeItemTitle={onChangeItemTitle}
        updateItemContents={updateItemContents}
        onChangeItemContents={onChangeItemContents}
        isOpenModal={isOpenModal}
        setIsOpenModal={setIsOpenModal}
        onClickItemTitle={onClickItemTitle}
        onClickItemContents={onClickItemContents}
        ItemContents={ItemContents}
      />
    </div>
  );
}
