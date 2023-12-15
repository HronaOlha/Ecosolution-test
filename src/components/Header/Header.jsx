import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import { IoIosMenu } from 'react-icons/io';

import Logo from '../Logo/Logo';
import ContactBtn from '../ContactBtn/ContactBtn';
import BurgerMenu from '../BurgerMenu/BurgerMenu';

import { HeaderSection, Nav, BurgerBtn } from './Header.styled';

const Header = ({ deviceType }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const threshold = 100;

      setIsScrolled(scrollPosition > threshold);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleMenuToggle = () => {
    setIsMenuOpen(prev => !prev);
  };

  return (
    <>
      <HeaderSection className={isScrolled ? 'scrolled' : ''}>
        <Logo />
        <Nav>
          <BurgerBtn
            aria-label="Hamburger Menu button"
            type="button"
            onClick={handleMenuToggle}
          >
            <IoIosMenu size="100%" />
          </BurgerBtn>
          {deviceType === 'tablet' && <ContactBtn text="Get in touch" />}
          {deviceType === 'desktop' && <ContactBtn text="Get in touch" />}
        </Nav>
      </HeaderSection>
      {isMenuOpen && <BurgerMenu handleMenuToggle={handleMenuToggle} />}
    </>
  );
};

export default Header;

Header.propTypes = {
  deviceType: PropTypes.string,
};
