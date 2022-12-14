import styled from "styled-components";

export default function ContainerV2({ children, padding, gap, margin }) {
  const ContainerStyle = styled.div`
    overflow: auto;
    width: 100%;
    /* height: 100%; */
    /* background-color: purple; */
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: ${padding ? padding : null};
    gap: ${gap ? gap : null};
    margin: ${margin ? margin : null};
  `;

  return <ContainerStyle>{children}</ContainerStyle>;
}
