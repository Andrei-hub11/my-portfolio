import {
  FooterBox,
  FooterLogo,
  FooterSection,
  SocialMedia,
} from "./FooterStyles";

import SocialIcon from "../SocialIcon/SocialIcon";

import InstagramIcon from "../../images/bxl-instagram.svg";
import TwitterIcon from "../../images/bxl-twitter.svg";

function Footer() {
  // Função para redirecionar para a página correspondente com base no ID passado
  const redirectingPage = (id) => {
    // Implemente a lógica de redirecionamento aqui
  };

  const variants = {
    initial: { opacity: 0 },
    hover: {
      opacity: [0, 0.3, 0.5, 0.7, 1],
      transition: { duration: 1.5 },
    },
    exit: {
      opacity: 0,
      transition: { duration: 1 },
    },
  };

  return (
    <FooterSection whileInView="hover" initial="initial" variants={variants}>
      <FooterBox>
        <FooterLogo>
          Portf<span>ólio.</span>
        </FooterLogo>
        {/* <a href="#" className="footer__logo">
          Portf<span>ólio.</span>
        </a> */}
        <p className="text">&copy; Copyright 2022. All rights reserved</p>
        <SocialMedia>
          <li>
            <SocialIcon
              src={InstagramIcon}
              alt=""
              onClick={() => redirectingPage(0)}
            />
          </li>
          <li>
            <SocialIcon
              src={TwitterIcon}
              alt=""
              onClick={() => redirectingPage(0)}
            />
          </li>
        </SocialMedia>
      </FooterBox>
    </FooterSection>
  );
}

export default Footer;
