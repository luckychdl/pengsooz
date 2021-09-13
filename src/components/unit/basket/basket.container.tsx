import BasketUI from "./basket.presenter";
import { useCollection } from "react-firebase-hooks/firestore";
import { useRef } from "react";
import { dbservice } from "../../../commons/firebase/firebase";

export default function Basket() {
  const basketDetail = useRef<HTMLDivElement>(null);

  const [value] = useCollection(
    dbservice.collection("basket").orderBy("createdAt", "asc"),
    {
      snapshotListenOptions: { includeMetadataChanges: true },
    }
  );

  return <BasketUI value={value} basketDetail={basketDetail} />;
}
