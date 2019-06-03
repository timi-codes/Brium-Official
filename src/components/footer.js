import React from 'react';
import {
  FormattedIcon,
  IconLogo,
  IconGooglePlay,
  IconAppStore,
  IconSupport,
  IconLocation
} from '@components/icons';
import { socialMedia, downloadLink } from '@config';
import styled from 'styled-components';
import { theme, mixins, Divider, media } from '@styles';
import { Link } from 'gatsby';
import AnchorLink from 'react-anchor-link-smooth-scroll';

const { colors, fontSizes } = theme;

const FooterContainer = styled.footer`
  display: grid;
  grid-template-columns: 2fr 3fr;
  grid-template-rows: auto 2fr repeat(2, auto);
  background: ${colors.blue};
  color: white;
  height: auto;
  min-height: 200px;
  padding-top: 65px;
  grid-column-gap: 2rem;
  ${media.phablet`
    padding: 20px 25px 0 25px;
    grid-template-rows: auto 2fr auto auto repeat(2, auto);
  `};
`;

const LogoLink = styled(Link)`
  width: 180px;
  height: auto;
  svg {
    fill: none;
    transition: ${theme.transition};
    user-select: none;
  }
  grid-column: 1 / 2;
  grid-row: 1 / 2;
  padding-left: 80px;
  margin-bottom: 20px;
  ${media.phablet`
    width: 100px;
    margin-bottom: 0;
    padding-left:0;
  `};
`;

const OtherInfo = styled.div`
  grid-column: 1 / 2;
  grid-row: 2 / 3;
  margin-left: 80px;
  margin-top: 30px;
  text-align: center;
  & > span {
    display: flex;
    align-items: center;
    font-size: ${fontSizes.medium};
    ${media.phablet`
    margin-top: 0;
    font-size: ${fontSizes.small};
  `};
  }
  svg {
    display: inline-block;
    height: 30px;
    width: auto;
    margin-right: 20px;
    ${media.phablet`
      height: 20px;
      margin-right: 0px;
      margin-top: 0px;
  `};
  }
  ${media.phablet`
    grid-column: 2 / 3;
    grid-row: 1 / 2;
    font-size: ${fontSizes.small};
  `};
`;

const OtherLinksContainer = styled.div`
  grid-column: 2 / -1;
  grid-row: 2 / 3;
  flex-direction: row;
  ${mixins.flexBetween};
  padding-right: 80px;
  margin-bottom: 90px;
  ${media.phablet`
   grid-column: 1 / -1;
   grid-row: 2 / 3;
   padding-right: 0;
   margin-bottom: 20px;
   margin-top: 40px;
  `};
`;

const OtherLinkCategoryText = styled.h3`
  color: ${colors.white};
  text-transform: uppercase;
  font-size: ${fontSizes.large};
  font-weight: 800;
`;

const LinkSection = styled.div`
  flex-direction: column;
  ${mixins.flexBetween};
  color: ${colors.slate};
  &:nth-child(2) {
    align-items: flex-end;
  }
  &:nth-child(2) > li {
    align-items: flex-end;
  }
`;

const OtherLinksList = styled.li`
  flex-direction: column;
  ${mixins.flexBetween};
`;

const OtherLink = styled(AnchorLink)`
  padding: 10px 0;
  ${mixins.footerLink};
  font-size: ${fontSizes.medium};
`;

const SocialContainer = styled.div`
  grid-column: 1/2;
  grid-row: 4 / -1;
  margin: auto 60px;
  ${media.phablet`
  grid-column: 1 / -1;
  grid-row: 4 / 5;
  width: 100%
  margin:0;
  `};
`;

const SocialLink = styled.a`
  svg {
    width: 20px;
    height: 20px;
  }
`;

const DownloadStoreContainer = styled.div`
  margin: 150px 0 0 80px;
  grid-column: 1 / 2;
  grid-row: 2 / 2;
  width: 100%;
  ${media.tablet`
    display:flex;
    flex-direction: column;
  `};
  ${media.phablet`
     grid-column: 1 / -1;
    grid-row: 3 / 4;
    margin: 0 auto;
    justify-content: space-between;
    margin-bottom: 30px
  `};
`;

const DowloadLink = styled.a`
  width: 160px;
  margin-right: 15px;
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
  ${media.tablet`
   display: flex;
   flex-direction: column;
  `};
  ${media.phablet`
  flex-direction: row;
  justify-content: space-between;
  `};
`;

const HorizontalItemList = styled.ul`
  ${mixins.flexBetween};
  grid-column: 2/-1;
  grid-row: 4 / -1;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  margin: 20px 0;
  ${media.phablet`
    grid-column: 1 / -1;
    grid-row: 6 / 7;
    width: 100%;
  `};
`;

const FooterAllList = styled.ul`
  ${mixins.flexBetween};
  grid-column: 2/-1;
  grid-row: 4 / -1;
  justify-content: space-around;
  align-items: center;
  margin: 20px 0;
  ${media.phablet`
    grid-column: 1 / -1;
    grid-row: 6 / 7;
    width: 100%;
  `};
`;

const FooterList = styled.li`
  padding: 15px;
`;

const FooterLink = styled(AnchorLink)`
  ${mixins.footerLink};
  font-size: ${fontSizes.small};
`;

const Footer = () => (
  <FooterContainer>
    <LogoLink>
      <IconLogo />
    </LogoLink>
    <OtherInfo>
      <span>
        <IconLocation />
        <span>Help Center</span>
      </span>
      <span>
        <IconSupport />
        <span>Abuja, Nigeria</span>
      </span>
    </OtherInfo>
    <OtherLinksContainer>
      <LinkSection>
        <OtherLinkCategoryText>Ride</OtherLinkCategoryText>
        <OtherLinksList>
          <OtherLink>How it works</OtherLink>
          <OtherLink>Get a Brium</OtherLink>
          <OtherLink href="/fare-estimator">Fare Estimator</OtherLink>
          <OtherLink>Drive with us</OtherLink>
          <OtherLink>Partner with us</OtherLink>
        </OtherLinksList>
      </LinkSection>
      <LinkSection>
        <OtherLinkCategoryText>Discover</OtherLinkCategoryText>
        <OtherLinksList>
          <OtherLink>Our Cities</OtherLink>
          <OtherLink>Press/Blog</OtherLink>
          <OtherLink>Careers</OtherLink>
          <OtherLink>Our Engineering</OtherLink>
        </OtherLinksList>
      </LinkSection>
    </OtherLinksContainer>
    <DownloadStoreContainer>
      <DownloadItemList>
        {downloadLink &&
          downloadLink.map(({ name, url }) => (
            <li key={name}>
              <DowloadLink
                href={url}
                target="_blank"
                rel="nofollow noopener noreferrer"
                arial-label={name}
              >
                {name === 'Google' ? <IconGooglePlay /> : <IconAppStore />}
              </DowloadLink>
            </li>
          ))}
      </DownloadItemList>
    </DownloadStoreContainer>
    <SocialContainer>
      <HorizontalItemList>
        {socialMedia &&
          socialMedia.map(({ name, url }) => (
            <li key={name}>
              <SocialLink
                href={url}
                target="_blank"
                rel="nofollow noopener noreferrer"
                arial-label={name}
              >
                <FormattedIcon name={name} />
              </SocialLink>
            </li>
          ))}
      </HorizontalItemList>
    </SocialContainer>
    <Divider />
    <FooterAllList>
      <FooterList key="terms">
        <FooterLink to="/terms" aria-label="Terms">
          Terms
        </FooterLink>
      </FooterList>
      <FooterList key="terms">
        <FooterLink to="/privacy" aria-label="Privacy">
          Privacy
        </FooterLink>
      </FooterList>
      <FooterList key="terms">
        <FooterLink to="/" aria-label="Home">
          ©2019 Brium
        </FooterLink>
      </FooterList>
    </FooterAllList>
  </FooterContainer>
);

export default Footer;
