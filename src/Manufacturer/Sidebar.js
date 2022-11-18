/* eslint-disable no-unused-vars */
import React from "react";
import "./Manufacturer.css";
import logo from "../image/DRUG CIPHER (2).png";
// import overview from '../image/overview.png'
// import overview1 from '../image/overview1.png'
// import kyc from '../image/kyc.png'
// import kyc1 from '../image/kyc1.png'
// import view1 from '../image/view1.png'
// import view from '../image/view.png'
// import get_help from '../image/get_help.png'
// import get_help1 from '../image/get_help1.png'
// import add from '../image/add.png'
// import add1 from '../image/add1.png'
import logout from "../image/logout.png";
import profilee from "../image/Profile.png";
import pills1 from "../image/pills1.png";
import pills from "../image/pills.png";
import sole from "../image/sole.png";
import sole1 from "../image/sole1.png";
import marketers from "../image/marketers.png";
import marketers1 from "../image/marketers1.png";
import image_account from "../image/account.png";

import { useLocation, useNavigate } from "react-router-dom";
import { clearToken } from "../utils/helper";
export default function Sidebar() {
  const navigate = useNavigate();
  const location = useLocation();
  return (
    <div className="man_sidebar m-0">
      <div className="">
        <div className="">
          <img
            src={logo}
            alt="DrugCipher Logo"
            style={{ borderRadius: 10, width: 50, margin: "30px 10px" }}
          />
        </div>
        <div className="sidemenu_div">
          {/* <p className={`sidemenu ${location.pathname === '/overview' && 'active_side_menu'}`}
                        onClick={() => navigate('/overview')}>
                        {location.pathname === '/overview' ?
                            <img src={overview1} style={{ width: '20px', marginRight: 10 }} />
                            : <img src={overview} style={{ width: '20px', marginRight: 10 }} />}
                        {' '}Overview</p> */}

          {/* <p className={`sidemenu ${location.pathname === '/KYC' && 'active_side_menu'}`}
                        onClick={() => navigate('/KYC')}>
                        {location.pathname === '/KYC' ?
                            <img src={kyc1} style={{ width: '20px', marginRight: 10 }} />
                            : <img src={kyc} style={{ width: '22px', marginRight: 10 }} />}
                        {' '}KYC</p> */}

          {/* <p className={`sidemenu ${location.pathname === '/register-new-drug' && 'active_side_menu'}`}
                        onClick={() => navigate('/register-new-drug')}>
                        {location.pathname === '/register-new-drug' ?
                            <img src={add1} style={{ width: '22px', marginRight: 10 }} />
                            : <img src={add} style={{ width: '20px', marginRight: 10 }} />}
                        {' '}Register New Drug</p> */}

          <p
            className={`sidemenu ${
              location.pathname === "/registered-drugs" && "active_side_menu"
            }`}
            onClick={() => navigate("/registered-drugs")}
          >
            {location.pathname === "/registered-drugs" ? (
              <img
                src={pills1}
                style={{ width: "22px", marginRight: 10 }}
                alt=""
              />
            ) : (
              <img
                src={pills}
                style={{ width: "22px", marginRight: 10 }}
                alt=""
              />
            )}{" "}
            Registered Drugs
          </p>

          <p
            className={`sidemenu ${
              location.pathname === "/marketers" && "active_side_menu"
            }`}
            onClick={() => navigate("/marketers")}
          >
            {location.pathname === "/marketers" ? (
              <img
                src={marketers}
                style={{ width: "22px", marginRight: 10 }}
                alt=""
              />
            ) : (
              <img
                src={marketers1}
                style={{ width: "20px", marginRight: 10 }}
                alt=""
              />
            )}{" "}
            Marketers
          </p>

          <p
            className={`sidemenu ${
              location.pathname === "/sole-agents" && "active_side_menu"
            }`}
            onClick={() => navigate("/sole-agents")}
          >
            {location.pathname === "/sole-agents" ? (
              <img
                src={sole}
                style={{ width: "22px", marginRight: 10 }}
                alt=""
              />
            ) : (
              <img
                src={sole1}
                style={{ width: "20px", marginRight: 10 }}
                alt=""
              />
            )}{" "}
            Sole Agents
          </p>

          <p
            className={`sidemenu ${
              location.pathname === "/profile" && "active_side_menu"
            }`}
            onClick={() => navigate("/profile")}
          >
            {location.pathname === "/profile" ? (
              <img
                src={image_account}
                style={{ width: "22px", marginRight: 10 }}
                alt=""
              />
            ) : (
              <img
                src={profilee}
                style={{ width: "20px", marginRight: 10 }}
                alt=""
              />
            )}{" "}
            Profile
          </p>

          <div className="sidemenu_bottom m-0 p-0">
            {/* <p className={`sidemenu_bottom_icon ${location.pathname === '/Gethelp' && 'active_side_menu'}`} onClick={() => navigate('/Gethelp')}><img src={get_help} style={{ width: '22px', marginRight: 10 }} alt="" />{' '}Get Help</p> */}
            <p
              className={`sidemenu_bottom_icon ${
                location.pathname === "/" && "active_side_menu"
              }`}
              onClick={() => {
                clearToken(() => navigate("/"));
              }}
            >
              <img
                src={logout}
                style={{ width: "22px", marginRight: 10 }}
                alt=""
              />{" "}
              Logout
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
