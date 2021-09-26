import styled from "@emotion/styled";

const breakPoints = {
  tablet: `(min-width:650px)and (max-width: 1366px)`,
  web: `(min-width:1367px)`,
};

export const Wrapper = styled.div`
  position: relative;
  padding-top: 6px;
  @media ${breakPoints.web} {
  }
`;
export const CommentTitle = styled.div`
  width: 100%;
  font-family: "Oboksanghoe_B";
  /* background-color: grey; */
  @media ${breakPoints.web} {
    font-size: 25px;
    margin-bottom: 20px;
  }
`;
export const SubWrapper = styled.div`
  width: 100%;
  height: 240px;
  padding-top: 10px;
  overflow: auto;

  @media ${breakPoints.tablet} {
    height: 300px;
    padding: 0px 10px;
  }
  @media ${breakPoints.web} {
    /* height: 500px; */
    min-height: 70px;
    height: 70%;
    padding: 0px 20px;
  }
`;
