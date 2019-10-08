import React, { useState, useEffect } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import styled from 'styled-components';
import { Link } from 'gatsby';
import { IconLogo } from '@components/icons';
import PropTypes from 'prop-types';
import { theme, mixins, media } from '@styles';
import { isConstructorDeclaration } from 'typescript';

const { colors, fonts } = theme;

const StepContainer = styled.div`
  display: grid;
  grid-template-rows: 5rem 1fr;
  grid-template-columns: 1fr 26rem 1fr;
  background-color: #f7fafe;
  width: 100%;
  ${media.phablet`
    grid-template-columns: 1fr;
  `}
`;

const StepsNav = styled.div`
  grid-column: 1 / -1;
  grid-row: 1;
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  grid-template-rows: 1fr;
  background-color: ${colors.blue};
  align-items: center;
  ${media.phablet`
    grid-template-columns: 5rem 1fr;
    padding: 0 1rem;
  `}
`;

const StepContent = styled.div`
  font-family: ${fonts.CircularStd};
  grid-column: 2 / 3;
  padding: 6rem 0;
  ${media.phablet`
    margin: 0 1.5rem; 
    grid-column: 1/-1;
    padding-top: 0;
    padding-bottom: 2rem;
  `}
`;

const Logo = styled.div`
  ${mixins.flexCenter};
  width: 7rem;
  margin-left: 3rem;
  ${media.phablet`
    width: 6rem;
    margin-left: 0;
`}
`;

const LogoLink = styled(Link)`
  color: ${colors.white};
  width: 100px;
  height: auto;
  &:hover,
  &:focus {
    svg {
      fill: ${colors.offWhite};
    }
  }
  svg {
    fill: none;
    transition: ${theme.transition};
    user-select: none;
  }
`;

const Tabs = styled.ul`
  display: flex;
  grid-column: 2/3;
  align-items: center;
  justify-content: center;
  ${media.tablet`
    margin-left: 1rem;
  `};
`;

const TabItem = styled.li`
  display: flex;
  align-items: center;
  h5 {
    font-size: 1rem;
    color: white;
    font-weight: 400;
    margin: 0 10px;
    ${media.phablet`
      display: none;
  `};
  }
`;

const Tab = styled.button`
  ${mixins.link};
  color: ${props => (props.isActive ? colors.blue : colors.offWhite)};
  background-color: ${props => (props.isActive ? colors.white : `transparent`)};
  border: 2px solid ${colors.offWhite};
  border-radius: 50%;
  width: 50px;
  height: 50px;
  font-size: 22px;
  display: flex;
  align-items: center;
  justify-content: center;
  white-space: nowrap;
  font-weight: 600;
  transition: ${theme.transition};
  ${media.tablet`
    width: 40px;
    height: 40px;
    font-size: 16px;
  `};
`;

const Divider = styled.div`
  height: 2px;
  width: ${props => (props.width ? props.width : '0px')};
  background-color: ${colors.offWhite};
  ${media.tablet`
    width: 0.8rem;
  `};
`;

const Text = styled.h5`
  display: none;
  ${media.phablet`
    display: block;
    text-align: right;
    margin: 1rem 1rem;
  `};
`;

// const windowGlobal = typeof window !== 'undefined' && window


const MultiStep = ({ steps, currStep }) => {
  const [activeTabId, setActiveTabId] = useState(0);
  useEffect(() => {
    // const current = windowGlobal.localStorage.getItem('nextStepIndex') || currStep
    // setActiveTabId(Number(current));
  });

  return (
    <StepContainer>
      <StepsNav>
        <TransitionGroup>
          <CSSTransition classNames="fade" timeout={3000}>
            <Logo>
              <LogoLink to="/" aria-label="Home">
                <IconLogo />
              </LogoLink>
            </Logo>
          </CSSTransition>
        </TransitionGroup>
        <Tabs role="tablist">
          {steps &&
            steps.map(({ name }, i) => {
              return (
                <TabItem key={name}>
                  <Tab
                    isActive={activeTabId === i}
                    onClick={() => setActiveTabId(i)}
                    role="tab"
                    aria-selected={activeTabId === i ? 'true' : 'false'}
                    aria-controls={`tab${i}`}
                    id={i + 1}
                    tabIndex={activeTabId === i ? '0' : '-1'}
                  >
                    <span>{i + 1}</span>
                  </Tab>
                  {activeTabId === i && <h5>{name}</h5>}
                  {i !== steps.length - 1 && (
                    <Divider width={activeTabId === i ? '6rem' : '0.8rem'} />
                  )}
                </TabItem>
              );
            })}
        </Tabs>
      </StepsNav>
      <Text>{steps[activeTabId].name}</Text>
      <StepContent>{steps[activeTabId].component}</StepContent>
    </StepContainer>
  );
};

MultiStep.propTypes = {
  steps: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      component: PropTypes.node.isRequired
    })
  ).isRequired
};

export default MultiStep;
