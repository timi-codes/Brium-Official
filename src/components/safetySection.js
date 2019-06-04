/* eslint-disable import/no-cycle */
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import { Image } from '@components';
import styled from 'styled-components';
import { IconArrow } from '@components/icons';
import { theme, media, Section } from '@styles';

const { colors, fontSizes, fonts } = theme;

const SafetyContainer = styled(Section)`
  position: relative;
  height: auto;
  background-color: ${colors.white};
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr;
  padding: 60px 80px;
  justify-content: end;
  text-align: right;
  grid-column-gap: 5rem;
  ${media.tablet`
    font-size: 15px;
    grid-column-gap: 2rem;
    padding: 30px 40px;
  `};
  ${media.phablet`
    grid-template-columns: 1fr;
    padding: 30px 20px;
    text-align: left;
  `};
`;

const Title = styled.h2`
  font-family: ${fonts.CircularStd};
  font-weight: 900;
  font-size: 35px;
  line-height: 103%;
  margin-top: 20px;
  ${media.tablet`
    font-size: ${fontSizes.xxlarge};
  `};
`;

const Caption = styled.p`
  font-size: 1.3vw;
  font-family: ${fonts.CircularStd};
  color: ${colors.blueGrey};
  margin-left: 30%;
  margin-top: 10px;
  ${media.tablet`
    font-size: 14px;
    margin-left: 5%;
  `};
  ${media.phablet`
    margin-left: 0%;
  `};
`;

const LearnLink = styled(Link)`
  color: ${colors.blue};
  font-weight: 600;
  font-size: ${fontSizes.small};
  ${media.tablet`
    font-size: 12px;
  `};
  svg {
    width: 30px;
    height: 15px;
    fill: white !important;
    margin-right: 10px;
    transform: rotate(180deg);
    transition: all 0.2s ease-in-out;
  }
  svg path {
    fill: ${colors.blue} !important;
  }

  &:hover {
    color: ${colors.blue};
    svg {
      margin-right: 20px;
    }
  }
`;

const ImgContainer = styled.div`
  border-radius: ${theme.borderRadius};
  background-color: ${colors.green};
  grid-column: 2 / -1;
  grid-row: 1 / -1;
  width: 500px;
  transition: ${theme.transition};
  ${media.tablet`
    height: 100%;
    width: 350px;
  `};
  ${media.thone`
    grid-column: 1 / -1;
    width: 100%;
  `};
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const SafetySection = ({imageName}) => (
  <SafetyContainer>
    <ImgContainer>
      <Image filename={imageName} alt="safety" />
    </ImgContainer>
    <TextContainer>
      <Title>Safety is at the core of our business</Title>
      <Caption>
        We ensure that all our driver and cars are in a perfect condition to
        serve you.
      </Caption>
      <LearnLink>
        <IconArrow />
        <span>Learn More</span>
      </LearnLink>
    </TextContainer>
  </SafetyContainer>
);

SafetySection.propTypes = {
  imageName: PropTypes.string.isRequired,
}

export default SafetySection;
