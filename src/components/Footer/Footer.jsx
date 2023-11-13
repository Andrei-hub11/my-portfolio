import {
  FooterBox,
  FooterLogo,
  FooterSection,
  SocialMedia,
} from "./FooterStyles";

import SocialIcon from "../SocialIcon/SocialIcon";

import GmailIcon from "../../images/bxl-gmail.svg";
import LinkedinIcon from "../../images/bxl-linkedin-square.svg";
import useRedirect from "../../utils/customHooks/useRedirect";

function Footer() {
  const { onRedirect } = useRedirect();

  const handleRedirect = (url) => {
    onRedirect(url);
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
        <p className="text">&copy; Copyright 2023. All rights reserved</p>
        <SocialMedia>
          <li>
            <SocialIcon
              src={GmailIcon}
              alt=""
              onClick={() =>
                handleRedirect("mailto:andreirodrigues794@gmail.com")
              }
              width="10"
              height="10"
            />
          </li>
          <li>
            <SocialIcon
              src={LinkedinIcon}
              alt=""
              onClick={() =>
                handleRedirect(
                  "https://www.linkedin.com/in/andrei-rodrigues-a7949120b/"
                )
              }
              width="10"
              height="10"
            />
          </li>
        </SocialMedia>
      </FooterBox>
    </FooterSection>
  );
}

export default Footer;
