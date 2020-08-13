/* eslint-disable import/no-cycle */
import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import PropTypes from 'prop-types';
import { Head, Footer } from '@components';
import { GlobalStyle } from '@styles';

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query LayoutQuery {
        site {
          siteMetadata {
            title
            siteUrl
            description
          }
        }
      }
    `}
    render={({ site }) => (
        <div id="root">
        <Head metadata={site.siteMetadata} />
        <GlobalStyle />
        <div className="container">
          {children}
          <Footer />
        </div>
      </div>
    )}
  />
);

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
