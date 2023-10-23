import styled from "styled-components";

export const Btn = styled.button`
  display: flex;
  justify-content: space-between;
  margin-top: 2rem;
  text-align: center;
  text-transform: uppercase;
  font-size: 1.6rem;
  font-family: ${({ theme: { fonts } }) => fonts[1]};
  letter-spacing: 0.2rem;
  background: ${({ theme: { colors }, $primary }) =>
    $primary ? colors.btn_primario : colors.btn_secundario};
  color: ${({ theme: { colors }, $primary }) =>
    $primary ? colors.clara : colors.principal};
  padding: 1.4rem;
  width: 17rem;
  cursor: pointer;
  border-radius: 0.5rem;

  &:hover {
    background: ${({ $primary }) => ($primary ? "#000" : "")};
    transition: background 0.3s;
  }

  @media (max-width: ${(props) => props.theme.breakPoints.smallerPhone}) {
    font-size: 1.4rem;
    width: 16rem;
    padding: 1rem;
  }

  @media (min-width: ${(props) => props.theme.breakPoints.phoneOnly}) {
    font-size: 1.4rem;
    width: 16rem;
    padding: 1rem;
  }
`;
