import React, { useState } from "react";
import { Link as LinkScroll } from "react-scroll";
import styled from "styled-components";

export default function Options() {
  const [pageDisabled, setPageDisabled] = useState("");

  const StyledUl = styled.div`
    display: flex;
    gap: 1.5rem;
    width: 50%;
    height: 100%;
    justify-content: flex-start;
    align-items: center;
  `;
  const StyledDiv = styled.button`
    cursor: pointer;
    border: none;
    background-color: transparent;
    transition: 0.2s;
    :hover {
      color: grey;
    }
    :disabled {
      color: orange;
    }
  `;

  return (
    <StyledUl>
      <LinkScroll
        activeClass="active"
        to="home" // aqui você vai colocar o id do componente que vc quer ir
        spy={true}
        smooth={true}
        offset={-45}
        duration={1000}
      >
        <StyledDiv
          onClick={() => {
            setPageDisabled("Home");
          }}
          disabled={pageDisabled === "Home"}
        >
          Home
        </StyledDiv>
      </LinkScroll>

      <LinkScroll
        activeClass="active"
        to="sobre" // aqui você vai colocar o id do componente que vc quer ir
        spy={true}
        smooth={true}
        offset={-45}
        duration={1000}
      >
        <StyledDiv
          onClick={() => {
            setPageDisabled("Sobre");
          }}
          disabled={pageDisabled === "Sobre"}
        >
          Sobre
        </StyledDiv>
      </LinkScroll>

      <LinkScroll
        activeClass="active"
        to="problema" // aqui você vai colocar o id do componente que vc quer ir
        spy={true}
        smooth={true}
        offset={-45}
        duration={1000}
      >
        <StyledDiv
          onClick={() => {
            setPageDisabled("Problema");
          }}
          disabled={pageDisabled === "Problema"}
        >
          Problema
        </StyledDiv>
      </LinkScroll>

      <LinkScroll
        activeClass="active"
        to="objetivo" // aqui você vai colocar o id do componente que vc quer ir
        spy={true}
        smooth={true}
        offset={-45}
        duration={1000}
      >
        <StyledDiv
          onClick={() => {
            setPageDisabled("Nosso-Objetivo");
          }}
          disabled={pageDisabled === "Nosso-Objetivo"}
        >
          Nosso Objetivo
        </StyledDiv>
      </LinkScroll>

      <LinkScroll
        activeClass="active"
        to="doar" // aqui você vai colocar o id do componente que vc quer ir
        spy={true}
        smooth={true}
        offset={-45}
        duration={1000}
      >
        <StyledDiv
          onClick={() => {
            setPageDisabled("Como-doar");
          }}
          disabled={pageDisabled === "Como-doar"}
        >
          Como doar
        </StyledDiv>
      </LinkScroll>
    </StyledUl>
  );
}
