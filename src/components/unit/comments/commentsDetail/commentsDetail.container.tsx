import CommentsDetailUi from "./commentsDetail.presenter";
import { dbservice } from "../../../../commons/firebase/firebase";
import { ChangeEvent, useState } from "react";

export default function CommentsDetail(props: any) {
  const [contents, setContents] = useState(props.value.data().contents);
  const [isEdit, setIsEdit] = useState(false);

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
