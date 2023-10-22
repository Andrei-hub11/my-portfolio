import React from "react";
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

  return (
    <FooterSection>
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
            <a href="#">
              <SocialIcon
                src={InstagramIcon}
                alt=""
                onClick={() => redirectingPage(0)}
              />
            </a>
          </li>
          <li>
            <a href="#">
              <SocialIcon
                src={TwitterIcon}
                alt=""
                onClick={() => redirectingPage(0)}
              />
            </a>
          </li>
        </SocialMedia>
      </FooterBox>
    </FooterSection>
  );
}

export default Footer;
