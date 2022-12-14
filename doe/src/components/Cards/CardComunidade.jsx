import Card from "../Card";
import { Button } from "../Typography";
import imgHomem from "../../assets/img-home/homem.png";
import styled from "styled-components";

export default function CardCampanha({
  banner,
  description,
  title,
  perfil,
  isOpen,
  buttonsTabs,
}) {
  const ContainerCardCupom = styled.div`
    display: flex;
    flex-direction: column;
    justify-items: center;
    align-items: center;
    width: 100%;
  `;
  const Title = styled.div`
    font-size: 1.2rem;
    font-weight: 500;
    width: 100%;
    font-size: ${isOpen ? "0.9rem" : null};
    padding: 0.3rem;
    text-shadow: 5px 10px 20px 5px rgba(22, 23, 24, 0.35);
    color: ${isOpen ? "white" : "#141414"};
  `;
  const Description = styled.div`
    padding: ${isOpen ? "0.5rem" : "0.5rem 3.5rem"};
    font-size: ${isOpen ? "0.7rem" : null};
    display: flex;
    text-align: start;
    text-shadow: 5px 10px 20px 5px rgb(0, 0, 0);
    color: ${isOpen ? "white" : "#141414"};
  `;
  const Buttons = styled.div`
    display: flex;
    padding: 1rem;
    width: 100%;
    justify-content: ${isOpen ? "space-around" : "center"};
    align-items: center;
  `;

  const Image = styled.img`
    display: flex;
    width: 130px;
    border-radius: 50%;
    box-shadow: 0px 10px 20px -5px rgba(22, 23, 24, 0.35),
      0px 10px 6px -5px rgba(22, 23, 24, 0.2);
  `;

  const DivTeste = styled.div`
    display: flex;
    align-items: ${isOpen ? "flex-end" : "flex-start"};
    clip-path: polygon(100% 0, 100% 100%, 50% 92%, 0 100%, 0 0);
    justify-content: flex-start;
    border-radius: 30px 30px 1px 1px;
    width: 100%;
    height: ${isOpen ? "250px" : "150px"};
    padding: 1rem;
    background: ${banner ? `url(${banner})` : null};
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
  `;

  return (
    <Card
      noPaddingCard
      widthCardContainer={isOpen ? "80%" : "650px"}
      cardBackgroundColor="#ececec"
      personalizado={
        <ContainerCardCupom>
          <DivTeste>
            <Image src={perfil} />$
            {isOpen ? (
              <div
                style={{
                  backgroundColor: "#0000005a",
                  width: "90%",
                  height: "130px",
                  borderRadius: "10px",
                  paddingLeft: "1rem",
                  marginLeft: "1rem",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                {isOpen ? (
                  <Title style={{ textAlign: "start" }}>{title}</Title>
                ) : null}
                {isOpen ? (
                  <Description style={{ textAlign: "start" }}>
                    {description}
                  </Description>
                ) : null}
              </div>
            ) : null}
          </DivTeste>
          {isOpen ? null : <Title>{title}</Title>}
          {isOpen ? null : <Description>{description}</Description>}

          <Buttons>
            {isOpen ? buttonsTabs : null}
            <Button>ENTRE</Button>
            {/* <Button
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
          </Button> */}
          </Buttons>
        </ContainerCardCupom>
      }
    />
  );
}
