import { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

import { IoIosMenu } from 'react-icons/io';

import Logo from '../../Logo/Logo';
import ContactBtn from '../../ContactBtn/ContactBtn';
import BurgerMenu from '../BurgerMenu/BurgerMenu';

import { HeaderSection, Nav, BurgerBtn } from './Header.styled';

const Header = ({ deviceType }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const burgerMenuRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const threshold = 100;
      setIsScrolled(scrollPosition > threshold);
    };

    const handleOutsideClick = event => {
      if (
        burgerMenuRef.current &&
        !burgerMenuRef.current.contains(event.target)
      ) {
        closeMenu();
      }
    };

    const handleEscKey = event => {
      if (event.key === 'Escape') {
        closeMenu();
      }
    };

    window.addEventListener('scroll', handleScroll);
    document.addEventListener('mousedown', handleOutsideClick);
    document.addEventListener('keydown', handleEscKey);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mousedown', handleOutsideClick);
      document.removeEventListener('keydown', handleEscKey);
    };
  }, []);

  const openMenu = () => {
    setIsMenuOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    document.body.style.overflow = 'auto';
  };

  const handleMenuToggle = () => {
    isMenuOpen ? closeMenu() : openMenu();
  };

  return (
    <>
      <HeaderSection className={isScrolled ? 'scrolled' : ''}>
        <Logo />
        <Nav>
          <BurgerBtn
            aria-label="Hamburger menu button"
            type="button"
            onClick={handleMenuToggle}
          >
            <IoIosMenu size="100%" />
          </BurgerBtn>
          {deviceType === 'tablet' && <ContactBtn text="Get in touch" />}
          {deviceType === 'desktop' && <ContactBtn text="Get in touch" />}
          {/* {(deviceType === 'tablet' || deviceType === 'desktop') && (
            <ContactBtn text="Get in touch" />
          )} */}
        </Nav>
      </HeaderSection>
      {isMenuOpen && (
        <BurgerMenu ref={burgerMenuRef} handleMenuToggle={handleMenuToggle} />
      )}
    </>
  );
};

export default Header;

Header.propTypes = {
  deviceType: PropTypes.string,
};
