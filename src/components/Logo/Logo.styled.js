import styled from "styled-components";

export const LogoContainer = styled.div`
  grid-area: logo;

  display: flex;
  align-items: center;
  gap: 4px;
`;
export const Svg = styled.svg`
  stroke: transparent;
  fill: ${({ theme }) => theme.colors.darkGreen};
  transition: fill 400ms ease;

  &:focus,
  &:hover {
    fill: ${({ theme }) => theme.colors.mainGreen};
  }
`;
