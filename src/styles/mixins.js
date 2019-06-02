import { css } from 'styled-components';
import theme from './theme';
import media from './media';

const { colors, fontSizes, fonts } = theme;

const mixins = {
  flexCenter: css`
    display: flex;
    justify-content: center;
    align-items: center;
  `,

  flexBetween: css`
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
  `,

  outline: css`
    outline: 1px solid red;
  `,

  link: css`
    display: inline-block;
    text-decoration: none;
    text-decoration-skip-ink: auto;
    color: inherit;
    position: relative;
    transition: ${theme.transition};
    cursor: pointer;
    &:hover,
    &:active,
    &:focus {
      color: ${colors.lightGrey};
      outline: 0;
    }
  `,

  footerLink: css`
    display: inline-block;
    text-decoration: none;
    text-decoration-skip-ink: auto;
    position: relative;
    transition: ${theme.transition};
    cursor: pointer;
    color: ${colors.white};
    &:hover,
    &:focus,
    &:active {
      color: ${colors.white};
      outline: 0;
      &:after {
        width: 100%;
      }
    }
    &:after {
      content: '';
      display: block;
      width: 0;
      height: 1px;
      position: relative;
      bottom: 0.5em;
      background-color: ${colors.white};
      transition: ${theme.transition};
    }
  `,

  smallButton: css`
    color: ${colors.darkGrey};
    background-color: ${colors.yellow};
    font-size: ${fontSizes.smallish};
    font-family: ${fonts.CircularStd};
    padding: 0 17px;
    text-shadow: 0 1px 1px rgba(255, 255, 255, 0.57);
    line-height: 1;
    text-decoration: none;
    cursor: pointer;
    transition: ${theme.transition};
    &:hover,
    &:focus,
    &:active {
      color: rgba(0, 0, 0, 0.5);
      mix-blend-mode: multiply;
    }
    &:after {
      display: none !important;
    }
  `,

  bigButton: css`
    color: ${colors.darkGrey};
    background-color: ${colors.yellow};
    border-radius: ${theme.borderRadius};
    padding: 18px 37px;
    font-size: ${fontSizes.small};
    font-weight: 600;
    text-shadow: 0 1px 1px rgba(255, 255, 255, 0.57);
    font-family: ${fonts.CircularStd};
    line-height: 1;
    text-decoration: none;
    cursor: pointer;
    text-transform: uppercase;
    &:hover,
    &:focus,
    &:active {
      color: rgba(0, 0, 0, 0.5);
      mix-blend-mode: multiply;
      svg path {
        fill: rgba(0, 0, 0, 0.5) !important;
        filter: drop-shadow(0 1px 1px rgba(255, 255, 255, 0.57)) !important;
        mix-blend-mode: multiply;
      }
    }
    &:after {
      display: none !important;
    }
  }
  `,

  sidePadding: css`
    padding: 0 150px;
    ${media.desktop`padding: 0 100px;`};
    ${media.tablet`padding: 0 50px;`};
    ${media.phablet`padding: 0 25px;`};
  `
};
export default mixins;
