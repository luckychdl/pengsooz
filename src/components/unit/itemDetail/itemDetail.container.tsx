import ItemDetailUI from "./itemDetail.presenter";
import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";
import firebase from "../../../commons/firebase/firebase";

export default function ItemDetail() {
  const router = useRouter();
  const [itemData, setItemData] = useState([]);
  const [isOpenTitle, setIsOpenTitle] = useState(false);
  const [isOpenContents, setIsOpenContents] = useState(false);
  const [ItemTitle, setItemTitle] = useState("");
  const [ItemContents, setItemContents] = useState("");
  const onClickEnterToBoard = () => {
    router.push(`/workspace/board`);
  };
  const inputRef = useRef<HTMLInputElement>(null);
  useEffect(() => {
    inputRef.current?.focus();
  });

  const itemId = router.query.itemDetail;

  useEffect(() => {
    async function getItemData() {
      const itemData = await firebase
        .firestore()
        .collection("item")
        .doc(String(itemId))
        .onSnapshot((result) => {
          setItemData(result.data());
        });
    }
    getItemData();
  }, []);

  console.log(itemData, "<<<<::");

  const updateItemTitle = () => {
    const itemId = router.query.itemDetail;

    const data = {
      itemTitle: ItemTitle,
      createdAt: new Date(),
    };
    firebase.firestore().collection("item").doc(itemId).update(data);

    console.log(itemId, "((((((");
    setIsOpenTitle(false);
  };

  const onChangeItemTitle = (event) => {
    setItemTitle(event.target.value);
  };

  const updateItemContents = () => {
    const itemId = router.query.itemDetail;
    const data = {
      createdAt: new Date(),
      itemContents: ItemContents,
    };
    firebase.firestore().collection("item").doc(itemId).update(data);
    setIsOpenContents(false);
  };

  const onChangeItemContents = (event) => {
    setItemContents(event.target.value);
  };

  return (
    <div>
      <ItemDetailUI
        onClickEnterToBoard={onClickEnterToBoard}
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
      />
    </div>
  );
}
