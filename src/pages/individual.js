import React from 'react';
import {
  Layout,
  TopBanner,
} from '@components';
import styled from 'styled-components';
import { Link } from 'gatsby';

import { theme, media, Main, Section } from '@styles';

const { colors, fontSizes, fonts } = theme;

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
  margin: 40px 0;
`;

const Title = styled.h1`
  font-family: ${fonts.CircularStd};
  font-weight: 600;
  line-height: 103%;
  margin-bottom: 10px;
  font-size: 40px;
  color: ${colors.white};
  ${media.tablet`
    font-size: 40px;
  `};
  ${media.phablet`
    font-size: 30px;
  `};
  ${media.phone`
    font-size: 28px;
  `};
`;

const Caption = styled.p`
  font-size: 18px;
  font-family: ${fonts.CircularStd};
  color: ${colors.offWhite};
  max-width: 46%;
  text-align: center;
  margin: 40px auto;
  line-height: 130%;
  ${media.phablet`
    margin-top: 10px;
    max-width: 100%;
    font-size: 18px;
  `};
  ${media.tablet`
    max-width: 100%;
    margin: 30px auto;
  `};
`;

const RegisterLink = styled.a`
  margin-left: 10px;
  font-size: ${fontSizes.smallish};
  padding: 15px 35px;
  background-color: ${colors.white};
  border: none;
  color: ${colors.blue};
  font-weight: 600;
  border-radius: ${theme.borderRadius};
  &:hover {
    opacity: 0.9;
    color: ${colors.blue};
  }
`;

const DetailContainer = styled(Section)`
  display: grid;
  justify-items: center;
  align-items: center;
  background-color: ${colors.white};
  grid-column-gap: 4rem;
  margin: 4rem 12rem 5rem 12rem;
  z-index: 2;
  ${media.tablet`
   margin: 4rem 2rem 4rem 2rem;
    grid-template-rows: 1fr;
    grid-template-columns: 1fr;
    grid-column-gap: 2rem;
  `};
  ${media.phablet`
    grid-template-rows: 1fr;
    grid-template-columns: 1fr;
    text-align:center;
    grid-row-gap: 2rem;
    margin: 4rem 2rem 4rem 2rem;
  `};
`;

const AcceptedVehicleSection = styled(Section)`
    background-color: #f8f8f8;
    margin: 2rem 12rem 5rem 12rem;
    padding: 4rem;
    ${media.tablet`
      padding: 2rem;
      margin: 2rem;
    `};
    ${media.phablet`
      padding: 1rem;
      padding-top: 2rem;
      margin: 0rem;
    `};
`;

const SubTitle = styled.h2`
  font-family: ${fonts.CircularStd};
  font-size: 35px;
  font-weight: 500;
  line-height: 103%;
  margin-top: 20px;
  ${media.tablet`
    font-size: ${fontSizes.xxlarge};
  `};
  span{
    font-weight: 900;
  }
`;

const SubCaption = styled.p`
  font-size: 19px;
  font-family: ${fonts.CircularStd};
  color: ${colors.blueGrey};
  margin-top: 2rem;
  line-height: 140%;
  ${media.phablet`
    font-size: 16px;
    margin-top: 0;
  `};
  ${media.tablet`
    font-size: 16px;
  `};
`;


const Titleh3 = styled.h3`
    font-family: ${fonts.CircularStd};
    font-weight: 600;
    line-height: 103%;
    margin-bottom: 4rem;
    font-size: 20px;
    text-align: center;
    ${media.phablet`
        font-size: 20px;
    `};
    ${media.phone`
        font-size: 28px;
    `};
`;

const Titleh5 = styled.h5`
    font-family: ${fonts.CircularStd};
    font-weight: 600;
    line-height: 103%;
    margin-bottom: 10px;
    font-size: 22px;
    ${media.phablet`
        font-size: 22px;
    `};
    ${media.phone`
        font-size: 28px;
    `};
`;

const List = styled.div`
    font-size: 17px;
    font-family: ${fonts.CircularStd};
    color: ${colors.blueGrey};
    margin-top: 2rem;
    line-height: 140%;
    min-width: 80%;
    ${media.bigDesktop`font-size: 15px;`};
    ${media.phablet`font-size: 15px;`};
    ${media.tablet`
    font-size: 14px;
    `};
    li {
        margin: 15px 0px;
        a {
          color:${colors.blue};
          padding: 10px;
          font-weight: 600;
          &:hover {
            opacity: 0.8
          }
        }
    }
`;

const Divider = styled.div`
    background-color: white;
    height: 0.6rem;
    margin: 3rem 0;
`;


const AcceptedVehicleFirstSection = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    ${media.phablet`
      grid-gap: 1rem;
    `};
`;

const Centerize = styled.div`
    text-align: center;
    grid-column: 1/-1;
`;

const renderDescription = () => (
    <DetailContainer>
        <SubTitle>Registeration fees is <span>₦10,000</span> only</SubTitle>
        <SubCaption>
            We provide comprehensive fleet management services to individuals around Abuja, Nigeria. We also offer a suite of fleet
            management solutions that span the total fleet life cycle, from acquisition, management and remarketing of fleet vehicles.
        </SubCaption>
    <SubCaption>Below is a table showing the classes of vehicles eligible for this service and their monthly payouts under this class.</SubCaption>
    </DetailContainer>
);

const renderAcceptedVehicle = () => (
    <AcceptedVehicleSection>
        <Titleh3>ACCEPTED VECHICLES</Titleh3>
        <AcceptedVehicleFirstSection>
            <div>
                <Titleh5>Honda</Titleh5>
                <List>
                    <li>2006 - 2007 Accord (₦70,000) - 2.4 Engine Capacity</li>
                    <li>2008 Accord & Newer Models(₦80,000) - 2.4 Engine Capacity</li>
                    <li>2006 Civic & Newer Models (₦70,000) - 1.8 Engine Capacity</li>
                    <li>2006 City & Newer Models (₦70,000) - 1.8 Engine Capacity</li>
                </List>
            </div>
            <div>
                <Titleh5>Toyota</Titleh5>
                <List>
                    <li>2005 - 2006 Camry (₦70,000) - 2.4 Engine Capacity</li>
                    <li>2007 Camry & Newer Models (₦80,000) - 2.4 Engine Capacity</li>
                    <li>2005 - 2008 Corolla (₦70,000) - 1.8 Engine Capacity</li>
                    <li>2009 Corolla & Newer Models (₦80,000) - 1.8 Engine Capacity</li>
                    <li>2005 - 2008 Matrix (₦70,000) - 1.8 Engine Capacity</li>
                    <li>2009 Matrix & Newer Models(₦80,000) 1.8 Engine Capacity</li>
                </List>
            </div>
        </AcceptedVehicleFirstSection>
        <Divider/>
        <AcceptedVehicleFirstSection>
            <div>
                <Titleh5>Nissan</Titleh5>
                <List>
                    <li>2007 Sentra & Newer Models (₦70,000) - 2.0 Engine Capacity</li>
                    <li>2006 Versa & Newer Models(₦70,000) - 1.8 Engine Capacity</li>
                </List>
            </div>
            <div>
                <Titleh5>Hyundai</Titleh5>
                <List>
                    <li>2007 Elantra & Newer Models (₦70,000) - 2.0 Engine Capacity</li>
                    <li>2006 Sonata & Newer Models (₦70,000) - 2.4 Engine Capacity</li>
                </List>
            </div>
        </AcceptedVehicleFirstSection>
        <Divider/>
        <AcceptedVehicleFirstSection>
            <Centerize>
                <SubTitle><span>***</span></SubTitle>
                <SubCaption></SubCaption>
                <List>
                    The Registration fee of this service for individual class is N10,000 only per vehicle.
                    However, the following stated below should be noted. <br/><br/>
                    1. Automatic Transmission cars only.<br/>
                    2. No V6 or V8 Engines.<br/>
                    3. All cars must come with comprehensive insurance
                </List>
            </Centerize>
        </AcceptedVehicleFirstSection>
    </AcceptedVehicleSection>
);

const FleetManagementPage = () => (
  <Layout>
    <MainContainer id="content">
      <TopBanner imageName="main_bg.png">
        {/* <Nav /> */}
        <MainContent>
          <Title>Individual Fleet Management Service</Title>
          <Caption>
            We provide comprehensive fleet management services to individuals around Abuja, Nigeria. We also offer a suite of fleet
            management solutions that span the total fleet life cycle, from acquisition, management and remarketing of fleet vehicles.</Caption>
            <RegisterLink
                href="/signup"
                rel="nofollow noopener noreferrer">
                REGISTER NOW
            </RegisterLink>  
        </MainContent>
        </TopBanner>
            {renderDescription()}
            {renderAcceptedVehicle()}
    </MainContainer>
  </Layout>
);

export default FleetManagementPage;