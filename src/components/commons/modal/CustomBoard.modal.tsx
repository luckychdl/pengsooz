import styled from "@emotion/styled";
import { ChangeEvent, MouseEvent } from "react";
import SmallButton from "../button/small.Button";
import { EditOutlined, CheckOutlined } from "@ant-design/icons";

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  z-index: 1;
  position: fixed;
  background: rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(2px);
`;
const InnerWrapper = styled.div`
  background-color: #fcf9ee;
  width: 280px;
  padding: 12px;
  border-radius: 4%;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;
const TitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 38px;
  background-color: #ffffff;
  margin-bottom: 12px;
`;
const TitleImg = styled(EditOutlined)`
  font-size: 18px;
  padding: 10px;
`;
const TitleInput = styled.input`
  width: 85%;
  border: none;
  font-size: 16px;
  ::placeholder {
    color: #e2e1d7;
  }
`;
const MiddleWrapper = styled.div`
  width: 100%;
  height: 112px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-bottom: 12px;
`;
const MiddleInnerDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
const ColorBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  border-radius: 4px;
`;
const CheckOut = styled(CheckOutlined)`
  display: none;
`;
const BottomWrapper = styled.div`
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
        <TitleWrapper>
          <TitleImg src="/images/default_profile.png" />
          <TitleInput onChange={props.onChangeTitle} placeholder="New Board" />
        </TitleWrapper>
        <MiddleWrapper>
          <MiddleInnerDiv>
            <ColorBox
              onClick={props.onClickColor}
              id="#B2EBF2"
              style={{ backgroundColor: "#B2EBF2" }}
            >
              <CheckOut />
            </ColorBox>
            <ColorBox
              onClick={props.onClickColor}
              id="#FFE0B2"
              style={{ backgroundColor: "#FFE0B2" }}
            >
              <CheckOut />
            </ColorBox>
            <ColorBox
              onClick={props.onClickColor}
              id="#C8E6C9"
              style={{ backgroundColor: "#C8E6C9" }}
            >
              <CheckOut />
            </ColorBox>
            <ColorBox
              onClick={props.onClickColor}
              id="#F48FB1"
              style={{ backgroundColor: "#F48FB1" }}
            >
              <CheckOut />
            </ColorBox>
          </MiddleInnerDiv>
          <MiddleInnerDiv>
            <ColorBox
              onClick={props.onClickColor}
              id="#F3E5F5"
              style={{ backgroundColor: "#F3E5F5" }}
            >
              <CheckOut />
            </ColorBox>
            <ColorBox
              onClick={props.onClickColor}
              id="#FFF9C4"
              style={{ backgroundColor: "#FFF9C4" }}
            >
              <CheckOut />
            </ColorBox>
            <ColorBox
              onClick={props.onClickColor}
              id="#E0E0E0"
              style={{ backgroundColor: "#E0E0E0" }}
            >
              <CheckOut />
            </ColorBox>
            <ColorBox
              onClick={props.onClickColor}
              id="#42A5F5"
              style={{ backgroundColor: "#42A5F5" }}
            >
              <CheckOut />
            </ColorBox>
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
