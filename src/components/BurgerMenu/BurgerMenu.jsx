import PropTypes from "prop-types";
import sprite from "../../images/sprite.svg";

import {
  Overlay,
  BurgerContainer,
  CloseContainer,
  PointsList,
  MenuItem,
  ItemText,
  SocialsContainer,
  Socials,
} from "./BurgerMenu.styled";
import { links } from "../../constants/constants";
import { IoCloseOutline } from "react-icons/io5";
import { GoArrowUpRight } from "react-icons/go";

const BurgerMenu = ({ handleMenuToggle }) => {
  return (
    <Overlay>
      <BurgerContainer>
        <div>
          <CloseContainer onClick={handleMenuToggle}>
            <IoCloseOutline />
            <p>close</p>
          </CloseContainer>

          <PointsList>
            {links.map((item) => (
              <MenuItem key={item.id} onClick={handleMenuToggle}>
                <ItemText href={item.link}>{item.value}</ItemText>
                <GoArrowUpRight />
              </MenuItem>
            ))}
          </PointsList>
        </div>
        <SocialsContainer>
          <a href="/">
            <Socials className="facebook">
              <use href={sprite + "#facebook"} color="red" />
            </Socials>
          </a>
          <a href="/">
            <Socials>
              <use href={sprite + "#instagram"} />
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
