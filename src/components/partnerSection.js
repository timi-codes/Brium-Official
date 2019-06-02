/* eslint-disable import/no-cycle */
import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import { theme, mixins, media, Section } from '@styles';
import { Image } from '@components';

const { colors, fontSizes, fonts } = theme;

const PartnerContainer = styled(Section)`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr;
  background-color: ${colors.lightNavy};
  padding: 70px 0;
  margin-left: 5%;
  padding-right: 110px;
  z-index: -1;
  align-items: center;
  ${media.tablet`
    grid-template-columns: 1fr;
    margin: 0%;
    padding-left: 40px;
    padding-right: 40px;
  `};
`;

const Title = styled.h2`
  font-family: ${fonts.CircularStd};
  font-weight: 1000;
  font-size: 35px;
  line-height: 103%;
  margin-bottom: 15px;
  ${media.tablet`
    font-size: ${fontSizes.xxlarge};
  `};
`;

const Caption = styled.p`
  font-size: 1.2vw;
  font-family: ${fonts.CircularStd};
  color: ${colors.blueGrey};
  margin-top: 10px;
  ${media.phablet`
   font-size: 15px;
   text-align: center;
   `};
  ${media.tablet`
    font-size: 15px;
  `};
`;

const PartnerButton = styled(Link)`
  ${mixins.bigButton};
  margin-top: 25px;
  z-index: 0;
`;

const ImgContainer = styled.div`
  border-radius: ${theme.borderRadius};
  border-radius: 2px;
  grid-column: 1/2;
  grid-row: 1 / -1;
  margin-left: -25%;
  transition: ${theme.transition};
  ${media.tablet`
    display: none;
  `};
  ${media.thone`
    display: none;
  `};
`;

const TextContainer = styled.div`
  grid-column: 2 / span 1;
  grid-row: 1 / -1;
  ${media.phablet`
  text-align:center;
  `};
`;

const PartnerSection = () => (
  <PartnerContainer>
    <TextContainer>
      <Title>Become a fleet partner</Title>
      <Caption>
        Start making money from day one in Lagos and Abuja. Connect your drivers
        and we will provide both marketing materials, and support for drivers
        and passengers. We’re happy to help you find drivers for your fleet, but
        you’re free to handle it yourself.
      </Caption>
      <PartnerButton to="/register-partners">Register Now</PartnerButton>
    </TextContainer>
    <ImgContainer>
      <Image filename="car.png" alt="brium car" />
    </ImgContainer>
  </PartnerContainer>
);

export default PartnerSection;
