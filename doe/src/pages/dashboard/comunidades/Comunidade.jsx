import React, { useState } from "react";
import styled from "styled-components";
import CardCampanha from "../../../components/Cards/CardCampanha";
import CardComunidade from "../../../components/Cards/CardComunidade";
import CardDescriptionComunidade from "../../../components/Cards/CardDescriptionComunidade";
import CardInfoComunidade from "../../../components/Cards/CardInfoComunidade";
import ContainerV2 from "../../../components/ContainerV2";
import { Button } from "../../../components/Typography";

function Comunidades() {
  const [pageEnabled, setPageEnabled] = useState("CAMPANHAS");

  function Campanhas() {
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

  function Sobre() {
    const ContainerSobre = styled.div`
      width: 80%;
      /* background-color: #ff00006d; */
      padding: 1rem;
      display: flex;
      gap: 1rem;
    `;

    const ContainerDescricao = styled.div`
      width: 60%;
      /* background-color: #eaff006c; */
      padding: 1rem;
      flex-direction: column;
      display: flex;
      gap: 1rem;
    `;

    const ContainerInformacao = styled.div`
      width: 40%;
      /* background-color: #22ff006c; */
      padding: 1rem;
      display: flex;
      flex-direction: column;
      gap: 1rem;
    `;

    return (
      <ContainerSobre>
        <ContainerDescricao>
          <CardDescriptionComunidade title="SOBRE" description="Eu sou lindo" />
          <CardDescriptionComunidade title="SOBRE" description="Eu sou lindo" />
        </ContainerDescricao>
        <ContainerInformacao>
          <CardInfoComunidade title="SOBRE" description="Eu sou lindo" />
          <CardInfoComunidade title="SOBRE" description="Eu sou lindo" />
        </ContainerInformacao>
      </ContainerSobre>
    );
  }

  const ButtonsTab = styled.div`
    display: flex;
    padding: 1rem;
    justify-content: center;
    align-items: center;
    gap: 1rem;
  `;

  return (
    <ContainerV2 padding="5rem 0px 1rem 0px" gap="2rem">
      <CardComunidade
        isOpen
        banner={
          "https://static.vecteezy.com/ti/vetor-gratis/p1/834435-lindo-espaco-fundo-vetor.jpg"
        }
        perfil={
          "https://img.elo7.com.br/product/zoom/3EECB71/desenho-personalizado-para-usar-de-foto-de-perfil-e-etc-personalizado.jpg"
        }
        title={"Anjos da Noite"}
        description={
          "Campanha destinado a arrecadação de agasalhos da ong @juntosNoInverno.  Nossa campanha tem como meta agasalhar mais de 100 moradores de rua localizados......Campanha destinado a arrecadação de agasalhos da ong @juntosNoInverno.  Nossa campanha tem como meta agasalhar mais de 100 moradores de rua localizados......"
        }
        buttonsTabs={
          <ButtonsTab>
            <Button
              themeButton="tab"
              onClick={() => {
                setPageEnabled("SOBRE");
              }}
              disabled={pageEnabled === "SOBRE"}
            >
              SOBRE
            </Button>
            <Button
              themeButton="tab"
              onClick={() => {
                setPageEnabled("CAMPANHAS");
              }}
              disabled={pageEnabled === "CAMPANHAS"}
            >
              CAMPANHAS
            </Button>
          </ButtonsTab>
        }
      />
      {pageEnabled === "CAMPANHAS" ? <Campanhas /> : null}
      {pageEnabled === "SOBRE" ? <Sobre /> : null}
    </ContainerV2>
  );
}

export default Comunidades;
