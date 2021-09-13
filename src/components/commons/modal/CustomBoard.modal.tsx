import styled from "@emotion/styled";
import { ChangeEvent, MouseEvent } from "react";
import SmallButton from "../button/small.Button";

export const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  z-index: 1;
  position: fixed;

  background: rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(2px);
`;
export const InnerWrapper = styled.div`
  background-color: #ffffff;
  width: 280px;
  height: 236px;
  padding: 12px;

  border-radius: 4px;
  position: absolute;
  left: 50%;
  top: 30%;
  transform: translate(-50%, -50%);
`;
export const TitleInputDiv = styled.div`
  background-color: #ffffff;
  width: 100%;
  display: flex;
  flex-direction: row;
  padding: 5px 0px;
  border-bottom: 2px solid gray;
  margin-bottom: 12px;
`;
export const Title = styled.div`
  width: 20%;
`;
export const TitleInput = styled.input`
  width: 80%;
`;
export const MiddleWrapper = styled.div`
  background-color: #ffffff;
  width: 100%;
  height: 112px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-bottom: 12px;
`;
export const MiddleInnerDiv = styled.div`
  background-color: #ffffff;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const ColorBox = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 4px;
`;
export const BottomWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

interface ICustomBoardModalProps {
  onClickLeft: () => void;
  onClickRight: () => void;
  onChangeTitle: (event: ChangeEvent<HTMLInputElement>) => void;
  onClickColor: (event: MouseEvent<HTMLDivElement>) => void;
  buttonNameLeft: string;
  buttonNameRight: string;
}

const CustomBoard = (props: ICustomBoardModalProps) => {
  return (
    <Wrapper>
      <InnerWrapper>
        <TitleInputDiv>
          <Title>TITLE :</Title>
          <TitleInput onChange={props.onChangeTitle} />
        </TitleInputDiv>
        <MiddleWrapper>
          <MiddleInnerDiv>
            <ColorBox
              onClick={props.onClickColor}
              id="#f8bb55"
              style={{ backgroundColor: "#f8bb55" }}
            />
            <ColorBox
              onClick={props.onClickColor}
              id="#a6bee2"
              style={{ backgroundColor: "#a6bee2" }}
            />
            <ColorBox
              onClick={props.onClickColor}
              id="#fdf087"
              style={{ backgroundColor: "#fdf087" }}
            />
            <ColorBox
              onClick={props.onClickColor}
              id="#2c6bc8"
              style={{ backgroundColor: "#2c6bc8" }}
            />
          </MiddleInnerDiv>
          <MiddleInnerDiv>
            <ColorBox
              onClick={props.onClickColor}
              id="#a7d7a6"
              style={{ backgroundColor: "#a7d7a6" }}
            />
            <ColorBox
              onClick={props.onClickColor}
              id="#ef8584"
              style={{ backgroundColor: "#ef8584" }}
            />
            <ColorBox
              onClick={props.onClickColor}
              id="#8b64ac"
              style={{ backgroundColor: "#8b64ac" }}
            />
            <ColorBox
              onClick={props.onClickColor}
              id="#d32a74"
              style={{ backgroundColor: "#d32a74" }}
            />
          </MiddleInnerDiv>
        </MiddleWrapper>
        <BottomWrapper>
          <SmallButton
            buttonName={props.buttonNameLeft}
            onClick={props.onClickLeft}
          />
          <SmallButton
            buttonName={props.buttonNameRight}
            onClick={props.onClickRight}
          />
        </BottomWrapper>
      </InnerWrapper>
    </Wrapper>
  );
};

export default CustomBoard;
