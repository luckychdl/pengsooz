import {
  Wrapper,
  Title,
  InnerWrapper,
  InnerDiv,
  BoardBox,
  BoardTitle,
  NewBoardTitle,
  PulsImg,
} from "./InnerBox.styles";

import CreateBoard from "../modal/createBoard.Modal";

export default function InnerBoxUI(props) {
  return (
    <>
      {props.isOpen && <CreateBoard setIsOpen={props.setIsOpen} />}
      <Wrapper>
        <Title>참여중인방.</Title>
        <InnerWrapper>
          <InnerDiv>
            <BoardBox />
            <BoardTitle>팽수팀ddddddddd</BoardTitle>
          </InnerDiv>
          <InnerDiv>
            <BoardBox />
            <BoardTitle>팽수팀ddddddddd</BoardTitle>
          </InnerDiv>
          <InnerDiv>
            <BoardBox />
            <BoardTitle>팽수팀ddddddddd</BoardTitle>
          </InnerDiv>
          <InnerDiv>
            <BoardBox />
            <BoardTitle>팽수팀ddddddddd</BoardTitle>
          </InnerDiv>
          <InnerDiv>
            <BoardBox />
            <BoardTitle>팽수팀ddddddddd</BoardTitle>
          </InnerDiv>
          <InnerDiv>
            <BoardBox />
            <BoardTitle>팽수팀ddddddddd</BoardTitle>
          </InnerDiv>
          <InnerDiv>
            <BoardBox />
            <BoardTitle>팽수팀ddddddddd</BoardTitle>
          </InnerDiv>

          <InnerDiv>
            <NewBoardTitle onClick={props.onClickCreateBoard}>
              <PulsImg />
            </NewBoardTitle>
          </InnerDiv>
        </InnerWrapper>
      </Wrapper>
    </>
  );
}
