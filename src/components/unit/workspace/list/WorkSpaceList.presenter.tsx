import {
  Wrapper,
  TopWrapper,
  Avatar,
  DisplayName,
  LogoutButton,
} from "./WorkspaceList.styles";
import { IWorkspaceUIProps } from "./WorkspaceList.types";
import InnerBox from "../write/WorkspaceWrite.container";
import SelectorModal from "../../../commons/modal/Select.modal";

const WorkspaceUI = (props: IWorkspaceUIProps) => {
  return (
    <>
      {props.isOpen && (
        <SelectorModal
          onClickLeft={props.onClickLogout}
          onClickRight={props.onClickCloseLogoutModal}
          buttonNameLeft="예"
          buttonNameRight="아니요"
          content="로그아웃 하시겠습니까?"
        />
      )}
      <Wrapper>
        <TopWrapper>
          <Avatar />
          <DisplayName>{props.user?.displayName}</DisplayName>
          <LogoutButton onClick={props.onClickOpenLogoutModal}>
            로그아웃
          </LogoutButton>
        </TopWrapper>
        <InnerBox />
      </Wrapper>
    </>
  );
};

export default WorkspaceUI;
