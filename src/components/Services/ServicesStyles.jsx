import { motion } from "framer-motion";
import styled from "styled-components";

export const ServicesSection = styled.section`
  padding: 7rem 0;
  overflow-x: hidden;

  @media (max-width: ${(props) => props.theme.breakPoints.smallerPhone}) {
    padding: 5rem 0;
  }
`;

export const ServicesTitle = styled(motion.h2)`
  text-align: center;
  font-family: ${({ theme: { fonts } }) => fonts[1]};
  font-size: 3.5rem;
  font-weight: 700;
  color: ${({
    theme: {
      colors: { principal },
    },
  }) => principal};

  @media (max-width: ${(props) => props.theme.breakPoints.smallerPhone}) {
    font-size: ${({
      theme: {
        fontSize: { sPhone },
      },
    }) => `${sPhone[2]}rem`};
  }

  @media (min-width: ${(props) => props.theme.breakPoints.phoneOnly}) {
    font-size: ${({
      theme: {
        fontSize: { sPhone },
      },
    }) => `${sPhone[2]}rem`};
  }

  @media (min-width: ${(props) => props.theme.breakPoints.tabletLandscapeUp}) {
    font-size: ${({
      theme: {
        fontSize: { tabletLandscapeUp },
      },
    }) => `${tabletLandscapeUp[2]}rem`};
  }

  @media (min-width: ${(props) => props.theme.breakPoints.bigDesktopUp}) {
    font-size: ${({
      theme: {
        fontSize: { bigDesktopUp },
      },
    }) => `${bigDesktopUp[2]}rem`};
  }
`;

export const ServicesContainer = styled.div`
  margin-top: 7rem;
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  @media (max-width: ${(props) => props.theme.breakPoints.smallerPhone}) {
    margin-top: 5rem;
    align-items: center;
    flex-direction: column;
    row-gap: 2rem;
  }
`;

export const ServiceCard = styled(motion.div)`
  background: ${({
    theme: {
      colors: { principal },
    },
  }) => principal};
  height: 30rem;
  width: 30rem;

  @media (max-width: ${(props) => props.theme.breakPoints.smallerPhone}) {
    width: 27rem;
  }

  @media (min-width: ${(props) => props.theme.breakPoints.phoneOnly}) {
    width: 27rem;
  }

  @media (min-width: ${(props) => props.theme.breakPoints.tabletLandscapeUp}) {
    height: 35rem;
    width: 30rem;
  }

  @media (min-width: ${(props) => props.theme.breakPoints.desktopUp}) {
    height: 40rem;
    width: 40rem;
  }

  @media (min-width: ${(props) => props.theme.breakPoints.bigDesktopUp}) {
    height: 45rem;
  }
`;

export const ServiceCardTitle = styled.div`
  display: flex;
  justify-content: center;
  height: 5rem;
  border-radius: 0 0 3rem 3rem;
  background: ${({
    theme: {
      colors: { secundaria },
    },
  }) => secundaria};

  @media (min-width: ${(props) => props.theme.breakPoints.tabletPortraitUp}) {
    font-size: ${({
      theme: {
        fontSize: { tabletPortraitUp },
      },
    }) => `${tabletPortraitUp[2]}rem`};
  }

  @media (min-width: ${(props) => props.theme.breakPoints.bigDesktopUp}) {
    font-size: ${({
      theme: {
        fontSize: { bigDesktopUp },
      },
    }) => `${bigDesktopUp[2]}rem`};
  }
`;

export const ServiceCardText = styled.p`
  margin-top: 1rem;
  font-size: ${({
    theme: {
      fontSize: { sPhone },
    },
  }) => `${sPhone[1]}rem`};
  font-weight: 700;
  text-transform: uppercase;
  text-align: justify;
  color: ${({
    theme: {
      colors: { clara },
    },
  }) => clara};

  @media (max-width: ${(props) => props.theme.breakPoints.smallerPhone}) {
    font-size: 1.5rem;
  }

  @media (min-width: ${(props) => props.theme.breakPoints.tabletPortraitUp}) {
    font-size: ${({
      theme: {
        fontSize: { tabletPortraitUp },
      },
    }) => `${tabletPortraitUp[1]}rem`};
  }

  @media (min-width: ${(props) => props.theme.breakPoints.bigDesktopUp}) {
    font-size: ${({
      theme: {
        fontSize: { bigDesktopUp },
      },
    }) => `${bigDesktopUp[1]}rem`};
  }
`;

export const ServiceCardIcon = styled.img`
  height: 2rem;
  filter: ${({
    theme: {
      iconColors: { lightSecundaria },
    },
  }) => lightSecundaria};

  @media (max-width: ${(props) => props.theme.breakPoints.smallerPhone}) {
    height: 1.7rem;
  }

  @media (min-width: ${(props) => props.theme.breakPoints.desktopUp}) {
    height: 2rem;
  }

  @media (min-width: ${(props) => props.theme.breakPoints.bigDesktopUp}) {
    height: 2.5rem;
  }
`;

export const ServiceCardList = styled.div`
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
  font-size: 1.5rem;

  @media (max-width: ${(props) => props.theme.breakPoints.smallerPhone}) {
    margin-top: 1rem;
    font-size: ${({
      theme: {
        fontSize: { sPhone },
      },
    }) => `${sPhone[0]}rem`};
  }
`;

export const ServiceCardListContainer = styled.div`
  width: 80%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;

  @media (max-width: ${(props) => props.theme.breakPoints.smallerPhone}) {
    margin-top: 1rem;
    font-size: ${({
      theme: {
        fontSize: { sPhone },
      },
    }) => `${sPhone[0]}rem`};
  }
`;

export const ServiceCardDescription = styled.p`
  color: ${({
    theme: {
      colors: { clara },
    },
  }) => clara};
  font-size: 1.2rem;
  word-break: all;

  @media (min-width: ${(props) => props.theme.breakPoints.desktopUp}) {
    font-size: ${({
      theme: {
        fontSize: { desktopUp },
      },
    }) => `${desktopUp[0]}rem`};
  }
`;
