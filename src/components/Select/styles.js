import styled, { css } from "styled-components";

export const Selector = styled.div`
  /* border: 1px solid #e5edef; */
  /* border: 1px solid #fa9c9c; */
  border-radius: 5px;
  display: flex;
  align-items: center;
  padding: 10px;
  font-size: 16px;
  justify-content: space-between;
  cursor: pointer;
  color: white;
  &:hover {
    /* color: #000; */
    border: 1px solid white;
  }

  ${props =>
    props.show &&
    css`
      border: 1px solid white;
    `};
`;

export const Span = styled.span`
  margin: 0 5px 0 0;
  padding: 0;
  font-size: 14px;
  /* text-indent: 100%; */
  white-space: nowrap;
  overflow: hidden;
`;

export const Container = styled.div`
  /* border: 1px solid red; */
  margin: 0 10px;
  padding: 0;
  width: 150px;
  height: 40px;
  /* position: relative; */
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
`;

export const ListOfOptions = styled.div`
  margin: 2px 0 0 0;
  border: 1px solid #e5edef;
  background: #fff;
  width: 150px;
  max-height: 40vh;
  position: absolute;
  z-index: 1;
  overflow: auto;

  /* border: 1px solid red; */
  &::-webkit-scrollbar {
    width: 5px; /* Tamaño del scroll en vertical */
    height: 0px; /* Tamaño del scroll en horizontal */
    /* display: none;  Ocultar scroll */
  }

  /* Ponemos un color de fondo y redondeamos las esquinas del thumb */
  &::-webkit-scrollbar-thumb {
    background: #ccc;
    border-radius: 0px;
  }

  /* Cambiamos el fondo y agregamos una sombra cuando esté en hover */
  &::-webkit-scrollbar-thumb:hover {
    background: #b3b3b3;
    /* box-shadow: 0 0 2px 1px rgba(0, 0, 0, 0.2); */
  }

  /* Cambiamos el fondo cuando esté en active */
  &::-webkit-scrollbar-thumb:active {
    background-color: #999999;
  }

  /* Ponemos un color de fondo y redondeamos las esquinas del track */
  &::-webkit-scrollbar-track {
    background: #e1e1e1;
    border-radius: 0px;
  }

  /* Cambiamos el fondo cuando esté en active o hover */
  &::-webkit-scrollbar-track:hover,
  &::-webkit-scrollbar-track:active {
    background: #d4d4d4;
  }
`;

export const Option = styled.div`
  margin: 0;
  padding: 8px 10px;
  cursor: pointer;
  color: #7d7d7d;
  display: flex;
  align-items: center;
  &:hover {
    background: #e5edef;
  }
`;
