/* eslint-disable import/no-cycle */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Image} from '@components';
import { theme, mixins, media, Section } from '@styles';

const { colors, fontSizes, fonts } = theme;

const HowToContainer = styled(Section)`
  background-color: ${colors.lightNavy};
  padding: 50px 120px;
  width: 100%;
  ${media.tablet`
    padding: 80px 30px;
  `};
  ${media.phablet`
    padding: 80px 30px;
    text-align: center;
  `};
`;

const TabsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr auto 200px;
  grid-gap: 3rem;
  position: relative;
  ${media.tablet`
    grid-row-gap: 2.5rem;
    grid-column-gap: 0;
  `};
  ${media.phablet`
    grid-template-columns: 1fr;
    grid-gap: 2.5rem;
  `};
`;

const Heading = styled.h1`
  font-weight: 800;
  font-size: 42px;
  grid-column: 1/2;
  grid-row: 1/2;
  align-self: end;
  margin-top: 100px;
  ${media.tablet`
    font-size: 35px;
    padding-left: 20px;
  `};
`;

const Tabs = styled.ul`
  display: flex;
  position: relative;
  width: max-content;
  z-index: 3;
  grid-column: 1/2;
  grid-row: 2/3;
  margin-bottom: 37px;
  ${media.tablet`
    margin: 0 auto;
  `};
`;

const TabItem = styled.li`
 
`;

const Tab = styled.button`
    ${mixins.link};
    color: ${props => (props.isActive ? colors.darkGrey : colors.yellow)};
    background-color: ${props => (props.isActive ? colors.yellow : `transparent`)};
    border: 2px solid ${colors.yellow};
    border-radius: 50%;
    width: 56px;
    height: 56px;
    font-size: 26px;
    display: flex;
    align-items: center;
    justify-content: center;
    white-space: nowrap;
    font-weight: 600;
    transition: ${theme.transition};
    margin-right: 28px;
    &:after {
      content: ' ';
      position: absolute;
      top: 50%;
      left: 58px;
      width: 20px;
      height: 2px;
      background-color: ${colors.yellow};
      cursor: arrow;
    };
    &:nth-last-child(4) {
      background-color: green;
    };
  ${media.tablet`
    margin-right: 10px;
    width: 50px;
    height: 50px;
    font-size: 22px;
    &:after {
      display: none;
    };
  `};
`;
// //72, 76, 78

const ContentContainer = styled.div`
  position: relative;
  padding-top: 12px;
  flex-grow: 1;
  grid-column: 1/2;
  grid-row: 3/4;
  outline: none;
  align-self: start;
  margin-top: -20px;
  ${media.tablet`
    padding-left: 20px;
    margin-top: 0px;
  `};
  ${media.thone`padding-left: 0;`};
`;

const TabContent = styled.div`
  top: 0;
  left: 0;
  width: 100%;
  height: auto;
  opacity: ${props => (props.isActive ? 1 : 0)};
  z-index: ${props => (props.isActive ? 2 : -1)};
  position: ${props => (props.isActive ? 'relative' : 'absolute')};
  visibility: ${props => (props.isActive ? 'visible' : 'hidden')};
  transition: ${theme.transition};
  transition-duration: ${props => (props.isActive ? '0.5s' : '0s')};
`;

const Title = styled.h4`
  color: ${colors.lightestSlate};
  font-size: 24px;
  font-weight: 800;
  margin-bottom: 5px;
  ${media.tablet`
    font-size: 23px;
  `};
`;

const Details = styled.p`
  font-size: ${fontSizes.medium};
  max-width: 500px;
  letter-spacing: 0.6px;
  line-height: 150%;
  color: ${colors.lightSlate};
  margin-top: 20px;
  font-family: ${fonts.CircularStd};
  color: ${colors.blueGrey};
  font-weight: normal;
  ${media.tablet`
    font-size: ${fontSizes.medium};
    max-width: 100%;
  `};
  `;


const PhoneContainer = styled.div`
  // top: 30px;
  background: #fff;
  box-shadow: 0 1px 4px 0 rgba(0,0,0,0.05), 0 5px 15px 0 rgba(0,0,0,0.05), 0 0 0 1px rgba(0,0,0,0.03), inset 0 -2px 2px 2px rgba(0,0,0,0.05);
  border-radius: 40px;
  padding: 12px;
  position: relative;
  width: 300px;
  height: 600px;
  display: grid;
  grid-column: 2/-1;
  grid-row: 1/-1;
  justify-self: center;
  img {
    border-radius: 30px;
    height: 100%;
    width: 100%;
  }
  ${media.tablet`
    width: 220px;
  `};
  ${media.phablet`
    display: none;
  `};
`;


const HowToSection = ({ data })=> {
    const [activeTabId, setActiveTabId] = useState(0);
    
  return (
    <HowToContainer id="jobs">
      <TabsContainer>
      <Heading>How It works?</Heading>
        <Tabs role="tablist">
          {data &&
            data.map(({ title }, i) => {
              return (
                <TabItem key={title}>
                  <Tab
                    isActive={activeTabId === i}
                    onClick={() => setActiveTabId(i)}
                    role="tab"
                    aria-selected={activeTabId === i ? 'true' : 'false'}
                    aria-controls={`tab${i}`}
                    id={i+1}
                    tabIndex={activeTabId === i ? '0' : '-1'}>
                    <span>{i+1}</span>
                  </Tab>
                </TabItem>
              );
            })}
        </Tabs>
        <ContentContainer>
          {data &&
            data.map(({ title, details }, i) => {
              return (
                <TabContent
                  key={i}
                  isActive={activeTabId === i}
                  id={`detail${i}`}
                  role="tabpanel"
                  tabIndex="0"
                  aria-labelledby={`detail${i}`}
                  aria-hidden={activeTabId !== i}>
                  <Title>
                    <span>{title}</span>
                  </Title>
                  <Details>
                    <span>{details}</span>
                  </Details>
                </TabContent>
              );
            })}
        </ContentContainer>
        <PhoneContainer>
          { data &&
              data.map(({imageName}, i) => {
                return (
                  <TabContent
                    key={imageName}
                    isActive={activeTabId === i}
                    id={`image${i}`}
                    role="tabpanel"
                    tabIndex="0"
                    aria-labelledby={`image${i}`}
                    aria-hidden={activeTabId !== i}>
                    <Image filename={imageName}/>
                  </TabContent>
                );
          })}
        </PhoneContainer>
      </TabsContainer>
    </HowToContainer>
  );
};

HowToSection.propTypes = {
    data: PropTypes.shape({ root: PropTypes.string.isRequired }).isRequired
};

export default  HowToSection;


