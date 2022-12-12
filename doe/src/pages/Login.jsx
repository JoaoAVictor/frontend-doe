import React, { useState } from "react";
import styled from "styled-components";
import Container, { Content } from "../components/Container";
import { Button, Input } from "../components/Typography";
import imgFundo from "../assets/imgs-login/containerfotologin.png";
import InputLabel from "../components/InputLabel";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from "react-toastify";
import * as yup from "yup";
import api from "../api";
import { useNavigate } from "react-router-dom";

function Login() {
  const [errors, setErrors] = useState({});
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
    justify-content: center;
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

  const ButtonLabel = styled.div`
    font-size: 13;
    margin-bottom: 15;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
  `;

  const validationSchema = yup.object({
    email: yup.string().email("Digite um email valído").required("requirido"),
    senha: yup.string().required("requirido"),
  });

  const { register, handleSubmit, setValue, getValues, reset } = useForm({
    // defaultValues: {
    //   firstName: "",
    //   lastName: "",
    //   category: "",
    //   checkbox: [],
    //   radio: "",
    // },
    resolver: yupResolver(validationSchema),
  });

  const onError = (err) => {
    setErrors({
      ...err,
    });
    console.log("erro: ", err);
  };

  const onSubmit = (dataForm) => {
    setErrors({});

    console.log("data: ", dataForm);
    api
      .get(`/users`, dataForm)
      .then((res) => {
        res.data.map((element, indice) => {
          if (
            dataForm.email == element.email &&
            dataForm.senha == element.senha
          ) {
            toast.success("Login concluído!");
            // setTimeout(() => {
            // }, 100);
            return;
          }
        });
        toast.warning("Login inválido!");
        return;
      })
      .catch((erro) => {
        toast.warning("Login inválido!");
      });
  };

  return (
    <Container backgroundSize={"46%"} imgUrl={imgFundo}>
      <Content>
        <ContainerForm>
          <Form id="form-login" onSubmit={handleSubmit(onSubmit, onError)}>
            <Titulo>
              Entrar no DOE<span style={{ color: "salmon" }}>!</span>
            </Titulo>
            <InputsContainer>
              <InputsContainerFilha>
                <InputLabel
                  errorLabel={errors?.email?.message}
                  label={"Email *"}
                  input={
                    <Input
                      name="email"
                      type="text"
                      placeholder="Ex: email@example.com"
                      {...register("email")}
                      autoComplete="off"
                      autoFocus="off"
                    />
                  }
                />
                <InputLabel
                  errorLabel={errors?.senha?.message}
                  label={"Senha *"}
                  input={
                    <Input
                      name="senha"
                      placeholder="************"
                      type="password"
                      {...register("senha")}
                      autoComplete="off"
                      autoFocus="off"
                    />
                  }
                />
              </InputsContainerFilha>
            </InputsContainer>
            <ButtonsContainer>
              <Button type="submit" themeButton={"gray"}>
                Fazer Login!
              </Button>
              <ButtonLabel label={"Não tem uma conta? registre-se já!"} />
            </ButtonsContainer>
          </Form>
        </ContainerForm>
      </Content>
    </Container>
  );
}

export default Login;
