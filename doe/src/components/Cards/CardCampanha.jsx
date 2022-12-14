import Card from "../Card";
import { Button } from "../Typography";

export default function CardCampanha({ banner, description, title, like }) {
  return (
    <Card
      banner={banner}
      descriptionTwo={description}
      author={title}
      paddingBody={"2rem 0.9rem "}
      cardBackgroundColor={"#ececec"}
      others={
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
          }}
        >
          <div
            style={{
              textAlign: "start",
              display: "flex",
              width: "100%",
              fontSize: "0.6rem",
            }}
          >
            +{like} pessoas já doaram!
          </div>
          <Button btnSmall>Doar</Button>
        </div>
      }
    />
  );
}
