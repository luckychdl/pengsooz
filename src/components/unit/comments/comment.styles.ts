import styled from "@emotion/styled";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";

export const Wrapper = styled.div`
  /* background-color: seagreen; */

  width: 100%;

  padding: 12px;
`;
export const CommentTitle = styled.div`
  width: 100%;
  background-color: seashell;
  margin-bottom: 12px;
`;
export const CommentsWrapper = styled.div`
  width: 100%;
  overflow: auto;
  display: flex;
  flex-direction: column;
`;
export const CommentsListWrapper = styled.div`
  background-color: skyblue;
  width: 100%;
  display: flex;
  flex-direction: row;

  margin-bottom: 12px;
`;
export const Avatar = styled.img`
  background-color: slategrey;
  width: 50px;
  height: 50px;
  border-radius: 50%;
`;

export const CommentsInnerWrapper = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  /* background-color: green; */
`;

// export const CommentsInnerDiv = styled.div`
// background-color: red;
// width: 100%;
// display: flex;
// flex-direction: row;
// justify-content: center;
// height: 50px;
// `;
export const DispalayName = styled.div`
  /* background-color: yellow; */
  height: 18px;
`;

export const CommentContentsEdit = styled.textarea`
  width: 100%;
  height: 32px;
`;
export const CommentContents = styled.div`
  width: 100%;
  height: 32px;
`;
export const CommentUpdateButton = styled(EditOutlined)`
  font-size: 15px;
`;
export const CommentDeleteButton = styled(DeleteOutlined)`
  font-size: 15px;
  margin-left: 5px;
`;
