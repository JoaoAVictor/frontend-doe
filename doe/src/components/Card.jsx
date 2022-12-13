import React from "react";
import styled from "styled-components";

export default function Card({
  img,
  description,
  author,
  textAlignAuthor,
  descriptionTwo,
  textAlignDescription,
  heigthCardContainer,
  heigthCardBackground,
  widthCardContainer,
  fontSizeDescription,
  noShadowCardContainer,
  icon,
  paddingBody,
  others,
  banner,
  ...props
}) {
  const CardContainer = styled.div`
    display: flex;
    flex-direction: column;
    /* justify-content: center; */
    align-items: center;
    width: ${widthCardContainer ? widthCardContainer : "300px"};
    height: ${heigthCardContainer ? heigthCardContainer : null};
    border-radius: 30px;
    padding: ${banner ? `0px ` : `1rem`};
    box-shadow: ${noShadowCardContainer
      ? null
      : `0px 10px 20px -5px rgba(22, 23, 24, 0.35),
      0px 10px 6px -5px rgba(22, 23, 24, 0.2)`};
  `;
  const CardHeader = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: ${banner ? `0px` : `0.5rem 0px`};
    width: 100%;
  `;
  const CardImg = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100px;
    height: 100px;
    top: 0;
    ${img && banner ? "position: absolute; z-index: 1;" : null};
    background: ${`url(${img})`};
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    border-radius: 50%;
    box-shadow: 0px 10px 20px -5px rgba(22, 23, 24, 0.35),
      0px 10px 6px -5px rgba(22, 23, 24, 0.2);
  `;

  const CardIcon = styled.img`
    padding: 0.5em;
  `;

  const CardBody = styled.div`
    display: flex;
    margin-top: ${banner ? "-1rem" : null};
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding: ${paddingBody ? paddingBody : "0.5rem"};
    gap: 1rem;
  `;
  const CardDescription = styled.div`
    width: 100%;
    text-align: ${textAlignDescription ? textAlignDescription : "start"};
    font-size: ${fontSizeDescription ? fontSizeDescription : "1rem"};
  `;
  const CardAuthor = styled.div`
    width: 100%;
    text-align: ${textAlignAuthor ? textAlignAuthor : "start"};
    font-weight: bold;
  `;

  const CardBackground = styled.div`
    display: flex;
    align-items: center;
    clip-path: polygon(100% 0, 100% 100%, 50% 90%, 0 100%, 0 0);
    justify-content: center;
    border-radius: 30px 30px 1px 1px;
    width: 100%;
    /* margin-bottom: 0.9rem; */
    height: ${heigthCardBackground ? heigthCardBackground : "100px"};
    background: ${banner ? `url(${banner})` : null};
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    box-shadow: 0px 10px 20px -5px rgba(22, 23, 24, 0.35),
      0px 10px 6px -5px rgba(22, 23, 24, 0.2);
  `;

  const CardOthers = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0.1rem;
  `;

  return (
    <CardContainer {...props}>
      <CardHeader>
        {img ? <CardImg /> : null}
        {icon ? <CardIcon src={icon} /> : null}
        {banner ? <CardBackground /> : null}
      </CardHeader>
      <CardBody>
        {description ? (
          <CardDescription> {description} </CardDescription>
        ) : null}
        {author ? <CardAuthor> {author} </CardAuthor> : null}
        {descriptionTwo ? (
          <CardDescription> {descriptionTwo} </CardDescription>
        ) : null}
        {others ? <CardOthers>{others}</CardOthers> : null}
      </CardBody>
    </CardContainer>
  );
}

/* <div class="card text-bg-primary mb-3" style="max-width: 18rem;">
  <div class="card-header">Header</div>
  <div class="card-body">
    <h5 class="card-title">Primary card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
</div> */
