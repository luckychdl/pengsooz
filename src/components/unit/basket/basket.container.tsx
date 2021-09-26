import BasketUI from "./basket.presenter";
import { useCollection } from "react-firebase-hooks/firestore";
import firebase from "../../../commons/firebase/firebase";
import { useEffect } from "react";

interface Iprops {
  boardId: string;
}

export default function Basket(props: Iprops) {
  const [value, loading] = useCollection(
    firebase.firestore().collection("basket").orderBy("index", "asc"),
    {
      snapshotListenOptions: { includeMetadataChanges: true },
    }
  );

  const [itemvalue] = useCollection(
    firebase.firestore().collection("item").orderBy("index", "asc"),
    {
      snapshotListenOptions: { includeMetadataChanges: true },
    }
  );
  const aaa = itemvalue?.docs.map((doc) => doc.data().basketId);

  console.log(aaa);
  return <BasketUI value={value} boardId={props.boardId} loading={loading} />;
}
