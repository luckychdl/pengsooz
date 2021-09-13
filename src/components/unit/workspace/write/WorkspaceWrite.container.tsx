import InnerBoxUI from "./WorkspaceWrite.presenter";
import { dbservice } from "../../../../commons/firebase/firebase";
import { useRouter } from "next/router";
import { ChangeEvent, MouseEvent, useState } from "react";
import { Modal } from "antd";

const WorkspaceWrite = () => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [boardTitle, setBoardTitle] = useState("");
  const [colorCode, setColorCode] = useState("");

  const onChangeBoardTitle = (event: ChangeEvent<HTMLInputElement>) => {
    setBoardTitle(event.target.value);
  };

  const onClickBoardColor = (event: MouseEvent<HTMLDivElement>) => {
    setColorCode((event.target as Element).id);
  };

  const onClickCreateBoard = async () => {
    const boardId = dbservice.collection("board").doc().id;
    try {
      const value = {
        boardId: boardId,
        title: boardTitle,
        colorCode: colorCode,
        createdAt: new Date(),
        updatedAt: new Date(),
      };
      await dbservice.collection("board").doc(boardId).set(value);
    } catch (error) {
      Modal.error({
        content: error.message,
      });
    }
    router.push(`workspace/board`);
  };

  const onClickOpenBoardModal = () => {
    setIsOpen(true);
  };

  const onClickCloseBoardModal = () => {
    setIsOpen(false);
  };
  return (
    <div>
      <InnerBoxUI
        isOpen={isOpen}
        onChangeBoardTitle={onChangeBoardTitle}
        onClickBoardColor={onClickBoardColor}
        onClickOpenBoardModal={onClickOpenBoardModal}
        onClickCloseBoardModal={onClickCloseBoardModal}
        onClickCreateBoard={onClickCreateBoard}
      />
    </div>
  );
};

export default WorkspaceWrite;
