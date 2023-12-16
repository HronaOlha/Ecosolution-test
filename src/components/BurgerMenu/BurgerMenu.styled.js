import { styled } from 'styled-components';

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1200;

  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 100vh;

  background: ${({ theme }) => theme.colors.darkGreenAlfa};
  backdrop-filter: blur(2px);

  @media screen and (${({ theme }) => theme.media.tablet}) {
    justify-content: flex-end;
  }
`;

export const BurgerContainer = styled.div`
  height: 100%;
  position: absolute;
  top: 36px;
  right: 20px;
  height: 90svh;
  /* bottom: 100px; */
  z-index: 1000;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  border-radius: 25px;
  width: 320px;
  padding: 24px;

  background-color: rgba(23, 61, 51, 0.75);

  color: ${({ theme }) => theme.colors.white};

  @media screen and (${({ theme }) => theme.media.tablet}) {
    top: 42px;
    right: 30px;
  }

  @media screen and (${({ theme }) => theme.media.desktop}) {
    top: 30px;
    right: 100px;

    width: 365px;
  }
`;

export const CloseContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;

  margin-bottom: 24px;
  padding-bottom: 8px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.white};
  cursor: pointer;
  transition: color 400ms ease;

  &:hover,
  &:hover > svg {
    color: ${({ theme }) => theme.colors.mainGreen};
    stroke: ${({ theme }) => theme.colors.mainGreen};
  }

  @media screen and (${({ theme }) => theme.media.desktop}) {
    margin-bottom: 16px;
    padding-bottom: 5px;
  }

  & > svg {
    height: 20px;
    width: 20px;
    stroke: ${({ theme }) => theme.colors.white};
    transition: stroke 400ms ease;
  }

  & > p {
    font-size: ${({ theme }) => theme.fontSizes.l};

    @media screen and (${({ theme }) => theme.media.desktop}) {
      font-size: ${({ theme }) => theme.fontSizes.main};
    }
  }
`;

export const PointsList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const MenuItem = styled.li`
  display: flex;
  gap: 8px;
  align-items: center;
  cursor: pointer;
  width: fit-content;
  transition: color 400ms ease;

  &:hover {
    color: ${({ theme }) => theme.colors.mainGreen};
  }
`;

export const ItemText = styled.a`
  font-size: ${({ theme }) => theme.fontSizes.xl};
  letter-spacing: -0.96px;
`;

export const SocialsContainer = styled.div`
  grid-area: socials;
  display: flex;

  gap: 8px;

  @media screen and (${({ theme }) => theme.media.tablet}) {
    justify-self: start;
  }
`;

export const Socials = styled.svg`
  height: 24px;
  width: 24px;
  fill: transparent;
  transition: stroke 400ms ease;
  stroke: ${({ theme }) => theme.colors.white};

  &:hover {
    stroke: ${({ theme }) => theme.colors.mainGreen};
  }
`;
