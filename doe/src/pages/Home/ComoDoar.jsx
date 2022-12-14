import React from "react";
import styled from "styled-components";
import { ButtonIcon } from "../../components/Typography";
import Container, { Content } from "../../components/Container";

import imgHomem from "../../assets/img-home/homem.png";
import imgMulher from "../../assets/img-home/mulher.png";

import { ChevronLeftIcon, ChevronRightIcon } from "@radix-ui/react-icons";
import Card from "../../components/Card";

const cardVindoDoBanco = [
  {
    author: "@Henry silva",
    descricao:
      "“Eu estava com muitas coisas em casa como roupas, comida etc... acabava disperdiçando e jogando fora. Mas depois que conheci essa plataforma, achei varias ongs perto que eu nao conhecia. Com essa facilidade pude que e judar muitas pessoas com doações.”",
    imagem: `${imgHomem}`,
  },
  {
    author: "@Laisis pereira",
    descricao:
      "“Sou voluntaria em uma ong que ajuda pessoas em situação de rua. Esses dias estavamos pensando como nao temos divulgação e alcance para trazer mais doadores. Foi então que conheci o Doe! Arrecadamos mais nas campanhas e mais doadores”",
    imagem: `${imgMulher}`,
  },
];

export default function ComoDoar() {
  const ContainerBanner = styled.div`
    display: flex;
    flex-direction: row;
    gap: 3rem;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
  `;

  return (
    <Container height="90vh" id="doar">
      <Content>
        <ContainerBanner>
          {cardVindoDoBanco.map((element, index) => {
            return (
              <Card
                key={index}
                img={element.imagem}
                author={element.author}
                description={element.descricao}
              />
            );
          })}

          <Card
            textAlignAuthor={"center"}
            textAlignDescription={"center"}
            description={
              <div style={{ display: "flex", flexDirection: "column" }}>
                <span>VEJA NOSSO IMPACTO</span>
                <span style={{ fontSize: "0.9rem" }}>
                  Baseado em mais de 200+ usuarios
                </span>
              </div>
            }
            noShadowCardContainer
            author={
              <div
                style={{
                  display: "flex",
                  gap: "1rem",
                  justifyContent: "center",
                }}
              >
                <ButtonIcon>
                  <ChevronLeftIcon height={20} width={20} color={"black"} />
                </ButtonIcon>
                <ButtonIcon>
                  <ChevronRightIcon height={20} width={20} color={"black"} />
                </ButtonIcon>
              </div>
            }
          />
        </ContainerBanner>
      </Content>
    </Container>
  );
}
