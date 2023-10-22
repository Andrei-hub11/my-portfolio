import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

 * {
  margin: 0;
  padding: 0;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  text-decoration: none;
  outline: none;
  border: none;
}

html {
  scroll-behavior: smooth;
  font-size: 62.5%;
}

body {
  font-family: ${({ theme: { fonts } }) => fonts[0]};
  background:  ${({
    theme: {
      background: { body },
    },
  }) => body};
  transition: 0.3s background;

  @media (max-width: ${(props) => props.theme.breakPoints.smallerPhone}) {
    overflow-x: hidden !important;
  }

  @media (min-width: ${(props) => props.theme.breakPoints.phoneOnly}) {
    overflow-x: hidden !important;
  }
}



li {
  list-style: none;
}
`;
