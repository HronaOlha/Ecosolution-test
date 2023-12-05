import ContactInfo from "../ContactInfo/ContactInfo";
import { IoIosArrowRoundForward } from "react-icons/io";

import {
  MainSection,
  Text,
  MainLine,
  MainImage,
  ContactInfoContainer,
  ButtonComponent,
} from "./Main.styled";

const Main = () => {
  return (
    <MainSection id="main">
      <h1>Renewable energy for any task</h1>
      <Text>
        Development and implementation of renewable non-polluting energy
        sources, generating power generation using energy wind, sun, water,
        biomass
      </Text>
      <ButtonComponent className="btn" href="#cases">
        Learn more
        <span>
          <IoIosArrowRoundForward size="100%" />
        </span>
      </ButtonComponent>

      <MainLine />
      <ContactInfoContainer>
        <ContactInfo />
      </ContactInfoContainer>
      <MainImage />
    </MainSection>
  );
};

export default Main;
