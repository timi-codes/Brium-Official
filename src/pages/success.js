import React from 'react';
import { Link } from 'gatsby';
import { Image } from '@components';
import styled from 'styled-components';
import { theme, mixins, media, Main, GlobalStyle } from '@styles';

const { colors, fonts } = theme;

const MainContainer = styled(Main)`
  ${mixins.flexCenter};
  flex-direction: column;
  height: 100vh !important;
`;

const Subtitle = styled.h2`
  font-size: 1.5vw;
  font-weight: 800;
  font-family: ${fonts.CircularStd};
  margin-top: 30px;
  color: ${colors.blue};
  ${media.bigDesktop`font-size: 50px;`};
  ${media.phablet`font-size: 21px;`};
`;

const Caption = styled.p`
  font-size: 1.1vw;
  font-family: ${fonts.Lato};
  color: ${colors.black};
  max-width: 30%;
  text-align: center;
  font-weight: bold;
  ${media.bigDesktop`font-size: 30px; max-width: 50%`};
  ${media.phablet`font-size: 15px; max-width: 75%`};
`;

const HomeButton = styled(Link)`
  ${mixins.bigButton};
  margin-top: 20px;
`;

const SuccessPage = () => (
  <MainContainer id="content">
    <GlobalStyle />
    <Image filename="success.png" alt="success" />
    <Subtitle>APPLICATION WAS SUBMITTED</Subtitle>
    <Caption>
        We have received your application, we will contact you on the next step.
    </Caption>
    <HomeButton to="/">Go Home</HomeButton>
  </MainContainer>
);

export default SuccessPage;
