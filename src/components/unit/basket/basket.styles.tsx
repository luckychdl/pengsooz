import styled from "@emotion/styled";
export const MainWrapper = styled.div`
  scroll-snap-type: x mandatory;
  scroll-snap-align: center;
  background-color: aqua;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
  /* margin: 0 20px; */
  /* padding-left: 20px; */
  overflow: auto;
`;
