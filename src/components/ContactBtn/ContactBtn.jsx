import PropTypes from 'prop-types';

import { BsFillArrowDownCircleFill } from 'react-icons/bs';

import { Btn } from './ContactBtn.styled';

const ContactBtn = ({ text }) => {
  return (
    <Btn href="#contact">
      {text}
      <BsFillArrowDownCircleFill />
    </Btn>
  );
};

export default ContactBtn;

ContactBtn.propTypes = {
  text: PropTypes.string,
};
