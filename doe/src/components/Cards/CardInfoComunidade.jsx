import styled from "styled-components";
import Card from "../Card";

export default function CardInfoComunidade({ title, description }) {
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
    text-transform: capitalize;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: start;
    gap: 0.5rem;
    align-items: center;
    text-align: start;
    padding: 0.5rem 0.6rem;
  `;

  const ContentInfo = styled.div`
    text-transform: capitalize;
    width: 100%;
    display: flex;
    justify-content: start;
    align-items: flex-start;
    text-align: start;
    padding: 0.1rem 0.1rem;
    gap: 0.3rem;
  `;

  const ContentTitle = styled.div`
    font-weight: bold;
    font-size: 0.9rem;
  `;

  const ContentDescription = styled.div`
    max-width: 100%;
    word-break: break-all;
    font-size: 0.8rem;
  `;

  return (
    <Card
      widthCardContainer={"100%"}
      cardBackgroundColor="#ececec"
      noPaddingCard
      personalizado={
        <ContainerCard>
          <Title>{title}</Title>
          <Description>
            {description?.razao ? (
              <ContentInfo>
                <ContentTitle>Razão:</ContentTitle>
                <ContentDescription>{description?.razao}</ContentDescription>
              </ContentInfo>
            ) : null}
            {description?.cnpj ? (
              <ContentInfo>
                <ContentTitle>CNPJ:</ContentTitle>
                <ContentDescription>{description?.cnpj}</ContentDescription>
              </ContentInfo>
            ) : null}
            {description?.dirigente ? (
              <ContentInfo>
                <ContentTitle>Dirigente:</ContentTitle>
                <ContentDescription>
                  {description?.dirigente}
                </ContentDescription>
              </ContentInfo>
            ) : null}
            {description?.endereco ? (
              <ContentInfo>
                <ContentTitle>Endereço:</ContentTitle>
                <ContentDescription>{description?.endereco}</ContentDescription>
              </ContentInfo>
            ) : null}
          </Description>
        </ContainerCard>
      }
    />
  );
}
