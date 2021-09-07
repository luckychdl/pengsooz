import styled from "@emotion/styled";
import SmallButton from "../button/small.Button";
import { useRouter } from "next/router";

export const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  z-index: 1;
  position: fixed;

  background: rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(2px);
`;

export const InnerWrapper = styled.div`
  background-color: lavenderblush;
  width: 280px;
  height: 120px;
  padding: 12px;

  border-radius: 4px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;
export const ContentDiv = styled.div``;
export const ButtenDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export default function SelectorModal(props) {
  const router = useRouter();

  const onClickClose = () => {
    props.setIsOpen(false);
  };

  const onClickEnterToLoginPage = () => {
    router.push(`/`);
  };

  return (
    <>
      <Wrapper>
        <InnerWrapper>
          <ContentDiv>로그아웃 하시겠습니까?</ContentDiv>
          <ButtenDiv>
            <SmallButton buttonName="예" onClick={onClickEnterToLoginPage} />
            <SmallButton buttonName="아니요" onClick={onClickClose} />
          </ButtenDiv>
        </InnerWrapper>
      </Wrapper>
    </>
  );
}
