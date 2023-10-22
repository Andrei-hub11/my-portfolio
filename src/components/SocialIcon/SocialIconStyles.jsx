import styled from "styled-components";

export const Img = styled.img`
  filter: ${({ theme: { iconColors }, $primary }) =>
    $primary ? iconColors.light : iconColors.primary};
  height: 2.8rem;
  transition: 0.3s;

  &:hover {
    transform: scale(1.2);
    transition: 0.3s;
  }

  @media (max-width: ${(props) => props.theme.breakPoints.smallerPhone}) {
    height: ${({
      theme: {
        fontSize: { sPhone },
      },
    }) => `${sPhone[1]}rem`};
  }

  @media (min-width: ${(props) => props.theme.breakPoints.phoneOnly}) {
    height: ${({
      theme: {
        fontSize: { sPhone },
      },
    }) => `${sPhone[1]}rem`};
  }

  @media (min-width: ${(props) => props.theme.breakPoints.tabletLandscapeUp}) {
    height: 2.5rem;
  }

  @media (min-width: ${(props) => props.theme.breakPoints.bigDesktopUp}) {
    height: 3rem;
  }
`;
