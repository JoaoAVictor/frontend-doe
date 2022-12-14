import React from "react";
import styled from "styled-components";
import ContainerV2 from "../../components/ContainerV2";
import InputLabel from "../../components/InputLabel";
import { Button, Input } from "../../components/Typography";

function Perfil() {
  const ContainerPerfil = styled.div`
    width: 80vw;
    background-color: #ff0000a3;
    height: 80vh;
    border-radius: 10px;
    padding: 5px;
    display: flex;
    flex-direction: row;
    gap: 0.5rem;
  `;

  const ContainerEditar = styled.div`
    width: 50%;
    background-color: #09ff00a2;
    height: 100%;
    border-radius: 10px;
    padding: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 3rem;
  `;

  const Form = styled.div`
    width: 50%;
    background-color: #c8ff00a2;
    border-radius: 10px;
    padding: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  `;

  const Buttons = styled.div`
    width: 50%;
    background-color: #c8ff00a2;
    border-radius: 10px;
    padding: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
  `;

  const EditarOng = () => {
    return (
      <Form>
        <InputLabel
          label={"Nome *"}
          input={
            <Input
              name="nome"
              type="text"
              placeholder="Ex: Joao Victor"
              // {...register("email")}
              autoComplete="off"
              autoFocus="off"
            />
          }
        />
        <InputLabel
          label={"Data Nascimento *"}
          input={
            <Input
              name="dataNascimento"
              type="text"
              placeholder="Ex: Joao Victor"
              // {...register("email")}
              autoComplete="off"
              autoFocus="off"
            />
          }
        />
        <Buttons>
          <Button>Atualizar</Button>
        </Buttons>
      </Form>
    );
  };

  const EditarUser = () => {
    return (
      <Form>
        <InputLabel
          label={"Nome *"}
          input={
            <Input
              name="nome"
              type="text"
              placeholder="Ex: Joao Victor"
              // {...register("email")}
              autoComplete="off"
              autoFocus="off"
            />
          }
        />
        <InputLabel
          label={"Data Nascimento *"}
          input={
            <Input
              name="dataNascimento"
              type="text"
              placeholder="Ex: Joao Victor"
              // {...register("email")}
              autoComplete="off"
              autoFocus="off"
            />
          }
        />
        <Buttons>
          <Button>Atualizar</Button>
        </Buttons>
      </Form>
    );
  };

  const EditarPerfil = () => {
    return (
      <ContainerPerfil>
        <ContainerEditar>
          <span>Editar comunidade:</span>
          <EditarOng />
        </ContainerEditar>
        <ContainerEditar>
          <span>Editar usuario:</span>
          <EditarUser />
        </ContainerEditar>
      </ContainerPerfil>
    );
  };

  return (
    <ContainerV2 padding="5rem 0px 1rem 0px" gap="2rem">
      <EditarPerfil />
    </ContainerV2>
  );
}

export default Perfil;
