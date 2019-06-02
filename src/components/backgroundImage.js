import React from 'react';
import { graphql, StaticQuery } from 'gatsby';

import BackgroundImage from 'gatsby-background-image';

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
        <BackgroundImage
          Tag="section"
          className={props.className}
          fluid={fluid}
        >
          {props.children}
        </BackgroundImage>
      );
    }}
  />
);

export default BackgroundImg;
