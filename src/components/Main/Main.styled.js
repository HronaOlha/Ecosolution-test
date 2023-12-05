import styled from "styled-components";
import { Line } from "../HorizontalLine/HorizontalLine.styled";

import windTurbineMob from "../../images/wind-turbine-mob.png";
import windTurbineTab from "../../images/wind-turbine-tab.png";
import windTurbineDesk from "../../images/wind-turbine-desk.png";

export const MainSection = styled.section`
  padding-top: 222px;

  @media screen and (${({ theme }) => theme.media.tablet}) {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-areas:
      "heading heading text text"
      "heading heading button button"
      "line line line line"
      "mainContacts mainContacts mainContacts mainContacts"
      "mainImage mainImage mainImage mainImage";

    padding-top: 240px;
    text-align: left;
  }

  @media screen and (${({ theme }) => theme.media.desktop}) {
    grid-column-gap: 255px;
    padding-top: 264px;
  }

  & > h1 {
    grid-area: heading;

    margin: 0 0 24px 0;

    @media screen and (${({ theme }) => theme.media.tablet}) {
      padding-right: 50px;
    }
    @media screen and (${({ theme }) => theme.media.desktop}) {
      padding-right: 0;
    }
  }
`;

export const ButtonComponent = styled.a`
  grid-area: button;

  display: flex;
  align-items: center;
  gap: 12px;

  margin: 0 auto 24px;
  border: 1px solid ${({ theme }) => theme.colors.mainGreen};
  border-radius: 50px;
  width: fit-content;
  padding: 3px 4px 3px 16px;

  background-color: transparent;
  font-size: 16px;
  transition: background-color 400ms ease, color 400ms ease,
    border-color 400ms ease;

  @media screen and (${({ theme }) => theme.media.tablet}) {
    margin-left: 0;
    margin-bottom: 26px;
    width: auto;
  }
  @media screen and (${({ theme }) => theme.media.desktop}) {
    margin-bottom: 28px;
  }

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
  &:focus,
  &:hover {
    border-color: ${({ theme }) => theme.colors.darkGreen};
    background-color: ${({ theme }) => theme.colors.darkGreen};
    color: ${({ theme }) => theme.colors.mainGreen};
  }
`;

export const Text = styled.p`
  grid-area: text;

  margin-bottom: 24px;

  @media screen and (${({ theme }) => theme.media.tablet}) {
    margin-bottom: 43px;
  }
  @media screen and (${({ theme }) => theme.media.desktop}) {
    margin-bottom: 20px;
    width: 363px;
  }
`;

export const MainContacts = styled.div`
  margin-bottom: 36px;

  text-align: center;

  @media screen and (${({ theme }) => theme.media.tablet}) {
    grid-area: mainContacts;
    display: flex;
    justify-content: space-between;
  }
`;

export const Address = styled.p`
  margin-bottom: 8px;
`;

export const MainImage = styled.div`
  margin: 0 auto;
  height: 200px;

  background-image: url(${windTurbineMob});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;

  @media screen and (${({ theme }) => theme.media.tablet}) {
    grid-area: mainImage;
    height: 348px;
    width: 100%;
    background-image: url(${windTurbineTab});
  }
  @media screen and (${({ theme }) => theme.media.desktop}) {
    height: 524px;
    background-image: url(${windTurbineDesk});
  }
`;

export const ContactInfoContainer = styled.div`
  grid-area: mainContacts;
  margin-bottom: 36px;

  @media screen and (${({ theme }) => theme.media.tablet}) {
    margin-bottom: 40px;
  }
  @media screen and (${({ theme }) => theme.media.desktop}) {
    margin-bottom: 36px;
  }

  & > div > .ecosolution {
    @media screen and (${({ theme }) => theme.media.phone}) {
      display: none;
    }
  }
`;

// Additional styling of styled-components Component
export const MainLine = styled(Line)`
  margin-bottom: 24px;

  @media screen and (${({ theme }) => theme.media.tablet}) {
    margin-bottom: 16px;
  }
`;
