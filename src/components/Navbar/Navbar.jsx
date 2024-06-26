import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Link } from "react-scroll";

import {
  Header,
  NavBar,
  InitialBox,
  LineMenu,
  LineMenuEnd,
  LineMenuStart,
  Logo,
  Navegation,
  NavLink,
  InitialBoxCard,
  InitialBoxCardImg,
  CardInfo,
  CardText,
  CardTextProfi,
  CardSocial,
  MenuBox,
  ToggleModeContainer,
  ToggleLabel,
  MoonIcon,
  SunIcon,
  ToggleBall,
  ImageSection,
} from "./NavbarStyles";

import SocialIcon from "../SocialIcon/SocialIcon";

import Andrey from "../../images/image-profile.webp";
import GmailIcon from "../../images/bxl-gmail.svg";
import LinkedinIcon from "../../images/bxl-linkedin-square.svg";
import useRedirect from "../../utils/customHooks/useRedirect";

const list = [
  {
    id: "1",
    text: "Sobre",
  },
  {
    id: "3",
    text: "Serviços",
  },
  {
    id: "4",
    text: "Projetos",
  },
  {
    id: "5",
    text: "Contato",
  },
];

function Navbar({ onClick }) {
  const { onRedirect } = useRedirect();
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const localStorageKey = "colorScheme";

  useEffect(() => {
    const isDark = window.localStorage.getItem(localStorageKey);

    if (isDark === "light" || isDark === null) {
      return;
    }
    setIsDarkMode(true);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleToggle = () => {
    setIsDarkMode(!isDarkMode);
    onClick();
  };

  const handleRedirect = (url) => {
    onRedirect(url);
  };

  return (
    <Header
      initial={{ opacity: 0, y: -100 }}
      animate={{
        opacity: [0, 0.3, 0.5, 0.7, 1],
        y: [-90, -60, -30, -10, 0],
        transition: { duration: 1, delay: 0.5 },
      }}
    >
      <Navegation>
        <Logo>Andrey</Logo>
        <NavBar $isOpen={isOpen}>
          {list?.map((l) => (
            <Link
              key={l.id}
              activeClass="active"
              to={l.text}
              spy={true}
              smooth={true}
              duration={100}
            >
              <NavLink
                href={l.text}
                key={l.id}
                onClick={() => setIsOpen(false)}
              >
                {l.text}
              </NavLink>
            </Link>
          ))}

          <ToggleModeContainer onClick={handleToggle}>
            <ToggleLabel>
              <MoonIcon />
              <SunIcon />
              <ToggleBall checked={isDarkMode} />
            </ToggleLabel>
          </ToggleModeContainer>
        </NavBar>
        <MenuBox $isOpen={isOpen} onClick={toggleMenu}>
          <LineMenuStart $isOpen={isOpen}></LineMenuStart>
          <LineMenu></LineMenu>
          <LineMenuEnd $isOpen={isOpen}></LineMenuEnd>
        </MenuBox>
      </Navegation>
      <InitialBox>
        <InitialBoxCard>
          <InitialBoxCardImg>
            <ImageSection src={Andrey} alt=""></ImageSection>
          </InitialBoxCardImg>
          <CardInfo>
            <CardText>Andrei Rodrigues</CardText>
            <CardTextProfi>Desenvolvedor Web</CardTextProfi>
            <CardSocial>
              <SocialIcon
                $primary={true}
                src={GmailIcon}
                alt="instagram-icon"
                onClick={() =>
                  handleRedirect("mailto:andreirodrigues794@gmail.com")
                }
                width="10"
                height="10"
              />

              <SocialIcon
                $primary={true}
                src={LinkedinIcon}
                alt="linkedin-icon"
                onClick={() =>
                  handleRedirect(
                    "https://www.linkedin.com/in/andrei-rodrigues-a7949120b/"
                  )
                }
                width="10"
                height="10"
              />
            </CardSocial>
          </CardInfo>
        </InitialBoxCard>
      </InitialBox>
    </Header>
  );
}

Navbar.propTypes = {
  onClick: PropTypes.func,
};

export default Navbar;
