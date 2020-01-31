import React, { useEffect, useState, useContext } from "react";
import { List } from "../List";
import { Map } from "../Map";
import { Container } from "./styles";
import { Context } from "../../Context";

const { REACT_APP_LINK_API } = process.env;

export const Body = () => {
  const { init, fin, minMagnitude } = useContext(Context);
  const [state, setState] = useState({
    data: {},
    loading: true,
    error: undefined
  });

  useEffect(() => {
    let URL =
      REACT_APP_LINK_API +
      `&starttime=${init.value}` +
      "T00:00:00" +
      `&minmagnitude=${minMagnitude.value || 0}`;
    if (fin.value) {
      URL = URL + `&endtime=${fin.value}` + "T23:59:59";
    }
    if (init.value && fin.value) {
      // setState({ data: {}, loading: true, error: undefined });
      // console.log(URL);
      fetch(URL)
        .then(function(response) {
          return response.json();
        })
        .then(function(data) {
          setState({ data, loading: false, error: undefined });
        })
        .catch(e => {
          setState({ data: {}, loading: false, error: e });
        });
      return () => {};
    }
  }, [init, fin, minMagnitude]);

  if (state.loading) return "Loading";
  if (state.error) return "Error";

  return (
    <Container>
      <List array={state.data.features} />
      <Map array={state.data.features} />
    </Container>
  );
};
