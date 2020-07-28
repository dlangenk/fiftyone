import { createGlobalStyle, css } from "styled-components";
import { color, typography } from "./styles";

export const styles = css`
  body,
  input {
    font-family: "Palanquin", sans-serif;
    font-size: 14px;
    color: ${({ theme }) => theme.text};
  }

  body,
  html {
    height: 100%;
    margin: 0 !important;
    padding: 0 !important;
  }

  input {
    padding: 0;
  }

  #root {
    height: 100%;
    position: relative;
  }
`;

export const GlobalStyle = createGlobalStyle`
   ${styles}
`;
