import { motion } from "framer-motion";
import styled from "styled-components";

export const AboutSection = styled.section`
  padding: 7rem 0;
  overflow-x: hidden;

  @media (max-width: ${(props) => props.theme.breakPoints.smallerPhone}) {
    padding: 15rem 0;
  }

  @media (min-width: ${(props) => props.theme.breakPoints.phoneOnly}) {
    padding: 5rem 0;
  }
`;

export const MainBox = styled.div`
  width: 100%;
  max-width: 85rem;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 1.5rem;

  @media (max-width: ${(props) => props.theme.breakPoints.smallerPhone}) {
    max-width: 35rem;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(35rem, 1fr));
    gap: 1.5rem;
  }

  @media (min-width: ${(props) => props.theme.breakPoints.phoneOnly}) {
    max-width: 38rem;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(35rem, 1fr));
    gap: 1.5rem;
  }

  @media (min-width: ${(props) => props.theme.breakPoints.tabletPortraitUp}) {
    column-gap: 1.5rem;
  }

  @media (min-width: ${(props) => props.theme.breakPoints.tabletLandscapeUp}) {
    max-width: 40rem;
  }

  @media (min-width: ${(props) => props.theme.breakPoints.desktopUp}) {
    max-width: 76rem;
  }

  @media (min-width: ${(props) => props.theme.breakPoints.bigDesktopUp}) {
    max-width: 86rem;
  }
`;

export const AboutBoxPrimary = styled(motion.div)``;

export const AboutBoxSecondary = styled(motion.div)`
  display: flex;
  flex-direction: column;
`;

export const AboutImage = styled.img`
  width: 100%;
  object-fit: cover;

  @media (min-width: ${(props) => props.theme.breakPoints.tabletPortraitUp}) {
    height: 35rem;
  }

  @media (min-width: ${(props) => props.theme.breakPoints.desktopUp}) {
    height: 40rem;
  }
`;

export const AboutText = styled.div`
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

  @media (min-width: ${(props) => props.theme.breakPoints.tabletPortraitUp}) {
    font-size: ${({
      theme: {
        fontSize: { tabletPortraitUp },
      },
    }) => `${tabletPortraitUp[2]}rem`};
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

export const AboutTextStory = styled.p`
  margin-top: 2rem;
  font-size: 1.6rem;
  text-align: justify;
  color: ${({
    theme: {
      colors: { texto },
    },
  }) => texto};
  line-height: 1.8rem;

  @media (max-width: ${(props) => props.theme.breakPoints.smallerPhone}) {
    margin-top: 1rem;
    font-size: ${({
      theme: {
        fontSize: { sPhone },
      },
    }) => `${sPhone[0]}rem`};
  }

  @media (min-width: ${(props) => props.theme.breakPoints.phoneOnly}) {
    margin-top: 1rem;
    font-size: ${({
      theme: {
        fontSize: { sPhone },
      },
    }) => `${sPhone[0]}rem`};
  }

  @media (min-width: ${(props) => props.theme.breakPoints.bigDesktopUp}) {
    font-size: ${({
      theme: {
        fontSize: { bigDesktopUp },
      },
    }) => `${bigDesktopUp[0]}rem`};
    line-height: 2rem;
  }
`;

export const AboutIcon = styled.img`
  transition: 0.3s;
  filter: ${({
    theme: {
      iconColors: { lightSecundaria },
    },
  }) => lightSecundaria};
  padding-left: 0.5rem;
  height: 2rem;
`;
