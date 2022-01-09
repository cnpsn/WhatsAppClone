import * as React from 'react';
import Svg, {Path, Defs, Pattern, Use, Image} from 'react-native-svg';
const SvgRectangle = props => (
  <Svg
    width="24"
    height="24"
    viewBox="0 0 375 724"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    {...props}>
    <Path fill="url(#Rectangle_svg__a)" d="M0 0h375v724H0z" />
    <Defs>
      <Pattern
        id="Rectangle_svg__a"
        patternContentUnits="objectBoundingBox"
        width={1}
        height={1}>
        <Use
          xlinkHref="#Rectangle_svg__b"
          transform="matrix(.001 0 0 .00052 -.061 0)"
        />
      </Pattern>
      <Image
        id="Rectangle_svg__b"
        width={1125}
        height={1935}
      />
    </Defs>
  </Svg>
);
export default SvgRectangle;