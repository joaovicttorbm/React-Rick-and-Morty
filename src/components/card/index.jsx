import React, { memo } from "react";
import {
  Container,
  WrapperImage,
  ContainerItens,
  Title,
  Text,
  Strong,
} from "./styles";

const Card = memo(({ characterData }) => {
  if (!Array.isArray(characterData) || characterData.length === 0) {
    return (
      <Title>
        <Strong>No data available.</Strong>
      </Title>
    );
  }
  return (
    <>
      {characterData.map(({ id, name, image, status, location }) => (
        <Container key={id}>
          <WrapperImage
            src={image}
            alt={name}
            aria-label={name}
            tabIndex="0"
            role="img"
          />
          <ContainerItens>
            <Title>{name}</Title>
            <Text>Status: {status}</Text>
            <Text>
              <Strong>Last known location:</Strong> {location.name}
            </Text>
          </ContainerItens>
        </Container>
      ))}
    </>
  );
});

export default Card;
