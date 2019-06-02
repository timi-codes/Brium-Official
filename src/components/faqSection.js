/* eslint-disable import/no-cycle */
import React from 'react';
import { BackgroundImg } from '@components';
import styled from 'styled-components';
import { theme, media } from '@styles';

const { colors, fontSizes, fonts } = theme;

const FaqContainer = styled(BackgroundImg)`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 150px 1fr;
  justify-items: center;
  align-items: center;
  position: relative;
  background-size: auto 580px;
  background-repeat: repeat-x;
  height: auto;
  background-color: ${colors.white};
  grid-column-gap: 4rem;
  padding: 3rem 9rem 5rem 9rem;
  z-index: -1;
  text-align: center;
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

const QuestionContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 3rem;
  grid-column: 1 / -1;
  grid-row: 2 / -1;
  margin-bottom: 20px;
`;

const Question = styled.div`
  border: 1px solid ${colors.lightNavy};
  border-radius: 5px;
  padding: 12px 25px;
  width: 400px;
  background: white;
`;

const FaqSection = () => (
  <FaqContainer filename="faq_ic.png">
    <Title>Frequently Asked Questions</Title>
    <QuestionContainer>
      <Question>
        <SubTitle>I can’t sign into my account?</SubTitle>
        <Caption>
          This could be as a result of using wrong login details, kindly
          crosscheck and re-enter correct details.
        </Caption>
      </Question>
      <Question>
        <SubTitle>I can’t sign into my account?</SubTitle>
        <Caption>
          This could be as a result of using wrong login details, kindly
          crosscheck and re-enter correct details.
        </Caption>
      </Question>
      <Question>
        <SubTitle>I can’t sign into my account?</SubTitle>
        <Caption>
          This could be as a result of using wrong login details, kindly
          crosscheck and re-enter correct details.
        </Caption>
      </Question>
      <Question>
        <SubTitle>I can’t sign into my account?</SubTitle>
        <Caption>
          This could be as a result of using wrong login details, kindly
          crosscheck and re-enter correct details.
        </Caption>
      </Question>
    </QuestionContainer>
  </FaqContainer>
);

export default FaqSection;
