import styled from 'styled-components';
import { Line } from '../HorizontalLine/HorizontalLine.styled';

export const FooterSection = styled.footer`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-row-gap: 24px;
  grid-template-areas:
    'line line line line line line line'
    'logo logo logo logo logo logo buttonUp'
    '. . . socials . . . '
    'contactsInfo contactsInfo contactsInfo contactsInfo contactsInfo contactsInfo contactsInfo';

  padding-bottom: 24px;

  @media screen and (${({ theme }) => theme.media.tablet}) {
    grid-template-columns: repeat(4, 1fr);
    grid-row-gap: 16px;
    grid-template-areas:
      'line line line line'
      'logo logo socials buttonUp'
      'contactsInfo contactsInfo contactsInfo contactsInfo';

    padding-top: 50px;
    padding-bottom: 40px;
  }
  @media screen and (${({ theme }) => theme.media.desktop}) {
    grid-template-columns: repeat(5, 1fr);
    grid-template-areas:
      'line line line line line'
      'logo logo . socials buttonUp'
      'contactsInfo contactsInfo contactsInfo contactsInfo contactsInfo';

    padding-top: 60px;
  }
`;

export const ButtonUp = styled.a`
  grid-area: buttonUp;
  justify-self: end;

  border-radius: 50%;
  border: none;
  height: 32px;
  width: 32px;
  padding: 5px;

  background-color: ${({ theme }) => theme.colors.mainGreen};
  color: ${({ theme }) => theme.colors.darkGreen};
  transition: background-color 400ms ease, color 400ms ease;

  &:focus,
  &:hover {
    background-color: ${({ theme }) => theme.colors.darkGreen};
    color: ${({ theme }) => theme.colors.mainGreen};
  }
`;

export const SocialsContainer = styled.div`
  grid-area: socials;

  display: flex;
  justify-content: center;
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

  &:focus,
  &:hover {
    stroke: ${({ theme }) => theme.colors.mainGreen};
  }
`;

// Additional styling of styled-components Component
export const FooterLine = styled(Line)`
  @media screen and (${({ theme }) => theme.media.tablet}) {
    margin-bottom: 24px;
  }
  @media screen and (${({ theme }) => theme.media.desktop}) {
    margin-bottom: 30px;
  }
`;
