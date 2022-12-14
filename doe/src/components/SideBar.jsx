import styled from "styled-components";
import React, { useState } from "react";
import { Link as LinkScroll } from "react-scroll";
import { Link } from "react-router-dom";
import { Button } from "./Typography";
import { HamburgerMenuIcon, Cross1Icon } from "@radix-ui/react-icons";

export default function SideBar({ image, name }) {
  const [pageEnabled, setPageEnabled] = useState("Perfil");
  const [isOpen, setIsOpen] = useState(false);

  const StyleHeader = styled.nav`
    position: fixed;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    width: ${isOpen ? "280px" : "0px"};
    height: 100vh;
    transition: 0.5s;
    z-index: 100000;
  `;
  const StyleUl = styled.div`
    background-color: #ffffff;
    width: ${isOpen ? "100%" : "0px"};
    height: 93%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    /* border-top: 0.5px solid orange; */
    box-shadow: -0.1px 2px 2px -0.1px rgba(22, 23, 24, 0.35);
  `;
  const StyleLi = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 100%;
    padding: 1rem;
    gap: 0.5rem;
    transition: 0.2s;
    visibility: ${isOpen ? "visible" : "hidden"};
  `;

  const CardImg = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100px;
    height: 100px;
    background: ${({ img }) => (img ? `url(${img})` : null)};
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    border-radius: 50%;
    box-shadow: 0px 10px 20px -5px rgba(22, 23, 24, 0.35),
      0px 10px 6px -5px rgba(22, 23, 24, 0.2);
    margin-bottom: 0.5rem;
  `;

  const NameUser = styled.div`
    font-weight: 500;
    font-size: 1rem;
  `;

  const ContainerButtons = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  `;

  const HamburgerMenuContainer = styled.div`
    position: relative;
    align-items: center;
    display: flex;
    justify-content: end;
    top: 2.65rem;
    left: ${isOpen ? null : "2.3rem"};
  `;

  const ButtonIcon = styled.button`
    border: none;
    justify-content: center;
    align-items: center;
    display: flex;
    padding: 0.5rem;
    color: #000000a4;
    transition: 0.2s;
    border-radius: 5px;

    background-color: #fff;

    :hover {
      color: orange;
    }
  `;

  return (
    <StyleHeader>
      <HamburgerMenuContainer>
        <ButtonIcon>
          {isOpen ? (
            <Cross1Icon
              height={25}
              width={25}
              onClick={() => {
                setIsOpen(false);
              }}
            />
          ) : (
            <HamburgerMenuIcon
              height={25}
              width={25}
              onClick={() => {
                setIsOpen(true);
              }}
            />
          )}
        </ButtonIcon>
      </HamburgerMenuContainer>
      <StyleUl>
        <StyleLi>
          <CardImg img={image} />
          <NameUser>{name}</NameUser>
        </StyleLi>

        <StyleLi>
          <ContainerButtons>
            <Button
              btnSmall
              themeButton="sidebar"
              fontSize="0.9rem"
              onClick={() => {
                setPageEnabled("Perfil");
              }}
              disabled={pageEnabled === "Perfil"}
            >
              Perfil
            </Button>

            <Button
              btnSmall
              themeButton="sidebar"
              fontSize="0.9rem"
              onClick={() => {
                setPageEnabled("Comunidades");
              }}
              disabled={pageEnabled === "Comunidades"}
            >
              Comunidades
            </Button>

            {/* <Button
              btnSmall
              themeButton="sidebar"
              fontSize="0.9rem"
              onClick={() => {
                setPageEnabled("Postagens");
              }}
              disabled={pageEnabled === "Postagens"}
            >
              Postagens
            </Button> */}
            <Button
              btnSmall
              themeButton="sidebar"
              fontSize="0.9rem"
              onClick={() => {
                setPageEnabled("Campanhas");
              }}
              disabled={pageEnabled === "Campanhas"}
            >
              Campanhas
            </Button>
            <Button
              btnSmall
              themeButton="sidebar"
              fontSize="0.9rem"
              onClick={() => {
                setPageEnabled("Loja");
              }}
              disabled={pageEnabled === "Loja"}
            >
              Loja
            </Button>
            {/* <Button
              btnSmall
              themeButton="sidebar"
              fontSize="0.9rem"
              onClick={() => {
                setPageEnabled("Localizar-Ongs");
              }}
              disabled={pageEnabled === "Localizar-Ongs"}
            >
              Localizar Ongs
            </Button> */}
          </ContainerButtons>
        </StyleLi>

        <StyleLi>
          <ContainerButtons>
            <Button btnSmall themeButton="cancel" fontSize="0.9rem">
              Sair
            </Button>
          </ContainerButtons>
        </StyleLi>
      </StyleUl>
    </StyleHeader>
  );
}
