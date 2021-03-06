import styled from "styled-components";

export const Container = styled.div`
  width: 300px;
  height: calc(100vh - 74px);
  overflow-y: scroll;
  overflow-x: hidden;
  margin: 0;
  padding: 0;

  /* width */
  ::-webkit-scrollbar {
    width: 10px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    background: #f1f1f1;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: #888;
    border-radius: 5px;
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: #555;
  }

  p {
    font-size: 12px;
    /* border: 1px solid red; */
    text-align: center;
    margin-top: 10px;
    font-family: "Roboto Mono", monospace;
  }
`;
