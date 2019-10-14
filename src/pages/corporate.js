import React from 'react';
import {
  Layout,
  TopBanner,
} from '@components';
import styled from 'styled-components';

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
  max-width: 50%;
  text-align: center;
  margin: 40px auto;
  line-height: 140%;
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


const SubCaption = styled.p`
  font-size: 20px;
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
  span{
    color: ${colors.blue};
  }
`;

const List = styled.div`
    font-size: 20px;
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
        margin: 30px 0px;
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


const renderDescription = () => (
    <DetailContainer>
        <SubCaption>
            A successful fleet management program boosts your company’s well-being with:
        </SubCaption>
    <List>
      <li>Lowered costs, greater returns—by limiting inefficient business practices such as excessive idling or out-of-the-way
        travel routes, your company can reduce fuel consumption and increase productivity.</li>
      <li>Increased overall business efficiency—the positive results from having a well-run fleet can overflow into other areas of
              your company as well. Regular vehicle maintenance can lead to reduced instances of costly vehicle breakdowns that
              cut into your company’s overall annual budget.
        </li>
        <li>
            Improved employee happiness—an impartial structure and established company policies applied fairly and accurately
                across all levels of employee under your company’s fleet structure leads to increased employee satisfaction with the
                company and with their own jobs.
        </li>
        <li>
            Strengthened corporate peace-of-mind—a good fleet management program reassures your decision-making boards
            that your company is maximizing its successes and minimizing its risks. 
        </li>
        </List>
        <SubCaption>
            From smooth running operations to Safety and security measures in place, Brium is determined to keep your cost of fleet
            maintenance well managed as well as your asset safe and secured at all times.
        </SubCaption>
        <SubCaption>
            If you have further questions, call <span>0809 274 8664</span> or visit the Brium Office <span>(Plot 307 Ahmadu Bello Way STE 533 Kado Abuja
            Nigeria)</span>
        </SubCaption>
    </DetailContainer>
);


const FleetManagementPage = () => (
  <Layout>
    <MainContainer id="content">
      <TopBanner imageName="main_bg.png">
        {/* <Nav /> */}
        <MainContent>
          <Title>Corporate Fleet Management Service</Title>
          <Caption>
            We provide comprehensive fleet management services for your organization and supporting your efforts to improve the
            efficiency of your fleet and help with day to day running of your business. We are confident that we can meet the
            challenges ahead, and stand ready to partner with you in delivering an effective Fleet Management support solution.</Caption>
            <RegisterLink
                href="/corp-signup"
                rel="nofollow noopener noreferrer">
                REGISTER NOW
            </RegisterLink>  
        </MainContent>
        </TopBanner>
            {renderDescription()}
    </MainContainer>
  </Layout>
);

export default FleetManagementPage;