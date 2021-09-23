import styled from "@emotion/styled";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";

export const Wrapper = styled.div`
  width: 100%;
`;
export const CommentsWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;
export const CommentsListWrapper = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  align-items: center;
  margin-bottom: 5px;
`;
export const Avatar = styled.img`
  background-color: slategrey;
  width: 30px;
  height: 30px;
  border-radius: 50%;
`;
export const CommentsInnerWrapper = styled.div`
  height: 40px;
  display: flex;
  flex-direction: column;
  padding: 0 10px;
`;
export const CommentEdit = styled.input`
  height: 20px;
  padding: 0 5px;
  font-size: 10px;
  outline: none;
  border: none;
  border-radius: 5px;
  background: ${(props) => props.color};
  box-shadow: rgba(0, 0, 0, 0.18) 0px 2px 4px;
`;

export const DispalayName = styled.div`
  height: 20px;
  font-size: 10px;
  line-height: 20px;
`;

export const CommentContents = styled.div`
  height: 20px;
  padding: 0 5px;
  font-size: 10px;
  text-align: center;
  line-height: 20px;
  background: ${(props) => props.color};
  border-radius: 5px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
    rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
`;
export const CommentUpdateButton = styled(EditOutlined)`
  align-self: flex-end;
  font-size: 12px;
  margin-bottom: 2px;
`;
export const CommentDeleteButton = styled(DeleteOutlined)`
  align-self: flex-end;
  font-size: 12px;
  margin-bottom: 2px;
  margin-left: 5px;
`;
