import React from "react";
import { Container, Img } from "./styles";
import Logo from "../../assets/images/Earthquake.png";

export const Header = () => {
  return (
    <Container>
      <Img src={Logo} alt="Logo" />
    </Container>
  );
};
