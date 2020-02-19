import React from "react";

const SVG = ({
  style = {},
  fill = "red",
  width = "100%",
  className = "",
  viewBox = "0 0 100 100"
}) => (
  <svg
    width={width}
    style={style}
    height={width}
    viewBox={viewBox}
    xmlns="http://www.w3.org/2000/svg"
    className={`svg-icon ${className || ""}`}
    xmlnsXlink="http://www.w3.org/1999/xlink"
    preserveAspectRatio="xMidYMid meet"
  >
      <circle
        cx="50"
        cy="50"
        r="25"
        fill={fill}
        fillOpacity="1"
        stroke="rgba(166,3,17,1)"
        strokeOpacity="1"
        strokeWidth="2"
        opacity="1"
      ></circle>
      <circle
        cx="50"
        cy="50"
        r="20"
        fill={fill}
        fillOpacity="1"
        stroke="rgba(166,3,17,1)"
        strokeOpacity="1"
        strokeWidth="2"
        opacity="1"
      ></circle>
      <circle
        cx="50"
        cy="50"
        r="15"
        fill={fill}
        fillOpacity="1"
        stroke="rgba(166,3,17,1)"
        strokeOpacity="1"
        strokeWidth="2"
        opacity="1"
      ></circle>
      <circle
        cx="50"
        cy="50"
        r="10"
        fill={fill}
        fillOpacity="1"
        stroke="rgba(166,3,17,1)"
        strokeOpacity="1"
        strokeWidth="2"
        opacity="1"
      ></circle>
      <circle
        cx="50"
        cy="50"
        r="5"
        fill={fill}
        fillOpacity="1"
        stroke="rgba(166,3,17,1)"
        strokeOpacity="1"
        strokeWidth="2"
        opacity="1"
      ></circle>
      <circle
        cx="50"
        cy="50"
        r="0.5"
        fill={fill}
        fillOpacity="1"
        stroke="rgba(166,3,17,1)"
        strokeOpacity="1"
        strokeWidth="2"
        opacity="1"
      ></circle>
  </svg>
);

export default SVG;
