import React from "react";
import { Spinner } from "reactstrap";

export default function Button({
  className,
  style,
  btnText,
  props,
  onClick,
  loading = false,
}) {
  return (
    <button disabled={loading} style={style} className={className} {...props} onClick={onClick}>
      {loading ? <Spinner size={"sm"} /> : null} {btnText}
    </button>
  );
}
