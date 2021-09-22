import styled from "@emotion/styled";
import { ArrowLeftOutlined, MenuOutlined } from "@ant-design/icons";

export const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;

  ::before {
    content: "";
    background-image: url(${(props) => props.color});
    background-repeat: no-repeat;
    background-size: cover;
    background-position-x: center;
    background-position-y: 43%;
    opacity: 0.6;
    position: absolute;
    top: 0px;
    left: 0px;
    right: 0px;
    bottom: 0px;
  }
`;
export const HeadWrapper = styled.div`
  position: relative;
  width: 100%;
  padding: 12px;
  background: ${(props) => props.color};
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
  position: relative;
  width: 100%;
  height: 526px;
  padding: 20px 0;
`;
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
export const BasketPage = styled.img`
  width: 16px;
  height: 16px;
  margin: 2px;
  border-radius: 50%;
`;
