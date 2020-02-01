import styled, { css } from "styled-components";

export const Container = styled.div`
  border-radius: 10px;
  padding: 20px;

  cursor: pointer;
  ${props =>
    props.border &&
    css`
      margin: 10px;
      box-shadow: 1px 3px 17px -2px rgba(0, 0, 0, 0.75);
    `}

  div {
    margin-top: 5px;
    font-size: 12px;
  }
`;

export const Tooltip = styled.div`
  margin: 0;
  padding: 5px;
  border-radius: 10px;
  width: auto;
  visibility: hidden;
  background-color: lightgrey;
  opacity: 0;
  transition: opacity 0.5s ease;
  font-size: 10px;
  position: absolute;
  top: -25px;
  left: 0;
  &:hover {
    transition: opacity 0.5s ease;
    opacity: 1;
    visibility: visible;
  }
`;

export const Title = styled.div`
  display: flex;
  align-items: center;
  position: relative;

  h4 {
    margin: 0;
    padding: 0;
    max-width: 200px;
    white-space: nowrap;
    /* text-overflow: ellipsis; */
    overflow: hidden;
    position: relative;
    font-size: 16px;

    &::after {
      content: "...";
      background: white;
      display: block;
      position: absolute;
      top: 0;
      right: 0;
      width: 22px;
      height: 30px;
      pointer-events: initial;
      text-align: center;
    }

    &:hover:after {
      cursor: pointer;
    }

    &:hover + ${Tooltip} {
      transition: opacity 0.5s ease;
      opacity: 1;
      visibility: visible;
    }
  }

  span {
    color: white;
    background: #dc887f;
    padding: 5px;
    width: 40px;
    border-radius: 10px;
    margin-left: 10px;
    text-align: center;
  }
`;
