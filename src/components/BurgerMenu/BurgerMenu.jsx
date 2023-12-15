import PropTypes from 'prop-types';
import { IoCloseOutline } from 'react-icons/io5';
import { GoArrowUpRight } from 'react-icons/go';

import { links } from '../../constants/constants';
import sprite from '../../images/sprite.svg';

import {
  Overlay,
  BurgerContainer,
  CloseContainer,
  PointsList,
  MenuItem,
  ItemText,
  SocialsContainer,
  Socials,
} from './BurgerMenu.styled';

const BurgerMenu = ({ handleMenuToggle }) => {
  return (
    <Overlay>
      <BurgerContainer aria-label="Hamburger menu">
        <div>
          <CloseContainer onClick={handleMenuToggle}>
            <IoCloseOutline />
            <p>close</p>
          </CloseContainer>

          <PointsList>
            {links.map(item => (
              <MenuItem key={item.id} onClick={handleMenuToggle}>
                <ItemText href={item.link}>{item.value}</ItemText>
                <GoArrowUpRight />
              </MenuItem>
            ))}
          </PointsList>
        </div>
        <SocialsContainer>
          <a href="/" target="_blank" rel="noopener noreferrer nofollow">
            <Socials className="facebook">
              <use href={sprite + '#facebook'} color="red" />
            </Socials>
          </a>
          <a href="/" target="_blank" rel="noopener noreferrer nofollow">
            <Socials>
              <use href={sprite + '#instagram'} />
            </Socials>
          </a>
        </SocialsContainer>
      </BurgerContainer>
    </Overlay>
  );
};

export default BurgerMenu;

BurgerMenu.propTypes = {
  handleMenuToggle: PropTypes.func.isRequired,
};
