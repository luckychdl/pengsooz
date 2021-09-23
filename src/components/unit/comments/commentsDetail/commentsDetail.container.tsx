import CommentsDetailUi from "./commentsDetail.presenter";
import { dbservice } from "../../../../commons/firebase/firebase";
import { ChangeEvent, useState } from "react";
import { useRouter } from "next/router";
import { useDocument } from "react-firebase-hooks/firestore";

export default function CommentsDetail(props: any) {
  const [contents, setContents] = useState(props.value.data().contents);
  const [isEdit, setIsEdit] = useState(false);
  const router = useRouter();
  const boardId = router.query.boardId;
  const [boardValue] = useDocument(dbservice.doc(`boards/${boardId}`), {
    snapshotListenOptions: { includeMetadataChanges: true },
  });

  const onClickDelete = (id: string | undefined) => async () => {
    await dbservice.collection("comments").doc(id).delete();
  };
  const onClickSwitchEdit = () => {
    setIsEdit((prev) => !prev);
  };
  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    setContents(event.target.value);
  };
  const onClickUpdate = (id: string | undefined) => async () => {
    await dbservice.collection("comments").doc(id).update({
      contents: contents,
    });
    setIsEdit(false);
  };

  return (
    <CommentsDetailUi
      value={props.value}
      colorCode={boardValue?.data()?.colorCode}
      onClickDelete={onClickDelete}
      isEdit={isEdit}
      onClickSwitchEdit={onClickSwitchEdit}
      onClickUpdate={onClickUpdate}
      onChange={onChange}
      itemId={props.itemId}
      user={props.user}
    />
  );
}
