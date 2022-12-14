import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import { Button } from "../Typography";

export default function ButtonsAccess() {
  const ContainerButton = styled.div`
    display: flex;
    gap: 1.5rem;
  `;
  return (
    <ContainerButton>
      <Link to={"/login"}>
        <Button fontSize="0.95rem" btnSmall>
          Entrar
        </Button>
      </Link>

      <Link to={"/cadastro"}>
        <Button fontSize="0.95rem" btnSmall themeButton={"gray"}>
          Cadastra-se
        </Button>
      </Link>
    </ContainerButton>
  );
}

export function ButtonsCriarOrg() {
  const ContainerButton = styled.div`
    display: flex;
    gap: 1.5rem;
  `;
  return (
    <ContainerButton>
      <Link to={"/cadastroOrg"}>
        <Button fontSize="0.95rem" btnSmall>
          criar comunidade
        </Button>
      </Link>
    </ContainerButton>
  );
}
