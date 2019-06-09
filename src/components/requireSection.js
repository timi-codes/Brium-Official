/* eslint-disable import/no-cycle */
import React from 'react';
import styled from 'styled-components';
import { Image } from '@components';
import { theme, media } from '@styles';
import BackgroundImg from './backgroundImage';

const { colors, fonts, fontSizes } = theme;

const RequirementContainer = styled(BackgroundImg)`
  background-position: left top;
  background-color: ${colors.white};
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto repeat(3, 1fr);
  padding: 50px 50px;
  position: relative;
  justify-content: center;
  grid-gap: 2rem;
  ${media.tablet`
    grid-template-columns: 1fr;
    grid-template-rows: auto repeat(4, 1fr);
    grid-gap: 1rem;
    padding: 40px 20px;
  `};
`;


const Title = styled.h1`
  font-family: ${fonts.CircularStd};
  font-weight: 900;
  font-size: 35px;
  line-height: 103%;
  grid-column: 1/-1;
  margin: 20px 0;
  max-width: 95%;
  justify-self: center;
  color: ${colors.white};
  ${media.tablet`
    font-size: ${fontSizes.xxlarge};
    max-width: 100%;
    grid-column: 1/-1;
  `};
`;

const SideImage = styled.div`
  width: 90px;
  justify-self: center;
`;

const SubTitle = styled.h3`
  font-family: ${fonts.CircularStd};
  font-weight: 900;
  font-size: ${fontSizes.large};
  color: ${colors.darkGrey}
  line-height: 103%;
  margin-top: 20px;
  ${media.tablet`
    font-size: ${fontSizes.medium};
  `};
  ${media.thone`
    font-size: ${fontSizes.large};
  `};
`;

const Caption = styled.p`
  font-size: 16px;
  font-family: ${fonts.CircularStd};
  color: ${colors.blueGrey};
  ${media.bigDesktop`font-size: 15px;`};
  ${media.phablet`font-size: 15px;`};
  ${media.tablet`
    font-size: 14px;
  `};
`;

const RequireCard = styled.div`
    background-color: ${colors.white};
    border-radius: 3px;
    display: flex;
    padding: 15px 20px;
    width: 470px;
    align-items: center;
    &:nth-child(5) {
        grid-column: 1/-1;
        grid-row: 2/3;
        justify-self: center;
    }
     &:nth-child(6) {
        grid-column: 1/-1;
        grid-row: 4/5;
        justify-self: center;
    }
    &:nth-child(7) {
        justify-self: start;
    }
    &:nth-child(4) {
        justify-self: end;
    }
    ${media.tablet`
      width: 500px;
      &:nth-child(5) {
        justify-self: center;
      }
      &:nth-child(7) {
        justify-self: center;
      }
      &:nth-child(4) {
        justify-self: center;
      }
    `};
    ${media.phablet`
      width: 320px;
    `};
`;

const TextContainer = styled.div`
    margin-left: 20px;
`;

const RequireSection = ({title}) => (
  <RequirementContainer filename="requirement_bg.png">
    <Title>{title}</Title>
    <RequireCard>
        <SideImage>
          <Image filename="age_require.png" alt="friendly" />
        </SideImage>
        <TextContainer>
            <SubTitle>Age</SubTitle>
            <Caption>You have to be over 18 years of age with a valid driver’s license to drive with Brium.</Caption>
        </TextContainer>
    </RequireCard>
    <RequireCard>
        <SideImage>
          <Image filename="car_require.png" alt="friendly" />
        </SideImage>
        <TextContainer>
            <SubTitle>Car</SubTitle>
            <Caption>Depending on the city you want to work in, your car must meet some requirements.</Caption>
        </TextContainer>
    </RequireCard>
    <RequireCard>
        <SideImage>
          <Image filename="phone_require.png" alt="friendly" />
        </SideImage>
        <TextContainer>
            <SubTitle>Smart Phone</SubTitle>
            <Caption>You will need an IOS/Android device to receive bookings on our app.</Caption>
        </TextContainer>
    </RequireCard>
     <RequireCard>
        <SideImage>
          <Image filename="screening_require.png" alt="friendly" />
        </SideImage>
        <TextContainer>
            <SubTitle>Screening</SubTitle>
            <Caption>The screening process may include drug tests, police reports, credit checks etc.</Caption>
        </TextContainer>
    </RequireCard>
  </RequirementContainer>
);

export default RequireSection;
