/* eslint-disable no-unused-vars */
import React from "react";
import { Col, Row } from "react-bootstrap";
import InputField from "../CustomFiles/InputField";
import search from "../image/search.png";
import cart from "../image/cart.png";
import bell from "../image/bell.png";
import help from "../image/help.png";
import account from "../image/account.png";
import "./MarketPlace.css";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import drugcipherIcon from "../image/DCIcon5.png";

export default function PharmacyNavMenu() {
  const navigate = useNavigate();
  const cartList = useSelector((state) => state.cart.cartList);
  let totalItems = cartList.length;
  return (
    <div className="pharmacy_nav_menu" style={{ positon: "sticky", top: 0 }}>
      {/* <h1>{JSON.stringify(total)}: lldkjd</h1> */}
      <Row className="m-0">
        <Col md={3}>
          <img
            src={drugcipherIcon}
            alt="drugcipherlogo"
            style={{ width: 55, marginTop: 7 }}
            onClick={() => navigate("/drug-cipher/market-place/")}
          />
          <p
            className="dc_name"
            onClick={() => navigate("/drug-cipher/market-place/")}
          >
            Drug Cipher
          </p>
        </Col>
        <Col md={6} className="">
          <div style={{ marginTop: 13 }}>
            <div>
              <InputField
                type={"text"}
                name="searchDrugs"
                placeholder={"Search Drugs"}
                className="search_input"
              />
            </div>
          </div>
        </Col>
        <Col md={3}>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "20px",
              height: "70px",
            }}
          >
            <div
              className="icon_div p-1"
              style={{ position: "relative" }}
              onClick={() => navigate("/market-place/cart")}
            >
              <div className="absolute">
                <span>{totalItems}</span>
              </div>
              <img src={cart} alt="" />
            </div>
            <div className="icon_div p-1">
              <img src={bell} alt="" />
            </div>
            <div className="icon_div p-1">
              <img src={help} alt="" />
            </div>
            <div className="icon_div p-1">
              <span>Account</span> <img src={account} alt="" />
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
}
