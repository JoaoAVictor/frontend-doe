import React from "react";
import Container, { Content } from "./Container";
import imgBanner from "../assets/img-home/fundo-cinza.png";
import styled from "styled-components";
import { ButtonIcon } from "./Typography";
import {
  InstagramLogoIcon,
  LinkedInLogoIcon,
  GitHubLogoIcon,
} from "@radix-ui/react-icons";
// import { Button } from "../../components/Typography";
// import { Link } from "react-router-dom";
// import { Link as LinkScroll } from "react-scroll";

export default function Footer() {
  const TextContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 2rem;
    width: 70%;
    height: 70%;
  `;

  const BannerItems = styled.div`
    margin-left: 250px;
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    gap: 1.3rem;
    /* background-color: purple; */
    width: 77%;
    height: 90%;
  `;

  const Title = styled.div`
    color: #ffffff;
    font-weight: bolder;
    font-size: ${({ fontSize }) => (fontSize ? fontSize : null)};
    text-align: center;
    line-height: ${({ lineHeight }) => (lineHeight ? lineHeight : null)};
    margin-bottom: ${({ marginBottom }) =>
      marginBottom ? marginBottom : null};
    text-transform: uppercase;
  `;

  const ButtonContainer = styled.div`
    display: flex;
    gap: 1rem;
    flex-direction: row;
    align-items: center;
  `;

  const Description = styled.div`
    color: #fff;
    font-size: ${({ fontSize }) => (fontSize ? fontSize : null)};
    text-align: center;
    line-height: ${({ lineHeight }) => (lineHeight ? lineHeight : null)};
  `;

  // const ContainerButton = styled.div`
  //   display: flex;
  //   gap: 1.5rem;
  // `;

  return (
    <Container imgUrl={imgBanner}>
      <Content>
        <BannerItems />
        <BannerItems>
          <TextContainer>
            <div>
              <Title>Atendimento</Title>
              <Description>Central De Relacionamento</Description>
              <Description> 0800 275 6398</Description>
            </div>
            <div>
              <Title>Email de contato </Title>
              <Description>doeajuda@gmail.com</Description>
              <Description>doecontato@gmail.com</Description>
            </div>
            <div>
              <Title> Nos Acompanhe </Title>
              <ButtonContainer>
                <ButtonIcon>
                  <InstagramLogoIcon height={20} width={20} color={"black"} />
                </ButtonIcon>
                <ButtonIcon>
                  <LinkedInLogoIcon height={20} width={20} color={"black"} />
                </ButtonIcon>
                <ButtonIcon>
                  <GitHubLogoIcon height={20} width={20} color={"black"} />
                </ButtonIcon>
              </ButtonContainer>
            </div>
          </TextContainer>
        </BannerItems>
        <Description>Todos direitos reservados ao ©DOE! 2022</Description>
      </Content>
    </Container>
  );
}
