import styled from "styled-components";

export const Btn = styled.a`
  display: flex;
  justify-content: space-between;
  margin-top: 2rem;
  text-align: center;
  text-transform: uppercase;
  font-size: 1.6rem;
  font-family: ${({ theme: { fonts } }) => fonts[1]};
  letter-spacing: 0.2rem;
  background: linear-gradient(
    45deg,
    ${({
      theme: {
        gradients: { cor1Secundaria },
      },
    }) => cor1Secundaria},
    ${({
      theme: {
        gradients: { cor2Secundaria },
      },
    }) => cor2Secundaria}
  );
  color: ${({
    theme: {
      colors: { clara },
    },
  }) => clara};
  padding: 1.4rem;
  width: 17rem;
  cursor: pointer;

  @media (max-width: ${(props) => props.theme.breakPoints.smallerPhone}) {
    font-size: 1.4rem;
    width: 16rem;
    padding: 1.2rem;
  }
`;
