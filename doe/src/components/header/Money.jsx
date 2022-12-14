import React from "react";
import styled from "styled-components";
import icoMoney from "../../assets/ico-money.png";

export default function Money({ valor }) {
  const ContainerMoney = styled.div`
    /* width: 150px; */
    padding: 1rem;
    /* background-color: orange; */
    display: flex;
    gap: 0.8rem;
    flex-direction: row;
  `;

  const Image = styled.img`
    width: 33px;
  `;

  const Money = styled.div`
    /* background-color: #20941e; */
    color: #464646;
  `;

  return (
    <ContainerMoney>
      <Image src={icoMoney} />
      <Money>{valor ? valor : "0"}</Money>
    </ContainerMoney>
  );
}
