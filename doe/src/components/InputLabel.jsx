import React from "react";
import { styled as styledStitches } from "@stitches/react";
import styled from "styled-components";
export const Label = styledStitches("label", {
  fontSize: 13,
  lineHeight: 1,
  marginBottom: 10,
  variants: {
    color: {
      red: { color: `#c20000` },
      gray: { color: `#b9bac7` },
    },
  },
  display: "block",
});
const InputLabel = ({ label, errorLabel, input, children,widthLabel, errorLabelDown }) => {
  const Fieldset = styledStitches("fieldset", {
    all: "unset",
    marginBottom: 15,
    width: `${ widthLabel ? widthLabel : "100%"} `,
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
  });
  const LabelAndError = styled.div`
    display: flex;
    gap: 0.5rem;
  `;
  return (
    <Fieldset>
      <LabelAndError>
        <Label color="gray">{label}</Label>
        {errorLabel ? <Label color="red">({errorLabel})</Label> : null}
      </LabelAndError>
      {input ? input : children}
      {errorLabelDown ? <Label color="red">({errorLabelDown})</Label> : null}
    </Fieldset>
  );
};
export default InputLabel;