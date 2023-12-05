import PropTypes from "prop-types";

import { useState } from "react";
import {
  CasesSection,
  CasesTitle,
  SlideBar,
  ButtonContainer,
  ToggleButton,
  CasesList,
  CasesItem,
  CasesThumb,
  MainInfoBox,
  InfoBox,
} from "./Cases.styled";
import { slides } from "../../constants/constants";
import { GoArrowUpRight } from "react-icons/go";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";

const Cases = ({ deviceType }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const addZero = (n) => {
    return String(n).padStart(2, "0");
  };

  const toggleSlide = (n) => {
    setCurrentSlide((prev) => {
      let newSlide = prev + n;

      if (newSlide < 0) {
        newSlide = slides.length - 1;
      } else if (newSlide >= slides.length) {
        newSlide = 0;
      }

      return newSlide;
    });
  };

  const slidesPerView = deviceType === "mobile" ? 1 : 2;

  const slideNum = () => {
    let slideNum = currentSlide + slidesPerView;

    if (slideNum > slides.length) slideNum = 1;

    return slideNum;
  };

  const extendedSlides = [...slides, ...slides];

  const currentSlides = extendedSlides.slice(
    currentSlide,
    currentSlide + slidesPerView
  );

  return (
    <CasesSection id="cases">
      <CasesTitle>Successful cases of our company</CasesTitle>
      <SlideBar>
        <p>
          {addZero(slideNum())}
          <span>/{addZero(slides.length)}</span>
        </p>

        <ButtonContainer>
          <ToggleButton onClick={() => toggleSlide(-1)}>
            <BsArrowLeft size="100%" />
          </ToggleButton>
          <ToggleButton onClick={() => toggleSlide(1)}>
            <BsArrowRight size="100%" />
          </ToggleButton>
        </ButtonContainer>
      </SlideBar>

      <CasesList>
        {currentSlides.map((item) => (
          <CasesItem key={item.id}>
            <img src={item.image} alt={item.title} />
            <CasesThumb>
              <MainInfoBox>
                <h4>{item.title}</h4>
                <a href="/">
                  <GoArrowUpRight size="100%" />
                </a>
              </MainInfoBox>

              <InfoBox>
                <p>{item.text}</p>
                <p>{item.date}</p>
              </InfoBox>
            </CasesThumb>
          </CasesItem>
        ))}
      </CasesList>
    </CasesSection>
  );
};

export default Cases;

Cases.propTypes = {
  deviceType: PropTypes.string,
};
