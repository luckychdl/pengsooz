import styled from "@emotion/styled";

export const Button = styled.div`
  width: 122px;
  height: 36px;
  line-height: 36px;
  text-align: center;
  color: #1c1c1c;
  background-color: #e2e1d7;
`;

interface ISmallButtonProps {
  onClick: () => void;
  buttonName: string;
}

export default function SmallButton(props: ISmallButtonProps) {
  return <Button onClick={props.onClick}>{props.buttonName}</Button>;
}
