/* eslint-disable jsx-a11y/mouse-events-have-key-events */
/* eslint-disable import/no-cycle */
import React, { Component } from 'react';
import Helmet from 'react-helmet';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { Link } from 'gatsby';
import { throttle } from '@utils';
import { navLinks, navHeight } from '@config';
import { Menu, NavDropDown } from '@components';
import { IconLogo, IconArrowDown } from '@components/icons';
import styled from 'styled-components';
import { theme, mixins, media } from '@styles';

const { colors, fontSizes, fonts } = theme;

const NavContainer = styled.header`
  ${mixins.flexBetween};
  align-items: center;
  position: fixed;
  z-index: 10;
  top: 0;
  transition: ${theme.transition};
  width: 100%;
  background-color: ${props =>
    props.scrollDirection === 'none' && !props.showBg
      ? `transparent`
      : `${colors.blue}`};
  filter: none !important;
  pointer-events: auto !important;
  user-select: auto !important;
  grid-area: header;
  height: ${props =>
    props.scrollDirection === 'none' ? theme.navHeight : theme.navScrollHeight};
  transform: translateY(
    ${props =>
      props.scrollDirection === 'down' ? `-${theme.navScrollHeight}` : '0px'}
  );
`;

const Navbar = styled.nav`
  ${mixins.flexBetween};
  flex-direction: row;
  position: relative;
  width: 100%;
  color: ${colors.slate};
  font-family: ${fonts.CircularStd};
  align-items: center;
  padding: 0 40px;
  z-index: 12;
  ${media.tablet`
    padding: 0 30px;
  `};
`;

const Logo = styled.div`
  ${mixins.flexCenter};
`;

const LogoLink = styled(Link)`
  color: ${colors.white};
  width: 100px;
  height: auto;
  &:hover,
  &:focus {
    svg {
      fill: ${colors.offWhite};
    }
  }
  svg {
    fill: none;
    transition: ${theme.transition};
    user-select: none;
  }
`;

const Hamburger = styled.div`
  ${mixins.flexCenter};
  overflow: visible;
  cursor: pointer;
  transition-timing-function: linear;
  transition-duration: 0.15s;
  transition-property: opacity, filter;
  text-transform: none;
  color: inherit;
  border: 0;
  background-color: transparent;
  display: none;
  ${media.tablet`display: flex;`};
`;

const HamburgerBox = styled.div`
  position: relative;
  display: inline-block;
  width: ${theme.hamburgerWidth}px;
  height: 24px;
`;

const HamburgerInner = styled.div`
  background-color: ${colors.white};
  position: absolute;
  width: ${theme.hamburgerWidth}px;
  height: 2.5px;
  border-radius: ${theme.borderRadius};
  top: 50%;
  left: 0;
  right: 0;
  transition-duration: 0.22s;
  transition-property: transform;
  transition-delay: ${props => (props.menuOpen ? `0.12s` : `0s`)};
  transform: rotate(${props => (props.menuOpen ? `225deg` : `0deg`)});
  transition-timing-function: cubic-bezier(
    ${props =>
      props.menuOpen ? `0.215, 0.61, 0.355, 1` : `0.55, 0.055, 0.675, 0.19`}
  );

  &:before,
  &:after {
    content: '';
    display: block;
    background-color: ${colors.white};
    position: absolute;
    left: auto;
    right: 0;
    width: ${theme.hamburgerWidth}px;
    height: 2.5px;
    transition-timing-function: ease;
    transition-duration: 0.15s;
    transition-property: transform;
    border-radius: 4px;
  }
  &:before {
    width: ${props => (props.menuOpen ? `100%` : `120%`)};
    top: ${props => (props.menuOpen ? `0` : `-10px`)};
    opacity: ${props => (props.menuOpen ? 0 : 1)};
    transition: ${props =>
      props.menuOpen ? theme.hamBeforeActive : theme.hamBefore};
  }
  &:after {
    width: ${props => (props.menuOpen ? `100%` : `80%`)};
    bottom: ${props => (props.menuOpen ? `0` : `-10px`)};
    transform: rotate(${props => (props.menuOpen ? `-90deg` : `0`)});
    transition: ${props =>
      props.menuOpen ? theme.hamAfterActive : theme.hamAfter};
  }
`;

const NavLinks = styled.div`
  ${mixins.flexBetween};
  align-items: center;
  flex-basis: 87%;
  ${media.tablet`display: none;`};
`;

const NavList = styled.ul`
  div {
    ${mixins.flexBetween};
    flex-direction: row;
    margin-left: 10px;
  }
`;

const NavTitle = styled.a`
  display: flex;
  align-items: center;
  padding: 12px 10px;
  svg {
    margin-left: 10px;
  };
`;

const NavListItem = styled.li`
  margin: 0 5px;
  position: relative;
  font-size: ${fontSizes.medium};
  svg {
    width: 10px;
    height: 10px;
    transition: ${theme.transition};
    user-select: none;
  }
`;

const SignInLink = styled.a`
  font-size: ${fontSizes.medium};
  text-align: center;
  margin: 0 30px;
`;

const PartnerLink = styled.a`
  margin-left: 10px;
  font-size: ${fontSizes.smallish};
  padding: 15px 30px;
  background: ${props =>
    props.primaryBtn ? `${colors.white}` : `transparent`};
  border: ${props => (props.primaryBtn ? `none` : `1.5px solid white`)};
  color: ${props => (props.primaryBtn ? `${colors.blue}` : `${colors.white}`)};
  font-weight: 600;
  border-radius: ${theme.borderRadius};
  &:hover {
    color: ${props =>
      props.primaryBtn ? `${colors.blue}` : `${colors.white}`};
  }
`;

const DELTA = 5;

class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isMounted: false,
      menuOpen: false,
      scrollDirection: 'none',
      lastScrollTop: 0,
      lists: [
        {
          name: 'dvdmvdv'
        }
      ],
      showBackground: props.showBg,
      primaryBtn: props.primaryBtn
    };
  }

  componentDidMount() {
    setTimeout(() => this.setState({ isMounted: true }), 100);

    window.addEventListener('scroll', () => throttle(this.handleScroll()));
    window.addEventListener('resize', () => throttle(this.handleResize()));
    window.addEventListener('keydown', e => this.handleKeydown(e));
    window.removeEventListener('click', this.close);
  }

  componentWillUnmount() {
    this.setState({ isMounted: false });

    window.removeEventListener('scroll', () => this.handleScroll());
    window.removeEventListener('resize', () => this.handleResize());
    window.removeEventListener('keydown', e => this.handleKeydown(e));
  }

  toggleMenu = () => {
    const { menuOpen } = this.state;
    this.setState({ menuOpen: !menuOpen });
  };

  handleScroll = () => {
    const { isMounted, menuOpen, scrollDirection, lastScrollTop } = this.state;
    const fromTop = window.scrollY;

    // Make sure they scroll more than DELTA
    if (!isMounted || Math.abs(lastScrollTop - fromTop) <= DELTA || menuOpen) {
      return;
    }

    if (fromTop < DELTA) {
      this.setState({ scrollDirection: 'none' });
    } else if (fromTop > lastScrollTop && fromTop > navHeight) {
      if (scrollDirection !== 'down') {
        this.setState({ scrollDirection: 'down' });
      }
    } else if (fromTop + window.innerHeight < document.body.scrollHeight) {
      if (scrollDirection !== 'up') {
        this.setState({ scrollDirection: 'up' });
      }
    }

    this.setState({ lastScrollTop: fromTop });
  };

  handleResize = () => {
    const { menuOpen } = this.state;
    if (window.innerWidth > 768 && menuOpen) {
      this.toggleMenu();
    }
  };

  handleKeydown = e => {
    const { menuOpen } = this.state;
    if (!menuOpen) {
      return;
    }

    if (e.which === 27 || e.key === 'Escape') {
      this.toggleMenu();
    }
  };

  render() {
    const {
      isMounted,
      menuOpen,
      scrollDirection,
      lists,
      showBackground,
      primaryBtn
    } = this.state;

    return (
      <NavContainer scrollDirection={scrollDirection} showBg={showBackground}>
        <Helmet>{/* <body className={menuOpen ? 'blur' : ''} /> */}</Helmet>
        <Navbar>
          <TransitionGroup>
            {isMounted && (
              <CSSTransition classNames="fade" timeout={3000}>
                <Logo>
                  <LogoLink to="/" aria-label="Home">
                    <IconLogo />
                  </LogoLink>
                </Logo>
              </CSSTransition>
            )}
          </TransitionGroup>
          <TransitionGroup>
            {isMounted && (
              <CSSTransition classNames="fade" timeout={3000}>
                <Hamburger onClick={this.toggleMenu}>
                  <HamburgerBox>
                    <HamburgerInner menuOpen={menuOpen} />
                  </HamburgerBox>
                </Hamburger>
              </CSSTransition>
            )}
          </TransitionGroup>
          <NavLinks>
            <NavList>
              <TransitionGroup>
                {isMounted &&
                  navLinks &&
                  navLinks.map(({ url, name, sublist }, i) => {
                    return (
                      <div>
                        <NavListItem
                          key={name}
                          style={{ transitionDelay: `${i * 100}ms` }}
                        >
                          <div>
                            <NavTitle href={url}>
                              <span>{name}</span>
                              <IconArrowDown />
                            </NavTitle>
                          </div>
                        </NavListItem>
                      </div>
                    );
                  })}
              </TransitionGroup>
              <NavDropDown list={lists} />
            </NavList>
            <TransitionGroup>
              {isMounted && (
                <CSSTransition classNames="fadedown" timeout={3000}>
                  <div style={{ transitionDelay: `600ms` }}>
                    <SignInLink
                      href="/signin"
                      rel="nofollow noopener noreferrer"
                    >
                      Sign In
                    </SignInLink>
                    <PartnerLink
                      href="/partner"
                      rel="nofollow noopener noreferrer"
                      primaryBtn={primaryBtn}
                    >
                      Become a partner
                    </PartnerLink>
                  </div>
                </CSSTransition>
              )}
            </TransitionGroup>
          </NavLinks>
        </Navbar>

        <Menu menuOpen={menuOpen} toggleMenu={this.toggleMenu} />
      </NavContainer>
    );
  }
}

export default Nav;
