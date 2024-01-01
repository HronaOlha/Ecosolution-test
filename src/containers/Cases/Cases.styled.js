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
