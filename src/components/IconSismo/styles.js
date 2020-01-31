import styled, { keyframes } from "styled-components";

export const Opacity = keyframes`
  0%,
  100% {
    opacity: 1;
  }

  50% {
    opacity: 0.5;
  }
`;

export const Div = styled.div`
  width: 60px;
  height: 60px;
  /* border: 1.5px solid red; */
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  /* animation: ${Opacity} 2s ease-in-out infinite; */

  & div {
    width: 60px;
    height: 60px;
    border: 1.5px solid red;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    animation: ${Opacity} 2s linear infinite;
    position: absolute;
  }

  & div:nth-child(1) {
    width: 50px;
    height: 50px;
    border: 1.5px solid red;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    animation-delay: 0s;
    position: absolute;
  }

  & div:nth-child(2) {
    width: 40px;
    height: 40px;
    border: 1.5px solid red;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    animation-delay: -0.4s;
    position: absolute;
  }

  & div:nth-child(3) {
    width: 30px;
    height: 30px;
    border: 1.5px solid red;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    animation-delay: -0.8s;
    position: absolute;
  }

  & div:nth-child(4) {
    width: 20px;
    height: 20px;
    border: 1.5px solid red;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    animation-delay: -0.4s;
    position: absolute;
  }

  & div:nth-child(5) {
    width: 10px;
    height: 10px;
    border: 1.5px solid red;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    animation-delay: -0.8s;
    position: absolute;
  }
`;
