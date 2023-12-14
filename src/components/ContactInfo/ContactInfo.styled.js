import styled from 'styled-components';

export const ContactInfoContainer = styled.div`
  grid-area: contactsInfo;

  display: flex;
  flex-direction: column;
  gap: ${props => props.gap || '8px'};
  align-items: center;

  letter-spacing: -0.64px;

  @media screen and (${({ theme }) => theme.media.tablet}) {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-areas: 'address address mail ecosolution';
  }
  @media screen and (${({ theme }) => theme.media.desktop}) {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-template-areas: 'address address .  mail ecosolution';
  }

  & > .address {
    grid-area: address;
  }
  & > a {
    grid-area: mail;
  }
  & > .ecosolution {
    grid-area: ecosolution;

    justify-self: end;
  }
`;
