import styled from "styled-components";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";

import smallHeaderBackground from "../../images/imageAbout-pequena.webp";
import mediumHeaderBackground from "../../images/imageAbout-media.webp";
import bigHeaderBackground from "../../images/imageAbout-larga.webp";

export const Header = styled(motion.header)`
  z-index: 1000;
  position: relative;
  background-size: cover;
  background-position: center;
  min-height: 50vw;
  width: 100%;

  @media (max-width: ${(props) => props.theme.breakPoints.smallerPhone}) {
    min-height: 100%;
    width: 100%;
    overflow-x: hidden !important;

    background: linear-gradient(
        135deg,
        ${(props) => props.theme.gradients.cor1Gradient},
        ${(props) => props.theme.gradients.cor2Gradient}
      ),
      url(${smallHeaderBackground});
  }

  @media (min-width: ${(props) => props.theme.breakPoints.phoneOnly}) {
    min-height: 100%;
    width: 100%;
    overflow-x: hidden !important;
    background: linear-gradient(
        135deg,
        ${(props) => props.theme.gradients.cor1Gradient},
        ${(props) => props.theme.gradients.cor2Gradient}
      ),
      url(${mediumHeaderBackground});
  }

  @media (min-width: ${(props) => props.theme.breakPoints.desktopUp}) {
    min-height: 100vh;
    background: linear-gradient(
        135deg,
        ${(props) => props.theme.gradients.cor1Gradient},
        ${(props) => props.theme.gradients.cor2Gradient}
      ),
      url(${bigHeaderBackground});
  }
`;

export const Navegation = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 0.5rem;
  width: 100%;

  @media (min-width: ${(props) => props.theme.breakPoints.tabletLandscapeUp}) {
    padding: 2rem 4rem;
  }
`;

export const NavBar = styled.nav`
  display: flex;
  align-items: center;
  column-gap: 1.5rem;

  @media (max-width: ${(props) => props.theme.breakPoints.smallerPhone}) {
    position: absolute;
    top: 0;
    right: ${({ $isOpen }) => ($isOpen ? "0" : "-200%")};
    height: 100%;
    width: 300px;
    flex-direction: column;
    align-items: center;
    background: ${({
      theme: {
        colors: { principal },
      },
    }) => principal};
    row-gap: 2rem;
    padding: 8rem 2rem;
    transition: 0.5s all cubic-bezier(0.075, 0.82, 0.165, 1);
    z-index: 1050;
  }

  @media (min-width: ${(props) => props.theme.breakPoints.phoneOnly}) {
    position: absolute;
    top: 0;
    right: ${({ $isOpen }) => ($isOpen ? "0" : "-100%")};
    width: 300px;
    height: 100%;
    flex-direction: column;
    align-items: center;
    background: ${({
      theme: {
        colors: { principal },
      },
    }) => principal};
    row-gap: 2rem;
    padding: 8rem 2rem;
    transition: 0.5s all cubic-bezier(0.075, 0.82, 0.165, 1);
    z-index: 1050;
  }

  @media (min-width: ${(props) => props.theme.breakPoints.tabletLandscapeUp}) {
    position: unset;
    top: 0;
    width: unset;
    right: 0;
    height: 0;
    display: flex;
    align-items: center;
    column-gap: 1.5rem;
    flex-direction: row;
    row-gap: 0;
    padding: 0;
    z-index: 1050;
  }
`;

export const NavLink = styled.p`
  font-size: 1.5rem;
  padding: 0.4rem 0.8rem;
  border-radius: 0.2rem;
  color: ${({
    theme: {
      colors: { clara },
    },
  }) => clara};
  cursor: pointer;

  &:hover {
    text-decoration: underline;
    text-underline-offset: 0.7rem;
  }

  @media (min-width: ${(props) => props.theme.breakPoints.bigDesktopUp}) {
    font-size: ${({
      theme: {
        fontSize: { bigDesktopUp },
      },
    }) => `${bigDesktopUp[0]}rem`};
  }
`;

export const ToggleModeContainer = styled.div`
  align-self: flex-end;

  @media (min-width: ${(props) => props.theme.breakPoints.tabletLandscapeUp}) {
    align-self: unset;
  }
`;

export const ToggleLabel = styled.label`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #111;
  border-radius: 5rem;
  padding: 0.5rem;
  height: 2.5rem;
  width: 5rem;
`;

export const ToggleCheckbox = styled.input`
  position: absolute;
  opacity: 0;
`;

export const ToggleBall = styled.div`
  position: absolute;
  top: 0.2rem;
  left: 0.2rem;
  height: 2.2rem;
  width: 2.2rem;
  border-radius: 50%;
  background: #fff;
  transform: ${({ checked }) =>
    checked ? "translateX(25px)" : "translateX(0)"};
  transition: 0.5s ease-in;
`;

export const MoonIcon = styled(FontAwesomeIcon).attrs({
  icon: faMoon,
})`
  color: ${({
    theme: {
      colors: { principal },
    },
  }) => principal};
  font-size: 1.5rem;
`;

export const SunIcon = styled(FontAwesomeIcon).attrs({
  icon: faSun,
})`
  color: #f39c12;
  font-size: 1.5rem;
`;

export const Logo = styled.p`
  font-size: 2rem;
  padding: 0 0.9rem;
  color: ${({
    theme: {
      colors: { clara },
    },
  }) => clara};
  font-weight: 700;

  @media (min-width: ${(props) => props.theme.breakPoints.bigDesktopUp}) {
    font-size: 2.5rem;
  }
`;
export const MenuBox = styled.div`
  /*  display: flex; */
  display: none;
  flex-direction: column;
  justify-content: space-between;
  width: 2.5rem;
  height: 2.5rem;
  cursor: pointer;
  transition: transform 330ms ease-out;
  row-gap: 0.2rem;
  transform: ${(props) => (props.$isOpen ? "rotate(-45deg)" : "none")};

  @media (max-width: ${(props) => props.theme.breakPoints.smallerPhone}) {
    display: flex;
    z-index: 1060;
  }

  @media (min-width: ${(props) => props.theme.breakPoints.phoneOnly}) {
    display: flex;
    z-index: 1060;
  }

  @media (min-width: ${(props) => props.theme.breakPoints.tabletLandscapeUp}) {
    display: none;
  }
`;

export const LineMenu = styled.div`
  background-color: #fff;
  border-radius: 0.5rem;
  width: 100%;
  height: 0.5rem;
`;

export const LineMenuHalf = styled(LineMenu)`
  width: 50%;
`;

export const LineMenuStart = styled(LineMenuHalf)`
  align-self: flex-start;
  transition: transform 330ms cubic-bezier(0.54, -0.81, 0.57, 0.57);
  transform-origin: right;
  transform: ${({ $isOpen }) =>
    $isOpen ? "rotate(-90deg) translateX(0.3rem)" : "none"};
`;

export const LineMenuEnd = styled(LineMenuHalf)`
  align-self: flex-end;
  transition: transform 330ms cubic-bezier(0.54, -0.81, 0.57, 0.57);
  transform-origin: left;
  transform: ${({ $isOpen }) =>
    $isOpen ? "rotate(-90deg) translateX(-3px)" : "none"};
`;

export const InitialBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5rem;

  @media (max-width: ${(props) => props.theme.breakPoints.smallerPhone}) {
    padding: 4rem;
  }
`;

export const InitialBoxCard = styled.div`
  position: relative;
  /*   margin-top: 10rem; */
  width: 30rem;
  height: 40rem;
  background: ${({
    theme: {
      colors: { clara },
    },
  }) => clara};
  box-shadow: 0.3rem 0.5rem 0.6rem
    ${({
      theme: {
        colors: { principal },
      },
    }) => principal};
  transition: 0.3s;

  @media (max-width: ${(props) => props.theme.breakPoints.smallerPhone}) {
    width: 15rem;
    height: 20rem;
  }

  @media (min-width: ${(props) => props.theme.breakPoints.phoneOnly}) {
    margin-top: 1rem;
    width: 20rem;
    height: 25rem;
  }

  @media (min-width: ${(props) => props.theme.breakPoints.tabletPortraitUp}) {
    width: 25rem;
    height: 30rem;
  }

  @media (min-width: ${(props) => props.theme.breakPoints.bigDesktopUp}) {
    width: 30rem;
    height: 35rem;
  }
`;

export const InitialBoxCardImg = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 25rem;
  background: ${({
    theme: {
      colors: { principal },
    },
  }) => principal};
  border-radius: 0 0 10rem 0;
  transition: 0.3s;

  @media (max-width: ${(props) => props.theme.breakPoints.smallerPhone}) {
    width: 100%;
    height: 10rem;
    border-radius: 0 0 7rem 0;
  }

  @media (min-width: ${(props) => props.theme.breakPoints.phoneOnly}) {
    width: 100%;
    height: 14rem;
    border-radius: 0 0 7rem 0;
  }

  @media (min-width: ${(props) => props.theme.breakPoints.tabletPortraitUp}) {
    height: 15rem;
    border-radius: 0 0 10rem 0;
  }

  @media (min-width: ${(props) => props.theme.breakPoints.bigDesktopUp}) {
    height: 18rem;
  }
`;

export const ImageSection = styled.img`
  width: 70%;
  height: 20rem;
  object-fit: cover;
  border-radius: 50%;

  @media (max-width: ${(props) => props.theme.breakPoints.smallerPhone}) {
    width: 7rem;
    height: 7rem;
  }

  @media (min-width: ${(props) => props.theme.breakPoints.phoneOnly}) {
    width: 10rem;
    height: 10rem;
  }

  @media (min-width: ${(props) => props.theme.breakPoints.tabletPortraitUp}) {
    width: 13rem;
    height: 13rem;
  }

  @media (min-width: ${(props) => props.theme.breakPoints.bigDesktopUp}) {
    width: 15rem;
    height: 15rem;
  }
`;

export const CardInfo = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 1rem;
  margin-top: 1.5rem;

  @media (min-width: ${(props) => props.theme.breakPoints.tabletPortraitUp}) {
    margin-top: 2rem;
  }
`;

export const CardText = styled.div`
  font-family: ${({ theme: { fonts } }) => fonts[2]};
  font-size: 2.5rem;
  font-weight: 700;
  color: ${({
    theme: {
      colors: { principal },
    },
  }) => principal};
  text-align: center;
  transition: 0.3s;

  @media (max-width: ${(props) => props.theme.breakPoints.smallerPhone}) {
    font-size: 1.5rem;
  }

  @media (min-width: ${(props) => props.theme.breakPoints.phoneOnly}) {
    font-size: 1.7rem;
  }

  @media (min-width: ${(props) => props.theme.breakPoints.tabletPortraitUp}) {
    font-size: 2rem;
  }

  @media (min-width: ${(props) => props.theme.breakPoints.tabletLandscapeUp}) {
    font-size: ${({
      theme: {
        fontSize: { tabletLandscapeUp },
      },
    }) => `${tabletLandscapeUp[1]}rem`};
  }

  @media (min-width: ${(props) => props.theme.breakPoints.desktopUp}) {
    font-size: ${({
      theme: {
        fontSize: { desktopUp },
      },
    }) => `${desktopUp[1]}rem`};
  }

  @media (min-width: ${(props) => props.theme.breakPoints.bigDesktopUp}) {
    font-size: ${({
      theme: {
        fontSize: { bigDesktopUp },
      },
    }) => `${bigDesktopUp[1]}rem`};
  }
`;

export const CardTextProfi = styled(CardText)`
  font-size: 1.8rem;

  @media (max-width: ${(props) => props.theme.breakPoints.smallerPhone}) {
    font-size: ${({
      theme: {
        fontSize: { sPhone },
      },
    }) => `${sPhone[0]}rem`};
  }

  @media (min-width: ${(props) => props.theme.breakPoints.phoneOnly}) {
    font-size: ${({
      theme: {
        fontSize: { sPhone },
      },
    }) => `${sPhone[0]}rem`};
  }

  @media (min-width: ${(props) => props.theme.breakPoints.tabletPortraitUp}) {
    font-size: ${({
      theme: {
        fontSize: { tabletPortraitUp },
      },
    }) => `${tabletPortraitUp[0]}rem`};
  }

  @media (min-width: ${(props) => props.theme.breakPoints.tabletLandscapeUp}) {
    font-size: ${({
      theme: {
        fontSize: { tabletLandscapeUp },
      },
    }) => `${tabletLandscapeUp[0]}rem`};
  }

  @media (min-width: ${(props) => props.theme.breakPoints.desktopUp}) {
    font-size: ${({
      theme: {
        fontSize: { desktopUp },
      },
    }) => `${desktopUp[0]}rem`};
  }

  @media (min-width: ${(props) => props.theme.breakPoints.bigDesktopUp}) {
    font-size: ${({
      theme: {
        fontSize: { bigDesktopUp },
      },
    }) => `${bigDesktopUp[0]}rem`};
  }
`;

export const CardSocial = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2.5rem;
  column-gap: 1rem;
  margin-top: 0.5rem;

  @media (max-width: ${(props) => props.theme.breakPoints.smallerPhone}) {
    margin-top: 0;
  }

  @media (min-width: ${(props) => props.theme.breakPoints.tabletPortraitUp}) {
    column-gap: 1.5rem;
  }

  @media (min-width: ${(props) => props.theme.breakPoints.bigDesktopUp}) {
    font-size: 3rem;
  }
`;
