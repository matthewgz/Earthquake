import React, { createContext, useState } from "react";
export const Context = createContext();

const Provider = ({ children }) => {
  const [init, setInit] = useState({});
  const [fin, setFin] = useState({});
  const [minMagnitude, setMinMagnitude] = useState({});
  const [onClick, setOnClick] = useState(false);
  const [info, setInfo] = useState({ latLng: {}, item: {} });

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
    },
    onClick,
    info,
    handleClick: (e, item) => {
      setInfo({
        item,
        latLng: {
          lat: item.geometry.coordinates[1],
          lng: item.geometry.coordinates[0]
        }
      });
      setOnClick(true);
    },
    setOnClick: e => {
      setOnClick(e);
    }
  };

  return <Context.Provider value={value}>{children}</Context.Provider>;
};
export default {
  Provider,
  Consumer: Context.Consumer
};
