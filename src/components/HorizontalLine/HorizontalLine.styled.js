import styled from "styled-components";

export const Line = styled.div`
  grid-area: line;

  border-top: 1px solid ${({ theme }) => theme.colors.mainGreen};
  width: 100%;
`;
