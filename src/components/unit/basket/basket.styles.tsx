import styled from "@emotion/styled";

export const Wrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  grid-gap: 20px;
  width: 100%;
  min-height: calc(100vh - 114px) !important;
  padding-right: 20px;
  overflow-x: scroll;
  border-radius: 10px;
  scroll-snap-type: x mandatory;
  scroll-snap-align: center;
  @media (min-width: 1367px) {
    min-height: calc(100vh - 134px) !important;
  }
  @media (min-width: 650px) and (max-width: 1366px) {
    min-height: calc(100vh - 134px) !important;
  }
`;
