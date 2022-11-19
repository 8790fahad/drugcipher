import React from "react";
import { useState } from "react";
import { Card, Col, Row } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import { ArrowLeftCircle } from "react-feather";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Spinner } from "reactstrap";
import { v4 as uuid } from "uuid";
import useQuery from "../hooks/useQuery";
import { contries } from "../utils/countries";
import { _postApi } from "../utils/helper";
import { NotificationError, NotificationSuccess } from "../utils/Notification";
export default function CreateMarketer() {
  const { info } = useSelector((state) => state.account.account);
  const query = useQuery();
  const type = query.get("type")
  const form = {
    fullName: "",
    email: "",
    phoneNumber: "",
    country: "",
    firstLine: "",
    secondLine: "",
    type: type,
    id: uuid(),
    companyId: info.id,
  };
  const navigate = useNavigate();
  const [loading, setLoading] = useState();

  const [marketerData, setMarketerData] = useState(form);

  const handleChange = ({ target: { name, value } }) => {
    setMarketerData((p) => ({
      ...p,
      [name]: value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    _postApi(
      "/v1/add-marketer",
      marketerData,
      (reps) => {
        if (reps.success) {
          setLoading(false);
          toast(<NotificationSuccess text="Successfully" />);
          setMarketerData(form);
          navigate(-1);
        }
      },
      (err) => {
        console.error(err);
        toast(<NotificationError text="Failed, try again" />);
        setLoading(false);
      }
    );
  };

  return (
    <Form onSubmit={onSubmit}>
      <Card className="man_card shadow p-3">
        <Row>
          <Col md={6} sm={6} xs={6}>
            <h3 className="man_card_title">Register {type}</h3>
          </Col>
          <Col md={6} sm={6} xs={6}>
            <ArrowLeftCircle
              className="shadow p-3"
              size="4em"
              style={{
                color: "rgb(3, 66, 110)",
                float: "right",
                cursor: "pointer",
              }}
              onClick={() => navigate(-1)}
            />
          </Col>
        </Row>
        <Row>
          <Col md={12}>
            <Row className="">
              <Col md={6}>
                <label>
                  Full Name<b style={{ color: "red" }}>*</b>
                </label>
                <input
                  name="fullName"
                  value={marketerData.fullName}
                  onChange={handleChange}
                  className="man_input_fields"
                  type="text"
                  required
                />
              </Col>
              <Col md={6}>
                <label>
                  Email<b style={{ color: "red" }}>*</b>
                </label>
                <input
                  name="email"
                  value={marketerData.email}
                  onChange={handleChange}
                  className="man_input_fields"
                  type="email"
                  required
                />
              </Col>
              <Col md={6} className="mb-3">
                <label>
                  Phone Number<b style={{ color: "red" }}>*</b>
                </label>
                <input
                  name="phoneNumber"
                  value={marketerData.phoneNumber}
                  onChange={handleChange}
                  className="man_input_fields"
                  type="phone"
                  required
                />
              </Col>
              <Col md={6} className="mb-3" controlId="validationCustom03">
                <label>
                  Country<b style={{ color: "red" }}>*</b>
                </label>
                <select
                  className="man_input_fields"
                  name="country"
                  defaultValue={marketerData.country}
                  onChange={handleChange}
                  required
                >
                  <option>Select Country</option>
                  {contries &&
                    contries.map((item) => (
                      <option value={item.name}>{item.name}</option>
                    ))}
                </select>
                {/* </Col> */}
              </Col>
            </Row>
            <Row className="">
              <Col md={6} className="mb-3">
                <label>First Line Address<b style={{ color: "red" }}>*</b></label>
                <input
                  name="firstLine"
                  value={marketerData.firstLine}
                  onChange={handleChange}
                  className="man_input_fields"
                  type="text"
                  required
                />
              </Col>
              <Col md={6}>
                <label>Second Line Address</label>
                <input
                  name="secondLine"
                  value={marketerData.secondLine}
                  onChange={handleChange}
                  className="man_input_fields"
                  type="text"
                />
              </Col>
            </Row>
          </Col>
        </Row>

        <div className="mt-3">
          <button type="submit" className="man_button">
            {loading ? <Spinner size="sm" /> : null}Register
          </button>
        </div>
      </Card>
    </Form>
  );
}
