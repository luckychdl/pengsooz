import { Wrapper, Text } from "./WorkspaceDetail.styles";
import { IWorkspaceDetailUIProps } from "./WorkspaceDetail.types";

const WorkspaceDetailUI = (props: IWorkspaceDetailUIProps) => {
  return (
    <Wrapper
      onClick={props.onClickMoveToBoard}
      colorCode={props.boards?.data().colorCode}
    >
      <Text>{props.boards?.data().title}</Text>
    </Wrapper>
  );
};

export default WorkspaceDetailUI;
