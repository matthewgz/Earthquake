import React, { useEffect, useState, useContext } from "react";
import { List } from "../List";
import { Map } from "../Map";
import { Loader } from "../Loader";
import { Container } from "./styles";
import { Context } from "../../Context";

const REACT_APP_LINK_API =
  "https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson";

export const Body = () => {
  const { init, fin, minMagnitude, setOnClick } = useContext(Context);
  const [state, setState] = useState({
    data: {},
    loading: true,
    listLoading: true,
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
      setState({ ...state, listLoading: true, error: undefined });
      setOnClick(false);
      // console.log(URL);
      fetch(URL)
        .then(function(response) {
          return response.json();
        })
        .then(function(data) {
          setState({
            data,
            loading: false,
            listLoading: false,
            error: undefined
          });
        })
        .catch(e => {
          setState({ data: {}, loading: false, listLoading: false, error: e });
        });
      return () => {};
    }
  }, [init, fin, minMagnitude]);

  if (state.loading) return <Loader fullHeight />;
  if (state.error) return "Error";

  return (
    <Container>
      <List array={state.data.features} loading={state.listLoading} />
      <Map array={state.data.features} />
    </Container>
  );
};
