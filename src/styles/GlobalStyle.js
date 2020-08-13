import { createGlobalStyle } from 'styled-components';
import theme from './theme';
import media from './media';
import * as fontFamilies from './fonts';

const { colors, fontSizes, fonts } = theme;

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'CircularStd';
    src: url(${fontFamilies.CircularStdBlackEOT});
    src: url(${
      fontFamilies.CircularStdBlackEOT
    }?#iefix) format('embedded-opentype'),
    url(${fontFamilies.CircularStdBlackWOFF}) format('woff'),
    url(${fontFamilies.CircularStdBlackTTF}) format('truetype'),
    url(${
      fontFamilies.CircularStdBlackSVG
    }#bcc26993292869431e54c666aafa8fcd) format('svg');
    font-weight: 800;
    font-style: normal;
    font-display: auto;
  }

  @font-face {
    font-family: 'CircularStd';
    src: url(${fontFamilies.CircularStdBoldEOT});
    src: url(${
      fontFamilies.CircularStdBoldEOT
    }?#iefix) format('embedded-opentype'),
    url(${fontFamilies.CircularStdBoldWOFF}) format('woff'),
    url(${fontFamilies.CircularStdBoldTTF}) format('truetype'),
    url(${
      fontFamilies.CircularStdBoldSVG
    }#bcc26993292869431e54c666aafa8fcd) format('svg');
    font-weight: 600;
    font-style: normal;
    font-display: auto;
  }

  @font-face {
    font-family: 'CircularStd';
    src: url(${fontFamilies.CircularStdMediumEOT});
    src: url(${
      fontFamilies.CircularStdMediumEOT
    }?#iefix) format('embedded-opentype'),
    url(${fontFamilies.CircularStdMediumWOFF}) format('woff'),
    url(${fontFamilies.CircularStdMediumTTF}) format('truetype'),
    url(${
      fontFamilies.CircularStdMediumSVG
    }#bcc26993292869431e54c666aafa8fcd) format('svg');
    font-weight: 500;
    font-style: normal;
    font-display: auto;
  }

  @font-face {
    font-family: 'CircularStd';
    src: url(${fontFamilies.CircularStdBookEOT});
    src: url(${
      fontFamilies.CircularStdBookEOT
    }?#iefix) format('embedded-opentype'),
    url(${fontFamilies.CircularStdBookWOFF}) format('woff'),
    url(${fontFamilies.CircularStdBookTTF}) format('truetype'),
    url(${
      fontFamilies.CircularStdBookSVG
    }#bcc26993292869431e54c666aafa8fcd) format('svg');
    font-weight: 400;
    font-style: normal;
    font-dispaly: auto;
  }

  @font-face {
    font-family: 'Lato';
    src: url(${fontFamilies.LatoLight}) format('truetype');
    font-weight: 100;
    font-style: normal;
    font-dispaly: auto;
  }

  html{
    box-sizing: border-box;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    width: 100%;
  }

  *,
  *:before,
  *:after {
    margin:0;
    padding:0;
    box-sizing: inherit;
  }

  body{
    margin:0;
    padding:0;
    width: 100%;
    z-index: 0;
    min-height:100%;
    overflow-x: hidden;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    background-color: ${colors.white};
    color: ${colors.slate};
    line-height: 1.3;
    font-family: ${fonts.CircularStd};
    font-size: ${fontSizes.xlarge};
    ${media.phablet`font-size: ${fontSizes.large};`}

    &.hidden {
      overflow: hidden;
    }

    &.blur {
      overflow: hidden;
      #root > .container > * {
        filter: blur(5px) brightness(0.7);
        transition: ${theme.transition};
        pointer-events: none;
        user-select: none;
      }
    }
  }

  ::selection {
    background-color: ${colors.yellow};
  }

  h1,
  h2,
  h3,
  h4,
  h5 {
    font-weight: 600;
    color: ${colors.black};
    margin: 0 0 10px 0;
  }

  #root {
    min-height: 100vh;
    display: grid;
    grid-template-rows: 1fr auto;
    grid-template-columns: 100%;
  }


  img {
    width: 100%;
    max-width: 100%;
    vertical-align: middle;
  }

  svg {
    ${'' /* width: 100%;
    height: 100%; */}

    ${'' /* margin-right: 24px; */}
    fill: currentColor;
    vertical-align: middle;
  }

  a {
    display: inline-block;
    text-decoration: none;
    text-decoration-skip-ink: auto;
    color: inherit;
    position: relative;
    transition: ${theme.transition};
    cursor: pointer;

    &:hover,
    &:focus {
      color: ${colors.white};
      outline: 0;
    }
  }

  button {
    cursor: pointer;
    border: 0;
    border-radius: 0;

    &:focus,
    &:active {
      outline-color: ${colors.blue};
    }
  }
  input, textarea {
    border-radius: 0;
    outline: 0;
    color: ${colors.darkGrey};
    &:focus {
      outline: 0;
    }
    &::placeholder {
    }
    &:focus,
    &:active {
      &::placeholder {
        ${'' /* opacity: 0.5; */}
      }
    }
  }

  p {
    margin: 0 0 15px 0;
  }

  ul, ol {
    padding: 0;
    margin: 0;
    list-style: none;
  }

  .gatsby-image-outer-wrapper {
    height: 100%;
  }

  .fadeup-enter {
    opacity: 0.01;
    transform: translateY(20px);
    transition: opacity 300ms ${theme.easing}, transform 300ms ${theme.easing};
  }

  .fadeup-enter-active {
    opacity: 1;
    transform: translateY(0px);
    transition: opacity 300ms ${theme.easing}, transform 300ms ${theme.easing};
  }

  .fadedown-enter {
    opacity: 0.01;
    transform: translateY(-20px);
    transition: opacity 300ms ${theme.easing}, transform 300ms ${theme.easing};
  }

  .fadedown-enter-active {
    opacity: 1;
    transform: translateY(0px);
    transition: opacity 300ms ${theme.easing}, transform 300ms ${theme.easing};
  }

  .fade-enter {
    opacity: 0.01;
    transition: opacity 1000ms ${theme.easing};
  }

  .fade-enter-active {
    opacity: 1;
    transition: opacity 1000ms ${theme.easing};
  }

  ${'' /* input {
    caret-color: blue;
    width: 9px;
  } */}

  label {
    font-size: 0.9rem;
    color: black;
    font-weight: 600;
    width: 100%;
    span{
      font-size: 0.8rem;
      margin-left: 0.7rem;
      color: ${colors.lightGrey};
      font-weight: normal;
    }
  }
`;

export default GlobalStyle;
