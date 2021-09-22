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
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 50px;
  background-color: violet;
`;
// export const BeforeBasket = styled.div`
//   width: 5%;
//   border-top-right-radius: 8px;
//   border-bottom-right-radius: 8px;
//   background-color: red;
// `;
// export const CurrentPage = styled.div`
//   width: 100%;
//   background-color: green;
// `;
// export const AfterBasket = styled.div`
//   width: 5%;
//   border-top-left-radius: 8px;
//   border-bottom-left-radius: 8px;
//   background-color: royalblue;
// `;
export const BasketPageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 40px;
  background: ${(props) => props.color};
`;
export const Pages = styled.img`
  width: 16px;
  height: 16px;
  margin: 2px;
  border-radius: 50%;
`;
