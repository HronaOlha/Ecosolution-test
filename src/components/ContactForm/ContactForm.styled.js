import styled from "styled-components";

export const Form = styled.form`
  grid-area: contactForm;

  padding: 36px 12px;

  background-color: ${({ theme }) => theme.colors.lightGrey};
  letter-spacing: -0.64px;

  @media screen and (${({ theme }) => theme.media.tablet}) {
    padding: 36px 24px;
  }
  @media screen and (${({ theme }) => theme.media.desktop}) {
    padding: 48px;
  }

  & > button {
    margin-left: auto;
  }
`;

export const Label = styled.label`
  position: relative;

  display: flex;
  flex-direction: column;
  gap: 8px;

  margin-bottom: 6px;

  @media screen and (${({ theme }) => theme.media.desktop}) {
    gap: 12px;
  }

  & > input,
  & > textarea {
    outline-color: ${({ theme }) => theme.colors.black};

    margin-bottom: 28px;
    border: none;
    border-bottom: 1px solid ${({ theme }) => theme.colors.mainGreen};
    padding-bottom: 8px;

    background-color: transparent;
    font-size: ${({ theme }) => theme.fontSizes.m};

    &::placeholder {
      color: ${({ theme }) => theme.colors.grey};
    }

    @media screen and (${({ theme }) => theme.media.desktop}) {
      font-size: ${({ theme }) => theme.fontSizes.l};
    }
  }

  & > input.error {
    border-color: ${({ theme }) => theme.colors.error};
  }

  & > textarea {
    margin-bottom: 16px;

    height: 147px;

    resize: none;

    @media screen and (${({ theme }) => theme.media.desktop}) {
      margin-bottom: 32px;
    }
  }
`;

export const ErrorText = styled.p`
  display: none;

  &.error {
    position: absolute;
    top: 65px;
    right: 0;

    display: block;

    font-size: ${({ theme }) => theme.fontSizes.xs};
    text-align: right;
    letter-spacing: -0.48px;
    color: ${({ theme }) => theme.colors.error};

    @media screen and (${({ theme }) => theme.media.desktop}) {
      top: 75px;
    }
  }
`;
