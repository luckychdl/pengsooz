import styled from "@emotion/styled";
import { EditOutlined } from "@ant-design/icons";

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
  margin: auto;
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
export const CommentContents = styled.div`
  width: 100%;
  height: 32px;
  background-color: white;
`;
export const CommentUpdataButton = styled(EditOutlined)`
  height: 32px;
  padding-top: 4px;
  font-size: 20px;
`;
