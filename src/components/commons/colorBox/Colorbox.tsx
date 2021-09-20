import styled from "@emotion/styled";
import { CheckOutlined } from "@ant-design/icons";
import { Dispatch, MouseEvent, SetStateAction } from "react";
import { colorStateInit } from "../modal/CustomBoard.modal";

interface IColorBoxProps {
  isChecked: boolean;
  color: keyof typeof colorStateInit;
  setColorCode: Dispatch<SetStateAction<string>>;
  onClickChangeColorState: (color: keyof typeof colorStateInit) => void;
}

interface IProps {
  isChecked: boolean;
}

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 55px;
  height: 55px;
  border-radius: 4px;
`;

const CheckOut = styled(CheckOutlined)`
  display: ${(props: IProps) => (props.isChecked ? "" : "none")};
`;

const ColorBox = (props: IColorBoxProps) => {
  const onClickColor = (event: MouseEvent<HTMLDivElement>) => {
    props.onClickChangeColorState(props.color);
    props.setColorCode((event.target as Element).id);
  };
  return (
    <Wrapper
      onClick={onClickColor}
      id={props.color}
      style={{ backgroundColor: `${props.color}` }}
    >
      <CheckOut isChecked={props.isChecked} />
    </Wrapper>
  );
};

export default ColorBox;
