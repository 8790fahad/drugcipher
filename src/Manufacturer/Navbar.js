import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";
import cart from "../image/cart.png";
import bell from "../image/bell.png";
import help from "../image/help.png";
import account from "../image/account.png";
import { useNavigate } from "react-router-dom";
import InputField from "../CustomFiles/InputField";
import { Dropdown, DropdownMenu, DropdownToggle } from "reactstrap";
export default function Navbar() {
  const navigate = useNavigate();
  const [dropdown, setdropdown] = useState(false);
  const toggle1 = () => {
    setdropdown(!dropdown);
  };
  return (
    <div>
      <Row className="m-0">
        <Col md={9}>
          <div>
            <input
              type="text"
              placeholder="Search"
              className="man_search_field shadow"
            />
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
              onClick={() => navigate("/notifications")}
            >
              <div className="absolute">
                <span>11</span>
              </div>
              <img src={bell} />
            </div>
            {/* <div className='icon_div p-1'>
                            <img src={bell} />
                        </div> */}
            <div className="icon_div p-1">
              <img src={help} />
            </div>

            <Dropdown toggle={toggle1} isOpen={dropdown}>
              <DropdownToggle data-toggle="dropdown" tag="span">
                <div className="icon_div p-1">
                  <span className="account">Account</span> <img src={account} />
                </div>
              </DropdownToggle>
              <DropdownMenu className="dropdown_menu shadow">
                <div className="">
                  <div className="drop_down_item">
                    <span className="p-3" onClick={() => navigate("/profile")}>
                      Profile
                    </span>
                  </div>
                  <div className="drop_down_item">
                    <span className="p-3">Connect NEAR</span>
                  </div>
                </div>
              </DropdownMenu>
            </Dropdown>
          </div>
        </Col>
      </Row>
    </div>
  );
}
