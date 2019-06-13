import React from 'react';
import styled from 'styled-components';
import { theme, media } from '@styles';
import BackgroundImg from './backgroundImage';

const { colors } = theme;

const BannerContainer = styled(BackgroundImg)`
  background-position: center bottom;
  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-template-rows: ${theme.navScrollHeight} 1fr;
  height: auto;
  padding-bottom: 100px;
  grid-template-areas:
    'header header'
    'main   card';
  grid-gap: 5rem;
  background-color: ${colors.blue};
  overflow: none;
  ${media.tablet`
    grid-gap: 2rem;
    padding-bottom: 60px;
  `};
  z-index: 100;
`;

const TopBanner = ({ imageName, children }) => (
  <BannerContainer filename={imageName}>{children}</BannerContainer>
);

export default TopBanner;
