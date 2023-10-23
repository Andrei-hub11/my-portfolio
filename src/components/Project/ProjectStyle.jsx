import { motion } from "framer-motion";
import styled from "styled-components";

export const ProjectBox = styled(motion.div)`
  background: ${({
    theme: {
      colors: { principal },
    },
  }) => principal};
  padding: 2rem;
  border-radius: 3rem;

  @media (max-width: ${(props) => props.theme.breakPoints.smallerPhone}) {
    padding: 1rem;
  }
`;

export const ProjectImage = styled.img`
  width: 100%;
  height: 17rem;
  object-fit: cover;
  object-position: center;
  border-radius: 1rem;

  @media (max-width: ${(props) => props.theme.breakPoints.smallerPhone}) {
    object-fit: contain;
    height: 15rem;
  }

  @media (min-width: ${(props) => props.theme.breakPoints.phoneOnly}) {
    height: 15rem;
  }

  @media (min-width: ${(props) => props.theme.breakPoints.tabletPortraitUp}) {
    height: 17rem;
  }

  @media (min-width: ${(props) => props.theme.breakPoints.bigDesktopUp}) {
    height: 20rem;
  }
`;

export const ProjectText = styled.p`
  margin-top: 2.5rem;
  font-family: var(--font-family-principal);
  font-size: 1.5rem;
  font-weight: 700;
  text-transform: uppercase;
  color: ${({
    theme: {
      colors: { clara },
    },
  }) => clara};

  @media (max-width: ${(props) => props.theme.breakPoints.smallerPhone}) {
    font-size: 1.2rem;
  }
`;
