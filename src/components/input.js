import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { theme } from '@styles';

const { colors, fonts, fontSizes } = theme;

const InputField = styled.input`
  font-size: ${fontSizes.medium};
  line-height: 24px;
  margin-top: ${props => (props.margin ? props.margin : `0`)};
  border: ${props => (`${props.border}` ? props.border : `none`)};
  border-radius: ${props => (props.borderRadius ? props.borderRadius : `0px`)};
  background: ${colors.neutral};
  padding: 14px 15px;
  font-family: ${fonts.CircularStd};
  width: 100%;
`;

const Input = props => {
  const { name, description } = props;
  console.log(props);
  return (
    <label>
      {name}
      {description && <span>{description}</span>}
      <InputField {...props} />
    </label>
  );
};

Input.propTypes = {
  props: PropTypes.objectOf(PropTypes.object).isRequired
};

export default Input;
