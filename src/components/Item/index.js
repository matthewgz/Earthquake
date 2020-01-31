import React from "react";
import { Container, Title, Tooltip } from "./styles";

export const Item = ({ properties }) => {
  const date = new Date(properties.time);
  const strDate = date.toISOString();
  return (
    <Container>
      <Title>
        <h4>{properties.place}</h4>
        <Tooltip>{properties.place}</Tooltip>
        <span>{properties.mag}</span>
      </Title>
      <div>
        <strong>Fecha: </strong>
        {strDate
          .split("-")
          .join("/")
          .replace("T", " ")
          .replace("Z", "")
          .slice(0, 10)}
      </div>
      <div>
        <strong>Hora: </strong>
        {strDate
          .split("-")
          .join("/")
          .replace("T", " ")
          .replace("Z", "")
          .slice(10, -4)}
      </div>
    </Container>
  );
};
