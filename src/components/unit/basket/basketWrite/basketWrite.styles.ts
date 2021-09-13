import styled from "@emotion/styled";
export const MainWrapper = styled.div`
  background-color: aqua;
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;

  /* scroll-snap-type: x mandatory;
  
  /* margin: auto; */
  scroll-snap-align: center;
`;
export const SubWrapper = styled.div`
  scroll-snap-type: x mandatory;
  width: 340px;
  margin: 0 8px;
`;
export const Wrapper = styled.div`
  background-color: red;
  width: 340px;
  padding: 12px;
  overflow: hidden;
  scroll-snap-type: x mandatory;
  display: flex;
  flex-direction: column;
  margin: 8px 8px;
  border-radius: 8px;
`;
export const BasketTitle = styled.div`
  font-size: 20px;
  font-weight: 400;
  text-align: center;
`;

export const AddBasket = styled.div`
  scroll-snap-align: center;
  font-size: 20px;
  font-weight: 400;
  width: 330px;
  text-align: center;
  scroll-snap-align: center;
`;
export const AddWrapper = styled.div`
  width: 330px;

  scroll-snap-align: center;
`;

export const BasketContainerEdit = styled.div`
  background-color: orange;
  width: 330px;
  /* height: 36px; */
  padding: 12px;
  margin: 10px 20px 12px 10px;
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
  /* width: 330px; */

  margin-top: 12px;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
