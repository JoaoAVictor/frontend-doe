import React from "react";
import styled from "styled-components";
import Container, { Content } from "../components/Container";
import { Button, Input } from "../components/Typography";
import imgFundo from "../assets/img-cadastroDoador/containerFotoDoador.png";
import InputLabel from "../components/InputLabel";
import { useForm } from "react-hook-form";
// import { yupResolver } from "@hookform/resolvers/yup";
// import * as yup from "yup";
import { cadastroApi } from "../api";
import axios from "axios";

function CadastroOrg() {
  // const [errors, setErrors] = useState({});

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

  // const validationSenha =
  //   /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[$*&@#])[0-9a-zA-Z$*&@#]{8,}$/;

  // const validationSchema = yup.object({
  //   nome: yup.string().required("requirido"),
  //   dataNascimento: yup.string().required("requirido"),
  //   email: yup.string().email("Digite um email valído").required("requirido"),
  //   emailConfirma: yup
  //     .string()
  //     .email("Digite um email valído")
  //     .required("requirido")
  //     .oneOf([yup.ref("email")], "os emails devem ser iguais!"),
  //   senha: yup
  //     .string()
  //     .matches(
  //       validationSenha,
  //       "Use oito ou mais caracteres com uma combinação de letras, números e símbolos"
  //     )
  //     .required("requirido"),
  //   senhaConfirma: yup
  //     .string()
  //     .required("requirido")
  //     .oneOf([yup.ref("senha")], "as senhas devem ser iguais!"),
  // });

  const { register, handleSubmit, setValue, getValues, reset } = useForm({
    // defaultValues: {
    //   firstName: "",
    //   lastName: "",
    //   category: "",
    //   checkbox: [],
    //   radio: "",
    // },
    // resolver: yupResolver(validationSchema),
  });

  // const onError = (err) => {
  //   setErrors({
  //     ...err,
  //   });
  //   console.log("erro: ", err);
  // };

  const onSubmit = (data) => {
    // setErrors({});

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

  const getAddress = async (cepRecebido) => {
    const { data } = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
    console.log(data);
    setValue("cep", cepRecebido);
    setValue("rua", data.logradouro);
    setValue("cidade", data.localidade);
    setValue("uf", data.uf);
    setValue("bairro", data.bairro);
  };

  return (
    <Container backgroundSize={"100vh"} imgUrl={imgFundo}>
      <Content>
        <ContainerForm>
          <Form id="form-registrationOrg" onSubmit={handleSubmit(onSubmit)}>
            <InputsContainer>
              <InputsContainerFilha>
                <Titulo>
                  Dados<span style={{ color: "salmon" }}>!</span>
                </Titulo>
                <InputLabel
                  // errorLabel={errors?.nome?.message}
                  label={"Razão Social *"}
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
                  // errorLabel={errors?.email?.message}
                  label={"CNPJ *"}
                  input={
                    <Input
                      name="cnpj"
                      type="text"
                      placeholder="Ex: XX. XXX. XXX/0001-XX"
                      {...register("email")}
                      autoComplete="off"
                      autoFocus="off"
                    />
                  }
                />
                <InputLabel
                  // errorLabelDown={errors?.senha?.message}
                  label={"Numero *"}
                  input={
                    <Input
                      name="contato"
                      placeholder="(11) 9 8598-5321"
                      type="text"
                      {...register("senha")}
                      autoComplete="off"
                      autoFocus="off"
                    />
                  }
                />
              </InputsContainerFilha>
              <InputsContainerFilha>
                <Titulo>
                  Endereço<span style={{ color: "salmon" }}>!</span>
                </Titulo>
                <ContainerTwoInputs>
                  <InputLabel
                    widthLabel="50%"
                    // errorLabel={errors?.dataNascimento?.message}
                    label={"CEP *"}
                    input={
                      <Input
                        name="cep"
                        placeholder="00000-000"
                        type="txt"
                        {...register("cep")}
                        defaultValue={getValues("cep")}
                      />
                    }
                  />
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginBottom: "-6px",
                    }}
                  >
                    <div btnSmall onClick={() => getAddress("08452-630")}>
                      Buscar
                    </div>
                  </div>
                </ContainerTwoInputs>
                <InputLabel
                  // errorLabel={errors?.emailConfirma?.message}
                  label={"Rua *"}
                  input={
                    <Input
                      name="rua"
                      type="text"
                      placeholder="Ex: rua"
                      {...register("rua")}
                      autoComplete="off"
                      autoFocus="off"
                      defaultValue={getValues("rua")}
                    />
                  }
                />
                <InputLabel
                  // errorLabel={errors?.emailConfirma?.message}
                  label={"Cidade *"}
                  input={
                    <Input
                      name="cidade"
                      type="text"
                      placeholder="Ex: cidade"
                      {...register("cidade")}
                      autoComplete="off"
                      autoFocus="off"
                      defaultValue={getValues("cidade")}
                    />
                  }
                />
                <InputLabel
                  // errorLabel={errors?.emailConfirma?.message}
                  label={"UF *"}
                  input={
                    <Input
                      name="uf"
                      type="text"
                      placeholder="Ex: uf"
                      {...register("uf")}
                      autoComplete="off"
                      defaultValue={getValues("uf")}
                      autoFocus="off"
                    />
                  }
                />
                <InputLabel
                  // errorLabel={errors?.emailConfirma?.message}
                  label={"Bairro *"}
                  input={
                    <Input
                      name="bairro"
                      type="text"
                      placeholder="Ex: bairro"
                      {...register("bairro")}
                      autoComplete="off"
                      defaultValue={getValues("bairro")}
                      autoFocus="off"
                    />
                  }
                />
              </InputsContainerFilha>
            </InputsContainer>
            <ButtonsContainer>
              <Button type="submit" themeButton={"gray"}>
                Registrar comunidade!
              </Button>
              <ButtonLabel label={"Já tem uma conta? Faça Login!"} />
            </ButtonsContainer>
          </Form>
        </ContainerForm>
      </Content>
    </Container>
  );
}

export default CadastroOrg;
