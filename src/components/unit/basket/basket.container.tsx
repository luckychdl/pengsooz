import firebase from "../../../commons/firebase/firebase";

import BasketUI from "./basket.presenter";
import { useCollection } from "react-firebase-hooks/firestore";
import { useRef } from "react";

export default function Basket() {
  const basketDetail = useRef<HTMLDivElement>(null);
  const [value] = useCollection(
    firebase.firestore().collection("basket").orderBy("createdAt", "asc"),
    {
      snapshotListenOptions: { includeMetadataChanges: true },
    }
  );

  return <BasketUI value={value} basketDetail={basketDetail} />;
}
