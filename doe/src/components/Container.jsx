import React from "react";
import styled from "styled-components";

export const Content = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  overflow: auto;
  /* background-color: red; */
  height: 500px;
  width: 1100px;
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  background-size: ${({ backgroundSize }) =>
    backgroundSize ? backgroundSize : "cover"};
  background-repeat: no-repeat;
  height: ${({ height }) => (height ? height : "100vh")};
  ${({ imgUrl }) => (imgUrl ? `background-image: url(${imgUrl});` : null)}
`;
export default Container;
