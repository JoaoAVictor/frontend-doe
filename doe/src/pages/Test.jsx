import React from "react";
import Card from "../components/Card";
import Container, { Content } from "../components/Container";
import imgBanner from "../assets/test.jpg";
import { Button } from "../components/Typography";

// import { Container } from './styles';

function Test() {
  return (
    <Container>
      <Content>
        <Card
          banner={imgBanner}
          descriptionTwo={"oi"}
          author={"campanhaDaora"}
          paddingBody={"2rem 0.9rem "}
          others={
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "1rem",
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
              }}
            >
              <div
                style={{ textAlign: "start", display: "flex", width: "100%" }}
              >
                10.000 curtiram
              </div>
              <Button btnSmall>Doar</Button>
            </div>
          }
        ></Card>
      </Content>
    </Container>
  );
}

export default Test;
