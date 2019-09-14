import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { theme } from '@styles';
import { IconArrowDown } from '@components/icons';

const { colors, fonts } = theme;

const ExtensionContainer = styled.div`
  font-size: 15px;
  border: none;
  border-radius: ${props => (props.border ? props.border : `none`)};
  background: ${colors.neutral};
  color: ${colors.darkGrey};
  flex: 1 1 auto;
  -webkit-flex: 1;
  margin-top: 20px;
  -ms-flex: 1;
  padding: 15px 0 15px 15px;
  font-family: ${fonts.CircularStd};
  font-weight: 600;
  display: flex;
  flex-direction: row;
  align-items: center;
  svg {
    margin-left: 10px;
  }
  svg path {
    fill: ${colors.darkGrey} !important;
  }
`;

const ExtDropDown = ({ children }) => (
  <ExtensionContainer>
    {children}
    <IconArrowDown />
  </ExtensionContainer>
);

ExtDropDown.propTypes = {
  children: PropTypes.string.isRequired
};

export default ExtDropDown;
