import React from "react";
import CardComunidade from "../components/Cards/CardComunidade";
import Container, { Content } from "../components/Container";
import imgBanner from "../assets/test.jpg";

// import { Container } from './styles';

function Test() {
  return (
    <Container>
      <Content>
        <CardComunidade
          banner={imgBanner}
          description={"sdadsadsadsa"}
          title={"oi né"}
          like={"1000"}
        />
      </Content>
    </Container>
  );
}

export default Test;
