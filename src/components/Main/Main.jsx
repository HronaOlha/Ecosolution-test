import { IoIosArrowRoundForward } from 'react-icons/io';

import ContactInfo from '../ContactInfo/ContactInfo';

import windTurbineMob1x from '../../images/wind-turbine-mob-1x.jpg';
// import windTurbineTab1x from '../../images/wind-turbine-tab-1x.jpg';
// import windTurbineDesk1x from '../../images/wind-turbine-desk-1x.jpg';

// import windTurbineMob2x from '../../images/wind-turbine-mob-2x.jpg';
// import windTurbineTab2x from '../../images/wind-turbine-tab-2x.jpg';
// import windTurbineDesk2x from '../../images/wind-turbine-desk-2x.jpg';

import {
  MainSection,
  Text,
  MainLine,
  // MainImage,
  Image,
  ContactInfoContainer,
  ButtonComponent,
} from './Main.styled';

const Main = () => {
  return (
    <MainSection id="main" aria-label="main section">
      <h2>Renewable energy for any task</h2>
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
      <Image
        // srcset={`${windTurbineTab1x} 708w, ${windTurbineMob1x} 320w`}
        // sizes="(min-width: 768px) 708px,(min-width: 360px) 320px, 100vw"
        src={windTurbineMob1x}
        alt=""
      />
      {/* <MainImage /> */}
    </MainSection>
  );
};

export default Main;
