import styled from "@emotion/styled";

export const SubWrapper = styled.div`
  scroll-snap-type: x mandatory;
`;
export const Wrapper = styled.div`
  background-color: red;
  width: 330px;
  padding: 12px;
  margin-left: 12px;
  overflow: hidden;
  scroll-snap-align: center;
  display: flex;
  flex-direction: column;

  border-radius: 8px;
`;
export const BasketTitle = styled.div`
  font-size: 20px;
  font-weight: 400;
  text-align: center;
`;

export const AddBasket = styled.div`
  font-size: 20px;
  font-weight: 400;
  width: 320px;
  text-align: center;
`;
export const AddWrapper = styled.div`
  width: 100%;
`;

export const BasketContainerEdit = styled.div`
  background-color: orange;
  width: 330px;
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

export const BasketEditInput = styled.input`
  width: 100%;
  height: 36px;
`;

export const BasketBtnDiv = styled.div`
  background-color: orchid;
  width: 100%;

  margin-top: 12px;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
export const DetailWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;
export const ShowDetail = styled.div`
  height: 15px;
`;
export const AlignWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 165px;
`;
