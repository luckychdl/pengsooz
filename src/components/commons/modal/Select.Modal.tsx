import styled from "@emotion/styled";
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
  background-color: lavenderblush;
  width: 280px;
  height: 120px;
  padding: 12px;
  border-radius: 4px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;
export const Content = styled.div``;
export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

interface ISelectorModalProps {
  onClickLeft: () => void;
  onClickRight: () => void;
  buttonNameLeft: string;
  buttonNameRight: string;
  content: string;
}

const Select = (props: ISelectorModalProps) => {
  return (
    <Wrapper>
      <InnerWrapper>
        <Content>{props.content}</Content>
        <ButtonWrapper>
          <SmallButton
            buttonName={props.buttonNameLeft}
            onClick={props.onClickLeft}
          />
          <SmallButton
            buttonName={props.buttonNameRight}
            onClick={props.onClickRight}
          />
        </ButtonWrapper>
      </InnerWrapper>
    </Wrapper>
  );
};

export default Select;
