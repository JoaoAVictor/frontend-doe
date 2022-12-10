import styled from "styled-components";
import React from "react";
import logo from "../assets/logoTipoDoe.png";
import { Button } from "./Typography";

export default function Header({ rule }) {
  const StyledHeader = styled.nav`
    position: fixed;
    display: flex;
    width: 100%;
    height: 7%;
    background-color: white;
    justify-content: space-evenly;
    align-items: center;
  `;
  const StyledUl = styled.div`
    display: flex;
    gap: 1.5rem;
    width: 50%;
    height: 100%;
    justify-content: flex-start;
    align-items: center;
  `;
  const StyledDiv = styled.div``;

  const Image = styled.img`
    width: 75px;
  `;

  const ContainerButton = styled.div`
    display: flex;
    gap: 1.5rem;
  `;

  function Options() {
    return (
      <StyledUl>
        <StyledDiv>Home</StyledDiv>
        <StyledDiv>Sobre</StyledDiv>
        <StyledDiv>Problema</StyledDiv>
        <StyledDiv>Nosso Objetivo</StyledDiv>
        <StyledDiv>Como doar</StyledDiv>
      </StyledUl>
    );
  }

  return (
    <StyledHeader>
      <Image src={logo} />
      <Options />
      <ContainerButton>
        <Button fontSize="0.95rem" >Entrar</Button>
        <Button fontSize="0.95rem" themeButton={"gray"}>
          Cadastra-se
        </Button>
      </ContainerButton>
    </StyledHeader>
  );
}
