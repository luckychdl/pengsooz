import styled from "@emotion/styled";

export const Button = styled.div`
  background-color: red;
  width: 122px;
  height: 36px;

  line-height: 36px;
  text-align: center;
`;

interface ISmallButtonProps {
  onClick: () => void;
  buttonName: string;
}

export default function SmallButton(props: ISmallButtonProps) {
  return <Button onClick={props.onClick}>{props.buttonName}</Button>;
}
