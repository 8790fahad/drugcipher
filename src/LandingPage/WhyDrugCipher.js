import React from "react";
import { Col, Row } from "react-bootstrap";

export default function WhyDrugCipher() {
  return (
    <div
      className="p-5 about_whole_div"
      style={{ marginTop: "", margin: 0 }}
      id="about-us"
    >
      <Row className="m-0">
        <Col lg={12} md={12} sm={12} xs={12}>
          <div className="about_div">
            <div className="text-center">
              <h1 className="about_heading_two">Why DrugCipher</h1>
              <p className="sub_heading" style={{ fontSize: 16 }}>
                We are tenaciously using innovations that can transform
                the lives of patients. To create a healthier world, we innovate
                every day. At drugcipher, we're excited about our objective to
                improve health and wellbeing for everyone, empowering each
                person by illuminating the solutions hidden inside of them.
                Through biological insights, we illuminate the road to greater
                health and aid medical professionals in better disease
                detection, treatment, and prevention.
              </p>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
}
