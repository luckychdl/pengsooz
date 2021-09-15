import BasketDetailPageUI from "./basketDetail.presenter";
import { dbservice } from "../../../../commons/firebase/firebase";
import { ChangeEvent, useState } from "react";
import { Modal } from "antd";

const BasketDetailPage = (props: any) => {
  const [isUpdate, setIsUpdate] = useState(false);
  const [isMenu, setIsMenu] = useState(false);
  const [isModal, setIsModal] = useState(false);
  const [updateTitle, setUpdateTitle] = useState(props.doc.data().title);

  const onClickMenu = () => {
    setIsMenu((prev) => !prev);
  };
  const onClickBasketUpdate = () => {
    setIsUpdate(true);
    setIsMenu(false);
  };
  const onClickUpdate = async () => {
    if (updateTitle !== "") {
      try {
        await dbservice.collection("basket").doc(props.doc.id).update({
          title: updateTitle,
        });
        setIsUpdate(false);
        setIsMenu(false);
      } catch (err) {
        Modal.error({
          content: err.message,
        });
      }
    } else {
      alert("제목을 입력해주세요 !");
    }
  };
  const onClickLeft = async () => {
    try {
      await dbservice.collection("basket").doc(props.doc.id).delete();
    } catch (err) {
      Modal.error({
        content: err.message,
      });
    }
  };
  const onClickDeleteComfirm = () => {
    setIsModal(true);
    setIsMenu(false);
  };
  const onClickRight = () => {
    setIsModal(false);
  };
  const onChangeUpdateTitle = (event: ChangeEvent<HTMLInputElement>) => {
    setUpdateTitle((event.target as any).value);
  };
  const onClickCancel = () => {
    setIsUpdate(false);
  };
  return (
    <BasketDetailPageUI
      isMenu={isMenu}
      isUpdate={isUpdate}
      isModal={isModal}
      updateTitle={updateTitle}
      doc={props.doc}
      messagesEndRef={props.messagesEndRef}
      boardId={props.boardId}
      setIsMenu={setIsMenu}
      onClickLeft={onClickLeft}
      onClickRight={onClickRight}
      onClickDeleteComfirm={onClickDeleteComfirm}
      onClickCancel={onClickCancel}
      onChangeUpdateTitle={onChangeUpdateTitle}
      onClickUpdate={onClickUpdate}
      onClickBasketUpdate={onClickBasketUpdate}
      onClickMenu={onClickMenu}
    />
  );
};

export default BasketDetailPage;
