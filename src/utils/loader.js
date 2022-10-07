import React from "react";
import { Spinner } from "react-bootstrap";
import PropTypes from "prop-types";
const Loader = ({ size }) => (
  <div className="d-flex justify-content-center">
    <Spinner
      size={size}
      animation="border"
      role="status"
      className="opacity-25"
    >
      <span className="visually-hidden">Loading...</span>
    </Spinner>
  </div>
);
export default Loader;
const Props = {
  size: PropTypes.string,
};
const DefaultProps = {
  size: "sm",
};
Loader.prototype = Props;
Loader.defaultProps = DefaultProps;
