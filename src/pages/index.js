import React from 'react';
import { Layout, SubscribeSection } from '@components';
import styled from 'styled-components';
import { Main } from '@styles';

const MainContainer = styled(Main)`
  ${'' /* ${mixins.sidePadding}; */}
`;

const IndexPage = () => (
  <Layout>
    <MainContainer id="content">
      <p />
      <SubscribeSection />
    </MainContainer>
  </Layout>
);

export default IndexPage;
