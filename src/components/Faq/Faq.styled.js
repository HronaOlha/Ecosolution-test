import styled from "styled-components";

export const FaqSection = styled.section`
  @media screen and (${({ theme }) => theme.media.tablet}) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 24px;
  }
  @media screen and (${({ theme }) => theme.media.desktop}) {
    grid-template-columns: repeat(8, 1fr);
    grid-column-gap: 48px;
  }
`;

export const FaqTitle = styled.h2`
  padding-right: 12px;

  @media screen and (${({ theme }) => theme.media.tablet}) {
    grid-column: 2/3;
  }
  @media screen and (${({ theme }) => theme.media.desktop}) {
    grid-column: 6/9;
  }
`;

export const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  padding-bottom: 8px;

  cursor: pointer;

  @media screen and (${({ theme }) => theme.media.tablet}) {
    gap: 16px;
  }
  @media screen and (${({ theme }) => theme.media.desktop}) {
    gap: 24px;
    padding-bottom: 12px;
  }

  & > span {
    font-size: ${({ theme }) => theme.fontSizes.xxl};
    font-weight: ${({ theme }) => theme.fontWeights.extraLight};
    color: ${({ theme }) => theme.colors.mainGreen};

    @media screen and (${({ theme }) => theme.media.tablet}) {
      font-size: ${({ theme }) => theme.fontSizes.extraLarge.ms};
    }

    &.show {
      color: ${({ theme }) => theme.colors.darkGreen};
    }
  }
`;

export const FaqQuestion = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes.m};
  font-family: ${({ theme }) => theme.fonts.body};
  text-transform: none;
  letter-spacing: -0.72px;
  text-align: justify;

  @media screen and (${({ theme }) => theme.media.desktop}) {
    font-size: 24px;
    letter-spacing: -0.96px;
  }
`;

export const FaqAccordion = styled.ul`
  margin-bottom: 28px;

  @media screen and (${({ theme }) => theme.media.tablet}) {
    grid-column: 1/2;
    grid-row: 1/3;
  }
  @media screen and (${({ theme }) => theme.media.desktop}) {
    grid-column: 1/5;
    grid-row: 1/3;
  }
  & > li {
    border-top: 1px solid ${({ theme }) => theme.colors.mainGreen};
    padding-top: 16px;
    margin-bottom: 8px;

    @media screen and (${({ theme }) => theme.media.desktop}) {
      padding-top: 24px;
      margin-bottom: 12px;
    }

    & > .question {
      overflow: hidden;

      max-height: 0;
      padding-left: 20px;

      font-size: ${({ theme }) => theme.fontSizes.s};
      letter-spacing: -0.64px;

      transition: all 400ms ease;

      @media screen and (${({ theme }) => theme.media.tablet}) {
        padding-left: 37px;
      }
      @media screen and (${({ theme }) => theme.media.desktop}) {
        padding-left: 44px;
        font-size: ${({ theme }) => theme.fontSizes.main};
        letter-spacing: -0.64px;
      }

      &.show {
        height: auto;
        max-height: 999px;
        padding-top: 8px;
        padding-bottom: 8px;

        transition: all 400ms ease;

        @media screen and (${({ theme }) => theme.media.desktop}) {
          padding-top: 12px;
          padding-bottom: 12px;
        }
      }
    }
  }
`;

export const FaqContacts = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (${({ theme }) => theme.media.tablet}) {
    grid-column: 2/3;
    grid-row: 2/3;

    justify-self: start;
    align-self: end;

    margin-bottom: 16px;
  }
  @media screen and (${({ theme }) => theme.media.desktop}) {
    grid-column: 6/9;
    grid-row: 2/3;
  }
`;

export const FaqText = styled.p`
  margin-bottom: 12px;

  font-size: ${({ theme }) => theme.fontSizes.m};
  letter-spacing: -0.72px;

  @media screen and (${({ theme }) => theme.media.desktop}) {
    font-size: ${({ theme }) => theme.fontSizes.xl};
    letter-spacing: -0.64px;
  }
`;
