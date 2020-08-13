/* eslint-disable import/no-cycle */
import React from 'react';
import styled from 'styled-components';
import { theme, mixins } from '@styles';
import { Input } from '@components';
import {
  IconArrow,
  IconButtonFacebook,
  IconButtonGoogle
} from '@components/icons';
import { Link } from 'gatsby';

const { colors, fonts } = theme;

const SubTitle = styled.h2`
  font-family: ${fonts.CircularStd};
  font-weight: 600;
  color: ${colors.darkGrey};
  font-size: 20px;
`;

const Button = styled(Link)`
  ${mixins.bigButton};
  display: inline-flex;
  padding-left: 18px;
  padding-right: 20px;
  svg {
    width: 30px;
    height: 14px;
    margin-left: 20px;
    filter: drop-shadow(0 1px 1px rgba(255, 255, 255, 0.57)) !important;
  }

  svg path {
    fill: ${colors.darkGrey} !important;
  }
`;

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const ForgetSection = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 22px;
`;

const ForgetText = styled.a`
  color: ${colors.lightGrey};
  font-size: 14px;
  margin-bottom: 0;
  &:hover {
    text-decoration: underline;
    color: ${colors.lightGrey};
  }
`;

const OrText = styled.h3`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  font-family: ${fonts.CircularStd};
  font-weight: 600;
  color: ${colors.darkGrey};
  font-size: 16px;
  text-align: center;
  margin: 30px 30px;
  &:before {
    content: '';
    position: absolute;
    left: -5px;
    right: -30px;
    width: 40%;
    border-bottom: 2px dotted ${colors.lightNavy};
  }
  &:after {
    content: '';
    position: absolute;
    right: -5px;
    width: 40%;
    border-bottom: 2px dotted ${colors.lightNavy};
  }
`;

const SocialButton = styled(Link)`
  ${mixins.bigButton};
  background-color: transparent;
  padding: 0;
  margin-top: 10px;
  text-align: center;
  width: 230px;
  align-self: center;
`;

const LoginCard = () => {
  return (
    <CardContainer>
      <SubTitle>Sign in to Brium</SubTitle>
      <Input
        type="email"
        placeholder="Email Address or Phone Number"
        borderRadius="0px"
        border="1px solid transparent"
        margin="20px"
      />
      <Input
        type="password"
        placeholder="Password"
        borderRadius="0px"
        border="1px solid transparent"
        margin="20px"
      />
      <ForgetSection>
        <ForgetText>Forgot password?</ForgetText>
        <Button>
          SIGN IN
          <IconArrow />
        </Button>
      </ForgetSection>
      <OrText>OR</OrText>
      <SocialButton>
        <IconButtonFacebook />
      </SocialButton>
      <SocialButton>
        <IconButtonGoogle />
      </SocialButton>
    </CardContainer>
  );
};

export default LoginCard;
