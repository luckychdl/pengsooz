import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 100%;
`;

export const ItemContainerEdit = styled.div`
  background-color: orange;
  width: 100%;
  /* height: 36px; */
  padding: 12px;
  margin-bottom: 12px;

  line-height: 36px;
  border-radius: 4px;
  overflow: hidden;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const ItemEditInput = styled.input`
  width: 100%;
  height: 36px;
`;

export const ItemBtnDiv = styled.div`
  background-color: orchid;
  width: 100%;

  margin-top: 12px;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
