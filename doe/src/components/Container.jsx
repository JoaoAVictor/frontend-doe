import React from "react";
import styled from "styled-components";

export const Content = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;

  /* background-color: red; */
  height: ${({ heightContent }) => (heightContent ? heightContent : "500px")};
  width: ${({ widthContent }) => (widthContent ? widthContent : "1100px")};

  margin: ${({ marginContent }) => (marginContent ? marginContent : null)};
  border-radius: ${({ borderRadiusContent }) =>
    borderRadiusContent ? borderRadiusContent : null};
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  background-color: ${({ bgColor }) => (bgColor ? bgColor : null)};
  background-size: ${({ backgroundSize }) =>
    backgroundSize ? backgroundSize : "cover"};
  background-repeat: no-repeat;
  height: ${({ height }) => (height ? height : "100vh")};
  ${({ imgUrl }) => (imgUrl ? `background-image: url(${imgUrl});` : null)}
`;
export default Container;
