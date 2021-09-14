import BasketUI from "./basket.presenter";
import { useCollection } from "react-firebase-hooks/firestore";
import firebase from "../../../commons/firebase/firebase";

export default function Basket(props: any) {
  const [value] = useCollection(
    firebase.firestore().collection("basket").orderBy("createdAt", "asc"),
    {
      snapshotListenOptions: { includeMetadataChanges: true },
    }
  );

  return <BasketUI value={value} boardId={props.boardId} />;
}
