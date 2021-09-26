import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  padding: 18px;
`;

export const TopWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 172px;
  padding: 0 50px 0 50px;
`;

export const LogoutButton = styled.button`
  /* align-self: flex-end; */
  width: 90px;
  height: 32px;
  border-radius: 8px;
  font-size: 16px;
  line-height: 32px;
  background-color: #e2e1d7;
`;

export const ProfileWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 140px;
  padding: 20px 0;
`;

export const Photo = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
`;

export const TextWrapper = styled.div`
  width: 100%;
  padding-left: 30px;
`;

export const DisplayName = styled.div`
  height: 28px;
  margin-bottom: 5px;
  font-family: "Oboksanghoe_B";
  font-size: 28px;
  line-height: 28px;
  color: #1c1c1c;
`;
export const Email = styled.div`
  height: 24px;
  font-family: "Oboksanghoe_L";
  font-size: 12px;
  line-height: 24px;
  color: #707070;
`;

export const MiddleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 50px 0 0 50px;
  margin-left: 50px;
  margin-right: 50px;
`;

export const Title = styled.div`
  font-size: 16px;
  padding-bottom: 10px;
`;

export const BoardsWrapper = styled.div`
  display: flex;
  align-content: flex-start;
  flex-wrap: wrap;
  grid-gap: 18px;
  overflow: scroll;
  height: 100vh;
  ::-webkit-scrollbar {
    display: none;
  }
`;
