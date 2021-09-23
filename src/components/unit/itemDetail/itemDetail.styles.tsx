import styled from "@emotion/styled";
import { ArrowLeftOutlined, DeleteOutlined } from "@ant-design/icons";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  height: 100vh;
  position: relative;
  padding: 18px;

  ::before {
    content: "";
    background-image: url(${(props) => props.color});
    background-repeat: no-repeat;
    background-size: cover;
    background-position-x: center;
    background-position-y: 43%;
    opacity: 0.5;
    position: absolute;
    top: 0px;
    left: 0px;
    right: 0px;
    bottom: 0px;
  }
`;
export const IconWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  position: relative;
  width: 100%;
`;
export const ArrowLeftIcon = styled(ArrowLeftOutlined)`
  font-size: 20px;
`;
export const DeleteIcon = styled(DeleteOutlined)`
  font-size: 20px;
`;
export const TitleWrapper = styled.div`
  width: 100%;
  height: 72px;
  position: relative;
`;
export const Text = styled.div`
  width: 100%;
  height: 40px;
  margin-bottom: 6px;
  padding-top: 12px;
  line-height: 28px;
  font-family: "Oboksanghoe_B";
`;
export const DetailTitleInput = styled.input`
  width: 100%;
  height: 32px;
  padding: 0 8px;
  overflow: auto;
  border: none;
  background-color: rgba(255, 255, 255, 0.7);
  box-shadow: rgba(0, 0, 0, 0.18) 0px 2px 4px;
  :focus {
    border: none;
    background-color: rgba(255, 255, 255, 0.7);
  }
`;
export const ConfirmTitleButton = styled.div`
  width: 100%;
  height: 32px;
  padding: 0 8px;
  line-height: 32px;
  position: absolute;
  text-align: right;
  transform: translateY(-100%);
  color: #bdbdbd;
`;
export const DetailTitleDiv = styled.div`
  width: 100%;
  height: 32px;
  padding: 0 8px;
  line-height: 32px;
  background-color: rgba(255, 255, 255, 0.7);
  box-shadow: rgba(0, 0, 0, 0.18) 0px 2px 4px;
`;
export const ContentWrapper = styled.div`
  width: 100%;
  position: relative;
`;
export const DetailContentsTextArea = styled.textarea`
  width: 100%;
  height: 120px;
  padding: 4px 8px;
  border: none;
  resize: none;
  overflow: auto;
  background-color: rgba(255, 255, 255, 0.7);
  box-shadow: rgba(0, 0, 0, 0.18) 0px 2px 4px;
  :focus {
    background-color: rgba(255, 255, 255, 0.7);
  }
`;
export const ConfirmContentButton = styled.div`
  width: 100%;
  height: 120px;
  padding: 0 8px;
  line-height: 200px;
  position: absolute;
  vertical-align: bottom;
  text-align: right;
  transform: translateY(-100%);
  color: #bdbdbd;
`;
export const DetailContentsDiv = styled.textarea`
  width: 100%;
  height: 120px;
  padding: 4px 8px;
  border: none;
  resize: none;
  background-color: rgba(255, 255, 255, 0.7);
  box-shadow: rgba(0, 0, 0, 0.18) 0px 2px 4px;
  word-break: break-all;
`;
