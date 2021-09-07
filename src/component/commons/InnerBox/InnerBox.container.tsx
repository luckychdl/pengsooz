import InnerBoxUI from "./InnerBox.presenter";
import { useRouter } from "next/router";

import { useState } from "react";

export default function Login() {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  const onClickEnterToBoard = () => {
    router.push(`/board`);
  };

  const onClickCreateBoard = () => {
    setIsOpen(true);
  };
  return (
    <div>
      <InnerBoxUI
        onClickCreateBoard={onClickCreateBoard}
        onClickEnterToBoard={onClickEnterToBoard}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
      />
    </div>
  );
}
