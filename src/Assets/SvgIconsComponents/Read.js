import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

const SvgRead = props => (
  <Svg
    width="24"
    height="24"
    viewBox="0 0 14 8"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M13.501.109 14 .596 8.6 8 6.412 5.838l.927-1.272 1.261.736L13.501.11ZM9.119 0l.5.487-5.4 7.404L.5 4.234l.83-.81 2.889 1.77L9.119 0Z"
      fill="#3497F9"
    />
  </Svg>
);

export default SvgRead;
