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
  font-size: 50px;
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
  font-size: 20px;
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

const LinkButton = styled.a`
  margin-left: 10px;
  font-size: ${fontSizes.smallish};
  padding: 15px 35px;
  background-color: ${colors.white};
  border: none;
  color: ${colors.blue};
  font-weight: 600;
  border-radius: ${theme.borderRadius};
  ${media.phablet`
    margin-top: 20px;
  `};
  &:hover {
    opacity: 0.9;
    color: ${colors.blue};
  };
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
        margin: 5px 0px;
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
`;

const renderDescription = () => (
    <DetailContainer>
        {/* <SubTitle>Registeration fees is <span>₦10,000</span> only</SubTitle> */}
        <SubTitle>Brium Fleet Management Proposition</SubTitle>
        <SubCaption>
          Brium is a ride-hailing service that connects drivers and riders across cities to make travel safer, affordable and reliable.
          Using efficient and tech-enabled business models, Brium benefits drivers and riders with focus on creating a system that
          provides equitable fare rates for both the passenger and drivers. Brium recently introduced Brium Fleet Management into
          the market.
        </SubCaption>
    <SubCaption>Brium started her operations in 2015 by providing unique transportation services to Abuja residents with seven cars.</SubCaption>
    <SubCaption>Seeking to serve the growing population of Abuja residents with a special on-demand transport service to make commuting
      around the city easier and at an affordable cost, Brium steadily grew with a dedicated team to provide this service to the
      ever-growing loyal customer base and has expanded operations over time.
    </SubCaption>
    <SubCaption>
      Brium has the ultimate goal and vision to become a unique digital platform that provides personalized on demand services
      to the average commuter in every city in Africa. With an already existing competitors in the market space, Brium has
      developed a distinctive model built towards making their customers happy. In simple terms being on the platform would
      make you a “Happy Driver” and a “Happy Rider”. It’s always a special experience with us.
    </SubCaption>
    <SubCaption>
      Brium Fleet Management provide quality class fleet management services that enable individuals &amp; companies with fleet
      cars to achieve an advantage today and confidently conquer tomorrow. Brium Fleet Management handles fleet activities on
      your behalf, reducing your burden and freeing up time to spend on strategic matters. Managing your fleet day to day is
      hard enough but how exactly do we do it at Brium?
    </SubCaption>
    <SubCaption>
      We will prove it to you. With hands-on management and the infrastructure and expertise of Enterprise, we will show you
      how far an exceptional fleet program can take you and your organization while saving you thousands. we keep an eye out
      for whats on the way – and how to make the most of it. We strive to provide service which exceeds client expectations. We
      are committed to helping you manage costs, making administering the fleet simple, taking care of drivers - increasing
      productivity and satisfaction, and delivering measurable results. With an unrivaled investment in tools and technologies and
      a relentless commitment to collaboration, we don’t just enable success - we empower extraordinary fleet performance.
      When a driver on our fleet system have problems or questions about their vehicles, our Driver Services Center gets them
      the right answers from our corporate Office or from our Service office – thoroughly, courteously, and efficiently.
    </SubCaption>
    <SubCaption>
      Brium offers two classes of Fleet management service.
    </SubCaption>
    <List>
      <li><Link to="/individual">Signup as an Individual</Link></li>
      <li><Link to="/corporate">Signup as a corporate</Link></li>
    </List>
    </DetailContainer>
);

const FleetManagementPage = () => (
  <Layout>
    <MainContainer id="content">
      <TopBanner imageName="main_bg.png">
        {/* <Nav /> */}
        <MainContent>
          <Title>Brium Fleet Management</Title>
          <Caption>
            Brium Fleet Management is a company that manages vehicles for individuals or organizations using a model of monthly returns to the owners of the vehicles.
          </Caption>
            <LinkButton
                href="/individual"
                rel="nofollow noopener noreferrer">
                REGISTER AS INDIVIDUAL
            </LinkButton>  
            <LinkButton
                href="/corporate"
                rel="nofollow noopener noreferrer">
                REGISTER AS CORPORATE
            </LinkButton> 
        </MainContent>
        </TopBanner>
            {renderDescription()}
    </MainContainer>
  </Layout>
);

export default FleetManagementPage;