import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

const SvgBack = props => (
  <Svg
    width="24"
    height="24"
    viewBox="0 0 12 21"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      d="m3.602 10.5 7.804-7.95a1.5 1.5 0 0 0-2.14-2.1l-8.836 9a1.5 1.5 0 0 0 0 2.1l8.835 9a1.5 1.5 0 0 0 2.141-2.1L3.602 10.5Z"
      fill="#007AFF"
    />
  </Svg>
);

export default SvgBack;
