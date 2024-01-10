import { useState } from 'react';

import PropTypes from 'prop-types';
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs';

import CasesSlides from './CasesSlides/CasesSlides';
import {
  CasesSection,
  CasesTitle,
  SlideBar,
  ButtonContainer,
  ToggleButton,
} from './Cases.styled';

const Cases = ({ deviceType }) => {
  const [swiper, setSwiper] = useState(null);
  const [totalSlides, setTotalSlides] = useState(0);
  const [currentSlide, setcurrentSlide] = useState(1);

  const handleSlideChange = () => {
    if (swiper) {
      setcurrentSlide(swiper.realIndex + 1);
    }
  };

  const handleSwiper = swiper => {
    setSwiper(swiper);
    setTotalSlides(swiper.slides.length);
  };

  const addZero = n => {
    return String(n).padStart(2, '0');
  };

  const slidesPerView = deviceType === 'mobile' ? 1 : 2;
  const slidesGap = deviceType === 'tablet' ? 24 : 48;

  return (
    <CasesSection id="cases" aria-label="Successful cases section">
      <CasesTitle>Successful cases of our company</CasesTitle>
      <SlideBar>
        <p>
          {addZero(currentSlide)}
          <span>/{addZero(totalSlides)}</span>
        </p>

        <ButtonContainer>
          <ToggleButton
            className="prev-btn"
            aria-label="Previous Button"
            type="button"
          >
            <BsArrowLeft size="100%" />
          </ToggleButton>
          <ToggleButton
            className="next-btn"
            aria-label="Next button"
            type="button"
          >
            <BsArrowRight size="100%" />
          </ToggleButton>
        </ButtonContainer>
      </SlideBar>
      <CasesSlides
        slidesPerView={slidesPerView}
        slidesGap={slidesGap}
        handleSwiper={handleSwiper}
        handleSlideChange={handleSlideChange}
      />
    </CasesSection>
  );
};

export default Cases;

Cases.propTypes = {
  deviceType: PropTypes.string,
};
