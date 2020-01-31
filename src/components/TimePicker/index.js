import React, { useState, useEffect } from "react";
import { Select } from "../Select";

import { Div } from "./styles";

export const TimePicker = ({ time, setTime, date, open, close }) => {
  const [array, setArray] = useState([]);

  useEffect(() => {
    const e = new Date();

    let today = `${e.getFullYear()}-${("0" + (e.getMonth() + 1)).slice(-2)}-${(
      "0" + e.getDate()
    ).slice(-2)}`;

    let min = `${e.getFullYear()}-${("0" + (e.getMonth() + 1)).slice(-2)}-${(
      "0" + e.getDate()
    ).slice(-2)}T${open}`;
    let max = `${e.getFullYear()}-${("0" + (e.getMonth() + 1)).slice(-2)}-${(
      "0" + e.getDate()
    ).slice(-2)}T${close}`;

    let ini = new Date(min);
    let fin = new Date(max);

    e.setMinutes(60);

    if (date && date.value === today && e > ini) {
      let a = [];
      let i = 0;
      while (e < fin) {
        e.setMinutes(30 * 1);
        a.push({
          _id: i,
          name: `${("0" + e.getHours()).slice(-2)}:${(
            "0" + e.getMinutes()
          ).slice(-2)}`
        });
        i++;
        e.setMinutes(30 * 2);
        a.push({
          _id: i,
          name: `${("0" + e.getHours()).slice(-2)}:${(
            "0" + e.getMinutes()
          ).slice(-2)}`
        });
        i++;
      }
      setArray(a);
    } else {
      let a = [];
      let i = 0;
      while (ini < fin) {
        ini.setMinutes(30 * 1);
        a.push({
          _id: i,
          name: `${("0" + ini.getHours()).slice(-2)}:${(
            "0" + ini.getMinutes()
          ).slice(-2)}`
        });
        i++;
        ini.setMinutes(30 * 2);
        a.push({
          _id: i,
          name: `${("0" + ini.getHours()).slice(-2)}:${(
            "0" + ini.getMinutes()
          ).slice(-2)}`
        });
        i++;
      }
      setArray(a);
    }
    setTime(undefined);
  }, [date, setTime, open, close]);

  return (
    <Div>
      <Select
        options={array}
        title="Seleccione"
        value={time}
        setValue={setTime}
      />
    </Div>
  );
};
