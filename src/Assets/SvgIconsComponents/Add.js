import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

const SvgAdd = props => (
  <Svg
    width="24"
    height="24"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      d="M10.1.706 10.2.7a.8.8 0 0 1 .794.7l.006.1v7.7h7.7a.8.8 0 0 1 .794.7l.006.1a.8.8 0 0 1-.7.794l-.1.006H11v7.7a.8.8 0 0 1-.7.794l-.1.006a.8.8 0 0 1-.794-.7l-.006-.1v-7.7H1.7a.8.8 0 0 1-.794-.7L.9 10a.8.8 0 0 1 .7-.794l.1-.006h7.7V1.5a.8.8 0 0 1 .7-.794L10.2.7l-.1.006Z"
      fill="#007AFF"
    />
  </Svg>
);

export default SvgAdd;
