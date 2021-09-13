import { ChangeEvent, Dispatch, MouseEvent, SetStateAction } from "react";
import firebase from "../../../commons/firebase/firebase";

export interface IWorkspaceUIProps {
  user?: firebase.User | null | undefined;
  userLoading: boolean;
  boards?: firebase.firestore.QuerySnapshot<firebase.firestore.DocumentData>;
  boardsLoading: boolean;
  boardsError?: firebase.FirebaseError;
  isSelectOpen: boolean;
  isCustomBoardOpen: boolean;
  setIsCustomBoardOpen: Dispatch<SetStateAction<boolean>>;
  onClickOpenLogoutModal: () => void;
  onClickCloseLogoutModal: () => void;
  onClickLogout: () => void;
  onClickCreateBoard: () => void;
  onClickCloseBoardModal: () => void;
  onChangeBoardTitle: (event: ChangeEvent<HTMLInputElement>) => void;
  onClickBoardColor: (event: MouseEvent<HTMLDivElement>) => void;
}
