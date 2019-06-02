/* eslint-disable import/no-cycle */
import React from 'react';
import { Image } from '@components';
import styled from 'styled-components';
import { theme, media, Section } from '@styles';

const { colors, fontSizes, fonts } = theme;

const RideContainer = styled(Section)`
  display: grid;
  grid-template-columns: 1fr 350px 1fr;
  grid-template-rows: 150px 1fr 1fr;
  justify-items: center;
  align-items: center;
  position: relative;
  height: auto;
  background-color: ${colors.white};
  grid-column-gap: 4rem;
  margin: 3rem 8rem 5rem 8rem;
  z-index: -1;
  ${media.tablet`
  margin: 0 2rem 2rem 4rem;
  grid-template-columns: 1fr 260px 1fr;
  grid-column-gap: 2rem;
  `};
  ${media.thone`
    grid-template-rows: 1fr;
    grid-template-columns: 1fr;
    text-align:center;
    margin: 4rem;
    grid-row-gap: 4rem;
  `};
`;

const Title = styled.h2`
  font-family: ${fonts.CircularStd};
  font-weight: 900;
  font-size: 35px;
  line-height: 103%;
  margin-top: 20px;
  grid-column: 1 / -1;
  grid-row: 1 / 2;
  ${media.tablet`
    font-size: ${fontSizes.xxlarge};
    `};
`;

const SubTitle = styled.h3`
  font-family: ${fonts.CircularStd};
  font-weight: 900;
  font-size: ${fontSizes.large};
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

const WhatSection = styled.div`
  text-align: left;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  &:nth-child(3) {
    text-align: right;
    align-items: flex-end;
  }

  &:nth-child(5) {
    text-align: right;
    align-items: flex-end;
  }
  ${media.tablet`
    text-align:center;
    align-items: center;
    &:nth-child(3){
      text-align:center;
      align-items: center;
    }
    &:nth-child(5){
      text-align:center;
      align-items: center;
    }
  `};
`;

const ImgContainer = styled.div`
  position: relative;
  width: 350px;
  border-radius: ${theme.borderRadius};
  background-color: ${colors.green};
  border-radius: 2px;
  grid-column: 2/3;
  grid-row: 2 / -1;
  transition: ${theme.transition};
  ${media.tablet`
  height: 100%;
  width: 260px;
  `};
  ${media.thone`
    display: none;
  `};
`;

const SideImage = styled.div`
  width: 70px;
  height: 70px;
  ${media.tablet`
    width: 50px;
    height: 50px;
    `};
  ${media.thone`
    width: 70px;
    height: 70px;
    margin: 0 auto;
  `};
`;

const RideSection = () => (
  <RideContainer>
    <Title>More than just a Ride</Title>
    <ImgContainer>
      <Image filename="iphonex.png" alt="iphonex" />
    </ImgContainer>
    <WhatSection>
      <SideImage>
        <Image filename="friendly.png" alt="friendly" />
      </SideImage>
      <SubTitle>User Friendly</SubTitle>
      <Caption>
        {' '}
        The Brium app is an easy to use platform designed by Nigerians for
        Nigerians.
      </Caption>
    </WhatSection>
    <WhatSection>
      <SideImage>
        <Image filename="secure.png" alt="friendly" />
      </SideImage>
      <SubTitle>Very Secure</SubTitle>
      <Caption>
        while you take a ride with us, we assure you of always having a happy
        experience with us.{' '}
      </Caption>
    </WhatSection>
    <WhatSection>
      <SideImage>
        <Image filename="gift.png" alt="friendly" />
      </SideImage>
      <SubTitle>Highly Valuable</SubTitle>
      <Caption>
        Brium business model was developed to make you a happy customer as Rider
        and partners were priority when building our model.
      </Caption>
    </WhatSection>
    <WhatSection>
      <SideImage>
        <Image filename="experience.png" alt="friendly" />
      </SideImage>
      <SubTitle>Happy Experience</SubTitle>
      <Caption>
        Every ride with us is a happy ride. Riders and Partners are an essential
        part of our process.
      </Caption>
    </WhatSection>
  </RideContainer>
);

export default RideSection;
