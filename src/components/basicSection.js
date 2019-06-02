/* eslint-disable import/no-cycle */
import React from 'react';
import { Image } from '@components';
import styled from 'styled-components';
import { theme, media, Section } from '@styles';

const { colors, fontSizes, fonts } = theme;

const BasicContainer = styled(Section)`
  position: relative;
  height: auto;
  background-color: ${colors.white};
  display: grid;
  padding: 30px 80px;
  ${media.tablet`
    padding: 30px 45px;
  `};

  ${media.phablet`
    text-align: center;
  `};
`;

const Title = styled.h2`
  font-family: ${fonts.CircularStd};
  font-weight: 900;
  font-size: 35px;
  line-height: 103%;
  ${media.tablet`
    font-size: ${fontSizes.xxlarge};
  `};
`;

const Caption = styled.p`
  font-size: 1.3vw;
  font-family: ${fonts.CircularStd};
  color: ${colors.blueGrey};
  max-width: 600px;
  margin-top: 10px;
  ${media.tablet`
    font-size: 15px;
  `};
`;

const SubContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 5rem;
  margin-top: 50px;
  ${media.tablet`
    grid-gap: 2rem;
  `};

  ${media.phablet`
    grid-template-columns: 1fr;
    grid-template-rows: repeat(3, 1fr);
  `};
`;

const WhatSection = styled.div`
  display: flex;
  flex-direction: column;
  ${media.phablet`
      text-align: center
  `};
`;

const SideImage = styled.div`
  width: 60px;
  height: 60px;
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

const SubTitle = styled.h3`
  font-family: ${fonts.CircularStd};
  font-weight: 900;
  font-size: ${fontSizes.large};
  line-height: 103%;
  margin-top: 20px;
  ${media.phablet`
      text-align: center
  `};
  ${media.tablet`
    font-size: ${fontSizes.medium};
    `};
`;

const BasicSection = () => (
  <BasicContainer>
    <Title>How fare are calculated</Title>
    <Caption>
      With Brium, fares are calculated by adding the base fare, per minute fare,
      per kilometre rate.
    </Caption>
    <SubContainer>
      <WhatSection>
        <SideImage>
          <Image filename="secure.png" alt="friendly" />
        </SideImage>
        <SubTitle>Per minute Rate</SubTitle>
        <Caption>
          Because of how much we value you, we have taken extra efforts to keep
          all your information secure.
        </Caption>
      </WhatSection>
      <WhatSection>
        <SideImage>
          <Image filename="secure.png" alt="friendly" />
        </SideImage>
        <SubTitle>Per minute Rate</SubTitle>
        <Caption>
          Because of how much we value you, we have taken extra efforts to keep
          all your information secure,{' '}
        </Caption>
      </WhatSection>
      <WhatSection>
        <SideImage>
          <Image filename="secure.png" alt="friendly" />
        </SideImage>
        <SubTitle>Per Kilometre rate</SubTitle>
        <Caption>
          Because of how much we value you, we have taken extra efforts to keep
          all your information secure.
        </Caption>
      </WhatSection>
    </SubContainer>
  </BasicContainer>
);

export default BasicSection;
