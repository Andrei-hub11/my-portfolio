import PropTypes from "prop-types";
import { Btn } from "./ButtonStyles";

function Button({ children, onClick, $primary }) {
  return (
    <Btn onClick={onClick} $primary={$primary}>
      {children}
    </Btn>
  );
}

Button.propTypes = {
  $primary: PropTypes.bool,
  onClick: PropTypes.func,
  children: PropTypes.node.isRequired,
};

export default Button;
