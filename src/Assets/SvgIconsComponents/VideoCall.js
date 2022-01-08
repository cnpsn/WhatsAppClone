import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

const SvgVideoCall = props => (
  <Svg
    width="24"
    height="24"
    viewBox="0 0 25 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M17 4.5a4 4 0 0 0-4-4H4a4 4 0 0 0-4 4V12a4 4 0 0 0 4 4h9a4 4 0 0 0 4-4V4.5ZM4 1.7h9a2.8 2.8 0 0 1 2.8 2.8V12a2.8 2.8 0 0 1-2.8 2.8H4A2.8 2.8 0 0 1 1.2 12V4.5A2.8 2.8 0 0 1 4 1.7Zm20.293.721a1 1 0 0 1 .207.61v10.18a1 1 0 0 1-1.524.851l-4.024-2.476A2 2 0 0 1 18 9.882V6.985a2 2 0 0 1 .78-1.585l4.11-3.162a1 1 0 0 1 1.403.183Zm-4.78 3.93L23.3 3.437v9.415l-3.72-2.288a.8.8 0 0 1-.38-.682V6.985a.8.8 0 0 1 .312-.634Z"
      fill="#007AFF"
    />
  </Svg>
);

export default SvgVideoCall;
