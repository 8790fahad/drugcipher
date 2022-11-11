import React from "react";
import { Col, Row } from "react-bootstrap";
import gana from "../image/gana.png";
import prcl from "../image/prcl.JPG";
import yasir from "../image/yasir.png";
import salem from "../image/salem1.JPG";
import "./FlipCard.css";
import fahad from "../image/fahad.png";
export default function TeamSection() {
  const ourTeam = [
    {
      image: yasir,
      content: `I am Yasir Ado Hassan, Software Engineer with years of 
            experience in software development. I use different technologies 
            to create softwares that provide solutions to problems.`,
      name: "Yasir Ado Hassan",
      title: "Chief Executive Officer",
      // animation: "fade-right",
    },
    {
      image: gana,
      content: `The Ahmad Gana is a Pharmacist with over 30 years working experience in a Pharmaceutical Industry, Ahmad Gana wants to change the world by making it easier for peaople to have access to the authentic drugs.`,
      name: "Ahmad Gana",
      title: "Pharmacist/Advisor",
    },
    {
      image: prcl,
      content: `Adepoju Priscillia is a creative UI/UX designer helping brands visualize their products, she's a B.tech degree holder in Pure and Applied Chemistry (LAUTECH). She's also a good content writer/creator, brand influencer and product and graphic designer.`,
      name: "Adepoju Priscillia",
      title: "Content Creator/UI/UX Designer",
      // animation: "fade-left",
    },
  ];

  return (
    <div
      className="p-5 text-center mt-5 our_team_whole"
      id="team"
    >
      <h1 className="heading_two">Our Team</h1>
      <p className="sub_heading">
        Meet our team and explore all of our open positions and areas of
        expertise.
      </p>

      <div className="text-center" style={{ marginTop: 70 }}>
        <Row>
          {ourTeam.map((item) => (
            <Col
              xl={4}
              lg={4}
              md={12}
              sm={12}
              xs={12}
              className="mb-5"
            >
              <div className="flip whole_flip pb-3">
                <div
                  className="front"
                  style={{ backgroundImage: `url(${item.image})` }}
                >
                  {/* <h1 className="text-shadow">OCEAN</h1> */}
                </div>
                <div className="back" style={{}}>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      height: "300px",
                    }}
                  >
                    <div>
                      <p className="" style={{ fontSize: "18px" }}>
                        {item.content}
                      </p>
                    </div>
                  </div>
                </div>
                <h4 className="our_team_rank mt-2">{item.name}</h4>
                <h6 className="our_team_rank mt-2">{item.title}</h6>
              </div>
            </Col>
          ))}
        </Row>
        <Row className="our_team_second_row">
          <Col md={2}></Col>
          <Col xl={4} lg={4} md={12} sm={12} xs={12} className="mb-5">
            <div className="flip whole_flip pb-3">
              <div
                className="front"
                style={{ backgroundImage: `url(${fahad})` }}
              >
                {/* <h1 className="text-shadow">OCEAN</h1> */}
              </div>
              <div className="back" style={{}}>
                {/* <h4>Salem Ododa</h4> */}
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "300px",
                  }}
                >
                  <div>
                    <p className="" style={{ fontSize: "18px" }}>
                      Muhammad Fahad is a certified Blockchain/NEAR developer with over 5
                      years experience in software development. Muhammad Fahad
                      worked in building tech startups related to Health Care
                      System.
                    </p>
                  </div>
                </div>
              </div>
              <h4 className="our_team_rank mt-2">Muhammad Fahad Ado</h4>
              <h6 className="our_team_rank mt-2">Chief Technical Officer</h6>
            </div>
          </Col>
          <Col xl={4} lg={4} md={12} sm={12} xs={12} className="mb-5">
            <div className="flip whole_flip pb-3">
              <div
                className="front"
                style={{ backgroundImage: `url(${salem})` }}
              >
                {/* <h1 className="text-shadow">OCEAN</h1> */}
              </div>
              <div className="back" style={{}}>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "300px",
                  }}
                >
                  <div>
                    <p className="" style={{ fontSize: "18px" }}>
                      I'm a backend developer and technology enthusiast in
                      general, and I use backend technologies to create
                      solutions to real-world problems. I also enjoy reading and
                      writing technical articles during my leisure time.
                    </p>
                  </div>
                </div>
              </div>
              <h4 className="our_team_rank mt-2">Salem Ododa</h4>
              <h6 className="our_team_rank mt-2">Backend Engineer</h6>
            </div>
          </Col>

          <Col md={2}></Col>
        </Row>
      </div>
    </div>
  );
}
