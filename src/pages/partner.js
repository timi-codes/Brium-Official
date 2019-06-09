import React from 'react';
import {
  Layout,
  FaqSection,
  TopBanner,
  Nav,
  RegisterCard,
  BasicSection,
  PartnerRequireSection,
} from '@components';
import ReactPlayer from 'react-player';

import styled from 'styled-components';
import { theme, media, Main, mixins, Section } from '@styles';
import { Link } from 'gatsby';

const { colors, fonts } = theme;

const MainContainer = styled(Main)`
  ${'' /* ${mixins.sidePadding}; */}
`;

const LeftContent = styled.div`
  grid-area: main;
  padding-left: 90px;
  margin-top: 2rem;
  ${media.tablet`
    margin: 0;
    grid-column: 1/-1;
    text-align: center;
    padding: 0px 30px;
  `};
`;

const CardView = styled.div`
  grid-area: card;
  background-color: white;
  width: 350px;
  border-radius: 10px;
  margin-right: 70px;
  padding: 45px 30px 45px 30px;
  -webkit-box-shadow: 5px 4px 6px rgba(98, 95, 95, 0.14);
  box-shadow: 5px 4px 6px rgba(98, 95, 95, 0.14);
  margin-bottom: -500px;
  z-index: 200;
  ${media.tablet`
  `};
`;

const Title = styled.h1`
  font-family: ${fonts.CircularStd};
  font-weight: 800;
  line-height: 103%;
  margin-bottom: 10px;
  font-size: 50px;
  color: ${colors.white};
  max-width: 80%;
  ${media.tablet`
    max-width: 100%;
    font-size: 37px;
  `};
  ${media.phablet`
    font-size: 31px;
  `};
  ${media.phone`
    font-size: 28px;
  `};
`;

const SubTitle = styled.h2`
  font-family: ${fonts.CircularStd};
  font-weight: 1000;
  font-size: 35px;
  line-height: 123%;
  margin-bottom: 15px;
  max-width: 45%;
  text-align: center;
  ${media.tablet`
    max-width: 90%;
    font-size: 30px;
  `};
`;

const Caption = styled.p`
  font-size: 1.4vw;
  font-family: ${fonts.CircularStd};
  color: ${colors.offWhite};
  margin-top: 2rem;
  line-height: 130%;
  max-width: 82%;
  margin-bottom: 10rem;
  ${media.bigDesktop`font-size: 13px;`};
  ${media.phablet`
  font-size: 15px;
  `};
  ${media.tablet`
    max-width: 100%;
    font-size: 18px;
    margin-bottom: 4rem;
  `};
`;

const DriveNowSession = styled(Section)`
  padding: 50px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Button = styled(Link)`
${mixins.bigButton};
  margin-top: 15px;
  padding: 18px 50px;
  svg {
    width: 30px;
    height: 14px;
    margin-left: 7px;
    filter: drop-shadow(0 1px 1px rgba(255, 255, 255, 0.57)) !important;
  }

  svg path {
    fill: ${colors.darkGrey} !important;
  }
`;

const HowtoSection = styled.div`
  background-color: ${colors.lightNavy};
  padding: 55px 0;
  display: flex;
  justify-content: center;
`;

const PartnerPage = () => (
  <Layout>
    <MainContainer id="content">
      <TopBanner>
        <Nav />
        <LeftContent>
          <Title>Become a fleet Partner.</Title>
          <Caption>
          Connect your drivers and we will provide support for drivers and passengers. We’re happy to help you find drivers for your fleet, but you’re free to handle it yourself.          </Caption>
        </LeftContent>
        <CardView>
          <RegisterCard title="Sign up to become driver" />
        </CardView>
      </TopBanner>
      <BasicSection/>
      <PartnerRequireSection title="Becoming a partner is easy."/>
      <DriveNowSession>
        <SubTitle>Brium needs a partner like you.</SubTitle>
        <Button>Register Now</Button>
      </DriveNowSession>
      <HowtoSection>
        <ReactPlayer
            width="660px"
            height="350px"
            url="https://youtu.be/jJM-ZKzFn7A"
        />
      </HowtoSection>
      <FaqSection />
    </MainContainer>
  </Layout>
);

export default PartnerPage;
