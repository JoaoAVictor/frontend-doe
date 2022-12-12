import React from "react";
import styled from "styled-components";
import Container, { Content } from "../../components/Container";

import imgMorador from "../../assets/img-home/morador.png";


import {
  SewingPinFilledIcon,
  RocketIcon,
  EnterIcon,
} from "@radix-ui/react-icons";

export default function Sobre(){
  const Photo = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 35%;
    margin-left: 5%;
    height: 70%;
    background: ${({ img }) => (img ? `url(${img})` : null)};
    background-size: 37.8rem;
    background-repeat: no-repeat;
    background-position: center;
    border-radius: 50%;
    box-shadow: 0px 15px 45px -5px rgba(22, 23, 24, 0.35),
      0px 15px 25px -5px rgba(22, 23, 24, 0.2);
  `;
  const ContainerDescription = styled.div`
    display: "flex";
    width: 50%;
    flex-direction: column;
    gap: 1rem;
  `;

  const ContainerBanner = styled.div`
    display: flex;
    gap: 3.5rem;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
  `;

  const Title = styled.div`
    color: #000;
    font-size: ${({ fontSize }) => (fontSize ? fontSize : null)};
    text-align: start;
    line-height: ${({ lineHeight }) => (lineHeight ? lineHeight : null)};
    margin-bottom: ${({ marginBottom }) =>
      marginBottom ? marginBottom : null};
    text-transform: uppercase;
  `;
  const Description = styled.div`
    margin-bottom: ${({ marginBottom }) =>
      marginBottom ? marginBottom : "1rem"};
    color: #7f7f7f;
    font-size: ${({ fontSize }) => (fontSize ? fontSize : "0.75rem")};
    text-align: start;
    line-height: ${({ lineHeight }) => (lineHeight ? lineHeight : null)};
  `;

  return (
    <Container height="90vh" id="sobre">
      <Content>
        <ContainerBanner>
          <Photo img={imgMorador} />
          <ContainerDescription>
            <div>
              <Title style={{ color: "#fa8585" }}>DOE!</Title>
              <Title
                style={{
                  marginBottom: "1rem",
                  fontWeight: "bolder",
                  width: "70%",
                }}
                fontSize={"1.6rem"}
                lineHeight={"26px"}
              >
                Plataforma Online Que Une Ongs E Doadores!
              </Title>
            </div>
            <div>
              <Title>
                <SewingPinFilledIcon
                  height={17}
                  width={17}
                  color={"black"}
                  style={{ marginRight: "0.3rem" }}
                />
                Encontre as ongs mais proximas
              </Title>
              <Description>
                No doe! voce encontra ongs e campanhas mais proximas de sua
                localização, sem precisar sair pela cidade. com facilidade e
                acesso!
              </Description>
            </div>
            <div>
              <Title>
                <RocketIcon
                  height={17}
                  width={17}
                  color={"black"}
                  style={{ marginRight: "0.3rem" }}
                />
                Participe da comunidade
              </Title>
              <Description>
                Comunidades voltada as ongs, permite a entrada de milhares de
                membros doadores. Voce, ong! crie sua comunidade, conecte-se e
                atraia doadores.
              </Description>
            </div>
            <div>
              <Title>
                <EnterIcon
                  height={17}
                  width={17}
                  color={"black"}
                  style={{ marginRight: "0.3rem" }}
                />
                Entre na rede de apoio
              </Title>
              <Description>
                Encontre pessoas que tem muito em comum: empatia e intenção de
                ajudar pessoas em situação de rua.
              </Description>
            </div>
          </ContainerDescription>
        </ContainerBanner>
      </Content>
    </Container>
  );
};