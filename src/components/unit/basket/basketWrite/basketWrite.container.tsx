import BasketWritePageUI from "./basketWrite.presenter";
import { ChangeEvent, useState } from "react";
import { Modal } from "antd";
import { dbservice } from "../../../../commons/firebase/firebase";
import { useRouter } from "next/router";
import { useDocument } from "react-firebase-hooks/firestore";

const BasketWritePage = () => {
  const [isAdd, setIsAdd] = useState(false);
  const [basketTitle, setBasketTitle] = useState("");
  const router = useRouter();
  const boardId = router.query.boardId;
  const [boardValue] = useDocument(dbservice.doc(`boards/${boardId}`), {
    snapshotListenOptions: { includeMetadataChanges: true },
  });
  const onClickAddBasket = () => {
    setIsAdd((prev) => !prev);
  };
  const onChangeAddBasket = (event: ChangeEvent<HTMLInputElement>) => {
    setBasketTitle(event.target.value);
  };
  const basketId = dbservice.collection("basket").doc().id;
  const value = {
    basketId: basketId,
    boardId: boardId,
    title: basketTitle,
    createdAt: new Date(),
  };
  const onClickCreateBasket = async () => {
    if (basketTitle !== "") {
      try {
        await dbservice.collection("basket").doc(basketId).set(value);
        setIsAdd(false);
        setBasketTitle("");
      } catch (err) {
        Modal.error({
          content: err.message,
        });
      }
    } else {
      Modal.error({
        content: "제목을 입력해주세요 !",
      });
    }
  };
  return (
    <BasketWritePageUI
      isAdd={isAdd}
      colorCode={boardValue?.data()?.colorCode}
      onClickAddBasket={onClickAddBasket}
      onClickCreateBasket={onClickCreateBasket}
      onChangeAddBasket={onChangeAddBasket}
    />
  );
};

export default BasketWritePage;
