import ItemUI from "./item.presenter";
import { useRouter } from "next/router";

export default function Item() {
  const router = useRouter();

  const onClickEnterToItemDetail = () => {
    router.push(`/workspace/board/itemDetail`);
  };
  return (
    <div>
      <ItemUI onClickEnterToItemDetail={onClickEnterToItemDetail} />
    </div>
  );
}
