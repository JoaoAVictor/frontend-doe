import Card from "../Card";
import { Button } from "../Typography";
import imgHomem from "../../assets/img-home/homem.png";

export default function CardCampanha({ banner, description, title, like }) {
  return (
    <Card
      banner={banner}
      heigthCardBackground={"150px"}
      descriptionTwo={description}
      author={title}
      img={imgHomem}
      widthCardContainer={"650px"}
      textAlignAuthor={"center"}
      textAlignDescription={"center"}
      paddingBody={"3.2rem 0.9rem "}
      others={
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "4rem",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
          }}
        >
          <div
            style={{
              textAlign: "center",
              alignItems: "center",
              display: "flex",
              width: "100%",
              fontSize: "0.6rem",
            }}
          >
            <div> +{like} pessoas já doaram!</div>
            <div></div>
          </div>
          <Button btnLarge>Entrar Na Comunidade!</Button>
        </div>
      }
    />
  );
}
