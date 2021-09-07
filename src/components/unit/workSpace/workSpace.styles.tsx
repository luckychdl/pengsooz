import styled from "@emotion/styled";

export const Wrapper = styled.div`
  background-color: fuchsia;
  width: 100%;
`;

export const TopWrapper = styled.div`
  background-color: gold;
  width: 100%;
  height: 140px;
  padding: 0px 12px;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const Avatar = styled.img`
  background-color: greenyellow;
  width: 100px;
  height: 100px;

  border-radius: 50%;
`;

export const DisplayName = styled.div`
  font-size: 32px;
`;

export const LogoutButton = styled.div`
  background-color: honeydew;

  width: 72px;
  height: 32px;

  border-radius: 8px;
  text-align: center;
  line-height: 32px;
`;
