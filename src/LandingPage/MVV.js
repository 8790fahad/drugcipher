import React from "react";
import { Col, Row } from "react-bootstrap";
import mission from "../image/mission2.png";
import vision from "../image/vission.png";
import values from "../image/value.png";
export default function MVV() {
  const mvv = [
    {
      mvvImage: mission,
      mvvTitle: "Mission",
      mvvContent: `Our Mission is to alleviate pharmaceutical products couterfeiting across the globe using
      modern digital technologies.`,
      alt: "mission",
      // animation: "fade-right",
    },
    {
      mvvImage: vision,
      mvvTitle: "Vision",
      mvvContent: `Our vision is to become one of the largest global organization for tackling couterfeit
      pharmaceutical products across the world, providing a safe and conducive ecosystem
      for pharmceutical production, distribution and consumption.
      `,
      alt: "vision",
      // animation: "fade-left",
    },
    {
      mvvImage: values,
      mvvTitle: "Values",
      mvvContent: `Our values define who we are and how we solve the problems we solve, and
      these are the core ideas we return to when we make decisions: 
● We build trust capital.
● We are innovative
● We celebrate competency
● We do not compromise
● We choose transparency`,
      alt: "values",
      // animation: "fade-right",
    },
  ];
  return (
    <div className="container">
      <div className="p-5 mvv">
        <Row className="">
          <Col xl={2} lg={2} md={2} sm={12} xs={12}></Col>
          <Col xl={8} lg={8} md={8} sm={12} xs={12} className="">
            {mvv.map((item) => (
              <Row>
                <Col md={12}>
                  <Row>
                    <Col xl={3} lg={3} md={3} sm={12} xs={12} className="">
                      <div className="mvv_img">
                        <div>
                          <img
                            className="shadow"
                            src={item.mvvImage}
                            alt={item.alt}
                            style={{
                              float: "right",
                              borderRadius: "50%",
                              width: 100,
                            }}

                          />
                        </div>
                      </div>
                    </Col>
                    <Col xl={9} lg={9} md={9} sm={12} xs={12}>
                      <h3 className="mvv_h">{item.mvvTitle}</h3>
                      <p className="mvv_p">{item.mvvContent}</p>
                    </Col>
                  </Row>
                </Col>
              </Row>
            ))}
          </Col>
          <Col xl={2} lg={2} md={2} sm={12} xs={12}></Col>
        </Row>
      </div>
    </div>
  );
}
