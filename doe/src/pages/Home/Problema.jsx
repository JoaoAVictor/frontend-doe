import React from "react";
import styled from "styled-components";
import Container, { Content } from "../../components/Container";
import addUserIcon from "../../assets/img-home/addUserIcon.png";
import doeOngIcon from "../../assets/img-home/doeOngIcon.png";
import gpsOngIcon from "../../assets/img-home/gpsOngIcon.png";
import Card from "../../components/Card";

export default function Problema(){
  const Title = styled.div`
    color: #000000;
    font-size: ${({ fontSize }) => (fontSize ? fontSize : null)};
    text-align: start;
    line-height: ${({ lineHeight }) => (lineHeight ? lineHeight : null)};
    margin-bottom: ${({ marginBottom }) =>
      marginBottom ? marginBottom : null};
    text-transform: uppercase;
  `;
  const Description = styled.div`
    margin-bottom: ${({ marginBottom }) =>
      marginBottom ? marginBottom : "2rem"};
    width: 535px;
    color: #000000;
    font-size: ${({ fontSize }) => (fontSize ? fontSize : "0.75rem")};
    text-align: center;
    line-height: ${({ lineHeight }) => (lineHeight ? lineHeight : null)};
  `;

  const ContainerCards = styled.div`
    display: flex;
    flex-direction: row;
    gap: 3rem;
    justify-content: center;
    align-items: center;
    width: 100%;
  `;

  const ContainerDescription = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    justify-content: center;
    align-items: center;
    width: 100%;
  `;

  const ContainerBanner = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
  `;

  return (
    <Container height="80vh" id="problema">
      <Content>
        <ContainerBanner>
          <ContainerDescription>
            <Title fontSize="2rem">
              DOE<span style={{ color: "salmon" }}>!</span>
            </Title>
            <Description fontSize="1.0rem">
              Na nossa plataforma voce encontra diversas ongs e camapanhas
              voltadas a ajudar pessoas em situaçao de rua, doar nunca foi tao
              facil!
            </Description>
          </ContainerDescription>
          <ContainerCards>
            <Card
              heigthCardContainer={"300px"}
              icon={addUserIcon}
              fontSizeDescription={"0.8rem"}
              textAlignAuthor={"center"}
              textAlignDescription={"center"}
              descriptionTwo={
                "No doe! voce demora poucos minutos para criar seu cadastro, como doador ou como ong."
              }
              author={"Cadastra-se na nossa plataforma"}
            />
            <Card
              heigthCardContainer={"300px"}
              fontSizeDescription={"0.8rem"}
              icon={gpsOngIcon}
              textAlignAuthor={"center"}
              textAlignDescription={"center"}
              descriptionTwo={
                "Voce pode encontrar varias ongs proximas de sua localizaçao."
              }
              author={"Procure ongs e campanhas proximas a você"}
            />
            <Card
              heigthCardContainer={"300px"}
              fontSizeDescription={"0.8rem"}
              icon={doeOngIcon}
              textAlignAuthor={"center"}
              textAlignDescription={"center"}
              descriptionTwo={
                "Encontre todas as informaçoes, campanhas e motivaçoes das ongs que queira doar, atraves do doe! "
              }
              author={"Realize doaçoes de diversos tipos"}
            />
          </ContainerCards>
        </ContainerBanner>
      </Content>
    </Container>
  );
};
