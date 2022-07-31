import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:ital,wght@0,400;0,500;0,700;1,400;1,500&display=swap');

  html,
  body,
  #root {
    margin: 0;
    padding: 0;
    height: 100%;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-rendering: optimizeLegibility;
    overflow: overlay;
    background-color: #1E1E1E;
    font-family: 'JetBrains Mono'
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  * {
    box-sizing: border-box;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    -webkit-tap-highlight-color: transparent;
  }

  ::-webkit-scrollbar {
    width: 4px; /* width of the entire scrollbar */
    margin-right: 8px;
  }

  ::-webkit-scrollbar-track {
    background: #2f2f2f; /* color of the tracking area */
  }

  ::-webkit-scrollbar-thumb {
    background-color: #444; /* color of the scroll thumb */
    border: 3px solid #444; /* roundness of the scroll thumb */
    border-radius: 20px; /* creates padding around scroll thumb */
  }

  input {
    border: none;
    -webkit-box-shadow: none;
    -moz-box-shadow: none;
    box-shadow: none;
    outline: none;

    -webkit-touch-callout: none; /* iOS Safari */
    -webkit-user-select: none; /* Safari */
    -khtml-user-select: none; /* Konqueror HTML */
    -moz-user-select: none; /* Old versions of Firefox */
    -ms-user-select: none; /* Internet Explorer/Edge */
    user-select: none; /* Non-prefixed version, currently supported by Chrome, Edge, Opera and Firefox */
  }

  input:-webkit-autofill,
  input:-webkit-autofill:focus {
    background-color: #1a1a1a;
    transition: background-color 600000s 0s, color 600000s 0s;
  }

  button, label {
    -webkit-touch-callout: none; /* iOS Safari */
    -webkit-user-select: none; /* Safari */
    -khtml-user-select: none; /* Konqueror HTML */
    -moz-user-select: none; /* Old versions of Firefox */
    -ms-user-select: none; /* Internet Explorer/Edge */
    user-select: none; /* Non-prefixed version, currently supported by Chrome, Edge, Opera and Firefox */
  }

  button, button:hover, button:focus {
    border: none;
    -webkit-box-shadow: none;
    -moz-box-shadow: none;
    box-shadow: none;
    outline: none;
  }

`
