import ItemDetailUI from "./itemDetail.presenter";
import { useRouter } from "next/router";

export default function ItemDetail() {
  const router = useRouter();

  const onClickEnterToBoard = () => {
    router.push(`/workspace/board`);
  };

  return (
    <div>
      <ItemDetailUI onClickEnterToBoard={onClickEnterToBoard} />
    </div>
  );
}
