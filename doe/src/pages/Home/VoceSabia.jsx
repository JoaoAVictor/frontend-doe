import React from "react";
import styled from "styled-components";
import Container, { Content } from "../../components/Container";

import imgFundoPreto from "../../assets/img-home/fundoPreto.png";

export default function VoceSabia() {
  const ContainerBanner = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: start;
    width: 100%;
    height: 100%;
  `;

  const Title = styled.div`
    color: #ffffff;
    font-weight: bolder;
    font-size: ${({ fontSize }) => (fontSize ? fontSize : null)};
    text-align: start;
    line-height: ${({ lineHeight }) => (lineHeight ? lineHeight : null)};
    margin-bottom: ${({ marginBottom }) =>
      marginBottom ? marginBottom : null};
    text-transform: uppercase;
  `;

  const Description = styled.div`
    color: #fff;
    font-size: ${({ fontSize }) => (fontSize ? fontSize : null)};
    text-align: start;
    line-height: ${({ lineHeight }) => (lineHeight ? lineHeight : null)};
  `;

  return (
    <Container imgUrl={imgFundoPreto}>
      <Content>
        <ContainerBanner>
          <Title fontSize="2rem">Voce sabia?</Title>
          <Title fontSize="1.6rem">
            Existem +815 mil ongs ativas no brasil.
          </Title>
          <Description>
            Apesar do grande numero, ainda não é o suficiente por conta da
            maioria dessas organizações partirem de pessoas simples, sem muita
            renda e com o puro desejo de ajudar o próximo, muita das vezes as
            pessoas nem sabem da existencia dessas ongs por não ter alcance e
            divulgação o suficiente, o que torna um grande desafio para a
            jornada.
          </Description>
        </ContainerBanner>
      </Content>
    </Container>
  );
}
