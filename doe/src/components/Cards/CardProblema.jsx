export default function CardProblema(icon, title, description) {
  return (
    <Card
      heigthCardContainer={"300px"}
      icon={icon}
      fontSizeDescription={"0.8rem"}
      textAlignAuthor={"center"}
      textAlignDescription={"center"}
      descriptionTwo={description}
      author={title}
    />
  );
}
