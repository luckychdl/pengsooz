import styled from "@emotion/styled";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 300px;
  height: 300px;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.45) 0px 25px 25px -25px;
  margin: 0 10px 10px 0;

  position: relative;
  cursor: pointer;
  :active {
    top: 4px;
  }
`;
export const Image = styled.div`
  width: 100%;
  height: 200px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  background-image: url(${(props) => props.color});
  background-repeat: no-repeat;
  background-size: cover;
  background-position-x: center;
  background-position-y: 43%;
`;
export const Text = styled.div`
  width: 100%;
  font-size: 20px;
  height: 100px;
  padding: 0 10px;
  line-height: 100px;
  text-align: center;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  background-color: #ffffff;
`;
