import styled from "@emotion/styled";
import LargeButton from "../button/large.Button";

const Wrapper = styled.div`
  background-color: gold;
  width: 184px;
  height: 108px;
  padding: 12px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export default function MenuModal(props: any) {
  return (
    <Wrapper>
      <LargeButton
        buttonName={props.buttonNameUpdate}
        onClick={props.onClickUpdate}
      />

      <LargeButton
        buttonName={props.buttonNameDelete}
        onClick={props.onClickDelete}
      />
    </Wrapper>
  );
}
