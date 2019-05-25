/* eslint-disable import/no-cycle */
import React from 'react';
import styled from 'styled-components';
import { Input, ArrowButton } from '@components';
import { theme } from '@styles';
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
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: auto;
  grid-column: 2/-2;
  grid-column-gap: 0;
`;

const Title = styled.h1`
  font-family: ${fonts.CircularStd};
  font-weight: 900;
  font-size: ${fontSizes.xxlarge};
  line-height: 103%;
  grid-column: 1/-1;
  margin: 0;
  text-align: center;
`;

const FormContainer = styled.form`
  grid-column: 1/-1;
  margin: 50px auto 220px auto;
  width: 100%;
`;

const FieldSet = styled.div`
  display: flex;
  flex-direction: row;
  margin: auto;
`;

const SubscribeSection = () => (
  <SubscribeContainer>
    <NewsLetterContainer>
      <Title>Join our newsletter and get updates on our next moves.</Title>
      <FormContainer>
        <FieldSet>
          <Input type="email" placeholder="Enter your email address" />
          <ArrowButton />
        </FieldSet>
      </FormContainer>
    </NewsLetterContainer>
  </SubscribeContainer>
);

export default SubscribeSection;
