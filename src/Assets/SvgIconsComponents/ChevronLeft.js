import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

const SvgChevronLeft = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="chevron-left_svg__feather chevron-left_svg__feather-chevron-left"
    {...props}>
    <Path d="m15 18-6-6 6-6" />
  </Svg>
);

export default SvgChevronLeft;
