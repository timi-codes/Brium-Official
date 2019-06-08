import React from 'react';
import styled from 'styled-components';
import { mixins, theme, Button } from '@styles';
import { IconArrow } from '@components/icons';

const { colors } = theme;

const ButtonWrapper = styled(Button)`
  ${mixins.smallButton};
  border-radius: 0 5px 5px 0;
  svg {
    fill: ${colors.darkGrey};
    &:hover,
    &:focus,
    &:active {
      color: rgba(0, 0, 0, 0.5);
      mix-blend-mode: multiply;
    }
  }
  margin-top: 20px;
  min-width: 55px;
`;

const ArrowButton = () => (
  <ButtonWrapper>
    <IconArrow />
  </ButtonWrapper>
);

export default ArrowButton;
