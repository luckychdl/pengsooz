import styled from "@emotion/styled";

export const Wrapper = styled.div`
  /* background-color: blue; */
  width: 100%;
  height: 240px;

  padding: 0px 12px;
  border-bottom: 1px solid gray;
  border-top: 1px solid gray;
  display: flex;
  flex-direction: column;
`;

export const Title = styled.div`
  font-size: 16px;
  font-weight: 700;
  padding: 20px 0px;
`;

export const InnerWrapper = styled.div`
  background-color: green;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;

  overflow: scroll;
`;

export const InnerDiv = styled.div`
  background-color: brown;
  width: 100px;

  display: flex;
  flex-direction: column;
  text-align: center;

  margin-right: 12px;
`;
export const BoardBox = styled.div`
  background-color: blueviolet;
  width: 100px;
  height: 100px;
`;
export const BoardTitle = styled.div`
  height: 24px;
  overflow: hidden;
`;
export const NewBoardTitle = styled.div`
  background-color: whitesmoke;
  width: 100px;
  height: 100px;
  position: relative;
`;
export const PulsImg = styled.div`
  background-color: yellow;

  width: 50px;
  height: 50px;
  border-radius: 50%;

  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;
