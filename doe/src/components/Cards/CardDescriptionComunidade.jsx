import styled from "styled-components";
import Card from "../Card";

export default function CardDescriptionComunidade({ title, description }) {
  const ContainerCard = styled.div`
    width: 100%;
    padding: 1rem;
  `;

  const Title = styled.div`
    text-transform: uppercase;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    font-weight: 600;
    padding: 0.5rem;
  `;

  const Description = styled.div`
    width: 100%;
    display: flex;
    justify-content: start;
    align-items: center;
    text-align: start;
    padding: 0.5rem 2.3rem;
  `;

  

  return (
    <Card
      widthCardContainer={"100%"}
      cardBackgroundColor="#ececec"
      noPaddingCard
      personalizado={
        <ContainerCard>
          <Title>{title}</Title>
          <Description>{description}</Description>
        </ContainerCard>
      }
    />
  );
}
