import WorkspaceUI from "./WorkSpaceList.presenter";
import firebase from "../../../../commons/firebase/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { useRouter } from "next/router";
import { useState } from "react";

const Workspace = () => {
  const router = useRouter();
  const [user] = useAuthState(firebase.auth());
  const [isOpen, setIsOpen] = useState(false);

  const onClickOpenLogoutModal = () => {
    setIsOpen(true);
  };

  const onClickCloseLogoutModal = () => {
    setIsOpen(false);
  };

  const onClickLogout = async () => {
    await firebase.auth().signOut();
    router.push("/");
  };

  return (
    <div>
      <WorkspaceUI
        user={user}
        isOpen={isOpen}
        onClickOpenLogoutModal={onClickOpenLogoutModal}
        onClickCloseLogoutModal={onClickCloseLogoutModal}
        onClickLogout={onClickLogout}
      />
    </div>
  );
};

export default Workspace;
