import * as React from 'react';
import Svg, {Rect, Path} from 'react-native-svg';

const SvgIconSearch = props => (
  <Svg
    width="24"
    height="24"
    viewBox="0 0 29 30"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Rect y={0.5} width={29} height={29} rx={6} fill="#FE8D35" />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M19.5 13.25a6.75 6.75 0 1 0-2.942 5.574l4.154 4.156.102.091a1.25 1.25 0 0 0 1.666-1.859l-4.156-4.154A6.718 6.718 0 0 0 19.5 13.25Zm-11.5 0a4.75 4.75 0 1 1 9.5 0 4.75 4.75 0 0 1-9.5 0Z"
      fill="#fff"
    />
  </Svg>
);

export default SvgIconSearch;
