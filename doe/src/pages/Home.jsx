import React from "react";
import styled from "styled-components";
import { Button, ButtonIcon } from "../components/Typography";
import Container, { Content } from "../components/Container";

import imgBanner from "../assets/img-home/home.png";
import imgFundoPreto from "../assets/img-home/fundoPreto.png";
import imgMorador from "../assets/img-home/morador.png";
import imgHomem from "../assets/img-home/homem.png";
import imgMulher from "../assets/img-home/mulher.png";
import imgMorado2 from "../assets/img-home/morador2.png";
import imgMorado3 from "../assets/img-home/moradores.png";

import {
  ChevronLeftIcon,
  ChevronRightIcon,
  TrashIcon,
} from "@radix-ui/react-icons";
import Card from "../components/Card";

const Banner = () => {
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
};

const Objetivo = () => {
  const Photo = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 35%;
    margin-left: 5%;
    height: 70%;
    background: ${({ img }) => (img ? `url(${img})` : null)};
    background-size: 40rem;
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
                <TrashIcon height={20} width={20} color={"black"} /> Encontre as
                ongs mais proximas
              </Title>
              <Description>
                No doe! voce encontra ongs e campanhas mais proximas de sua
                localização, sem precisar sair pela cidade. com facilidade e
                acesso!
              </Description>
            </div>
            <div>
              <Title>
                <TrashIcon height={20} width={20} color={"black"} /> Participe
                da comunidade
              </Title>
              <Description>
                Comunidades voltada as ongs, permite a entrada de milhares de
                membros doadores. Voce, ong! crie sua comunidade, conecte-se e
                atraia doadores.
              </Description>
            </div>
            <div>
              <Title>
                <TrashIcon height={20} width={20} color={"black"} /> Entre na
                rede de apoio
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

const CardsValores = () => {
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
              img={
                "https://cdn.pixabay.com/photo/2017/08/16/00/29/add-person-2646097_960_720.png"
              }
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
              img={
                "https://cdn.pixabay.com/photo/2017/08/16/00/29/add-person-2646097_960_720.png"
              }
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
              img={
                "https://cdn.pixabay.com/photo/2017/08/16/00/29/add-person-2646097_960_720.png"
              }
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

const Problema = () => {
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
    text-align: ${({ textAlign}) => ( textAlign ? textAlign : "start") };
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
            <Title textAlign="center" fontSize="1.5rem" >Seja a esperança na vida de alguem </Title>
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

const VoceSabia = () => {
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
};

const CardsAvaliacao = () => {
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
          <Card
            img={imgHomem}
            author={"@Henry silva"}
            description={
              "“Eu estava com muitas coisas em casa como roupas, comida etc... acabava disperdiçando e jogando fora. Mas depois que conheci essa plataforma, achei varias ongs perto que eu nao conhecia. Com essa facilidade pude que e judar muitas pessoas com doações.”"
            }
          />
          <Card
            img={imgMulher}
            author={"@Laisis pereira"}
            description={
              "“Sou voluntaria em uma ong que ajuda pessoas em situação de rua. Esses dias estavamos pensando como nao temos divulgação e alcance para trazer mais doadores. Foi então que conheci o Doe! Arrecadamos mais nas campanhas e mais doadores”"
            }
          />
          <Card
            textAlignAuthor={"center"}
            textAlignDescription={"center"}
            description={
              <div style={{ display: "flex", flexDirection: "column" }}>
                <span>VEJA NOSSO IMPACTO</span>{" "}
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
};

function Home() {
  return (
    <div>
      <Banner />
      <Objetivo/>
      <CardsValores />
      <VoceSabia />
      <Problema />
      <CardsAvaliacao />
    </div>
  );
}

export default Home;
