import React from 'react';
import {
  Layout,
  FaqSection,
  TopBanner,
  Nav,
  RegisterCard,
  BasicSection,
  RequireSection,
} from '@components';
import { downloadLink } from '@config';
import { IconGooglePlay, IconAppStore } from '@components/icons';
import styled from 'styled-components';
import { theme, media, Main } from '@styles';

const { colors, fonts, fontSizes } = theme;

const MainContainer = styled(Main)`
  ${'' /* ${mixins.sidePadding}; */}
`;

const LeftContent = styled.div`
  grid-area: main;
  padding-left: 90px;
  ${media.tablet`
    margin: 0;
    grid-column: 1/-1;
    text-align: center;
    padding: 0px 40px;
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
  ${'' /* position: relative; */}
  z-index: 20000000000 !important;
  ${media.tablet`
    display: none;
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
  ${media.phablet`
    font-size: 31px;
  `};
  ${media.phone`
    font-size: 28px;
  `};
`;

const HeaderOne = styled.h2`
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
  font-size: 1.5vw;
  font-family: ${fonts.CircularStd};
  color: ${colors.offWhite};
    margin-top: 50px;
  ${media.bigDesktop`font-size: 13px;`};
  ${media.phablet`
  font-size: 15px;
  `};
  margin-top: 2rem;
  line-height: 130%;
  max-width: 82%;
`;

const DownloadLink = styled.a`
  width: 160px;
  margin-right: 32px;
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
  justify-content: start;
  margin-top: 4rem;
  ${media.tablet`
   display: flex;
   flex-direction: column;
  `};
  ${media.phablet`
    flex-direction: row;
    justify-content: space-between;
  `};
`;

const IndexPage = () => (
  <Layout>
    <MainContainer id="content">
      <TopBanner>
        <Nav />
        <LeftContent>
          <Title>Become a driver and start earning.</Title>
          <Caption>
            Brium offers the best and affordable ride hailing service in the country. Our core aim is to spread happiness throughout your ride with us. 
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
        </LeftContent>
        <CardView>
          <RegisterCard title="Sign up to become driver" />
        </CardView>
      </TopBanner>
      <BasicSection/>
      <RequireSection title="Driving Requirements"/>
      <DriveNowSession>

      </DriveNowSession>
      <FaqSection />
    </MainContainer>
  </Layout>
);

export default IndexPage;
