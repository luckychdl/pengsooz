import BasketDetailPageUI from "./basketDetail.presenter";
import firebase from "firebase";
import { useCollection } from "react-firebase-hooks/firestore";

const BasketDetailPage = (props: any) => {
  const [value] = useCollection(
    firebase.firestore().collection("basket").orderBy("createdAt", "asc"),
    {
      snapshotListenOptions: { includeMetadataChanges: true },
    }
  );
  return <BasketDetailPageUI value={value} doc={props.doc} />;
};

export default BasketDetailPage;
