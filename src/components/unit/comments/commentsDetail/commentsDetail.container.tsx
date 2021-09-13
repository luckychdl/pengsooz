import CommentsDetailUi from "./commentsDetail.presenter";
import { useCollection } from "react-firebase-hooks/firestore";
import firebase from "../../../../commons/firebase/firebase";

export default function CommentsDetail() {
  const [value, loading, error] = useCollection(
    firebase.firestore().collection("comments"),
    {
      snapshotListenOptions: { includeMetadataChanges: true },
    }
  );

  return <CommentsDetailUi value={value} loading={loading} error={error} />;
}
