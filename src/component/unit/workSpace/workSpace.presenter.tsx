import {
  Wrapper,
  TopWrapper,
  Avatar,
  DisplayName,
  LogoutButton,
} from "./workSpace.styles";

import InnerBox from "../../commons/InnerBox/InnerBox.container";
import SelectorModal from "../../commons/modal/selector.Modal";

export default function WorkSpaceUI(props) {
  return (
    <div>
      {props.isOpen && <SelectorModal setIsOpen={props.setIsOpen} />}
      <Wrapper>
        <TopWrapper>
          <Avatar />
          <DisplayName>Pnegsooz</DisplayName>
          <LogoutButton onClick={props.onClickLogOut}>로그아웃</LogoutButton>
        </TopWrapper>

        <InnerBox />
      </Wrapper>
    </div>
  );
}
