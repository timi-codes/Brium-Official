import React from 'react';
import styled from 'styled-components';
import { theme, mixins } from '@styles';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import PropTypes from 'prop-types';

const { colors, fontSizes } = theme;

const DropDownContainer = styled.div`
  border: 1px solid ${colors.lightNavy};
  border-top: none;
  border-bottom-right-radius: 3px;
  border-bottom-left-radius: 3px;
  background-color: ${colors.white};
  -webkit-box-shadow: 0 2px 5px -1px ${colors.lightNavy};
  box-shadow: 0 2px 5px -1px ${colors.lightNavy};
  font-weight: 600;
  -webkit-overflow-scrolling: touch;
`;

const NavList = styled.ul`
  ${mixins.flexBetween};
`;

const NavListItem = styled.li`
  padding: 10px 10px 10px 5px;
  position: relative;
  font-size: ${fontSizes.smallish};
`;

const NavLink = styled(AnchorLink)`
  padding: 12px 10px;
  color: ${colors.blue};
`;

const NavDropDown = ({ list }) => {
  return (
    <DropDownContainer onClick={e => e.stopPropagation()}>
      {list.map(item => (
        <NavList>
          <NavListItem key={item.name}>
            <NavLink href={item.url}>{item.name}</NavLink>
          </NavListItem>
        </NavList>
      ))}
    </DropDownContainer>
  );
};

NavDropDown.propTypes = {
  list: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired
    })
  ).isRequired
};

export default NavDropDown;
