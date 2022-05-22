import * as React from 'react';
import Svg, {Rect, Path} from 'react-native-svg';

const SvgIconStar = props => (
  <Svg
    width="24"
    height="24"
    viewBox="0 0 29 30"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Rect y={0.5} width={29} height={29} rx={6} fill="#FBB500" />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="m14.5 20.218-4.541 2.82a.5.5 0 0 1-.75-.544l1.279-5.19-4.085-3.448a.5.5 0 0 1 .286-.88l5.331-.389 2.017-4.95a.5.5 0 0 1 .926 0l2.017 4.95 5.33.388a.5.5 0 0 1 .287.881l-4.085 3.448 1.278 5.19a.5.5 0 0 1-.749.544l-4.541-2.82Z"
      fill="#fff"
    />
  </Svg>
);

export default SvgIconStar;
