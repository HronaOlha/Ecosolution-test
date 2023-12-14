import PropTypes from 'prop-types';

import { ContactInfoContainer } from './ContactInfo.styled';

const ContactInfo = ({ gap }) => {
  return (
    <>
      <ContactInfoContainer gap={gap}>
        <a
          className="address"
          href="https://www.google.com/maps/place/%D0%A8%D0%BE%D1%82%D0%B0+%D0%A0%D1%83%D1%81%D1%82%D0%B0%D0%B2%D0%B5%D0%BB%D1%96+7+%D0%AF/@49.8310939,24.0326283,17z/data=!3m1!4b1!4m6!3m5!1s0x473addf4d3884e33:0x85f58dee013939bd!8m2!3d49.8310905!4d24.0352032!16s%2Fg%2F11vf1gnnzq?authuser=0&entry=ttu"
          target="_blank"
          rel="noopener noreferrer"
        >
          79005, Ukraine, Lvivstreet. Shota Rustaveli, 7
        </a>
        <a href="mailto:office@ecosolution.com">office@ecosolution.com</a>
        <p className="ecosolution">ecosolution © 2023</p>
      </ContactInfoContainer>
    </>
  );
};

export default ContactInfo;

ContactInfo.propTypes = {
  gap: PropTypes.string,
};
