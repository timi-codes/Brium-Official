import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import { theme, mixins, media, Main, GlobalStyle } from '@styles';

const { colors, fonts } = theme;

const MainContainer = styled(Main)`
  ${mixins.flexCenter};
  flex-direction: column;
  height: 100vh !important;
`;

const Title = styled.h1`
  color: ${colors.blue};
  font-family: ${fonts.CircularStd};
  font-size: 10vw;
  font-weight: 800;
  line-height: 1;
  ${media.bigDesktop`font-size: 200px;`}
  ${media.phablet`font-size: 100px;`};
`;
const Subtitle = styled.h2`
  font-size: 1.5vw;
  font-weight: 800;
  font-family: ${fonts.CircularStd};
  margin-top: 30px;
  ${media.bigDesktop`font-size: 50px;`};
  ${media.phablet`font-size: 21px;`};
`;

const Caption = styled.p`
  font-size: 1.1vw;
  font-family: ${fonts.Lato};
  color: ${colors.blueGrey};
  max-width: 30%;
  text-align: center;
  ${media.bigDesktop`font-size: 30px; max-width: 50%`};
  ${media.phablet`font-size: 15px; max-width: 75%`};
`;

const HomeButton = styled(Link)`
  ${mixins.bigButton};
  margin-top: 37px;
`;

const NotFoundPage = () => (
  <MainContainer id="content">
    <GlobalStyle />
    <Title>Oops!</Title>
    <Subtitle>404 - PAGE NOT FOUND</Subtitle>
    <Caption>
      This page you are looking for might have been removed had its name changed
      or its temporarily unavailable
    </Caption>
    <HomeButton to="/">Go Home</HomeButton>
  </MainContainer>
);

export default NotFoundPage;
