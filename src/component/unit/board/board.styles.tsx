import styled from "@emotion/styled";
import { ArrowLeftOutlined, MenuOutlined } from "@ant-design/icons";

export const HeadWrapper = styled.div`
  background-color: royalblue;
  width: 100%;
  padding: 12px;

  /* position: fixed; */
`;

export const TopWrapper = styled.div`
  background-color: salmon;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const ArrowLeftOut = styled(ArrowLeftOutlined)`
  font-size: 20px;
`;

export const MenuOut = styled(MenuOutlined)`
  font-size: 20px;
`;

export const BodyWrapper = styled.div`
  background-color: skyblue;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const BoardBoxImg = styled.img`
  background-color: springgreen;
  width: 80px;
  height: 80px;

  /* margin-top: 12px; */
`;

export const RightWrapper = styled.div`
  background-color: slategray;
  width: 244px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

export const BoardTitle = styled.div`
  font-size: 16px;
`;

export const BasketWrapper = styled.div`
  width: 100%;
  padding-top: 12px;
  background-color: violet;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 50px;
`;

export const BeforeBasket = styled.div`
  width: 5%;

  border-top-right-radius: 8px;
  border-bottom-right-radius: 8px;

  background-color: red;
`;

export const CurrentPage = styled.div`
  width: 86%;

  background-color: green;
`;
export const AfterBasket = styled.div`
  width: 5%;
  border-top-left-radius: 8px;
  border-bottom-left-radius: 8px;

  background-color: royalblue;
`;

export const BasketPageWrapper = styled.div`
  background-color: palegreen;
  height: 20px;
  width: 100%;

  padding-top: 4px;

  display: flex;
  flex-direction: row;
  justify-content: center;

  position: fixed;
  top: 97%;
`;

export const Pages = styled.div`
  background-color: plum;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  margin-right: 4px;
`;
