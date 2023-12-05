import PropTypes from "prop-types";

import { ButtonComponent } from "./Button.styled";
import { IoIosArrowRoundForward } from "react-icons/io";
const Button = ({ type, text }) => {
  return (
    <ButtonComponent type={type ? type : "button"}>
      <p>{text}</p>

      <span>
        <IoIosArrowRoundForward size="100%" />
      </span>
    </ButtonComponent>
  );
};

export default Button;

Button.propTypes = {
  type: PropTypes.string,
  text: PropTypes.string,
};
