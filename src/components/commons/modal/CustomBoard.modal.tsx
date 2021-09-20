import styled from "@emotion/styled";
import { ChangeEvent, Dispatch, SetStateAction, useState } from "react";
import SmallButton from "../button/small.Button";
import { EditOutlined } from "@ant-design/icons";
import ColorBox from "../colorBox/Colorbox";

interface ICustomBoardModalProps {
  onClickLeft: () => void;
  onClickRight: () => void;
  onChangeTitle: (event: ChangeEvent<HTMLInputElement>) => void;
  buttonNameLeft: string;
  buttonNameRight: string;
  defaultValue: string;
  setColorCode: Dispatch<SetStateAction<string>>;
}
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
const TitleIcon = styled(EditOutlined)`
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
  flex-wrap: wrap;
  grid-gap: 12px;
  justify-content: space-between;
`;
const BottomWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 12px;
`;

export const colorStateInit = {
  "#B2EBF2": false,
  "#FFE0B2": false,
  "#C8E6C9": false,
  "#F48FB1": false,
  "#F3E5F5": false,
  "#FFF9C4": false,
  "#E0E0E0": false,
  "#42A5F5": false,
};

interface IColorList {
  [key: string]: keyof typeof colorStateInit;
}
const colorList: IColorList = {
  paleturquoise: "#B2EBF2",
  navajowhite: "#FFE0B2",
  lightgray: "#C8E6C9",
  hotpink: "#F48FB1",
  lavender: "#F3E5F5",
  lemonchiffon: "#FFF9C4",
  gainsboro: "#E0E0E0",
  cornflowerblue: "#42A5F5",
};

const CustomBoard = (props: ICustomBoardModalProps) => {
  const [colorState, setColorState] = useState(colorStateInit);

  const onClickChangeColorState = (color: keyof typeof colorStateInit) => {
    const newColorState = { ...colorStateInit };
    newColorState[color] = true;
    setColorState(newColorState);
  };
  return (
    <Wrapper>
      <InnerWrapper>
        <TitleWrapper>
          <TitleIcon />
          <TitleInput
            maxLength={18}
            onChange={props.onChangeTitle}
            placeholder="New Board"
            defaultValue={props.defaultValue}
          />
        </TitleWrapper>
        <MiddleWrapper>
          <MiddleInnerDiv>
            {Object.values(colorList).map((data) => (
              <ColorBox
                key={data}
                color={data}
                setColorCode={props.setColorCode}
                onClickChangeColorState={onClickChangeColorState}
                isChecked={colorState[data]}
              />
            ))}
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
