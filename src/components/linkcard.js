/* eslint-disable import/no-cycle */
import React from 'react';
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
  font-size: 22px;
`;

const Caption = styled.p`
  font-size: 14px;
  font-family: ${fonts.CircularStd};
  color: ${colors.white};
  ${media.bigDesktop`font-size: 13px;`};
  ${media.phablet`font-size: 13px;`};
  margin: 10px 0 15px 0;
  line-height: 130%;
  color: ${colors.darkGrey};
  opacity: 0.8;
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

const InputContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 7fr;
  svg {
    width: 12px;
    height: 12px;
    fill: #000000;
    margin-left: 3px;
  }
`;

const LinkCard = () => {
  return (
    <div>
      <SubTitle>Get a link to download the app.</SubTitle>
      <Caption>
        Input your number below and get a link to download the Brium app.{' '}
      </Caption>
      <InputContainer>
        <ExtDropDown>+234</ExtDropDown>
        <Input
          type="phone"
          placeholder="Phone Number"
          border="1px solid transparent"
          margin="20px"
        />
      </InputContainer>
      <Terms>
        By clicking this checkbox you agree to Brium’s{' '}
        <Link to="/term-of-use">Terms of Use</Link> and{' '}
        <Link to="/privacy-policy">Privacy Policy</Link>
      </Terms>
      <Button>
        GET IT NOW
        <IconArrow />
      </Button>
    </div>
  );
};

export default LinkCard;
