import { motion } from "framer-motion";
import styled from "styled-components";

export const Subscription = styled(motion.section)`
  position: relative;
  overflow: hidden;
  padding: 7rem 0;
`;

export const SubscriptionBox = styled.div`
  position: relative;
  width: 100%;
  max-width: 75rem;
  padding: 0 1.5rem;
  margin: 0 auto;

  @media (max-width: ${(props) => props.theme.breakPoints.smallerPhone}) {
    max-width: 45rem;
  }

  @media (min-width: ${(props) => props.theme.breakPoints.phoneOnly}) {
    max-width: 45rem;
  }

  @media (min-width: ${(props) => props.theme.breakPoints.tabletPortraitUp}) {
    max-width: 47rem;
  }

  @media (min-width: ${(props) => props.theme.breakPoints.tabletLandscapeUp}) {
    max-width: 70rem;
  }

  @media (min-width: ${(props) => props.theme.breakPoints.desktopUp}) {
    max-width: 100%;
  }
`;

export const SubscriptionBoxSecondary = styled.div`
  background-color: ${({
    theme: {
      colors: { principal },
    },
  }) => principal};
  padding: 10rem;
  width: 100%;
  border-radius: 20px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 6rem;
  align-items: center;
  transition: 0.3s;

  @media (max-width: ${(props) => props.theme.breakPoints.smallerPhone}) {
    grid-template-columns: 1fr;
    row-gap: 1rem;
    padding: 3rem;
  }

  @media (min-width: ${(props) => props.theme.breakPoints.phoneOnly}) {
    grid-template-columns: 1fr;
    row-gap: 1rem;
    padding: 3rem;
  }

  @media (min-width: ${(props) => props.theme.breakPoints.tabletLandscapeUp}) {
    grid-template-columns: 1fr 1fr;
  }

  @media (min-width: ${(props) => props.theme.breakPoints.desktopUp}) {
    grid-template-columns: 1fr auto;
    padding: 10rem;
  }

  @media (min-width: ${(props) => props.theme.breakPoints.bigDesktopUp}) {
    padding: 12rem;
  }
`;

export const SubscriptionText = styled.p`
  color: ${({
    theme: {
      colors: { clara },
    },
  }) => clara};
  font-size: 1.2rem;
  margin: 2rem 0;
  line-height: 2.3;
  transition: 0.3s color;

  @media (min-width: ${(props) => props.theme.breakPoints.bigDesktopUp}) {
    font-size: ${({
      theme: {
        fontSize: { bigDesktopUp },
      },
    }) => `${bigDesktopUp[0]}rem`};
  }
`;

export const SubscriptionTitle = styled.h2`
  color: ${({
    theme: {
      colors: { clara },
    },
  }) => clara};
  text-transform: uppercase;
  font-size: 1.5rem;
  letter-spacing: 0.5px;
  border-left: 3px solid
    ${({
      theme: {
        colors: { clara },
      },
    }) => clara};
  padding: 0.13rem 0.75rem;
  margin-bottom: 1rem;
  font-weight: 500;

  @media (max-width: ${(props) => props.theme.breakPoints.smallerPhone}) {
    font-size: 2rem;
  }

  @media (min-width: ${(props) => props.theme.breakPoints.phoneOnly}) {
    font-size: 2rem;
  }

  @media (min-width: ${(props) => props.theme.breakPoints.bigDesktopUp}) {
    font-size: ${({
      theme: {
        fontSize: { bigDesktopUp },
      },
    }) => `${bigDesktopUp[1]}rem`};
  }
`;

export const SubscriptionBoxSecondaryInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

export const SubscriptionHeading = styled.h1`
  color: ${({
    theme: {
      colors: { clara },
    },
  }) => clara};
  font-size: 5rem;
  font-family: var(--font-family-title);
  font-weight: 400;
  line-height: 1.3;

  @media (max-width: ${(props) => props.theme.breakPoints.smallerPhone}) {
    font-size: 2rem;
  }

  @media (min-width: ${(props) => props.theme.breakPoints.phoneOnly}) {
    font-size: 2rem;
  }

  @media (min-width: ${(props) => props.theme.breakPoints.bigDesktopUp}) {
    font-size: ${({
      theme: {
        fontSize: { bigDesktopUp },
      },
    }) => `${bigDesktopUp[1]}rem`};
  }
`;

export const InputSubscription = styled.input`
  display: inline-block;
  padding: 0.9rem 1.5rem;
  background: ${({
    theme: {
      colors: { clara },
    },
  }) => clara};
  border: ${(props) =>
    props.$isError ? ".2rem solid #ff0000" : "0.2rem solid #fff"};
  width: 100%;
  border-radius: 1.7rem;
  font-family: var(--font-family-principal);
  font-size: 1.5rem;
  font-weight: 500;
  outline: none;
  caret-color: ${({
    theme: {
      colors: { principal },
    },
  }) => principal};

  &::placeholder {
    color: ${({
      theme: {
        colors: { principal },
      },
    }) => principal};
  }

  @media (max-width: ${(props) => props.theme.breakPoints.smallerPhone}) {
    padding: 0.6rem 1.2rem;
  }

  @media (min-width: ${(props) => props.theme.breakPoints.phoneOnly}) {
    padding: 0.6rem 1.2rem;
  }

  @media (min-width: ${(props) => props.theme.breakPoints.bigDesktopUp}) {
    padding: 0.9rem 1.5rem;
    width: 30rem;
  }
`;

export const SubscriptionForm = styled.form`
  display: grid;
  grid-template-columns: 1fr;
  row-gap: 3rem;

  @media (max-width: ${(props) => props.theme.breakPoints.smallerPhone}) {
    grid-template-columns: 30rem;
    justify-content: center;
  }

  @media (min-width: ${(props) => props.theme.breakPoints.phoneOnly}) {
    grid-template-columns: 30rem;
    justify-content: center;
  }

  @media (min-width: ${(props) => props.theme.breakPoints.desktopUp}) {
    grid-template-columns: 1fr 20rem;
    column-gap: 1rem;
  }

  @media (min-width: ${(props) => props.theme.breakPoints.bigDesktopUp}) {
    grid-template-columns: 1fr 30rem;
    column-gap: 1rem;
  }
`;

export const SubscriptionData = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
`;

export const SubscriptionFormMsg = styled.small`
  position: absolute;
  color: #ff0000;
  font-size: 1.5rem;
  font-weight: 700;
  bottom: -2rem;

  @media (min-width: ${(props) => props.theme.breakPoints.bigDesktopUp}) {
    font-size: ${({
      theme: {
        fontSize: { bigDesktopUp },
      },
    }) => `${bigDesktopUp[0]}rem`};
  }
`;

export const SubscriptionControl = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
`;

export const BtnSubscription = styled.button`
  display: inline-block;
  padding: 0.9rem 1.75rem;
  border-radius: 1.7rem;
  background-color: #000;
  color: #fff;
  font-size: 1.5rem;
  letter-spacing: 0.04rem;
  min-width: 12.5rem;
  text-align: center;
  border: none;
  outline: none;
  cursor: pointer;
  transition: 0.3s;

  @media (min-width: ${(props) => props.theme.breakPoints.desktopUp}) {
    width: 15rem;
  }

  @media (min-width: ${(props) => props.theme.breakPoints.bigDesktopUp}) {
    width: 20rem;
  }
`;
