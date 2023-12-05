import styled from "styled-components";

export const ButtonComponent = styled.button`
  display: flex;
  align-items: center;
  gap: 12px;

  border: 1px solid ${({ theme }) => theme.colors.mainGreen};
  border-radius: 50px;
  padding: 3px 4px 3px 16px;

  background-color: transparent;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 400ms ease, color 400ms ease,
    border-color 400ms ease;

  & > p {
    display: inline-block;
  }

  & > span {
    border-radius: 50%;
    height: 32px;
    width: 32px;
    padding: 5px;

    background-color: ${({ theme }) => theme.colors.mainGreen};
    color: ${({ theme }) => theme.colors.darkGreen};
  }

  &:hover {
    background-color: ${({ theme }) => theme.colors.darkGreen};
    border-color: ${({ theme }) => theme.colors.darkGreen};
    color: ${({ theme }) => theme.colors.mainGreen};
  }
`;
