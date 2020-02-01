import React, { useState, useContext } from "react";
import {
  GoogleMap,
  LoadScript,
  Marker,
  InfoWindow
} from "@react-google-maps/api";
import Sismo from "../../assets/images/sismo.svg";
import { Item } from "../Item";
import { Container } from "./styles";
import { Context } from "../../Context";
// import IconSismo from "../IconSismo";

const { REACT_APP_MAPS_KEY } = process.env;

export const Map = ({ array }) => {
  const [latLng] = useState({
    lat: 16.767777,
    lng: 4.058837
  });
  const { info, onClick, handleClick, setOnClick } = useContext(Context);

  const handleOnCloseInfo = () => {
    setOnClick(false);
  };

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
              onClick={e => handleClick(e, item)}
            />
          ))}
          {onClick && (
            <InfoWindow onCloseClick={handleOnCloseInfo} position={info.latLng}>
              {info.item && <Item {...info.item} />}
            </InfoWindow>
          )}
        </GoogleMap>
      </LoadScript>
    </Container>
  );
};
