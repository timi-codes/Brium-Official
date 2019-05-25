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
import { theme, mixins } from '@styles';
import { Link } from 'gatsby';
import AnchorLink from 'react-anchor-link-smooth-scroll';

const { colors, fontSizes } = theme;

const FooterContainer = styled.footer`
  ${mixins.flexCenter};
  flex-direction: column;
  background: ${colors.blue};
  color: white;
  height: auto;
  min-height: 200px;
  text-align: center;
`;

const LogoLink = styled(Link)`
  width: 100px;
  height: auto;
  align-self: center;
  svg {
    fill: none;
    transition: ${theme.transition};
    user-select: none;
  }
`;

const OtherInfo = styled.div`
  flex-direction: column;
  ${mixins.flexBetween};

  margin-top: 10px;

  & > span {
    display: inline-flex;
    align-items: center;
    margin: 2px 7px;
    font-size: ${fontSizes.small};
  }
  svg {
    display: inline-block;
    height: 20px;
    width: auto;
    margin-right: 5px;
  }
`;

const OtherLinksContainer = styled.div`
  flex-direction: row;
  ${mixins.flexBetween};
  width: 90%;
  margin: 20px auto;
`;

const OtherLinkCategoryText = styled.h3`
  color: ${colors.white};
  text-transform: uppercase;
  font-size: ${fontSizes.large};
  font-weight: 800;
  padding: 0 10px;
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
  padding: 10px;
  ${mixins.footerLink};
  font-size: ${fontSizes.medium};
`;

const SocialContainer = styled.div`
  width: 100%;
  max-width: 290px;
  margin: 0 auto 10px;
`;

const SocialLink = styled.a`
  padding: 10px;
  svg {
    width: 20px;
    height: 20px;
  }
`;

const DownloadStoreContainer = styled.div`
  width: 100%;
  max-width: 350px;
  margin: 0 auto 10px;
`;

const DowloadLink = styled.a`
  padding: 10px;
`;

const HorizontalItemList = styled.ul`
  ${mixins.flexBetween};
  width: 100%;
`;

const Divider = styled.div`
  height: 1px;
  width: 100%;
  background-color: ${colors.offWhite};
`;

const FooterList = styled.li`
  padding: 15px;
  flex-basis: 33.3%;
`;

const FooterLink = styled(AnchorLink)`
  padding: 5px;
  ${mixins.footerLink};
  font-size: ${fontSizes.small};
`;

const Footer = () => (
  <FooterContainer>
    <OtherLinksContainer>
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
    </OtherLinksContainer>
    <OtherLinksContainer>
      <LinkSection>
        <OtherLinkCategoryText>Ride</OtherLinkCategoryText>
        <OtherLinksList>
          <OtherLink>How it works</OtherLink>
          <OtherLink>Get a Brium</OtherLink>
          <OtherLink>Fare Estimator</OtherLink>
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
      <HorizontalItemList>
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
      </HorizontalItemList>
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
    <HorizontalItemList>
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
    </HorizontalItemList>
  </FooterContainer>
);

export default Footer;
