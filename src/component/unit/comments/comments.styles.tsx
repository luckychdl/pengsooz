import styled from "@emotion/styled";
import { EditOutlined, EnterOutlined } from "@ant-design/icons";

export const Wrapper = styled.div`
  background-color: seagreen;

  width: 100%;

  padding: 12px;
`;
export const CommentTitle = styled.div`
  width: 100%;
  background-color: seashell;
  margin-bottom: 12px;
`;
export const CommentsListDiv = styled.div`
  background-color: skyblue;
  width: 100%;

  display: flex;
  flex-direction: row;
  margin-bottom: 12px;
`;
export const Avater = styled.img`
  background-color: slategrey;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-right: 12px;
`;

export const CommentsInnerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: green;
  width: 276px;
`;

export const CommentsInnerDiv = styled.div`
  background-color: red;
  width: 100%;

  display: flex;
  flex-direction: row;
  justify-content: center;
`;
export const DispalayName = styled.div`
  background-color: yellow;
`;
export const CommentConTentsInput = styled.input`
  width: 100%;
  height: 32px;

  padding: 0 12px;
`;
export const CommentUpdataButton = styled(EditOutlined)`
  /* background-color: tomato; */

  height: 32px;
  padding-top: 4px;
  font-size: 20px;
`;
export const CommentsWriteDiv = styled.div`
  background-color: gray;
  width: 100%;

  padding: 0 12px 12px 12px;

  display: flex;
  flex-direction: column;

  position: fixed;
  z-index: 2;
`;

export const EnterOut = styled(EnterOutlined)`
  height: 32px;
  padding-top: 4px;
  font-size: 20px;
`;
