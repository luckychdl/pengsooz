import CommentUI from "./comment.presenter";
import { useCollection } from "react-firebase-hooks/firestore";
import firebase from "../../../commons/firebase/firebase";

export default function Comments() {
  const [value, loading, error] = useCollection(
    firebase.firestore().collection("comments"),
    {
      snapshotListenOptions: { includeMetadataChanges: true },
    }
  );

  return <CommentUI value={value} loading={loading} error={error} />;
}
