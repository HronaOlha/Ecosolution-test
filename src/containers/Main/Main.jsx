import { IoIosArrowRoundForward } from 'react-icons/io';

import ContactInfo from '../../components/ContactInfo/ContactInfo';

import windTurbineMob1x from '../../images/wind-turbine-mob-1x.jpg';
import windTurbineTab1x from '../../images/wind-turbine-tab-1x.jpg';
import windTurbineDesk1x from '../../images/wind-turbine-desk-1x.jpg';

import windTurbineMob2x from '../../images/wind-turbine-mob-2x.jpg';
import windTurbineTab2x from '../../images/wind-turbine-tab-2x.jpg';
import windTurbineDesk2x from '../../images/wind-turbine-desk-2x.jpg';

import {
  MainSection,
  Text,
  MainLine,
  Picture,
  ContactInfoContainer,
  ButtonComponent,
} from './Main.styled';

const Main = () => {
  return (
    <MainSection id="main" aria-label="main section">
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
      <Picture>
        <source
          media="(min-width: 1280px)"
          srcSet={`${windTurbineDesk1x} 1x, ${windTurbineDesk2x} 2x`}
        />
        <source
          media="(min-width: 768px)"
          srcSet={`${windTurbineTab1x} 1x, ${windTurbineTab2x} 2x`}
        />
        <source
          media="(max-width: 767px)"
          srcSet={`${windTurbineMob1x} 1x, ${windTurbineMob2x} 2x`}
        />
        <img src={windTurbineDesk1x} alt="Wind Turbine" />
      </Picture>
    </MainSection>
  );
};

export default Main;
