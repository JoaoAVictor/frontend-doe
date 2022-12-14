import React from "react";
import CardComunidade from "../components/Cards/CardComunidade";
import Container, { Content } from "../components/Container";
import imgBanner from "../assets/test.jpg";
import Search from "../components/header/Search";
import Money from "../components/header/Money";
import CardCampanha from "../components/Cards/CardCampanha";

// import { Container } from './styles';

function Test() {
  return (
    <Container>
      <Content>
        {/* <CardComunidade
          banner={imgBanner}
          title={"Anjos da Noite"}
          description={
            "Campanha destinado a arrecadação de agasalhos da ong @juntosNoInverno.  Nossa campanha tem como meta agasalhar mais de 100 moradores de rua localizados......Campanha destinado a arrecadação de agasalhos da ong @juntosNoInverno.  Nossa campanha tem como meta agasalhar mais de 100 moradores de rua localizados......"
          }
        /> */}

        {/* <Search />
        <Money /> */}
        
      </Content>
    </Container>
  );
}

export default Test;
