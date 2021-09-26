import styled from "@emotion/styled";
import { PlusCircleOutlined } from "@ant-design/icons";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 300px;
  height: 300px;
  border: 2px dotted #707070;
  border-radius: 10%;
  cursor: pointer;
  position: relative;
  :active {
    top: 4px;
  }
`;
export const PlusIcon = styled(PlusCircleOutlined)`
  color: #707070;
  font-size: 30px;
`;
