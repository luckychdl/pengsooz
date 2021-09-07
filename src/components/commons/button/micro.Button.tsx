import styled from "@emotion/styled";

export const Button = styled.div`
  background-color: red;
  width: 88px;
  height: 24px;

  line-height: 24px;
  text-align: center;
`;

export default function MicroButton(props) {
  return <Button onClick={props.onClick}>{props.buttonName}</Button>;
}
