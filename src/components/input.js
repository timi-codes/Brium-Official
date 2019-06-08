import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { theme } from '@styles';

const { colors, fonts, fontSizes } = theme;

const InputField = styled.input`
  font-size: ${fontSizes.medium};
  line-height: 24px;
  margin-top: 20px;
  border: none;
  border-radius: ${props => (props.border ? props.border : `none`)};
  background: ${colors.neutral};
  flex: 1 1 auto;
  -webkit-flex: 1;
  -ms-flex: 1;
  padding: 14px 15px;
  font-family: ${fonts.CircularStd};
  width: 100%;
`;

const Input = props => <InputField {...props} />;

Input.propTypes = {
  props: PropTypes.objectOf(PropTypes.object).isRequired
};

export default Input;
