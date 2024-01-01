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
        <a href="/" target="_blank" rel="noopener noreferrer nofollow">
          <Socials className="facebook" aria-label="facebook">
            <use href={sprite + '#facebook'} />
          </Socials>
        </a>
        <a href="/" target="_blank" rel="noopener noreferrer nofollow">
          <Socials aria-label="instagram">
            <use href={sprite + '#instagram'} />
          </Socials>
        </a>
      </SocialsContainer>

      <ContactInfo gap={'16px'} />
    </FooterSection>
  );
};

export default Footer;
