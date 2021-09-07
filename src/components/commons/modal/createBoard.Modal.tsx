import styled from "@emotion/styled";
import { useRouter } from "next/router";
import SmallButton from "../button/small.Button";

export const Wrapper = styled.div`
  /* background-color: indianred; */
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
  height: 236px;
  padding: 12px;

  border-radius: 4px;
  position: absolute;
  left: 50%;
  top: 30%;
  transform: translate(-50%, -50%);
`;
export const TitleInputDiv = styled.div`
  background-color: lawngreen;

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
  background-color: lightcoral;
  width: 100%;
  height: 112px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-bottom: 12px;
`;
export const MiddleInnerDiv = styled.div`
  background-color: lightcyan;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const ColerBox = styled.div`
  background-color: lightgreen;
  width: 50px;
  height: 50px;
  border-radius: 4px;
`;
export const BottomWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export default function CreateBoard(props) {
  const router = useRouter();
  const onClickEnterToBoard = () => {
    router.push(`/workspace/board`);
  };
  const onClickClose = () => {
    props.setIsOpen(false);
  };

  return (
    <Wrapper>
      <InnerWrapper>
        <TitleInputDiv>
          <Title>TITLE :</Title>
          <TitleInput />
        </TitleInputDiv>
        <MiddleWrapper>
          <MiddleInnerDiv>
            <ColerBox>1</ColerBox>
            <ColerBox>2</ColerBox>
            <ColerBox>3</ColerBox>
            <ColerBox>4</ColerBox>
          </MiddleInnerDiv>
          <MiddleInnerDiv>
            <ColerBox>5</ColerBox>
            <ColerBox>6</ColerBox>
            <ColerBox>7</ColerBox>
            <ColerBox>8</ColerBox>
          </MiddleInnerDiv>
        </MiddleWrapper>
        <BottomWrapper>
          <SmallButton buttonName="생성하기" onClick={onClickEnterToBoard} />
          <SmallButton buttonName="취소하기" onClick={onClickClose} />
        </BottomWrapper>
      </InnerWrapper>
    </Wrapper>
  );
}
