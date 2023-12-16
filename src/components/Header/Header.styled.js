import styled from 'styled-components';

export const HeaderSection = styled.header`
  position: fixed;
  right: 0;
  left: 0;
  z-index: 2;

  display: flex;
  justify-content: space-between;

  padding-top: 36px;
  padding-bottom: 36px;

  transition: background-color 300ms ease, padding 300ms ease;

  &.scrolled {
    padding-top: 2px;
    padding-bottom: 2px;

    background-color: ${({ theme }) => theme.colors.white};

    @media screen and (${({ theme }) => theme.media.tablet}) {
      padding-top: 20px;
      padding-bottom: 20px;
    }
    @media screen and (${({ theme }) => theme.media.desktop}) {
      padding-top: 36px;
      padding-bottom: 36px;
    }
  }
`;

export const Nav = styled.nav`
  display: flex;
  gap: 12px;
`;

export const BurgerBtn = styled.button`
  border-radius: 50%;
  border: none;
  height: 40px;
  width: 40px;
  padding: 12px;

  background-color: ${({ theme }) => theme.colors.lightGreen};
  color: ${({ theme }) => theme.colors.darkGreen};
  transition: background-color 400ms ease;

  &:focus,
  &:hover {
    background-color: ${({ theme }) => theme.colors.mainGreen};
  }
`;
