/* eslint-disable import/no-cycle */
import React from 'react';
import styled from 'styled-components';
import { Input, ArrowButton } from '@components';
import { theme, media } from '@styles';
import BackgroundImg from './backgroundImage';

const { colors, fonts, fontSizes } = theme;

const SubscribeContainer = styled(BackgroundImg)`
  background-position: center bottom;
  background-size: auto 180px;
  background-repeat: repeat-x;
  background-color: ${colors.white};
  display: grid;
  grid-template-columns:
    minmax(20px, 1fr) repeat(8, minmax(auto, calc((1270px - (11 * 10px)) / 8)))
    minmax(20px, 1fr);
  grid-template-rows: auto;
  position: relative;
`;

const NewsLetterContainer = styled.div`
  display: grid;
  position: relative;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: auto;
  grid-column: 1/-2;
  grid-gap: 5rem;
  align-items: center;
  margin: 120px 110px 230px 110px;
  ${media.tablet`
    margin: 120px 110px 230px 110px;
    grid-gap: 2rem;
    grid-template-columns: 1fr;
    grid-column: 1/-1;
    text-align: center;
  `};
  ${media.phablet`
    margin: 120px 50px 230px 50px;
  `};
`;

const Title = styled.h1`
  font-family: ${fonts.CircularStd};
  font-weight: 900;
  font-size: 35px;
  line-height: 103%;
  grid-column: 1/2;
  margin: 0;
  max-width: 95%;
  ${media.tablet`
    font-size: ${fontSizes.xxlarge};
    max-width: 100%;
    grid-column: 1/-1;
  `};
`;

const FormContainer = styled.form`
  grid-column: 2/-1;
  ${media.tablet`
    grid-column: 1/-1;
  `};
`;

const FieldSet = styled.div`
  display: flex;
  flex-direction: row;
  margin: auto;
  svg {
    width: 30px;
    height: 14px;
    filter: drop-shadow(0 1px 1px rgba(255, 255, 255, 0.57)) !important;
  }
  svg path {
    fill: ${colors.darkGrey} !important;
  }
  &:hover {
    color: rgba(0, 0, 0, 0.5);
    mix-blend-mode: multiply;
    svg path {
      fill: rgba(0, 0, 0, 0.5) !important;
      filter: drop-shadow(0 1px 1px rgba(255, 255, 255, 0.57)) !important;
    }
  }
`;

const SubscribeSection = () => (
  <SubscribeContainer filename="subscribe-bg.png">
    <NewsLetterContainer>
      <Title>Join our newsletter and get updates on our next moves.</Title>
      <FormContainer>
        <FieldSet>
          <Input
            type="email"
            placeholder="Enter your email address"
            border="5px 0 0 5px"
          />
          <ArrowButton />
        </FieldSet>
      </FormContainer>
    </NewsLetterContainer>
  </SubscribeContainer>
);

export default SubscribeSection;
