import BasketUI from "./basket.presenter";
import { useCollection } from "react-firebase-hooks/firestore";
import firebase from "../../../commons/firebase/firebase";

export default function Basket(props: any) {
  const [value, loading] = useCollection(
    firebase.firestore().collection("basket").orderBy("index", "asc"),
    {
      snapshotListenOptions: { includeMetadataChanges: true },
    }
  );

  const [itemValue] = useCollection(
    firebase.firestore().collection("items").orderBy("index", "asc"),
    {
      snapshotListenOptions: { includeMetadataChanges: true },
    }
  );

  return (
    <BasketUI
      value={value}
      boardId={props.boardId}
      loading={loading}
      itemValue={itemValue}
    />
  );
}
