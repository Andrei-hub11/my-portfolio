import { motion } from "framer-motion";
import styled from "styled-components";

export const ContactSection = styled.section`
  padding: 10rem;
  overflow-x: hidden;

  @media (max-width: ${(props) => props.theme.breakPoints.smallerPhone}) {
    padding: 0rem;
  }
`;

export const ContactTitle = styled(motion.h2)`
  text-align: center;
  font-family: var(--font-family-title);
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
`;

export const ContactBox = styled(motion.div)`
  margin-top: 15rem;
  position: relative;
  display: flex;
  justify-content: center;
`;

export const ContactImage = styled.div`
  position: absolute;
  width: 15rem;
  height: 15rem;
  border: 0.5rem solid
    ${({
      theme: {
        colors: { secundaria },
      },
    }) => secundaria};
  border-radius: 50%;
  box-shadow: 0 8px 5.5rem
    ${({
      theme: {
        colors: { principal },
      },
    }) => principal};
  background-image: ${({
    theme: {
      images: { form },
    },
  }) => `url(${form})`};
  background-size: cover;
  background-position: center;
  top: 0;
  left: 50%;
  overflow: hidden;
  transform: translate(-50%, -50%);
  margin-bottom: 3rem;

  @media (max-width: ${(props) => props.theme.breakPoints.smallerPhone}) {
    width: 10rem;
    height: 10rem;
  }

  @media (min-width: ${(props) => props.theme.breakPoints.phoneOnly}) {
    width: 13rem;
    height: 13rem;
  }

  @media (min-width: ${(props) => props.theme.breakPoints.desktopUp}) {
    width: 15rem;
    height: 15rem;
  }
`;

export const ContactForm = styled.form`
  margin-top: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: nowrap;
  flex-direction: column;
  height: 60rem;
  width: 50rem;
  row-gap: 2rem;
  border-radius: 2rem;
  background: ${({
    theme: {
      colors: { principal },
    },
  }) => principal};

  @media (max-width: ${(props) => props.theme.breakPoints.smallerPhone}) {
    height: 45rem;
    width: 35rem;
  }

  @media (min-width: ${(props) => props.theme.breakPoints.phoneOnly}) {
    height: 50rem;
    width: 40rem;
  }

  @media (min-width: ${(props) => props.theme.breakPoints.tabletPortraitUp}) {
    width: 45rem;
  }

  @media (min-width: ${(props) => props.theme.breakPoints.desktopUp}) {
    height: 55rem;
    width: 50rem;
  }
`;

export const FormControl = styled.div`
  top: 2rem;
  padding: 1rem 0;
  position: relative;
  display: flex;
  flex-direction: column;

  @media (max-width: ${(props) => props.theme.breakPoints.smallerPhone}) {
    top: 3rem;
    padding: 1rem 0;
  }
`;

export const FormInput = styled.input`
  position: relative;
  font-size: 1.5rem;
  font-weight: 400;
  width: 40rem;
  height: 3.5rem;
  border: ${(props) =>
    props.$isError ? ".2rem solid #ff0000" : "0.2rem solid #fff"};
  border-radius: 1rem;
  outline: 0;
  background-color: ${({
    theme: {
      colors: { principal },
    },
  }) => principal};
  color: ${({
    theme: {
      colors: { clara },
    },
  }) => clara};
  padding-left: 1rem;
  caret-color: #3366ff;

  &::placeholder {
    color: ${({
      theme: {
        colors: { clara },
      },
    }) => clara};
  }

  &:-webkit-autofill {
    -webkit-box-shadow: 0 0 0 5rem white inset;
  }

  @media (max-width: ${(props) => props.theme.breakPoints.smallerPhone}) {
    font-size: ${({
      theme: {
        fontSize: { sPhone },
      },
    }) => `${sPhone[0]}rem`};
    width: 28rem;
    height: 3rem;
    padding-left: 1rem;
  }

  @media (min-width: ${(props) => props.theme.breakPoints.phoneOnly}) {
    font-size: ${({
      theme: {
        fontSize: { sPhone },
      },
    }) => `${sPhone[0]}rem`};
    width: 32rem;
    height: 3.5rem;
    padding-left: 1rem;
  }

  @media (min-width: ${(props) => props.theme.breakPoints.tabletPortraitUp}) {
    width: 35rem;
  }

  @media (min-width: ${(props) => props.theme.breakPoints.desktopUp}) {
    width: 40rem;
  }
`;

export const FormTextarea = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
`;

export const FormIcon = styled.div`
  position: absolute;
  visibility: hidden;
  top: 50%;
  transform: translateY(-50%);
  right: 1rem;
  height: 2.5rem;
  background-size: cover;
`;

export const FormMsg = styled.div`
  position: absolute;
  font-size: 1.2rem;
  font-weight: 700;
  color: #ff0000;
  bottom: -1rem;
`;

export const LabelForm = styled.label`
  position: absolute;
  top: 0.5rem;
  left: 1rem;
  font-size: 1rem;
  display: block;
  transition: 0.2s;
  color: ${({
    theme: {
      colors: { clara },
    },
  }) => clara};
  padding: 0 0.6rem;
  height: 0.7rem;
  background: ${({
    theme: {
      colors: { principal },
    },
  }) => principal};
  text-align: center;
  pointer-events: none;

  ${FormInput}:placeholder-shown + & {
    font-size: 1.4rem;
    cursor: text;
    top: 1.9rem;
    left: 1.8rem;
    color: #fff;
    font-weight: 400;

    @media (max-width: ${(props) => props.theme.breakPoints.smallerPhone}) {
      font-size: ${({
        theme: {
          fontSize: { sPhone },
        },
      }) => `${sPhone[0]}rem`};
    }
  }

  ${FormInput}:focus + & {
    top: 0.5rem;
    left: 1rem;
    font-size: 1rem;
    font-weight: 400;
    color: #1a73e8;
  }
`;

/* export const AutofillInput = styled(Input)`
  -webkit-text-fill-color: var(--cor-clara);
  -webkit-box-shadow: 0 0 0 5rem var(--cor-principal) inset;
`; */

export const Textarea = styled.textarea`
  position: relative;
  display: flex;
  flex-direction: column;
  font-size: 1.5rem;
  height: 15rem;
  width: 40rem;
  padding: 0.8rem;
  border-radius: 2rem;
  border: ${(props) =>
    props.$isError ? ".2rem solid #ff0000" : "0.2rem solid #fff"};
  resize: none;
  overflow-y: auto;

  @media (max-width: ${(props) => props.theme.breakPoints.smallerPhone}) {
    font-size: ${({
      theme: {
        fontSize: { sPhone },
      },
    }) => `${sPhone[0]}rem`};
    height: 15rem;
    width: 28rem;
  }

  @media (min-width: ${(props) => props.theme.breakPoints.phoneOnly}) {
    font-size: ${({
      theme: {
        fontSize: { sPhone },
      },
    }) => `${sPhone[0]}rem`};
    height: 15rem;
    width: 32rem;
  }

  @media (min-width: ${(props) => props.theme.breakPoints.tabletPortraitUp}) {
    width: 35rem;
  }

  @media (min-width: ${(props) => props.theme.breakPoints.desktopUp}) {
    width: 40rem;
  }
`;

export const PlaceholderLabel = styled.label`
  font-size: 1.5rem;
  cursor: text;
  top: 2rem;
  color: ${({
    theme: {
      colors: { clara },
    },
  }) => clara};
`;

export const FocusedLabel = styled.label`
  top: 0.7rem;
  left: 1rem;
  font-size: 0.8rem;
  font-weight: 400;
  color: ${({
    theme: {
      colors: { clara },
    },
  }) => clara};
`;

export const BtnForm = styled(motion.button)`
  margin-top: 3rem;
  font-size: 1.5rem;
  color: ${({
    theme: {
      colors: { principal },
    },
  }) => principal};
  padding: ${(props) =>
    props.hasloading === "true" ? "0.7rem 4rem" : "0.7rem 2.5rem"};
  border-radius: 3rem;
  width: 15rem;
  border: none;
  background: #fff;
  letter-spacing: 0.1rem;
  box-shadow: rgba(100, 100, 111, 0.6) 0px 7px 29px 0px;
  cursor: pointer;

  @media (min-width: ${(props) => props.theme.breakPoints.tabletLandscapeUp}) {
    width: 18rem;
  }
`;
