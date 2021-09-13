import ItemUI from "./item.presenter";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import firebase from "../../../../commons/firebase/firebase";

export default function Items(props) {
  const router = useRouter();
  const [ItemData, setItemdata] = useState([]);

  const [isAdd, setIsAdd] = useState(false);

  const onClickEnterToItemDetail = (event: any) => () => {
    // alert("dd");
    const itemId = event.itemId;
    router.push(`/workspace/board/${itemId}`);
  };

  useEffect(() => {
    const fff = firebase.firestore().collection("item");
    fff.where("basketId", "==", props.basketId).onSnapshot((result: any) => {
      const newresult: any = [];
      result.forEach((doc: any) => {
        const docData = doc.data();
        newresult.push(docData);
      });
      setItemdata(newresult);
    });
  }, []);

  return (
    <div>
      <ItemUI
        onClickEnterToItemDetail={onClickEnterToItemDetail}
        isAdd={isAdd}
        setIsAdd={setIsAdd}
        ItemData={ItemData}
      />
    </div>
  );
}
