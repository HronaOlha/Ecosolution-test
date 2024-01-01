import { useState } from 'react';

import PropTypes from 'prop-types';
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs';

import { slides } from '../../constants/constants';

import CasesSlides from './CasesSlides/CasesSlides';
import {
  CasesSection,
  CasesTitle,
  SlideBar,
  ButtonContainer,
  ToggleButton,
} from './Cases.styled';

const Cases = ({ deviceType }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const addZero = n => {
    return String(n).padStart(2, '0');
  };

  const toggleSlide = n => {
    setCurrentSlide(prev => {
      let newSlide = prev + n;

      if (newSlide < 0) {
        newSlide = slides.length - 1;
      } else if (newSlide >= slides.length) {
        newSlide = 0;
      }

      return newSlide;
    });
  };

  const slidesPerView = deviceType === 'mobile' ? 1 : 2;

  const extendedSlides = [...slides, ...slides];

  const currentSlides = extendedSlides.slice(
    currentSlide,
    currentSlide + slidesPerView
  );

  return (
    <CasesSection id="cases" aria-label="Successful cases section">
      <CasesTitle>Successful cases of our company</CasesTitle>
      <SlideBar>
        <p>
          {addZero(currentSlide + 1)}
          <span>/{addZero(slides.length)}</span>
        </p>

        <ButtonContainer>
          <ToggleButton
            aria-label="Previous Button"
            type="button"
            onClick={() => toggleSlide(-1)}
          >
            <BsArrowLeft size="100%" />
          </ToggleButton>
          <ToggleButton
            aria-label="Next button"
            type="button"
            onClick={() => toggleSlide(1)}
          >
            <BsArrowRight size="100%" />
          </ToggleButton>
        </ButtonContainer>
      </SlideBar>
      <CasesSlides currentSlides={currentSlides} />
    </CasesSection>
  );
};

export default Cases;

Cases.propTypes = {
  deviceType: PropTypes.string,
};
