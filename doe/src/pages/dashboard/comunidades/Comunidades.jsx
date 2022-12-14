import React from "react";
import CardComunidade from "../../../components/Cards/CardComunidade";
import ContainerV2 from "../../../components/ContainerV2";

function Comunidades() {
  return (
    <ContainerV2 padding="5rem 0px 1rem 0px" gap="2rem">
      <CardComunidade
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
      />

      <CardComunidade
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
      />
    </ContainerV2>
  );
}

export default Comunidades;
