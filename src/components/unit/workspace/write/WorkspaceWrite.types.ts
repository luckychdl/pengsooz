import { ChangeEvent, MouseEvent } from "react";

export interface IWorkspaceWriteUIProps {
  isOpen: boolean;
  onChangeBoardTitle: (event: ChangeEvent<HTMLInputElement>) => void;
  onClickBoardColor: (event: MouseEvent<HTMLDivElement>) => void;
  onClickOpenBoardModal: () => void;
  onClickCloseBoardModal: () => void;
  onClickCreateBoard: () => void;
}
