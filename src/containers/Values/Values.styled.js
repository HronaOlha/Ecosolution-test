import styled from 'styled-components';

export const ValuesTexts = styled.div`
  & > p {
    margin-bottom: 36px;

    @media screen and (${({ theme }) => theme.media.tablet}) {
      margin-bottom: 0;
    }
  }

  @media screen and (${({ theme }) => theme.media.tablet}) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);

    margin-bottom: 100px;

    & > h2 {
      padding-right: 10px;
      margin: 0;
    }

    & > p {
      border-left: 1px solid ${({ theme }) => theme.colors.mainGreen};
      padding-left: 11px;
    }
  }

  @media screen and (${({ theme }) => theme.media.tablet}) {
    margin-bottom: 100px;

    & > h2 {
      padding-right: 124px;
    }

    & > p {
      align-items: end;
      border-left: 1px solid ${({ theme }) => theme.colors.mainGreen};
    }
  }
`;

export const ValuesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 24px;

  & > div {
    height: 197px;
    padding: 13px 12px 12px;
    background-color: ${({ theme }) => theme.colors.lightGrey};

    @media screen and (${({ theme }) => theme.media.desktop}) {
      height: 100%;
      padding: 48px 24px 12px;
    }

    & > h3 {
      margin-bottom: 12px;
      border-bottom: 1px solid ${({ theme }) => theme.colors.mainGreen};
      padding-bottom: 33px;

      @media screen and (${({ theme }) => theme.media.tablet}) {
        padding-bottom: 51px;
      }

      @media screen and (${({ theme }) => theme.media.desktop}) {
        padding-bottom: 94px;
      }

      & > svg {
        margin-right: 8px;
        height: 16px;
        width: 16px;

        stroke: ${({ theme }) => theme.colors.darkGreen};
        fill: transparent;

        @media screen and (${({ theme }) => theme.media.desktop}) {
          height: 24px;
          width: 24px;
        }
      }
    }

    & > p {
      font-size: 14px;

      @media screen and (${({ theme }) => theme.media.desktop}) {
        font-size: 16px;
      }
    }
  }

  @media screen and (${({ theme }) => theme.media.tablet}) {
    grid-template-columns: repeat(4, 1fr);
    grid-template-areas:
      'one two windFarmImg windFarmImg'
      'workerTab workerTab three four';
  }

  @media screen and (${({ theme }) => theme.media.desktop}) {
    grid-gap: 48px;
  }

  & img {
    @media screen and (${({ theme }) => theme.media.tablet}) {
      height: 197px;
      width: 342px;
    }

    @media screen and (${({ theme }) => theme.media.desktop}) {
      height: 339px;
      width: 596px;
    }
  }
`;

export const WindFarmImg = styled.picture`
  grid-area: windFarmImg;
`;

export const WorkerTab = styled.picture`
  grid-area: workerTab;
`;
