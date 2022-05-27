import PropTypes from "prop-types";

import "./Icon.less";

const Icon = ({ src, alt, size = "small" }) => (
  <img className={`Icon--${size}`} src={src} alt={alt} />
);

Icon.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  size: PropTypes.string,
};

export default Icon;
