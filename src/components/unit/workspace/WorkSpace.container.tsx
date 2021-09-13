import WorkspaceUI from "./WorkSpace.presenter";
import firebase, { dbservice } from "../../../commons/firebase/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { useCollection } from "react-firebase-hooks/firestore";
import { useRouter } from "next/router";
import { ChangeEvent, MouseEvent, useState } from "react";
import { Modal } from "antd";

const Workspace = () => {
  const router = useRouter();
  const [boardTitle, setBoardTitle] = useState("");
  const [colorCode, setColorCode] = useState("");
  const [isSelectOpen, setIsSelectOpen] = useState(false);
  const [isCustomBoardOpen, setIsCustomBoardOpen] = useState(false);
  const [user, userLoading] = useAuthState(firebase.auth());
  const [boards, boardsLoading] = useCollection(
    firebase.firestore().collection("boards"),
    {
      snapshotListenOptions: { includeMetadataChanges: true },
    }
  );
  const onClickOpenLogoutModal = () => {
    setIsSelectOpen(true);
  };

  const onClickCloseLogoutModal = () => {
    setIsSelectOpen(false);
  };

  const onClickLogout = async () => {
    await firebase.auth().signOut();
    router.push("/");
  };

  const onClickCreateBoard = async () => {
    const boardId = dbservice.collection("boards").doc().id;
    try {
      const value = {
        boardId: boardId,
        title: boardTitle,
        colorCode: colorCode,
        createdAt: new Date(),
        updatedAt: new Date(),
      };
      await dbservice.collection("boards").doc(boardId).set(value);
    } catch (error) {
      Modal.error({
        content: error.message,
      });
    }
    router.push(`workspace/${boardId}`);
  };

  const onClickCloseBoardModal = () => {
    setIsCustomBoardOpen(false);
  };

  const onChangeBoardTitle = (event: ChangeEvent<HTMLInputElement>) => {
    setBoardTitle(event.target.value);
  };

  const onClickBoardColor = (event: MouseEvent<HTMLDivElement>) => {
    setColorCode((event.target as Element).id);
  };

  return (
    <div>
      <WorkspaceUI
        user={user}
        userLoading={userLoading}
        boards={boards}
        boardsLoading={boardsLoading}
        isSelectOpen={isSelectOpen}
        isCustomBoardOpen={isCustomBoardOpen}
        setIsCustomBoardOpen={setIsCustomBoardOpen}
        onClickOpenLogoutModal={onClickOpenLogoutModal}
        onClickCloseLogoutModal={onClickCloseLogoutModal}
        onClickLogout={onClickLogout}
        onClickCreateBoard={onClickCreateBoard}
        onClickCloseBoardModal={onClickCloseBoardModal}
        onChangeBoardTitle={onChangeBoardTitle}
        onClickBoardColor={onClickBoardColor}
      />
    </div>
  );
};

export default Workspace;
