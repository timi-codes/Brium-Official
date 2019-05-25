import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { theme } from '@styles';

const { colors, fonts, fontSizes } = theme;

const InputField = styled.input`
  font-size: ${fontSizes.medium};
  line-height: 24px;
  border: none;
  background: ${colors.neutral};
  flex: 1 1 auto;
  -webkit-flex: 1;
  -ms-flex: 1;
  padding: 12px 15px;
  font-family: ${fonts.CircularStd};
`;

const Input = ({ type, placeholder }) => (
  <InputField type={type} placeholder={placeholder} />
);

Input.propTypes = {
  placeholder: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired
};

export default Input;
