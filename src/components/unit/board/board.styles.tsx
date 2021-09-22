import styled from "@emotion/styled";
import { ArrowLeftOutlined, MenuOutlined } from "@ant-design/icons";

export const HeadWrapper = styled.div`
  background: ${(props) => props.color};
  width: 100%;
  padding: 12px;
`;

export const TopWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding-bottom: 12px;
`;

export const ArrowLeftIcon = styled(ArrowLeftOutlined)`
  font-size: 20px;
`;

export const MenuIcon = styled(MenuOutlined)`
  font-size: 20px;
`;

export const BoardTitle = styled.div`
  width: 100%;
  height: 18px;
  font-family: "Oboksanghoe_B";
  font-size: 18px;
  line-height: 18px;
  text-align: center;
`;

export const BasketWrapper = styled.div`
  width: 100%;
  background-color: violet;
  display: flex;
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
  width: 100%;

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
