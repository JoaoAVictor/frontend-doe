import styled from "styled-components";
import { styled as styledStitches } from "@stitches/react";

const themes = {
  DEFAULT: {
    // DEFAULT
    name: "DEFAULT",
    enabledBg: "#ffa501",
    enabledColor: "#000000",
    disabledBg: "#ffa600",
    disabledColor: "#000000",
    hoverBg: "#fdc45a",
    hoverColor: "#000000",
    activeBg: "#ffa600",
    activeColor: "#000000",
  },
  gray: {
    // gray
    name: "gray",
    enabledBg: "#525252",
    enabledColor: "#ffff",
    disabledBg: "#525252",
    disabledColor: "#ffff",
    hoverBg: "#868686",
    hoverColor: "#ffff",
    activeBg: "#525252",
    activeColor: "#ffff",
  },
  grayMirror: {
    // grayMirror
    name: "grayMirror",
    enabledBg: "#5252526f",
    enabledColor: "#ffff",
    disabledBg: "#5252526f",
    disabledColor: "#ffff",
    hoverBg: "#353535df",
    hoverColor: "#ffff",
    activeBg: "#525252",
    activeColor: "#ffff",
  },
};

export const Button = styled.button`
  padding: 3px 6px;
  border: none;
  border-radius: 5px;
  font-size: ${({ fontSize }) => (fontSize ? fontSize : null)};
  :enabled {
    background-color: ${({ themeButton }) =>
      themes[themeButton ? themeButton : "DEFAULT"].enabledBg};
    color: ${({ themeButton }) =>
      themes[themeButton ? themeButton : "DEFAULT"].enabledColor};
  }
  :disabled {
    background-color: ${({ themeButton }) =>
      themes[themeButton ? themeButton : "DEFAULT"].disabledBg};
    color: ${({ themeButton }) =>
      themes[themeButton ? themeButton : "DEFAULT"].disabledColor};
    border-color: ${({ themeButton }) =>
      themes[themeButton ? themeButton : "DEFAULT"].disabledBg} !important;
    user-select: none;
  }
  :hover {
    background-color: ${({ themeButton }) =>
      themes[themeButton ? themeButton : "DEFAULT"].hoverBg};
    color: ${({ themeButton }) =>
      themes[themeButton ? themeButton : "DEFAULT"].hoverColor};
  }
  :active {
    background-color: ${({ themeButton }) =>
      themes[themeButton ? themeButton : "DEFAULT"].activeBg} !important;
    color: ${({ themeButton }) =>
      themes[themeButton ? themeButton : "DEFAULT"].activeColor} !important;
    border-color: ${({ themeButton }) =>
      themes[themeButton ? themeButton : "DEFAULT"].activeBg} !important;
  }
`;

export const ButtonIcon = styled.button`
  border: none;
  justify-content: center;
  align-items: center;
  display: flex;
  border-radius: 50%;
  padding: 0.5rem;
  background-color: #fff;
  box-shadow: 0px 10px 20px -5px rgba(22, 23, 24, 0.35),
    0px 10px 6px -5px rgba(22, 23, 24, 0.2);
  transition: 0.2s;

  :hover {
    background-color: #d6d6d6;
  }
  :active {
  }
`;



export const Input = styledStitches("input", {
  all: "unset",
  flex: "1 0 auto",
  borderRadius: 4,
  padding: "0 10px",
  fontSize: "1rem",
  lineHeight: 1,
  alignItems: "center",
  textAlign: "start",
  justifyContent: "center",
  color: `#b9bac7`,
  boxShadow: `0 0 0 1px #b9bac7`,
  height: 35,
  "&:focus": { boxShadow: `0 0 0 1px #000000` },
});
