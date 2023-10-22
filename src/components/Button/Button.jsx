import PropTypes from "prop-types";
import { Btn } from "./ButtonStyles";

function Button({ children, onClick }) {
  return <Btn onClick={onClick}>{children}</Btn>;
}

Button.propTypes = {
  primary: PropTypes.bool,
  onClick: PropTypes.func,
  children: PropTypes.node.isRequired,
};

export default Button;
