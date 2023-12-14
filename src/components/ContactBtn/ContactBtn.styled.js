import styled from 'styled-components';

export const Btn = styled.a`
  gap: 12px;
  display: flex;
  width: fit-content;

  border-radius: 50px;
  padding: 10px 16px;

  background-color: ${({ theme }) => theme.colors.mainGreen};
  color: ${({ theme }) => theme.colors.darkGreen};
  transition: background-color 400ms ease, color 400ms ease;

  &:focus,
  &:hover {
    background-color: ${({ theme }) => theme.colors.darkGreen};
    color: ${({ theme }) => theme.colors.mainGreen};
  }

  & > svg {
    border-radius: 50%;
    background-color: ${({ theme }) => theme.colors.darkGreen};
  }
`;
