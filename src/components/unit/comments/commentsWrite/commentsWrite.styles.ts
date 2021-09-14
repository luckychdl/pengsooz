import styled from "@emotion/styled";
import { EnterOutlined } from "@ant-design/icons";

export const CommentTitle = styled.div`
  width: 100%;
  background-color: seashell;
  margin-bottom: 12px;
`;

export const CommentsInnerDiv = styled.div`
  background-color: red;
  width: 100%;

  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export const CommentContentsInput = styled.input`
  width: 100%;
  height: 32px;
  padding: 0 12px;
`;

export const CommentsWriteDiv = styled.div`
  background-color: gray;
  width: 100%;
  padding: 0 12px 12px 12px;
  display: flex;
  flex-direction: column;
`;

export const EnterOut = styled(EnterOutlined)`
  height: 32px;
  padding-top: 4px;
  font-size: 20px;
`;
