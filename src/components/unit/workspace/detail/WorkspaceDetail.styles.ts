import styled from "@emotion/styled";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 96px;
  height: 96px;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.45) 0px 25px 25px -25px;
`;
export const Image = styled.img`
  width: 100%;
  height: 64px;
  border-bottom: none;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
`;
export const Text = styled.div`
  width: 100%;
  height: 32px;
  padding: 0 10px;
  line-height: 32px;
  text-align: center;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  background-color: #ffffff;
`;
