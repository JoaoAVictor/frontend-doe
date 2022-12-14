import React from "react";
import styled from "styled-components";
import { styled as styledStitches } from "@stitches/react";
import { MagnifyingGlassIcon } from "@radix-ui/react-icons";

export default function Search() {
  const ContainerInput = styled.div`
    width: 400px;
    padding: 0.1rem;
    border: 1px solid #00000040;
    background-color: #00000020;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    border-radius: 5px;
  `;

  // const Input = styled.input`
  //   border: none;
  //   background-color: #ffffff00;
  //   color: #696f79;
  //   ::placeholder {
  //     color: #696f79;
  //   }
  //   text-align: center;
  //   :focus {
  //     border: none !important;
  //     box-shadow: none !important;
  //   }
  // `;

  const Input = styledStitches("input", {
    all: "unset",
    flex: "1 0 auto",
    borderRadius: 4,
    padding: "0 10px",
    fontSize: "1rem",
    lineHeight: 1,
    alignItems: "center",
    textAlign: "center",
    justifyContent: "center",
    color: `#727272`,
    // boxShadow: `0 0 0 1px #b9bac7`,

    "&:focus": { boxShadow: `none` },
  });

  const ButtonIcon = styled.button`
    position: relative;
    color: #696f79;
    border: none;
    justify-content: center;
    align-items: center;
    display: flex;
    border-radius: 5px;
    padding: 0.1rem 0.4rem;
    margin: 0.2rem;
    background-color: #dedede;
    font-size: 0.8rem;
    box-shadow: -0.1px 1px 5px 1px rgba(22, 23, 24, 0.35);
    transition: 0.2s;
    gap: 0.3rem;

    :hover {
      background-color: #eeeeee;
    }
    :active {
      background-color: #f2f2f2;
    }
  `;
  return (
    <ContainerInput>
      <Input placeholder="Pequise Comunidades" />
      <ButtonIcon>
        <span>Buscar</span>
        <MagnifyingGlassIcon height={20} width={20} />
      </ButtonIcon>
    </ContainerInput>
  );
}
