import { GoArrowUpRight } from 'react-icons/go';

import {
  CasesList,
  CasesItem,
  CasesThumb,
  MainInfoBox,
  InfoBox,
} from './CasesSlides.styled';

const CasesSlides = ({ currentSlides }) => {
  return (
    <CasesList>
      {currentSlides.map(item => (
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
  );
};

export default CasesSlides;
