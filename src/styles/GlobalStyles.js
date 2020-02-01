import { createGlobalStyle } from "styled-components";
// @import url('https://fonts.googleapis.com/css?family=Baloo+Thambi|BioRhyme+Expanded:200,300,400,700,800|Molle:400i|Rhodium+Libre&display=swap');
// @import url('https://fonts.googleapis.com/css?family=Roboto+Mono&display=swap');

export const GlobalStyle = createGlobalStyle`

  html {
    box-sizing: border-box;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }

  *, *:before, *:after {
    box-sizing: inherit;
  }

  ul, li, h1, h2, h3, p, button { margin: 0; padding: 0; }
  ul { list-style: none; }
  button { background: transparent; border: 0; outline: 0 }

  body {
    margin: 0;
    padding: 0;
    font-family: 'Montserrat', sans-serif,-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  #app {
    box-shadow: 0 0 10px rgba(0, 0, 0, .05);
    overflow-x: hidden;
    min-height: 100vh;
    padding-bottom: 10px;
  }
`;
