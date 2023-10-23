import { useEffect, useState } from "react";
import SocialIcon from "../SocialIcon/SocialIcon";
import { ScrollToTopButton } from "./ScrollToTopStyle";

import ArrowIcon from "../../images/bx-up-arrow-alt.svg";

function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    if (window.scrollY >= 900) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const variants = {
    initial: { y: 100 },
    hover: {
      y: [70, 50, 20, 10, 5, 0],
      transition: { duration: 0.5 },
    },
  };

  return (
    <ScrollToTopButton
      $isVisible={isVisible}
      whileInView="hover"
      initial="initial"
      variants={variants}
      onClick={scrollToTop}
    >
      <SocialIcon src={ArrowIcon} />
    </ScrollToTopButton>
  );
}

export default ScrollToTop;
