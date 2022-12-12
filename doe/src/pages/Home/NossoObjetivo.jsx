import React from "react";
import styled from "styled-components";
import Container, { Content } from "../../components/Container";

import imgMorado2 from "../../assets/img-home/morador2.png";
import imgMorado3 from "../../assets/img-home/moradores.png";


export default function NossoObjetivo(){
  const Photo = styled.img`
    width: 300px;
  `;

  const ContainerProblema = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    width: 100%;
    height: 100%;
  `;

  const Title = styled.div`
    color: #000;
    font-size: ${({ fontSize }) => (fontSize ? fontSize : null)};
    text-align: ${({ textAlign }) => (textAlign ? textAlign : "start")};
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

  const ContainerTitulo = styled.div`
    width: 100%;
  `;

  const ContainerDescricao = styled.div`
    width: 100%;
    flex-direction: row;
    display: flex;
  `;
  const ContainerDescricaoFilha = styled.div`
    flex-direction: column;
    display: flex;
    justify-content: center;
    padding: 0px 2rem;
    gap: 2rem;
    align-items: center;

    width: 50%;
  `;

  const ContainerTituloEDescricao = styled.div`
    width: 100%;
    gap: 0.7rem;
    display: flex;
    flex-direction: column;
  `;

  return (
    <Container height="90vh" id="objetivo">
      <Content>
        <ContainerProblema>
          <ContainerTitulo>
            <Title textAlign="center" fontSize="1.5rem">
              Seja a esperança na vida de alguem
            </Title>
          </ContainerTitulo>
          <ContainerDescricao>
            <ContainerDescricaoFilha>
              <ContainerTituloEDescricao>
                <Title>Pessoas em situacao de rua só aumentam</Title>
                <Description>
                  Com uma taxa enorme de desemprego no Brasil de 11,1%,
                  Analfabetismo e inflação a pobreza segue aumentando, um
                  indicativo disso é a pesquisa do IPEA que nos mostra que a
                  quantidade de pessoas desabrigadas só aumentam, de acordo com
                  os dados do CENSO SUAS, de setembro de 2012 até Março de 2020
                  o aumento de pessoas em situação de rua foi de 139%
                </Description>
              </ContainerTituloEDescricao>
              <Photo src={imgMorado2} />
            </ContainerDescricaoFilha>

            <ContainerDescricaoFilha>
              <Photo src={imgMorado3} />
              <ContainerTituloEDescricao>
                <Title>Pessoas em situaçao de rua precisam doaçoes</Title>
                <Description>
                  A vida nas ruas os expõe a constantes situações de violência
                  física e psíquica, o morador de rua perde todos os direitos
                  sociais e torna-se uma pessoa invisível para a sociedade,
                  passando por varias dificuldades, como fome, higiene, falta de
                  itens basicos e etc... podemos lutar contribuindo para uma
                  sociedade mais justa e igualitária atraves da doaçao aos que
                  necessitam.
                </Description>
              </ContainerTituloEDescricao>
            </ContainerDescricaoFilha>
          </ContainerDescricao>
        </ContainerProblema>
      </Content>
    </Container>
  );
};