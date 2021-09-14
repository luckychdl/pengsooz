import styled from "@emotion/styled";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";

export const Wrapper = styled.div`
  width: 100%;
`;
export const CommentTitle = styled.div`
  width: 100%;
`;
export const CommentsWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;
export const CommentsListWrapper = styled.div`
  width: 100%;
  height: 30px;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  margin-bottom: 5px;
`;
export const Avatar = styled.img`
  background-color: slategrey;
  width: 30px;
  height: 30px;
  border-radius: 50%;
`;

export const CommentsInnerWrapper = styled.div`
  height: 30px;
  display: flex;
  flex-direction: column;
  padding-left: 5px;
  padding-right: 10px;
`;

export const CommentEdit = styled.input`
  background-color: wheat;
  font-size: 10px;
  padding-right: 5px;
  padding-left: 5px;
`;

export const DispalayName = styled.div`
  font-size: 10px;
`;

export const CommentContents = styled.div`
  background-color: wheat;
  text-align: center;
  padding-right: 5px;
  padding-left: 5px;
  font-size: 10px;
`;
export const CommentUpdateButton = styled(EditOutlined)`
  font-size: 10px;
  margin-bottom: 2px;
`;
export const CommentDeleteButton = styled(DeleteOutlined)`
  font-size: 10px;
  margin-bottom: 2px;
  margin-left: 5px;
`;
