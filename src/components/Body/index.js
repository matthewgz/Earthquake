import React, { useEffect, useState } from "react";
import { List } from "../List";
import { Map } from "../Map";
import { Container } from "./styles";

const { REACT_APP_LINK_API } = process.env;

export const Body = () => {
  const [state, setState] = useState({
    data: {},
    loading: true,
    error: undefined
  });

  useEffect(() => {
    fetch(REACT_APP_LINK_API)
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
  }, []);

  console.log(state);

  if (state.loading) return "Loading";
  if (state.error) return "Error";

  return (
    <Container>
      <List array={state.data.features} />
      <Map array={state.data.features} />
    </Container>
  );
};
