import styled from "styled-components";
import Card from "../Card";
import icoMoney from "../../assets/ico-money.png";
import { Button } from "../Typography";

export default function CardCupom({
  title,
  description,
  moneyUser,
  moneyAdquirir,
}) {
  const ContainerCardCupom = styled.div`
    display: flex;
    flex-direction: column;
    justify-items: center;
    align-items: center;
    padding: 0.5rem 3rem;
    gap: 0.5rem;
  `;
  const Title = styled.div`
    font-size: 1.2rem;
    font-weight: 500;
    padding: 1rem;
    width: 100%;
    border-bottom: 1px solid #00000050;
  `;
  const Description = styled.div`
    padding: 1rem;
    display: flex;
    text-align: start;
  `;
  const Buttons = styled.div`
    padding: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
  `;
  const Image = styled.img`
    width: 28px;
  `;
  const Money = styled.div`
    color: #ffffffeb;
  `;
  const DivIconMoney = styled.div`
    display: flex;
  `;

  return (
    <Card
      cardBackgroundColor="#ececec"
      widthCardContainer="800px"
      personalizado={
        <ContainerCardCupom>
          <Title>{title}</Title>
          <Description>{description}</Description>
          <Buttons>
            <Button
              themeButton={moneyUser >= moneyAdquirir ? "confirm" : "cancel"}
              disabled={moneyUser >= moneyAdquirir ? false : true}
            >
              <DivIconMoney>
                <Image src={icoMoney} /> <Money>{moneyAdquirir}</Money>
              </DivIconMoney>
            </Button>
            <Button
              themeButton={moneyUser >= moneyAdquirir ? "confirm" : "cancel"}
              disabled={moneyUser >= moneyAdquirir ? false : true}
            >
              {moneyUser >= moneyAdquirir ? "ADQUIRIR" : "BLOQUEADO"}
            </Button>
          </Buttons>
        </ContainerCardCupom>
      }
    />
  );
}
