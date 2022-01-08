import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

const SvgSend = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 30 30"
    fill="#fff"
    width="24"
    height="24"
    {...props}>
    <Path d="M5 3a1 1 0 0 0-1 1 1 1 0 0 0 .037.268 1 1 0 0 0 .002.005L5 11l-3 2 21 2-21 2 3 2-.96 6.729A1 1 0 0 0 4 26a1 1 0 0 0 1 1 1 1 0 0 0 .387-.08l.002.002.043-.022.021-.01a1 1 0 0 0 .018-.01l21.92-10.958.002-.004A1 1 0 0 0 28 15a1 1 0 0 0-.61-.92 1 1 0 0 0 0-.002h-.001L5.479 3.123a1 1 0 0 0-.09-.045A1 1 0 0 0 5 3z" />
  </Svg>
);

export default SvgSend;
