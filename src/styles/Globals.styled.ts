import { createGlobalStyle } from "styled-components";
import STYLES_CONFIG from "./styles.config";

const { color } = STYLES_CONFIG;

const GlobalsStyles = createGlobalStyle`
  /* width */
  ::-webkit-scrollbar {
    width: 5px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    background: #f1f1f1;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: #ddd;
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: #aaa;
  }

  body {
    background: ${color.base};
    color: white;
    font-family: 'Poppins', sans-serif;
  }

  * {
    margin: 0;
    box-sizing: border-box;
  }

  a {
    text-decoration: none;
  }

  button, input {
    border: none;
  }
`;

export default GlobalsStyles;
