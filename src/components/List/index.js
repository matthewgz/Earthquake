import React from "react";
import { Item } from "../Item";
import { Container } from "./styles";

export const List = ({ array }) => {
  return (
    <Container>
      {array.map(item => (
        <Item key={item.id} {...item} />
      ))}
    </Container>
  );
};
