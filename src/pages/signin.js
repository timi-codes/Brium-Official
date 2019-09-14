import React from 'react';
import {
  Layout,
  FaqSection,
  TopBanner,
  Nav,
  LoginCard
} from '@components';
import { IconArrow } from '@components/icons';
import styled from 'styled-components';
import { theme, media, Main } from '@styles';

const { fontSizes, fonts } = theme;

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
  width: 360px;
  grid-area: card;
  background-color: white;
  border-radius: 10px;
  margin-right: 70px;
  padding: 40px 30px 40px 30px;
  -webkit-box-shadow: 5px 4px 6px rgba(98, 95, 95, 0.14);
  box-shadow: 5px 4px 6px rgba(98, 95, 95, 0.14);
  margin-bottom: -200px;
  position: relative;
  z-index: 100000;
  ${media.tablet`
    display: block;
  `};

  ${media.phablet`
    margin: 0 auto;
  `};
`;

const Title = styled.h1`
  font-family: ${fonts.CircularStd};
  font-weight: 800;
  line-height: 123%;
  margin-bottom: 10px;
  font-size: 45px;
  color: black;
  max-width: 450px;
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
  color: black;
  font-size: 20px;
  ${media.phablet`
    display: none;
    `};
`;


const CaptionSignup = styled.p`
  font-size: 1.2vw;
  font-family: ${fonts.CircularStd};
  color: black;
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
  margin-top: 5rem;
  ${'' /* margin-bottom: 6rem; */}
  ${media.tablet`
    margin-top:4rem;
    margin-bottom:3rem;
  `};
  ${media.phablet`
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr ;
    margin: 3rem 0;
    grid-gap: 1.5rem;
    svg{
      display: none;
    }
  `};
`;

const SignupBox = styled.div``;

const SignupLink = styled.a`
  font-size: ${fontSizes.smallish};
  padding: 15px 24px;
  background: transparent;
  border: 2px solid black;
  color: black;
  font-weight: 600;
  border-radius: ${theme.borderRadius};
  margin-top: 20px;
  &:hover {
    color: black;
  }
  ${media.phablet`
    padding: 14px 16px;
    margin-top: 0px;
    font-size: ${fontSizes.small};
    border: 1.5px solid black;
  `};

  svg {
    width: 30px;
    height: 15px;
    fill: black !important;
    margin-left: 7px;
    transition: all 0.2s ease-in-out;
  }

  svg path {
    fill: black !important;
  }

  &:hover {
    svg {
      margin-left: 12px;
    }
  }
`;

const SignInPage = () => (
  <Layout>
    <MainContainer id="content">
      <TopBanner imageName="signin_bg.png">
        <Nav showBg primaryBtn />
        <LeftContent>
          <Title>New to Brium? Create an account.</Title>
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
                Signup to drive
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
                Signup to ride
                <IconArrow />
              </SignupLink>
            </SignupBox>
          </SignupContainer>
        </LeftContent>
        <CardView>
          <LoginCard />
        </CardView>
    </TopBanner>
    <FaqSection />
    </MainContainer>
  </Layout>
);

export default SignInPage;
