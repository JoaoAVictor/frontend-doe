import React from "react";
import styled from "styled-components";
import CardCampanha from "../../components/Cards/CardCampanha";
import CardCupom from "../../components/Cards/CardCupom";
import ContainerV2 from "../../components/ContainerV2";

export default function Campanhas() {
  function CampanhasContainer() {
    const ContainerCards = styled.div`
      width: 80%;
      /* background-color: #ff00006d; */
      padding: 1rem;
      display: grid;
      grid-gap: 2rem;
      grid-template-columns: repeat(auto-fit, 300px);
      justify-content: center;
      justify-items: center;
    `;

    return (
      <ContainerCards>
        <CardCampanha
          banner={
            "https://static.vecteezy.com/ti/vetor-gratis/p1/834435-lindo-espaco-fundo-vetor.jpg"
          }
          title={"Anjos da Noite"}
          description={
            "Campanha destinado a arrecadação de agasalhos da ong @juntosNoInverno.  Nossa campanha tem como meta agasalhar mais de 100 moradores de rua localizados......Campanha destinado a arrecadação de agasalhos da ong @juntosNoInverno.  Nossa campanha tem como meta agasalhar mais de 100 moradores de rua localizados......"
          }
          like="1000"
        />
      </ContainerCards>
    );
  }
  return (
    <ContainerV2 padding="5rem 0px 1rem 0px" gap="2rem">
      <CampanhasContainer />
    </ContainerV2>
  );
}
