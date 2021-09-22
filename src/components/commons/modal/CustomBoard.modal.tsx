import styled from "@emotion/styled";
import { ChangeEvent, Dispatch, SetStateAction, useState } from "react";
import SmallButton from "../button/small.Button";
import { EditOutlined } from "@ant-design/icons";
import ColorBox from "../colorBox/Colorbox";

interface ICustomBoardModalProps {
  defaultValue: string;
  buttonNameLeft: string;
  buttonNameRight: string;
  onClickLeft: () => void;
  onClickRight: () => void;
  onChangeTitle: (event: ChangeEvent<HTMLInputElement>) => void;
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
  width: 280px;
  padding: 12px;
  border-radius: 4%;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  background-color: #ffffff;
`;
const TitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 38px;
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
    /* color: #000000; */
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
  "#e7ff9a": false,
  "#ffdb61": false,
  "#abff9d": false,
  "#ff844b": false,
  "#c3f2ff": false,
  "#ffc3df": false,
  "#83c8f7": false,
  "#9674e0": false,
};

interface IColorList {
  [key: string]: keyof typeof colorStateInit;
}
const colorList: IColorList = {
  palegoldenrod: "#e7ff9a",
  sandybrown: "#ffdb61",
  palegreen: "#abff9d",
  salmon: "#ff844b",
  paleturquoise: "#c3f2ff",
  pink: "#ffc3df",
  lightskyblue: "#83c8f7",
  mediumpurple: "#9674e0",
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
            placeholder="이름을 입력하세요"
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
