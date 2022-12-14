import styled from "styled-components";
import React from "react";
import logo from "../../assets/logoTipoDoe.png";
import { Link } from "react-router-dom";

import Options from "./Options";
import ButtonsAccess, { ButtonsCriarOrg } from "./ButtonsAccess";
import Search from "./Search";
import Money from "./Money";
import { Button } from "../Typography";

export default function Header({ onAuth }) {
  const StyledHeader = styled.nav`
    position: fixed;
    display: flex;
    width: 100%;
    height: 7%;
    background-color: white;
    justify-content: space-evenly;
    align-items: center;
    box-shadow: -0.1px -1px 4px -0.1px rgba(22, 23, 24, 0.35);
    z-index: 100000;
  `;

  const HeaderDescription = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 80%;
  `;

  const Image = styled.img`
    width: 75px;
  `;

  const ContainerSearch = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    width: 60%;
  `;

  const ContainerMoneyButton = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  `;

  const Dashboard = () => {
    return (
      <>
        <ContainerSearch>
          <Search />
        </ContainerSearch>
        <ContainerMoneyButton>
          {/* <ButtonsCriarOrg /> */}
          <Money valor="3.200" />
        </ContainerMoneyButton>
      </>
    );
  };

  return (
    <StyledHeader>
      <Link to={"/"}>
        <Image src={logo} />
      </Link>
      <HeaderDescription>
        {onAuth ? (
          <Dashboard />
        ) : (
          // <></>
          <>
            <Options />
            <ButtonsAccess />
          </>
        )}
      </HeaderDescription>
    </StyledHeader>
  );
}
