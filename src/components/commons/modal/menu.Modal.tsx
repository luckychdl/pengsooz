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

export default function MenuModal() {
  return (
    <Wrapper>
      <LargeButton buttonName="보드 수정하기" />

      <LargeButton buttonName="보드 삭제하기" />
    </Wrapper>
  );
}
