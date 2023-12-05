import PropTypes from "prop-types";

import { Line } from "./HorizontalLine.styled";

const HorizontalLine = () => {
  return <Line />;
};

export default HorizontalLine;

HorizontalLine.propTypes = {
  marginbottom: PropTypes.string,
};
