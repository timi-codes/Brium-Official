import React from 'react';
import {
  Layout,
  SubscribeSection,
  PartnerSection,
  SafetySection,
  VideoSection,
  RideSection,
  TopBanner,
  Nav,
  LinkCard
} from '@components';
import { IconArrow } from '@components/icons';
import styled from 'styled-components';
import { theme, media, Main } from '@styles';

const { colors, fontSizes, fonts } = theme;

const MainContainer = styled(Main)`
  ${'' /* ${mixins.sidePadding}; */}
`;

const LeftContent = styled.div`
  grid-area: main;
  margin-right: 40px;
  padding-left: 90px;
  ${media.tablet`
    margin: 0;
    grid-column: 1/-1;
    text-align: center;
    padding: 0px 40px;
  `};
`;

const CardView = styled.div`
  height: 430px;
  width: 350px;
  grid-area: card;
  background-color: white;
  border-radius: 10px;
  margin-right: 70px;
  padding: 45px 30px 0 30px;
  -webkit-box-shadow: 5px 4px 6px rgba(98, 95, 95, 0.14);
  box-shadow: 5px 4px 6px rgba(98, 95, 95, 0.14);
  margin-bottom: -50px;
  ${media.tablet`display: none;`};
  position: relative;
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

const SubTitle = styled.h2`
  font-family: ${fonts.CircularStd};
  font-weight: 600;
  color: ${colors.white};
  font-size: 20px;
  ${media.phablet`
    display: none;
    `};
`;

const Caption = styled.p`
  font-size: 1.1vw;
  font-family: ${fonts.CircularStd};
  color: ${colors.offWhite};
  ${media.bigDesktop`
    font-size: 13px;
  `};
  ${media.phablet`
  font-size: 15px;
  margin-top: 10px;
  `};
  margin-top: 12px;
  line-height: 130%;
`;

const CaptionSignup = styled.p`
  font-size: 1.2vw;
  font-family: ${fonts.CircularStd};
  color: ${colors.offWhite};
  ${media.bigDesktop`font-size: 13px;`};
  ${media.phablet`
  font-size: 13px;
  display:none;
  `};
  margin-top: 10px;
  line-height: 130%;
`;

const SignupContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr;
  grid-gap: 3rem;
  justify-items: center;
  margin-top: 7rem;
  ${'' /* margin-bottom: 6rem; */}
  ${media.tablet`
    margin-top:4rem;
    margin-bottom:3rem;
  `};
  ${media.phablet`
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr;
    margin: 3rem 0;
    grid-gap: 1.5rem;
  `};
`;

const SignupBox = styled.div``;

const SignupLink = styled.a`
  font-size: ${fontSizes.smallish};
  padding: 15px 20px;
  background: transparent;
  border: 1.5px solid white;
  color: ${colors.white};
  font-weight: 600;
  border-radius: ${theme.borderRadius};
  margin-top: 20px;
  display: flex;
  opacity: 0.8;
  width: 170px;
  ${media.phablet`
    padding: 18px 40px;
    margin-top: 0px;
    font-size: ${fontSizes.medium};
  `};

  svg {
    width: 19px;
    height: 19px;
    margin-left: 12px;
    fill: white !important;
    transition: all 0.2s ease-in-out;
  }

  svg path {
    fill: white !important;
  }

  &:hover {
    width: 185px;
    svg {
      margin-left: 20px;
    }
  }
`;

const IndexPage = () => (
  <Layout>
    <MainContainer id="content">
      <TopBanner imageName="main_bg.png">
        <Nav />
        <LeftContent>
          <Title>We will get you there</Title>
          <Caption>
            Brium is a Transport Company with the aim to providing superior
            value to customers with meaningful, measurable value, efficient and
            comprehensive services.
          </Caption>
          <SignupContainer>
            <SignupBox>
              <SubTitle>Drive</SubTitle>
              <CaptionSignup>
                At Brium, a flat rate applies to all rides and drivers get
                incentives on the platform
              </CaptionSignup>
              <SignupLink
                href="/driver"
                rel="nofollow noopener noreferrer"
              >
                <span>Signup to drive</span>
                <IconArrow />
              </SignupLink>
            </SignupBox>

            <SignupBox>
              <SubTitle>Ride</SubTitle>
              <CaptionSignup>
                Brium offers safe and affordable and rides to all destinations
                across the country
              </CaptionSignup>
              <SignupLink href="/ride" rel="nofollow noopener noreferrer">
                <span>Signup to ride</span>
                <IconArrow />
              </SignupLink>
            </SignupBox>
          </SignupContainer>
        </LeftContent>
        <CardView>
          <LinkCard />
        </CardView>
      </TopBanner>
      <RideSection title="More than just a Ride"/>
      <VideoSection />
      <SafetySection imageName="safety1.png"/>
      <PartnerSection />
      <SubscribeSection />
    </MainContainer>
  </Layout>
);

export default IndexPage;
