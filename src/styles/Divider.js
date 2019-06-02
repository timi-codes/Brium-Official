import styled from 'styled-components';
import theme from './theme';

const { colors } = theme;

const Divider = styled.div`
  height: 1px;
  width: 100%;
  background-color: ${colors.offsetWhite};
  grid-column: 1 / -1;
`;

export default Divider;
