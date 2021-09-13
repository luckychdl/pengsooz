import styled from "@emotion/styled";
import { PlusCircleOutlined } from "@ant-design/icons";
import { IProps } from "./WorkspaceDetail.types";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 96px;
  height: 96px;
  background: ${(props: IProps) =>
    `linear-gradient(${props.colorCode}, #f5f6fa, ${props.colorCode})`};
  border-radius: 10%;
`;
export const PlusIcon = styled(PlusCircleOutlined)`
  color: #707070;
  font-size: 30px;
`;
export const Text = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 32px;
`;
