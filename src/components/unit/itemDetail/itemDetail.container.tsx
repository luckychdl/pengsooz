import ItemDetailUI from "./itemDetail.presenter";
import { useRouter } from "next/router";
import { useState } from "react";

export default function ItemDetail() {
  const router = useRouter();
  const [isOpenTitle, setIsOpenTitle] = useState(false);
  const [isOpenContents, setIsOpenContents] = useState(false);
  const onClickEnterToBoard = () => {
    router.push(`/workspace/board`);
  };

  return (
    <div>
      <ItemDetailUI
        onClickEnterToBoard={onClickEnterToBoard}
        isOpenTitle={isOpenTitle}
        isOpenContents={isOpenContents}
        setIsOpenContents={setIsOpenContents}
        setIsOpenTitle={setIsOpenTitle}
      />
    </div>
  );
}
