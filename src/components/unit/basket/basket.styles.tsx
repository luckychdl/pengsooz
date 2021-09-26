import styled from "@emotion/styled";

export const Wrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  /* grid-gap: 1px; */
  width: 100%;
  padding: 0, 20px;
  min-height: calc(100vh - 140px) !important;
  padding-right: 20px;
  overflow-x: scroll;
  border-radius: 10px;
  scroll-snap-type: x mandatory;
  scroll-snap-align: center;
`;
