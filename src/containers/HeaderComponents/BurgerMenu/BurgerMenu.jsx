import { forwardRef } from 'react';
import PropTypes from 'prop-types';
import { IoCloseOutline } from 'react-icons/io5';
import { GoArrowUpRight } from 'react-icons/go';

import { links } from '../../../constants/constants';
import sprite from '../../../images/sprite.svg';

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

const BurgerMenu = forwardRef(({ handleMenuToggle }, ref) => {
  return (
    <Overlay>
      <BurgerContainer aria-label="Hamburger menu" ref={ref}>
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
          <Socials href="/" target="_blank" rel="noopener noreferrer nofollow">
            <svg height={24} width={24}>
              <use href={sprite + '#facebook'} color="red" />
            </svg>
          </Socials>
          <Socials href="/" target="_blank" rel="noopener noreferrer nofollow">
            <svg height={24} width={24}>
              <use href={sprite + '#instagram'} />
            </svg>
          </Socials>
        </SocialsContainer>
      </BurgerContainer>
    </Overlay>
  );
});

export default BurgerMenu;

BurgerMenu.propTypes = {
  handleMenuToggle: PropTypes.func.isRequired,
};
