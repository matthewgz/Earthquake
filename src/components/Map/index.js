import React, { useState } from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import Sismo from "../../assets/images/sismo.svg";
// import IconSismo from "../IconSismo";

const { REACT_APP_MAPS_KEY } = process.env;

import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  border: 1px solid lightgrey;
`;

export const Map = ({ array }) => {
  const [latLng] = useState({
    lat: 16.767777,
    lng: 4.058837
  });

  return (
    <Container>
      <LoadScript googleMapsApiKey={REACT_APP_MAPS_KEY}>
        <GoogleMap
          mapContainerStyle={{
            height: "100%",
            width: "100%"
          }}
          options={{
            streetViewControl: false,
            disableDefaultUI: true,
            zoomControl: true
          }}
          zoom={3}
          center={latLng}
        >
          {array.map(item => (
            <Marker
              key={item.id}
              draggable={false}
              position={{
                lat: item.geometry.coordinates[1],
                lng: item.geometry.coordinates[0]
              }}
              icon={Sismo}
              // animation={}
            />
          ))}
        </GoogleMap>
      </LoadScript>
    </Container>
  );
};
