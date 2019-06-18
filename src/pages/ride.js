import React from 'react';
import {
  Layout,
  SafetySection,
  RideSection,
  TopBanner,
  Nav,
  BackgroundImg,
  FaqSection,
  HowToSection,
} from '@components';
import { IconArrow, IconGooglePlay, IconAppStore } from '@components/icons';
import { downloadLink, howToRide } from '@config';
import styled from 'styled-components';
import { Link } from 'gatsby';

import { theme, media, Main } from '@styles';

const { colors, fonts } = theme;

const MainContainer = styled(Main)`
  ${'' /* ${mixins.sidePadding}; */}
`;

const MainContent = styled.div`
  grid-column: 1/-1;
  grid-row: 2/-1;
  text-align: center;
  ${media.tablet`
    margin: 0;
    grid-column: 1/-1;
    text-align: center;
    padding: 0px 40px;
  `};
  margin: 20px 0;
`;

const Title = styled.h1`
  font-family: ${fonts.CircularStd};
  font-weight: 600;
  line-height: 103%;
  margin-bottom: 10px;
  font-size: 40px;
  color: ${colors.white};
  ${media.phablet`
    font-size: 31px;
  `};
  ${media.phone`
    font-size: 28px;
  `};
`;

const Caption = styled.p`
  font-size: 17px;
  font-family: ${fonts.CircularStd};
  color: ${colors.offWhite};
  max-width: 39%;
  text-align: center;
  margin: 50px auto;
  line-height: 130%;
  ${media.phablet`
    margin-top: 10px;
    max-width: 100%;
  `};
  ${media.tablet`
    max-width: 100%;
    margin: 30px auto;
  `};
`;

const DownloadLink = styled.a`
  width: 160px;
  margin-right: 22px;
  ${media.tablet`
    margin-top: 20px
  `};
  ${media.phablet`
     width: 140px
  `};
`;

const DownloadItemList = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, auto);
  justify-content: center;
  ${media.tablet`
   display: flex;
   flex-direction: column;
  `};
  ${media.phablet`
    flex-direction: row;
    justify-content: space-between;
  `};
`;

const EstimatorSection = styled(BackgroundImg)`
  height: 210px;
  display: flex;
  align-items: center;
  justify-content: center;
  ${media.phablet`
    padding: 0 20px;
  `};
`;

const TextContainer = styled.div`
  color: ${colors.white};
  h1 {
    color: ${colors.white};
    font-size: 40px;
    ${media.phablet`
      font-size: 32px;
  `};
  }
`;

const EstimatorInner = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  p {
    margin-bottom: -2px;
  }
  svg {
    width: 75px;
    border: 6px solid white;
    padding: 22px 20px;
    border-radius: 50%;
    margin-left: 90px;
    fill: white !important;
    transition: all 0.2s ease-in-out;
    ${media.phablet`
      width: 60px;
      padding: 17px 15px;
    `};

    &:hover {
      margin-right: 22px;
      border: 6px solid ${colors.offWhite};
      ${media.phablet`
        margin-right: 0px;
    `};
    }
  }
  svg path {
    fill: ${colors.white} !important;
  }
`;


const RidePage = () => (
  <Layout>
    <MainContainer id="content">
      <TopBanner imageName="main_bg.png">
        <Nav />
        <MainContent>
          <Title>We will get you there</Title>
          <Caption>
            Brium offers the best and affordable ride hailing service in the
            country. Our core aim is to spread happiness throughout your ride
            with us.
          </Caption>
          <DownloadItemList>
            {downloadLink &&
              downloadLink.map(({ name, url }) => (
                <li key={name}>
                  <DownloadLink
                    href={url}
                    target="_blank"
                    rel="nofollow noopener noreferrer"
                    arial-label={name}
                  >
                    {name === 'Google' ? <IconGooglePlay /> : <IconAppStore />}
                  </DownloadLink>
                </li>
              ))}
          </DownloadItemList>
        </MainContent>
      </TopBanner>
      <RideSection title="Why Ride with Brium"/>
      <EstimatorSection filename="estimator-banner-bg.png">
        <EstimatorInner>
          <TextContainer>
            <p>Where to?</p>
            <h1>Get a price Estimate</h1>
          </TextContainer>
          <Link to="/fare-estimator" rel="nofollow noopener noreferrer">
            <IconArrow />
          </Link>
        </EstimatorInner>
      </EstimatorSection>
      <SafetySection imageName="safety2.png"/>
      <HowToSection data={howToRide}/>
      <FaqSection />
    </MainContainer>
  </Layout>
);

export default RidePage;
