import React, { useState } from "react";
import styled from "styled-components";
import Container, { Content } from "../components/Container";
import { Button, Input } from "../components/Typography";
import imgFundo from "../assets/img-cadastroDoador/containerFotoDoador.png";
import InputLabel from "../components/InputLabel";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { cadastroApi } from "../api";

function Cadastro() {
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

  const validationSenha =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[$*&@#])[0-9a-zA-Z$*&@#]{8,}$/;

  const validationSchema = yup.object({
    nome: yup.string().required("requirido"),
    dataNascimento: yup.string().required("requirido"),
    email: yup.string().email("Digite um email valído").required("requirido"),
    emailConfirma: yup
      .string()
      .email("Digite um email valído")
      .required("requirido")
      .oneOf([yup.ref("email")], "os emails devem ser iguais!"),
    senha: yup
      .string()
      .matches(
        validationSenha,
        "Use oito ou mais caracteres com uma combinação de letras, números e símbolos"
      )
      .required("requirido"),
    senhaConfirma: yup
      .string()
      .required("requirido")
      .oneOf([yup.ref("senha")], "as senhas devem ser iguais!"),
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

  const onSubmit = (data) => {
    setErrors({});

    console.log("data: ", data);

    cadastroApi(data);

    // api
    //   .post(`/users`, data)
    //   .then((res) => {
    //     toast.success("Cadastro concluído!");
    //   })
    //   .catch((erro) => {
    //     toast.warning("Cadastro inválido!");
    //   });
  };

  return (
    <Container backgroundSize={"100vh"} imgUrl={imgFundo}>
      <Content>
        <ContainerForm>
          <Form id="form-cadastro" onSubmit={handleSubmit(onSubmit, onError)}>
            <Titulo>
              Junte-se a nós<span style={{ color: "salmon" }}>!</span>
            </Titulo>
            <InputsContainer>
              <InputsContainerFilha>
                <InputLabel
                  errorLabel={errors?.nome?.message}
                  label={"Nome *"}
                  input={
                    <Input
                      name="nome"
                      placeholder="Joao Victor"
                      type="text"
                      {...register("nome")}
                    />
                  }
                />
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
                  errorLabelDown={errors?.senha?.message}
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
              <InputsContainerFilha>
                <InputLabel
                  errorLabel={errors?.dataNascimento?.message}
                  label={"DataNascimento *"}
                  input={
                    <Input
                      name="dataNascimento"
                      placeholder="************"
                      type="date"
                      {...register("dataNascimento")}
                    />
                  }
                />
                <InputLabel
                  errorLabel={errors?.emailConfirma?.message}
                  label={"Confirma Email *"}
                  input={
                    <Input
                      name="emailConfirma"
                      type="text"
                      placeholder="Ex: email@example.com"
                      {...register("emailConfirma")}
                      autoComplete="off"
                      autoFocus="off"
                    />
                  }
                />
                <InputLabel
                  errorLabelDown={errors?.senhaConfirma?.message}
                  label={"Confirma Senha *"}
                  input={
                    <Input
                      name="senhaConfirma"
                      placeholder="************"
                      type="password"
                      {...register("senhaConfirma")}
                      autoComplete="off"
                      autoFocus="off"
                    />
                  }
                />
              </InputsContainerFilha>
            </InputsContainer>
            <ButtonsContainer>
              <Button type="submit" themeButton={"gray"}>
                Registrar Conta!
              </Button>
              <ButtonLabel label={"Já tem uma conta? Faça Login!"} />
            </ButtonsContainer>
          </Form>
        </ContainerForm>
      </Content>
    </Container>
  );
}

export default Cadastro;
