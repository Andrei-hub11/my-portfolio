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

 html::-webkit-scrollbar-track {
  background: ${({
    theme: {
      colors: { fundoScroll },
    },
  }) => fundoScroll};
  transition: 0.3s;
}

html::-webkit-scrollbar-thumb {
  background: ${({
    theme: {
      colors: { scroll },
    },
  }) => scroll};
  border-radius: 5rem;
  transition: 0.3s;

  scrollbar-color:  ${({
    theme: {
      colors: { scroll },
    },
  }) => scroll};
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
