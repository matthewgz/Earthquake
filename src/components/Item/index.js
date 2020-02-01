import React from "react";
import { Container, Title, Tooltip } from "./styles";

export const Item = ({ properties, border, onClick }) => {
  const date = new Date(properties.time);
  // const strDate = date.toUTCString();
  const strDate = `${date.getFullYear()}-${("0" + (date.getMonth() + 1)).slice(
    -2
  )}-${("0" + date.getDate()).slice(-2)}`;
  const strHora = `${("0" + date.getHours()).slice(-2)}:${(
    "0" + date.getMinutes()
  ).slice(-2)}`;

  return (
    <Container border={border} onClick={onClick}>
      <Title>
        <h4>{properties.place}</h4>
        <Tooltip>{properties.place}</Tooltip>
        <span>{properties.mag}</span>
      </Title>
      <div>
        <strong>Fecha: </strong>
        {strDate}
      </div>
      <div>
        <strong>Hora: </strong>
        {strHora}
      </div>
    </Container>
  );
};
