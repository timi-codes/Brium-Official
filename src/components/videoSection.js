import React from 'react';
import ReactPlayer from 'react-player';
import styled from 'styled-components';
import { theme, media, Section } from '@styles';

const { colors, fontSizes, fonts } = theme;

const VideoContainer = styled(Section)`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 100px 1fr;
  grid-row-gap: 0.3rem;
  grid-column-gap: 3rem;
  position: relative;
  height: auto;
  z-index: -1;
  background-color: ${colors.lightNavy};
  padding: 60px;
  ${media.tablet`
    padding: 50px;
    grid-column-gap: 2rem;
    grid-row-gap: 0;
    grid-template-rows: 50px 1fr;
  `};

  ${media.phablet`
    padding: 25px 0;
    grid-column-gap: 2rem;
    grid-template-columns: 1fr;
    grid-template-rows: auto 1fr auto;
  `};
`;

const Title = styled.h2`
  font-family: ${fonts.CircularStd};
  font-weight: 900;
  font-size: 35px;
  line-height: 103%;
  grid-row: 1/1;
  grid-column: 2/-1;
  align-self: end;
  ${media.tablet`
    font-size: ${fontSizes.xxlarge};
  `};
  ${media.phablet`
    grid-row: 1;
    grid-column:1;
    text-align:center;
  `};
`;

const Caption = styled.p`
  font-size: 1.3vw;
  line-height: 150%;
  font-family: ${fonts.CircularStd};
  color: ${colors.blueGrey};
  margin-top: 15px;
  grid-row: 2/-1;
  grid-column: 2/-1 ${media.bigDesktop`font-size: 15px;`};
  ${media.phablet`
    font-size: 15px;
    grid-row: 3;
    grid-column:1;
    margin: 10px 20px;
  `};
  ${media.tablet`
    font-size: 14px;
    margin-top: 10px;
  `};
`;

const VideoWrapper = styled.div`
  grid-row: 1/-1;
  grid-column: 1/2;
  height: 300px;
  ${media.phablet`
    grid-row: 2;
    grid-column:1;
  `};

  ${media.tablet`
    height: 200px;
  `};
`;

const VideoSection = () => (
  <VideoContainer>
    <Title>We’ll get you there</Title>
    <VideoWrapper>
      <ReactPlayer
        width="100%"
        height="100%"
        url="https://youtu.be/jJM-ZKzFn7A"
      />
    </VideoWrapper>
    <Caption>
      Brium is a Transport Company with the aims to provide superior value to
      customers with meaningful, measurable value, efficient and comprehensive
      services, excellent treatment and the highest standards of quality and
      safety since August 2015.
    </Caption>
  </VideoContainer>
);

export default VideoSection;
