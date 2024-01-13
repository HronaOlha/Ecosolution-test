import styled from 'styled-components';

export const ContactSection = styled.div`
  @media screen and (${({ theme }) => theme.media.tablet}) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-areas: 'list contactForm';
    grid-column-gap: 24px;
  }
  @media screen and (${({ theme }) => theme.media.desktop}) {
    grid-template-columns: repeat(8, 1fr);
    grid-column-gap: 48px;
    grid-template-areas: 'list list list list contactForm contactForm contactForm contactForm';
  }
`;

export const ContactTitle = styled.h2`
  text-align: center;

  @media screen and (${({ theme }) => theme.media.tablet}) {
    margin-bottom: 40px;
  }
  @media screen and (${({ theme }) => theme.media.desktop}) {
    margin-bottom: 120px;
  }
`;

export const ContactList = styled.ul`
  grid-area: list;

  display: flex;
  flex-direction: column;
  gap: 12px;

  margin-bottom: 36px;

  @media screen and (${({ theme }) => theme.media.tablet}) {
    gap: 12px;
    margin-bottom: 0;
  }
  @media screen and (${({ theme }) => theme.media.desktop}) {
    gap: 20px;
  }
`;

export const ContactItem = styled.li`
  & > h3 {
    margin-bottom: 8px;

    font-family: ${({ theme }) => theme.fonts.body};
    text-transform: none;

    @media screen and (${({ theme }) => theme.media.tablet}) {
      font-size: ${({ theme }) => theme.fontSizes.main};
    }
    @media screen and (${({ theme }) => theme.media.desktop}) {
      margin-bottom: 16px;
    }
  }

  & > a {
    display: flex;
    align-items: center;
    gap: 8px;

    margin-bottom: 12px;

    font-size: ${({ theme }) => theme.fontSizes.l};
    text-align: left;
    letter-spacing: -0.8px;

    &:focus svg,
    &:hover svg {
      stroke: ${({ theme }) => theme.colors.mainGreen};
    }

    @media screen and (${({ theme }) => theme.media.desktop}) {
      padding-right: 0;
      font-size: ${({ theme }) => theme.fontSizes.xl};
      letter-spacing: -0.96px;
    }
  }
`;

export const ContactIcon = styled.svg`
  height: 24px;
  width: 24px;

  stroke: ${({ theme }) => theme.colors.darkGreen};
  fill: transparent;
  transition: stroke 400ms ease;

  &:focus-visible,
  &:hover {
    stroke: ${({ theme }) => theme.colors.mainGreen};
  }

  @media screen and (${({ theme }) => theme.media.desktop}) {
    height: 24px;
    width: 24px;
  }
`;

export const Socials = styled.div`
  display: flex;
  gap: 32px;

  padding-top: 12px;
  padding-left: 12px;

  @media screen and (${({ theme }) => theme.media.desktop}) {
    gap: 8px;
    padding-top: 0;
    padding-left: 0;
  }

  &:focus-within {
    .focus-visible {
      stroke: ${({ theme }) => theme.colors.mainGreen};
    }
  }
`;
