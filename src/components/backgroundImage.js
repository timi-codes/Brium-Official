import React from 'react';
import { graphql, StaticQuery } from 'gatsby';

import BackgroundImage from 'gatsby-background-image';

import styled from 'styled-components';

const StyledBackground = styled(BackgroundImage)`
  display: block;
  overflow: none !important;
`;

const BackgroundImg = props => (
  <StaticQuery
    query={graphql`
      query {
        images: allFile {
          edges {
            node {
              relativePath
              name
              childImageSharp {
                fluid(quality: 90, maxWidth: 4160) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
          }
        }
      }
    `}
    render={data => {
      const image = data.images.edges.find(n => {
        return n.node.relativePath.includes(props.filename);
      });
      if (!image) {
        return null;
      }

      const { fluid } = image.node.childImageSharp;
      return (
        <StyledBackground
          Tag="section"
          className={props.className}
          fluid={fluid}
          style={{ overflow: 'none' }}
        >
          {props.children}
        </StyledBackground>
      );
    }}
  />
);

export default BackgroundImg;