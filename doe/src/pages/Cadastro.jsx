import React from "react";
import styled from "styled-components";
import Container, { Content } from "../components/Container";
import { Button, Input } from "../components/Typography";
import imgFundo from "../assets/img-cadastroDoador/containerFotoDoador.png";
import InputLabel from "../components/InputLabel";

function Cadastro() {
  const ContainerForm = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
  `;
  const Titulo = styled.div`
    width: 100%;
    padding: 1rem;
  `;

  const InputsContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;

    gap: 2rem;
  `;
  const InputsContainerFilha = styled.div`
    width: 50%;
  `;

  const ButtonsContainer = styled.div`
    width: 100%;
    padding: 1rem;
  `;

  const Form = styled.form`
    display: flex;
    flex-direction: column;
    width: 60%;
    height: 100%;
    padding: 3rem;
  `;

  const ContainerTwoInputs = styled.div`
    display: flex;
    flex-direction: row;
    gap: 1rem;
  `;

  return (
    <Container backgroundSize={"46%"} imgUrl={imgFundo}>
      <Content>
        <ContainerForm>
          <Form>
            <Titulo>
              Junte-se a nós<span style={{ color: "salmon" }}>!</span>
            </Titulo>
            <InputsContainer>
              <InputsContainerFilha>
                <InputLabel label={"Nome *"} input={<Input />} />
                <InputLabel label={"Email *"} input={<Input />} />
                <InputLabel label={"Senha *"} input={<Input />} />
              </InputsContainerFilha>
              <InputsContainerFilha>
                <ContainerTwoInputs>
                  <InputLabel
                    widthLabel={"50%"}
                    label={"Nascimento *"}
                    input={<Input />}
                  />
                  <InputLabel
                    widthLabel={"44%"}
                    label={"CEP *"}
                    input={<Input />}
                  />
                </ContainerTwoInputs>
                <ContainerTwoInputs>
                  <InputLabel
                    widthLabel={"50%"}
                    label={"Estado *"}
                    input={<Input />}
                  />
                  <InputLabel
                    widthLabel={"44%"}
                    label={"Cidade *"}
                    input={<Input />}
                  />
                </ContainerTwoInputs>
                <InputLabel label={"Endereço *"} input={<Input />} />
              </InputsContainerFilha>
            </InputsContainer>
            <ButtonsContainer>
              <Button themeButton={"gray"}> Cadastrar-se </Button>{" "}
            </ButtonsContainer>
          </Form>
        </ContainerForm>
      </Content>
    </Container>
  );
}

export default Cadastro;
