import BasketUI from "./basket.presenter";
import { useCollection } from "react-firebase-hooks/firestore";
import firebase from "../../../commons/firebase/firebase";
import { useState } from "react";

export default function Basket(props: any) {
  const [isSwitch, setIsSwitch] = useState(false);
  const [value, loading] = useCollection(
    firebase.firestore().collection("basket").orderBy("createdAt", "asc"),
    {
      snapshotListenOptions: { includeMetadataChanges: true },
    }
  );

  return (
    <BasketUI
      value={value}
      boardId={props.boardId}
      loading={loading}
      isSwitch={isSwitch}
      setIsSwitch={setIsSwitch}
    />
  );
}
