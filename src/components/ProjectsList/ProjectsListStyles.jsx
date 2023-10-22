import { motion } from "framer-motion";
import styled from "styled-components";

export const ProjectsSection = styled.section`
  padding: 5rem;
  overflow-x: hidden;
`;

export const ProjectsTitle = styled(motion.h2)`
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

export const ProjectsContainer = styled.div`
  margin-top: 7rem;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-auto-rows: 40rem;
  gap: 4rem;

  @media (max-width: ${(props) => props.theme.breakPoints.smallerPhone}) {
    justify-content: center;
    grid-template-columns: repeat(auto-fill, minmax(25rem, 36rem));
    grid-auto-rows: 35rem;
  }

  @media (min-width: ${(props) => props.theme.breakPoints.phoneOnly}) {
    justify-content: center;
    grid-template-columns: repeat(auto-fill, minmax(25rem, 36rem));
    grid-auto-rows: 35rem;
  }

  @media (min-width: ${(props) => props.theme.breakPoints.tabletPortraitUp}) {
    grid-template-columns: repeat(auto-fill, minmax(30rem, 40rem));
  }

  @media (min-width: ${(props) => props.theme.breakPoints.bigDesktopUp}) {
    grid-template-columns: repeat(auto-fill, minmax(35rem, 45rem));
    grid-auto-rows: 37rem;
  }
`;
