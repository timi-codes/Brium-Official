import styled from 'styled-components';
import theme from './theme';

const { fontSizes, fonts } = theme;

const Button = styled.button`
  font-size: ${fontSizes.smallish};
  font-family: ${fonts.CircularStd};
  line-height: 1;
  text-decoration: none;
  cursor: pointer;
  transition: ${theme.transition};
  &:hover,
  &:focus,
  &:active {
    outline: none;
  }
  &:after {
    display: none !important;
  }
`;

export default Button;
