import BasketWritePageUI from "./basketWrite.presenter";
import { useState } from "react";
import firebase from "firebase";
import { Modal } from "antd";
const BasketWritePage = (props) => {
  const [isAdd, setIsAdd] = useState(false);
  const [basketTitle, setBasketTitle] = useState("");

  const onClickAddBasket = () => {
    setIsAdd((prev) => !prev);
  };
  const onChangeAddBasket = (event) => {
    setBasketTitle(event.target.value);
    console.log(basketTitle);
  };
  const onClickCreateBasket = async () => {
    const basketId = firebase.firestore().collection("basket").doc().id;
    try {
      const value = {
        basketId: basketId,
        title: basketTitle,
        createdAt: new Date(),
      };
      await firebase.firestore().collection("basket").doc(basketId).set(value);
      setIsAdd(false);
      props.basketDetail.current?.focus();
    } catch (err) {
      Modal.error({
        content: err.message,
      });
    }
  };
  return (
    <BasketWritePageUI
      isAdd={isAdd}
      onClickAddBasket={onClickAddBasket}
      onClickCreateBasket={onClickCreateBasket}
      onChangeAddBasket={onChangeAddBasket}
    />
  );
};

export default BasketWritePage;
