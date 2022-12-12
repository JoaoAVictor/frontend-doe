import React from "react";
import styled from "styled-components";
import { Button } from "../../components/Typography";
import Container, { Content } from "../../components/Container";
import imgBanner from "../../assets/img-home/home.png";

export default function Home() {
  const BannerContainer = styled.div`
    display: flex;
    align-items: center;
    border-left: solid 2px orange;
    /* background-color: orange; */
    width: 70%;
    height: 70%;
  `;
  const BannerItems = styled.div`
    margin-left: 18px;
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    gap: 1.3rem;
    /* background-color: purple; */
    width: 70%;
    height: 90%;
  `;

  const Description = styled.div`
    color: #fff;
    font-size: ${({ fontSize }) => (fontSize ? fontSize : null)};
    text-align: start;
    line-height: ${({ lineHeight }) => (lineHeight ? lineHeight : null)};
  `;

  const ContainerButton = styled.div`
    display: flex;
    gap: 1.5rem;
  `;

  return (
    <Container imgUrl={imgBanner} id="home">
      <Content>
        <BannerContainer>
          <BannerItems>
            <Description fontSize={"20px"}>
              Voce pode mudar a vida de alguem!
            </Description>
            <Description fontSize={"40px"} lineHeight={"40px"}>
              <b>Encontre pontos de doações, ajude pessoas</b>
            </Description>
            <Description fontSize={"20px"}>
              No Doe! voce encontra as ongs mais proximas do seu endereço. Venha
              fazer parte dessa grande rede de apoio e ajude pessoas em situação
              de rua.
            </Description>
            <ContainerButton>
              <Button>Cadastra-se</Button>
              <Button themeButton={"grayMirror"}>Saiba Mais</Button>
            </ContainerButton>
          </BannerItems>
        </BannerContainer>
      </Content>
    </Container>
  );
}
