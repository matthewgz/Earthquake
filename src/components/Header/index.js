import React, { useContext } from "react";
import { Container, Img, Options } from "./styles";
import Logo from "../../assets/images/Earthquake.png";
import { DatePicker } from "../DatePicker";
import { Select } from "../Select";
import { Context } from "../../Context";

export const Header = () => {
  const { setInit, setFin, setMinMagnitude, minMagnitude } = useContext(
    Context
  );
  const Magnitud = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((e, idx) => ({
    _id: idx,
    name: `${idx}`,
    value: idx
  }));

  return (
    <Container>
      <Img src={Logo} alt="Logo" />
      <Options>
        <Select
          options={Magnitud}
          title="Magnitud"
          value={minMagnitude}
          setValue={setMinMagnitude}
        />
        <DatePicker set={setInit} title="Desde" />
        <DatePicker set={setFin} title="Hasta" />
      </Options>
    </Container>
  );
};
