import PropTypes from "prop-types";
import { Img } from "./SocialIconStyles";

const SocialIcon = ({ $primary, src, alt, onClick }) => {
  return <Img $primary={$primary} src={src} alt={alt} onClick={onClick} />;
};

SocialIcon.propTypes = {
  $primary: PropTypes.bool,
  src: PropTypes.string.isRequired,
  alt: PropTypes.string,
  onClick: PropTypes.func,
};

export default SocialIcon;
