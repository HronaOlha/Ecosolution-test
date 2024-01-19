import { IoIosArrowRoundUp } from 'react-icons/io';

import sprite from '../../images/sprite.svg';

import ContactInfo from '../../components/ContactInfo/ContactInfo';
import Logo from '../../components/Logo/Logo';

import {
  FooterSection,
  ButtonUp,
  SocialsContainer,
  Socials,
  FooterLine,
} from './Footer.styled';

const Footer = () => {
  return (
    <FooterSection>
      <FooterLine />
      <Logo />

      <ButtonUp href="#main" aria-label="Button to main section">
        <IoIosArrowRoundUp size="100%" />
      </ButtonUp>

      <SocialsContainer>
        <Socials href="/" target="_blank" rel="noopener noreferrer nofollow">
          <svg aria-label="facebook" height={24} width={24}>
            <use href={sprite + '#facebook'} />
          </svg>
        </Socials>
        <Socials href="/" target="_blank" rel="noopener noreferrer nofollow">
          <svg aria-label="instagram" height={24} width={24}>
            <use href={sprite + '#instagram'} />
          </svg>
        </Socials>
      </SocialsContainer>

      <ContactInfo gap={'16px'} />
    </FooterSection>
  );
};

export default Footer;
