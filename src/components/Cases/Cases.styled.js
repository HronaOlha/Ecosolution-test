import styled from 'styled-components';

export const CasesSection = styled.section`
  @media screen and (${({ theme }) => theme.media.tablet}) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-areas:
      'title slideBar'
      'list list';
  }
  @media screen and (${({ theme }) => theme.media.desktop}) {
    grid-row-gap: 100px;
  }
`;

export const CasesTitle = styled.h2`
  grid-area: title;

  padding-right: 50px;

  @media screen and (${({ theme }) => theme.media.tablet}) {
    margin-bottom: 38px;
  }
  @media screen and (${({ theme }) => theme.media.desktop}) {
    margin-bottom: 20px;
    padding-right: 220px;
  }
`;

export const SlideBar = styled.div`
  grid-area: slideBar;

  display: flex;
  justify-content: space-between;
  align-items: end;
  margin-bottom: 20px;

  @media screen and (${({ theme }) => theme.media.tablet}) {
    padding-left: 9px;
    border-left: 1px solid ${({ theme }) => theme.colors.mainGreen};
  }
  @media screen and (${({ theme }) => theme.media.desktop}) {
    padding-left: 161px;
  }

  & > p {
    font-size: ${({ theme }) => theme.fontSizes.xxl};
    font-weight: ${({ theme }) => theme.fontWeights.light};
    letter-spacing: -1.12px;

    & > span {
      color: ${({ theme }) => theme.colors.darkGreenAlfa};
    }
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  gap: 12px;

  padding-bottom: 7px;

  @media screen and (${({ theme }) => theme.media.desktop}) {
    gap: 24px;
  }
`;

export const ToggleButton = styled.button`
  display: inline-block;

  border-radius: 50px;
  border: 1px solid;
  height: 66px;
  width: 66px;
  padding: 15px;

  background-color: transparent;
  color: ${({ theme }) => theme.colors.darkGreen};
  transition: border-color 400ms ease, color 400ms ease;

  &:focus,
  &:hover {
    border-color: ${({ theme }) => theme.colors.mainGreen};
    color: ${({ theme }) => theme.colors.mainGreen};
  }

  @media screen and (${({ theme }) => theme.media.desktop}) {
    height: 84px;
    width: 84px;
    padding: 24px;
  }
`;

export const CasesList = styled.ul`
  grid-area: list;

  display: flex;
  gap: 24px;

  @media screen and (${({ theme }) => theme.media.desktop}) {
    gap: 48px;
  }
`;

export const CasesItem = styled.li`
  width: 100%;

  & > img {
    height: 168px;
    width: 100%;
    @media screen and (${({ theme }) => theme.media.tablet}) {
      height: 168px;
      width: 342px;
    }
    @media screen and (${({ theme }) => theme.media.desktop}) {
      height: 296px;
      width: 596px;
    }
  }
`;

export const CasesThumb = styled.div`
  padding: 24px 12px 12px;
  background-color: ${({ theme }) => theme.colors.lightGrey};

  @media screen and (${({ theme }) => theme.media.desktop}) {
    padding: 36px 48px;
  }
`;

export const MainInfoBox = styled.div`
  display: flex;
  justify-content: space-between;

  margin-bottom: 12px;
  padding-bottom: 21px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.mainGreen};

  @media screen and (${({ theme }) => theme.media.desktop}) {
    margin-bottom: 24px;
    padding-bottom: 34px;
  }

  & > h4 {
    margin: 0;
    height: 66px;
    width: 175px;

    font-size: ${({ theme }) => theme.fontSizes.m};
    font-weight: ${({ theme }) => theme.fontWeights.normal};
    letter-spacing: -0.72px;

    @media screen and (${({ theme }) => theme.media.tablet}) {
      height: 72px;
      width: 200px;
      text-align: left;
      font-size: ${({ theme }) => theme.fontSizes.l};
    }
    @media screen and (${({ theme }) => theme.media.desktop}) {
      height: 58px;
      width: 357px;
      font-size: ${({ theme }) => theme.fontSizes.xl};
    }
  }

  & > a {
    display: inline-block;

    border: none;
    border-radius: 50px;

    height: 60px;
    width: 60px;
    padding: 16px;

    background-color: ${({ theme }) => theme.colors.mainGreen};
    color: ${({ theme }) => theme.colors.darkGreen};
    transition: background-color 400ms ease, color 400ms ease;

    &:focus,
    &:hover {
      background-color: ${({ theme }) => theme.colors.darkGreen};
      color: ${({ theme }) => theme.colors.mainGreen};
    }
  }
`;

export const InfoBox = styled.div`
  display: flex;
  justify-content: space-between;

  font-size: ${({ theme }) => theme.fontSizes.xs};

  @media screen and (${({ theme }) => theme.media.tablet}) {
    font-size: ${({ theme }) => theme.fontSizes.s};
  }
  @media screen and (${({ theme }) => theme.media.desktop}) {
    font-size: ${({ theme }) => theme.fontSizes.main};
  }
`;
