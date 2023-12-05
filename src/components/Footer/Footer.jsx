import { IoIosArrowRoundUp } from "react-icons/io";

import sprite from "../../images/sprite.svg";

import ContactInfo from "../ContactInfo/ContactInfo";
import Logo from "../Logo/Logo";

import {
  FooterSection,
  ButtonUp,
  SocialsContainer,
  Socials,
  FooterLine,
} from "./Footer.styled";

const Footer = () => {
  return (
    <FooterSection>
      <FooterLine />
      <Logo />

      <ButtonUp href="#main">
        <IoIosArrowRoundUp size="100%" />
      </ButtonUp>

      <SocialsContainer>
        <a href="/">
          <Socials className="facebook">
            <use href={sprite + "#facebook"} />
          </Socials>
        </a>
        <a href="/">
          <Socials>
            <use href={sprite + "#instagram"} />
          </Socials>
        </a>
      </SocialsContainer>

      <ContactInfo gap={"16px"} />
    </FooterSection>
  );
};

export default Footer;
