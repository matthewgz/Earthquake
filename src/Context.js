import React, { createContext, useState } from "react";
export const Context = createContext();

const Provider = ({ children }) => {
  const [init, setInit] = useState({});
  const [fin, setFin] = useState({});
  const [minMagnitude, setMinMagnitude] = useState({});

  const value = {
    init,
    setInit: e => {
      setInit(e);
    },
    fin,
    setFin: e => {
      setFin(e);
    },
    minMagnitude,
    setMinMagnitude: e => {
      setMinMagnitude(e);
    }
  };

  return <Context.Provider value={value}>{children}</Context.Provider>;
};
export default {
  Provider,
  Consumer: Context.Consumer
};
