import firebase from "../../../../commons/firebase/firebase";

export interface IWorkspaceUIProps {
  user?: firebase.User | null | undefined;
  isOpen: boolean;
  onClickOpenLogoutModal: () => void;
  onClickCloseLogoutModal: () => void;
  onClickLogout: () => void;
}
