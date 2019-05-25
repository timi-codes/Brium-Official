import React from 'react';
import { graphql, StaticQuery } from 'gatsby';

import BackgroundImage from 'gatsby-background-image';

const BackgroundImg = ({ children, className }) => (
  <StaticQuery
    query={graphql`
      query {
        desktop: file(relativePath: { eq: "subscribe-bg.png" }) {
          childImageSharp {
            fluid(quality: 90, maxWidth: 4160) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `}
    render={data => {
      const imageData = data.desktop.childImageSharp.fluid;
      return (
        <BackgroundImage Tag="section" className={className} fluid={imageData}>
          {children}
        </BackgroundImage>
      );
    }}
  />
);

export default BackgroundImg;
