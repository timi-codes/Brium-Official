/* eslint-disable import/no-cycle */
import React from 'react';
import styled from 'styled-components';
import { theme, mixins, media } from '@styles';
import { Input } from '@components';
import { IconArrow } from '@components/icons';
import { Link } from 'gatsby';

const { colors, fonts } = theme;

const SubTitle = styled.h2`
  font-family: ${fonts.CircularStd};
  font-weight: 600;
  color: ${colors.darkGrey};
  font-size: 20px;
`;

const Caption = styled.p`
  font-size: 13px;
  font-family: ${fonts.CircularStd};
  color: ${colors.white};
  margin-top: 10px;
  ${media.bigDesktop`font-size: 13px;`};
  ${media.phablet`font-size: 13px;`};
  line-height: 130%;
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
  margin-bottom: 26px;
  margin-top: 20px;
  position: relative;
  input{
    margin-top: 0px;
  }
`;

const Divider = styled.div`
  width: 1px;
  position: absolute;
  background-color: ${colors.darkGrey};
  z-index: 2;
  top: 33px;
  left: 22px;
  line-height: 24px;
  font-size: 16px;
  height: 55px;
  &:after {
    content: '';
    position: absolute;
    left: -7px;
    width: 15px;
    height: 15px;
    top: -15px;
    border-radius: 50%;
    border: 3px solid ${colors.slate};
    background-color: ${colors.yellow};
  }
  &:before {
    content: '';
    position: absolute;
    left: -7px;
    width: 15px;
    height: 15px;
    bottom: -10px;
    border-radius: 50%;
    border: 3px solid ${colors.slate};
    background-color: ${colors.blue};
  }
`;

const InputLayout = styled.div`
  flex: 1 1 auto;
  -moz-box-orient: horizontal;
  -moz-box-direction: normal;
  flex-direction: row;
  display: flex;
  position: relative;
  margin-top: 12px;
`;

const SummaryContainer = styled.div`
  background: ${colors.neutral};
  padding: 15px;
`;

const RideType = styled.div`
  border-bottom: 1px dotted ${colors.lightGrey};
  font-size: 7px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 5px 0;
  h1 {
    color: ${colors.darkGrey};
  }
`;

const EstimatorCard = () => {
  return (
    <div>
      <SubTitle>Brium Fare Estimator.</SubTitle>
      <InputContainer>
        <Divider />
        <InputLayout>
          <Input
            type="location"
            placeholder="Enter pickup location"
            border="0px"
            style={{ paddingLeft: '40px', fontSize: '14px'}}
          />
        </InputLayout>
        <InputLayout>
          <Input
            type="location"
            placeholder="Enter destination"
            border="0px"
            style={{ paddingLeft: '40px', fontSize: '14px'}}
          />
        </InputLayout>
      </InputContainer>
      <SummaryContainer>
        <RideType>
          <h1>BRIUM S</h1>
          <h1>NGN 2,500 - 4,500</h1>
        </RideType>
        <Caption>
          Rider prices are estimates only and do not reflect variations due to
          traffic delays, or other factors. Actual prices may vary.
        </Caption>
      </SummaryContainer>
      <Button>
        SIGN UP TO RIDE
        <IconArrow />
      </Button>
    </div>
  );
};

export default EstimatorCard;
