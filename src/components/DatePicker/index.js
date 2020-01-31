import React, { useState, useEffect } from "react";

import { Div, Input, Label, Error } from "./styles";

export const DatePicker = ({ title, set, error }) => {
  const e = new Date();

  const today = `${e.getFullYear()}-${("0" + (e.getMonth() + 1)).slice(-2)}-${(
    "0" + e.getDate()
  ).slice(-2)}`;

  const [date, setDate] = useState(today);

  useEffect(() => {
    set({
      value: date
    });
  }, []);

  const onChange = e => {
    setDate(e.target.value);
    set &&
      set({
        value: e.target.value
      });
  };

  return (
    <Div>
      {title && <Label>{title}:</Label>}

      <Input
        required
        type="date"
        value={date}
        onChange={onChange}
        max={today}
      />
      {error && <Error>{error}</Error>}
    </Div>
  );
};
