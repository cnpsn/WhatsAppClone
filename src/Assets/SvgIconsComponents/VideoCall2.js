import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

const SvgVideoCall2 = props => (
  <Svg
    width="24"
    height="24"
    viewBox="0 0 36 36"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M18 36c9.941 0 18-8.059 18-18S27.941 0 18 0 0 8.059 0 18s8.059 18 18 18Z"
      fill="#EDEDFF"
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M21 12.25a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H11a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h10Zm8 1v10l-5-3v-4l5-3Z"
      fill="#007AFF"
    />
  </Svg>
);

export default SvgVideoCall2;
