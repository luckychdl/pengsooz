import ItemDetailUI from "./itemDetail.presenter";
import { useRouter } from "next/router";
import { ChangeEvent, useEffect, useRef, useState } from "react";
import firebase from "../../../commons/firebase/firebase";

export default function ItemDetail() {
  const router = useRouter();
  const [itemData, setItemData] = useState([]);
  const [isOpenTitle, setIsOpenTitle] = useState(false);
  const [isOpenContents, setIsOpenContents] = useState(false);
  const [ItemTitle, setItemTitle] = useState("");
  const [ItemContents, setItemContents] = useState("");
  const [isOpenModal, setIsOpenModal] = useState(false);

  const itemId: any = router.query.itemDetail;

  const inputRef = useRef<HTMLInputElement>(null);
  useEffect(() => {
    inputRef.current?.focus();
  });

  useEffect(() => {
    async function getItemData() {
      await firebase
        .firestore()
        .collection("item")
        .doc(String(itemId))
        .onSnapshot((result: any) => {
          setItemData(result.data());
        });
    }
    getItemData();
  }, []);

  const onClickEnterToBoard = () => {
    router.push(`/workspace/boardId`);
  };

  const onClickDeleteItem = () => {
    firebase.firestore().collection("item").doc(itemId).delete();
    router.push(`/workspace/boardId`);
  };

  const updateItemTitle = () => {
    const data = {
      itemTitle: ItemTitle,
      createdAt: new Date(),
    };
    firebase.firestore().collection("item").doc(itemId).update(data);

    setIsOpenTitle(false);
  };

  const updateItemContents = () => {
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

  const onClickItemTitel = () => {
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
        onClickItemTitel={onClickItemTitel}
        onClickItemContents={onClickItemContents}
      />
    </div>
  );
}
