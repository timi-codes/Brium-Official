import React from 'react';
import PropTypes from 'prop-types';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { mobileLinks } from '@config';
import styled from 'styled-components';
import { theme, mixins, media, Divider } from '@styles';

const { colors, fontSizes, fonts } = theme;

const MenuContainer = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 100vh;
  z-index: 10;
  outline: 0;
  transition: ${theme.transition};
  transform: translateX(${props => (props.menuOpen ? 0 : -100)}%);
  visibility: ${props => (props.menuOpen ? 'visible' : 'hidden')};
  display: none;
  ${media.tablet`display: block;`};
  overflow-y: scroll;
`;

const Sidebar = styled.div`
  ${mixins.flexCenter};
  flex-direction: column;
  background-color: ${colors.blue};
  padding: 60px;
  width: 100%;
  height: 100%
  position: relative;
  right: 0;
  margin-left: auto;
  margin-top: 30px;
  font-family: ${fonts.CircularStd};
  ${media.thone`padding: 40px;`};
  ${media.tiny`padding: 40px;`};
`;

const NavLinks = styled.nav`
  width: 100%;
  flex-direction: column;
  text-align: center;
`;

const NavList = styled.ol`
  width: 100%;
`;

const NavListItem = styled.li`
  margin: 0 auto 20px;
  position: relative;
  font-size: ${fontSizes.large};
  ${media.thone`
    margin: 0 auto 10px;
    font-size: ${fontSizes.medium};
  `};
  ${media.tiny`font-size: ${fontSizes.smallish};`};
`;

const NavLink = styled(AnchorLink)`
  ${mixins.link};
  padding: 15px 20px;
`;

const PartnerLink = styled.a`
  margin-left: 10px;
  font-size: ${fontSizes.smallish};
  padding: 15px 33px;
  background-color: white;
  border: 1px solid white;
  color: ${colors.blue};
  font-weight: 600;
  border-radius: ${theme.borderRadius};
  margin-bottom: 15px;
`;

const SignInLink = styled.a`
  margin-left: 10px;
  font-size: ${fontSizes.smallish};
  padding: 15px 33px;
  border: 1px solid white;
  font-weight: 600;
  border-radius: ${theme.borderRadius};
  width: 172px;
  text-align: center;
  margin-bottom: 20px;
`;

const Menu = ({ menuOpen, toggleMenu }) => {
  const handleMenuClick = e => {
    const { target } = e;
    const isLink = target.hasAttribute('href');
    const isNotMenu =
      target.classList && target.classList[0].includes('MenuContainer');

    if (isLink || isNotMenu) {
      toggleMenu();
    }
  };

  return (
    <MenuContainer
      menuOpen={menuOpen}
      onClick={handleMenuClick}
      aria-hidden={!menuOpen}
      tabIndex={menuOpen ? 1 : -1}
    >
      <Sidebar>
        <PartnerLink
          href="/"
          target="_blank"
          rel="nofollow noopener noreferrer"
        >
          Become a partner
        </PartnerLink>
        <SignInLink href="/" target="_blank" rel="nofollow noopener noreferrer">
          Driver Sign In
        </SignInLink>
        <Divider />
        <NavLinks>
          <NavList>
            {mobileLinks &&
              mobileLinks.map(({ url, name }, i) => (
                <NavListItem key={name}>
                  {i === 3 ? <Divider /> : ''}
                  <NavLink href={url}>{name}</NavLink>
                </NavListItem>
              ))}
          </NavList>
        </NavLinks>
      </Sidebar>
    </MenuContainer>
  );
};

Menu.propTypes = {
  menuOpen: PropTypes.bool.isRequired,
  toggleMenu: PropTypes.func.isRequired
};

export default Menu;
