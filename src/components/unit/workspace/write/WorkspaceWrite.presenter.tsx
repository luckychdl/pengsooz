import {
  Wrapper,
  Title,
  InnerWrapper,
  InnerDiv,
  BoardBox,
  BoardTitle,
  NewBoardTitle,
  PulsImg,
} from "./WorkspaceWrite.styles";
import { IWorkspaceWriteUIProps } from "./WorkspaceWrite.types";
import CustomBoard from "../../../commons/modal/CustomBoard.modal";

const WorkspaceWriteUI = (props: IWorkspaceWriteUIProps) => {
  return (
    <>
      {props.isOpen && (
        <CustomBoard
          onClickLeft={props.onClickCreateBoard}
          onClickRight={props.onClickCloseBoardModal}
          onChangeTitle={props.onChangeBoardTitle}
          onClickColor={props.onClickBoardColor}
          buttonNameLeft="생성하기"
          buttonNameRight="취소하기"
        />
      )}
      <Wrapper>
        <Title>Boards</Title>
        <InnerWrapper>
          <InnerDiv>
            <BoardBox />
            <BoardTitle>팽수팀ddddddddd</BoardTitle>
          </InnerDiv>
          <InnerDiv>
            <NewBoardTitle onClick={props.onClickOpenBoardModal}>
              <PulsImg />
            </NewBoardTitle>
          </InnerDiv>
        </InnerWrapper>
      </Wrapper>
    </>
  );
};

export default WorkspaceWriteUI;
