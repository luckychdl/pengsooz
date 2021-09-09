import styled from "@emotion/styled";
import { ArrowLeftOutlined, MenuOutlined } from "@ant-design/icons";

export const Wrapper = styled.div`
  background-color: plum;
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  padding: 12px;
`;

export const TopWrapper = styled.div`
  background-color: gold;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const ArrowLeftOut = styled(ArrowLeftOutlined)`
  font-size: 20px;
`;

export const DetailTitle = styled.div`
  background-color: royalblue;
  width: 100%;
`;
export const Text = styled.div`
  background-color: salmon;
  margin-bottom: 6px;
  margin-top: 12px;
`;

export const InnerDiv = styled.div`
  background-color: rebeccapurple;

  position: relative;
`;
export const DetailTitleInput = styled.input`
  width: 100%;
  height: 32px;

  padding: 0 12px;

  overflow: auto;

  :focus {
    background-color: #bbb;
  }
`;

export const DetailTitleDiv = styled.div`
  width: 100%;
  height: 32px;
  line-height: 32px;

  padding: 0 12px;

  /* overflow: auto; */
  overflow: auto;
`;

export const ConfirmButton = styled.div`
  /* background-color: royalblue; */
  height: 32px;
  line-height: 32px;

  right: 12px;
  transform: translateY(-100%);

  position: absolute;
`;
export const DetailContents = styled.div`
  width: 100%;
  background-color: salmon;
`;
export const DetailContentsTextArea = styled.textarea`
  width: 100%;
  height: 120px;
  padding: 4px 12px;

  overflow: auto;

  :focus {
    background-color: #bbb;
  }
`;

export const DetailContentsDiv = styled.div`
  width: 100%;
  height: 120px;
  padding: 4px 12px;

  overflow: auto;
`;
