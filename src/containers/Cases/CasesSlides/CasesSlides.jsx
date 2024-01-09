// import { Swiper, SwiperSlide } from 'swiper/react';
// import { useState } from 'react';

import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';

import { GoArrowUpRight } from 'react-icons/go';
// import { BsArrowLeft, BsArrowRight } from 'react-icons/bs';

import { slides } from '../../../constants/constants';

import {
  CasesList,
  CasesItem,
  CasesThumb,
  MainInfoBox,
  InfoBox,
  // ButtonContainer,
  // ToggleButton,
} from './CasesSlides.styled';

const CasesSlides = ({
  slidesPerView,
  slidesGap,
  handleSwiper,
  handleSlideChange,
}) => {
  return (
    <>
      <CasesList
        modules={[Navigation]}
        speed={800}
        spaceBetween={slidesGap}
        slidesPerView={slidesPerView}
        grabCursor={true}
        navigation={{
          nextEl: '.next-btn',
          prevEl: '.prev-btn',
          clickable: true,
        }}
        loop
        onSwiper={handleSwiper}
        onSlideChange={handleSlideChange}
      >
        {slides.map(item => (
          <CasesItem key={item.id}>
            <img src={item.image} alt={item.title} loading="lazy" />
            <CasesThumb>
              <MainInfoBox>
                <h4>{item.title}</h4>
                <a
                  href="/"
                  aria-label="Learn more"
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                >
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
      {/* <ButtonContainer>
        <ToggleButton
          className="prev-btn"
          aria-label="Previous Button"
          type="button"
          // onClick={() => toggleSlide(-1)}
        >
          <BsArrowLeft size="100%" />
        </ToggleButton>
        <ToggleButton
          className="next-btn"
          aria-label="Next button"
          type="button"
          // onClick={() => toggleSlide(1)}
        >
          <BsArrowRight size="100%" />
        </ToggleButton>
      </ButtonContainer> */}
    </>
  );
};

// const CasesSlides = ({ currentSlides }) => {
//   return (
//     <CasesList>
//       {currentSlides.map(item => (
//         <CasesItem key={item.id}>
//           <img src={item.image} alt={item.title} loading="lazy" />
//           <CasesThumb>
//             <MainInfoBox>
//               <h4>{item.title}</h4>
//               <a
//                 href="/"
//                 aria-label="Learn more"
//                 target="_blank"
//                 rel="noopener noreferrer nofollow"
//               >
//                 <GoArrowUpRight size="100%" />
//               </a>
//             </MainInfoBox>

//             <InfoBox>
//               <p>{item.text}</p>
//               <p>{item.date}</p>
//             </InfoBox>
//           </CasesThumb>
//         </CasesItem>
//       ))}
//     </CasesList>
//   );
// };

export default CasesSlides;
