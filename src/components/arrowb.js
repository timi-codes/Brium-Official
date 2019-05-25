import React from 'react';
import styled from 'styled-components';
import { mixins, Button } from '@styles';
import { IconArrow } from '@components/icons';

const ButtonWrapper = styled(Button)`
  ${mixins.smallButton};
`;

const ArrowButton = () => (
  <ButtonWrapper>
    <IconArrow />
  </ButtonWrapper>
);

export default ArrowButton;
