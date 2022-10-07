import React from "react";

function DrugAlert(props) {
  return (
    <div className="border rounded py-1 " style={{ height: "97vh" }}>
      <h6 className="text-center">{props.title}</h6>
      {props.children}
    </div>
  );
}

export default DrugAlert;
