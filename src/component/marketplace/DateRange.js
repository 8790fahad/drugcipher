import React from "react";
import { FloatingLabel, Form } from "react-bootstrap";
import moment from "moment";

const today = moment().format("YYYY-MM-DD");

function DaterangeSelector({
  from = today,
  to = today,
  handleChange = (f) => f,
}) {
  return (
    <div className="row">
      <div className="col-md-4">
        <div>
          <FloatingLabel
            controlId="inputTo"
            label="From:"
            className="mb-3"
            style={{ fontWeight: "bold" }}
          >
            <Form.Control
              type="date"
              value={from}
              name="from"
              onChange={handleChange}
            />
          </FloatingLabel>
        </div>
      </div>

      <div className="col-md-4" />

      <div className="col-md-4">
        <div>
          <FloatingLabel
            controlId="inputTo"
            label="To:"
            className="mb-3"
            style={{ fontWeight: "bold" }}
          >
            <Form.Control
              type="date"
              value={to}
              name="to"
              onChange={handleChange}
            />
          </FloatingLabel>
        </div>
      </div>
    </div>
  );
}

export default DaterangeSelector;
