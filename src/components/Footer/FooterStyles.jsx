import styled from "styled-components";

export const FooterSection = styled.footer`
  padding: 4rem 0;

  p {
    color: ${({
      theme: {
        colors: { clara },
      },
    }) => clara};
  }

  @media (min-width: ${(props) => props.theme.breakPoints.bigDesktopUp}) {
    p {
      font-size: 1.5rem;
    }
  }
`;

export const FooterBox = styled.div`
  position: relative;
  width: 100%;
  max-width: 75rem;
  padding: 0 1.5rem;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
`;

export const FooterLogo = styled.div`
  font-family: var(--font-family-principal);
  font-size: 2rem;
  padding: 0 0.9rem;
  color: ${({
    theme: {
      colors: { logo },
    },
  }) => logo};
  font-weight: 700;

  span {
    color: ${({
      theme: {
        colors: { secundaria },
      },
    }) => secundaria};
    font-weight: 700;
  }

  @media (min-width: ${(props) => props.theme.breakPoints.bigDesktopUp}) {
    font-size: ${({
      theme: {
        fontSize: { bigDesktopUp },
      },
    }) => `${bigDesktopUp[1]}rem`};
  }
`;

export const SocialMedia = styled.ul`
  display: flex;
  column-gap: 1rem;
`;

export const SocialLink = styled.a`
  width: 35px;
  height: 35px;
  border-radius: 50%;
  margin-left: 1rem;
  color: ${({
    theme: {
      colors: { clara },
    },
  }) => clara};
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
`;
