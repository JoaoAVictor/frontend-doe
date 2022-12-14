import React from "react";
import axios from "axios";
import { toast } from "react-toastify";

const apiBase = {
  // PARA JAVA
  url: "http://localhost:8080",
  type: "java",

  // PARA MOCK
  // url: "https://63964ea2a68e43e418013627.mockapi.io/api/",
  // type: "mcok",
};

const api = axios.create({
  baseURL: apiBase.url,
});

export function cadastroApi(body) {
  var data = { ...body, dadosPerfil: {} };
  if (apiBase.type === "java") {
    console.log("Estamos utilizando o Java");
    api
      .post("/usuarios", data)
      .then((res) => {
        toast.success("Cadastro concluído!");
        console.log("cadastro java resposta:", res);
      })
      .catch((err) => {
        toast.warning("Cadastro inválido!");
        console.error("cadastro java catch:", err);
      });
  } else {
    console.log("Estamos utilizando o Mock");
    api
      .post("/usuario", body)
      .then((res) => {
        toast.success("Cadastro concluído!");
        console.log("cadastro mock resposta:", res);
      })
      .catch((err) => {
        toast.warning("Cadastro inválido!");
        console.error("cadastro mock catch:", err);
      });
  }
}

export function loginApi(body) {
  if (apiBase.type === "java") {
    var emailTentar = body.email;
    console.log("Estamos utilizando o Java");
    api
      .post("/login", body)
      .then((res) => {
        // toast.success("Login concluído!");
        console.log("Login do token java resposta:", res);
        if (res.data.token) {
          api
            .get(`/usuarios/${emailTentar}`)
            .then((respostadois) => {
              toast.success("Login concluído!");
              console.log("Login java resposta:", respostadois);
              sessionStorage.setItem("id", respostadois.id);
              sessionStorage.setItem("email", respostadois.email);
              sessionStorage.setItem("nome", respostadois.nome);
              sessionStorage.setItem(
                "dataNascimento",
                respostadois.dataNascimento
              );
            })
            .catch((err) => {
              toast.warning("Login inválido!");
              console.error("Login java catch:", err);
            });
        }
      })
      .catch((err) => {
        toast.warning("Login inválido!");
        console.error("Login do token java catch:", err);
      });
  } else {
    console.log("Estamos utilizando o Mock");
    api
      .get("/usuario")
      .then((res) => {
        var validationLogin;
        var userLogado;

        res.data.map((user) => {
          if (body.email === user.email && body.senha === user.senha) {
            userLogado = user;
            return (validationLogin = true);
          } else {
            return (validationLogin = false);
          }
        });

        if (validationLogin) {
          sessionStorage.setItem("nome", userLogado.nome);
          sessionStorage.setItem("imgPerfil", userLogado.imgPerfil);
          toast.success("Login concluído!");
        } else {
          toast.warning("Login inválido!");
        }

        console.log("login mock resposta:", res);
      })
      .catch((err) => {
        toast.warning("Erro no login!");
        console.error("login mock catch:", err);
      });
  }
}

export default api;
