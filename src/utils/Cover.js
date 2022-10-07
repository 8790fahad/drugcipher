import React from "react";
import PropTypes from "prop-types";
import { Button } from "react-bootstrap";

const Cover = ({ name, login, coverImg }) => {
  if ((name, login, coverImg)) {
    return (
      <div
        className="d-flex  flex-column  p-3"
        style={{ background: "#000", minHeight: "100vh" }}
      >
        <div
          className="d-flex m-4 text-center"
          style={{ justifyContent: "space-between" }}
        >
          <h4 className="text-start text-light">{name}</h4>
          <Button
            onClick={login}
            variant="outline-light"
            className="rounded-pill"
          >
            Connect Wallet
          </Button>
        </div>
        <div className=" row text-light mt-5">
          <div className="col-md-5  m-4">
            <h1 className="text-center mt-4">Welcome to Drug Tracker</h1>
            <div
              style={{ fontSize: "24px", opacity: 0.8, lineHeight: "5vh" }}
              className="mt-4"
            >
              Authentic stock is managed and tracked efficiently using
              blockchain technology. This is addressed by using the smart
              contract which helps to track the movement of drugs from supplier
              to pharmacies and finally pharmacies to patient. duplicate drugs,
              expired drugs and fake drugs are completely avoided by using the
              blockchain technology.
            </div>
          </div>
          <div className="col-md-1" />
          <div className="col-md-5 mt-4">
            <img
              src={coverImg}
              alt=""
              style={{ marginTop: "5vh", width: "80vh", height: "40vh" }}
            />
          </div>
        </div>
        <p className="mt-auto text-secondary text-center">
          Powered by DrugTracker
        </p>
      </div>
    );
  }
  return null;
};

Cover.propTypes = {
  name: PropTypes.string,
};

Cover.defaultProps = {
  name: "",
};

export default Cover;
