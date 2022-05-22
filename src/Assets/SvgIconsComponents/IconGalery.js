import * as React from 'react';
import Svg, {Rect, Path} from 'react-native-svg';

const SvgIconGalery = props => (
  <Svg
    width="24"
    height="24"
    viewBox="0 0 29 30"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Rect y={0.5} width={29} height={29} rx={6} fill="#3396FD" />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M19 7a3.5 3.5 0 0 1 3.5 3.5v9A3.5 3.5 0 0 1 19 23h-9a3.5 3.5 0 0 1-3.5-3.5v-9A3.5 3.5 0 0 1 10 7h9Zm0 1h-9a2.5 2.5 0 0 0-2.5 2.5v9c0 .085.004.169.012.251l3.83-3.828a1 1 0 0 1 1.414 0l1.222 1.223 3.498-3.498a1 1 0 0 1 1.414 0l2.61 2.61V10.5A2.5 2.5 0 0 0 19 8Zm-4.5 4a2 2 0 1 0-4 0 2 2 0 0 0 4 0Z"
      fill="#fff"
    />
  </Svg>
);

export default SvgIconGalery;
