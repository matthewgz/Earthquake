import styled, { keyframes, css } from "styled-components";

export const Girar = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const Div = styled.div`
  width: 70px;
  height: 70px;
  border: 10px solid #eee;
  border-top: 10px solid #666;
  border-radius: 50%;
  animation-name: ${Girar};
  animation-duration: 2s;
  animation-iteration-count: infinite;
`;

export const Container = styled.div`
  /* border: 1px solid red; */
  display: flex;
  justify-content: center;
  align-items: center;

  ${props =>
    props.fullHeight &&
    css`
      height: calc(100vh - 74px);
    `}
`;
