import styled from "@emotion/styled";

export const Button = styled.div`
  background-color: red;
  width: 122px;
  height: 36px;

  line-height: 36px;
  text-align: center;
`;

export default function SmallButton(props) {
  return <Button onClick={props.onClick}>{props.buttonName}</Button>;
}
