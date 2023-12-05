import styled from "styled-components";

export const ElectricitySection = styled.section`
  font-family: ${({ theme }) => theme.fonts.heading};
`;

export const ElectricityTitle = styled.h2`
  padding: 0 17px;

  text-align: center;

  @media screen and (${({ theme }) => theme.media.tablet}) {
    padding: 0 141px;
  }
  @media screen and (${({ theme }) => theme.media.desktop}) {
    padding: 0 340px;
    margin-bottom: 16px;
  }
`;

export const VerticalLine = styled.div`
  margin: 0 auto 24px;
  border-left: 1px solid ${({ theme }) => theme.colors.mainGreen};
  height: 48px;
  width: 1px;

  @media screen and (${({ theme }) => theme.media.tablet}) {
    height: 87px;
  }
  @media screen and (${({ theme }) => theme.media.desktop}) {
    margin-bottom: 16px;
  }
`;

export const ElectricityCounter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;

  @media screen and (${({ theme }) => theme.media.tablet}) {
    gap: 24px;
  }

  & > p {
    display: inline-block;

    font-size: ${({ theme }) => theme.fontSizes.extraLarge.m};
    line-height: 48px;
    font-weight: ${({ theme }) => theme.fontWeights.bold};
    color: ${({ theme }) => theme.colors.mainGreen};

    @media screen and (${({ theme }) => theme.media.tablet}) {
      font-size: ${({ theme }) => theme.fontSizes.extraLarge.xl};
      line-height: 100px;
    }
    @media screen and (${({ theme }) => theme.media.desktop}) {
      font-size: ${({ theme }) => theme.fontSizes.extraLarge.xxl};
      line-height: 164px;
    }
  }
  & > span {
    font-size: ${({ theme }) => theme.fontSizes.xl};

    @media screen and (${({ theme }) => theme.media.tablet}) {
      font-size: ${({ theme }) => theme.fontSizes.xxl};
    }
    @media screen and (${({ theme }) => theme.media.desktop}) {
      font-size: ${({ theme }) => theme.fontSizes.extraLarge.m};
    }
  }
`;
