/* eslint-disable import/no-cycle */
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { theme, mixins, media } from '@styles';
import { Input, ExtDropDown } from '@components';
import { IconArrow } from '@components/icons';
import { Link } from 'gatsby';

const { colors, fonts } = theme;

const SubTitle = styled.h2`
  font-family: ${fonts.CircularStd};
  font-weight: 600;
  color: ${colors.darkGrey};
  font-size: 20px;
  text-align: center;
`;

const Terms = styled.p`
  font-size: 14px;
  font-family: ${fonts.CircularStd};
  color: ${colors.white};
  ${media.bigDesktop`font-size: 13px;`};
  ${media.phablet`font-size: 13px;`};
  line-height: 130%;
  margin-top: 35px;
  color: ${colors.darkGrey};
  opacity: 0.8;
  a {
    color: ${colors.blue};
  }
  a:hover {
    text-decoration: underline;
  }
`;

const Button = styled(Link)`
  ${mixins.bigButton};
  display: inline-flex;
  margin-top: 15px;
  padding-left: 18px;
  padding-right: 20px;
  svg {
    width: 30px;
    height: 14px;
    margin-left: 7px;
    filter: drop-shadow(0 1px 1px rgba(255, 255, 255, 0.57)) !important;
  }

  svg path {
    fill: ${colors.darkGrey} !important;
  }
`;

const PhoneContainer = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  svg {
    width: 10px;
    height: 10px;
    fill: #000000;
    margin-left: 5px;
  }
`;

const NamesContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 15px;
`;

const CardContainer = styled.div`
  z-index: 200;
`;

const RegisterCard = ({ title }) => {
  return (
    <CardContainer>
      <SubTitle>{title}</SubTitle>
      <NamesContainer>
        <Input
          type="text"
          placeholder="First Name"
          border="1px solid transparent"
          margin="20px"
        />
        <Input
          type="text"
          placeholder="Last Name"
          margin="20px"
          border="1px solid transparent"
        />
      </NamesContainer>
      <Input
        type="email"
        placeholder="Email Address"
        border="0px"
        margin="20px"
      />
      <PhoneContainer>
        <ExtDropDown>+234</ExtDropDown>
        <Input
          type="phone"
          placeholder="Phone Number"
          border="0px"
          margin="20px"
        />
      </PhoneContainer>
      <Input
        type="password"
        placeholder="Password"
        border="0px"
        margin="20px"
      />
      <Input type="text" placeholder="Invite Code" border="0px" margin="20px" />
      <Terms>
        By clicking this checkbox you agree to Brium’s{' '}
        <Link to="/term-of-use">Terms of Use</Link> and{' '}
        <Link to="/privacy-policy">Privacy Policy</Link>
      </Terms>
      <Button>
        SIGN UP NOW
        <IconArrow />
      </Button>
    </CardContainer>
  );
};

RegisterCard.propTypes = {
  title: PropTypes.string.isRequired
};

export default RegisterCard;
