import styled from "styled-components";

export const Div = styled.div`
  padding: 0;
  margin: 0 10px;
  height: 40px;
  /* border: 1px solid red; */
  /* border: 1px solid #98ca3f;
  border-radius: 5px; */
  text-align: center;
  /* font-family: "Rhodium Libre", serif; */
`;

export const Label = styled.label`
  /* border: 1px solid blue; */
  margin: 0 10px 0 0;
  color: white;
  font-size: 12px;
  /* font-family: "Rhodium Libre", serif; */
`;

export const Input = styled.input`
  /* border: 1px solid green; */
  /* border: 1px solid #e5edef; */
  margin: 0;
  border-radius: 5px;
  /* background: #efefef; */
  width: 138px;
  height: 100%;
  /* Removes the clear button from date inputs */
  &[type="date"]::-webkit-clear-button {
    display: none;
  }

  /* Removes the spin button */
  &[type="date"]::-webkit-inner-spin-button {
    display: none;
  }

  /* Always display the drop down caret */
  &[type="date"]::-webkit-calendar-picker-indicator {
    color: white;
    background: black;
  }

  /* A few custom styles for date inputs */
  &[type="date"] {
    /* height: 46px; */
    appearance: none;
    -webkit-appearance: none;
    color: #95a5a6;
    /* font-family: "Helvetica", arial, sans-serif; */
    font-size: 16px;
    border: 1px solid white;
    background: black;
    padding: 10px 5px;
    /* display: inline-block !important;
    visibility: visible !important; */
  }

  &[type="date"],
  focus,
  hover {
    background: black;
    color: white;
    box-shadow: none;
    -webkit-box-shadow: none;
    -moz-box-shadow: none;
  }
`;

export const Error = styled.span`
  display: block;
  color: red;
  font-size: 14px;
  margin: 0px auto;
`;
