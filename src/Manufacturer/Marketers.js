import React, { useEffect } from "react";
import { Card, Col, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { Dropdown, DropdownMenu, DropdownToggle } from "reactstrap";
import { useState } from "react";
import { Table } from "reactstrap";
import "./DrugTable.css";
// import { drugData } from './drugData'
import { Spinner } from "react-bootstrap";
import { CSVLink } from "react-csv";
import { useCallback } from "react";
import { getMarketer } from "../utils/helper";
import { NotificationError } from "../utils/Notification";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";
export default function Marketers() {
  const { info } = useSelector((state) => state.account.account);
  const navigate = useNavigate();
  const [dropdown, setdropdown] = useState(false);
  const [loading, setLoading] = useState(false);
  const toggle1 = () => {
    setdropdown(!dropdown);
  };
  const [marketers, setMarketers] = useState([]);
  const getMarketers = useCallback(() => {
    setLoading(true);
    getMarketer(
      `/v1/get-marketer?type=Marketer&companyId=${info.id}`,
      (res) => {
        if (res.success) {
          setMarketers(res.result);
          setLoading(false);
        }
      },
      (err) => {
        console.error(err);
        toast(<NotificationError text="Failed, try again" />);
        setLoading(false);
      }
    );
  }, [info.id]);
  useEffect(() => {
    getMarketers();
  }, [getMarketers]);
  return (
    <div>
      <Card className="man_card shadow p-3">
        <Row>
          <Col xl={6} lg={6} md={6} sm={6} xs={6}>
            <h3 className="man_card_title">Marketers</h3>
          </Col>
          <Col xl={6} lg={6} md={6} sm={6} xs={6}>
            <div style={{ float: "right", display: "flex" }}>
              <div style={{ display: "inline" }}>
                <Dropdown toggle={toggle1} isOpen={dropdown}>
                  <DropdownToggle data-toggle="dropdown" tag="span">
                    <button className="man_button" style={{ marginRight: 5 }}>
                      Export As
                    </button>
                  </DropdownToggle>
                  <DropdownMenu className="dropdown_menu shadow mt-3">
                    <div className="">
                      <div className="drop_down_item">
                        <span className="p-3">
                          <CSVLink
                            data={marketers}
                            filename={"Marketers"}
                            className="csv"
                          >
                            CSV
                          </CSVLink>
                        </span>
                      </div>
                    </div>
                  </DropdownMenu>
                </Dropdown>
              </div>
              <div style={{ display: "inline" }}>
                <button
                  className="man_button"
                  onClick={() => navigate("/create-marketer?type=Marketer")}
                >
                  Create New
                </button>
              </div>
            </div>
          </Col>
        </Row>
        {/* <DrugTable /> */}

        <div className="mt-3">
          <center>
            {loading ? (
              <Spinner animation="border" size="lg" className="opacity-25" />
            ) : null}
          </center>
          <Table hover responsive className="table" size="">
            <thead className="">
              <tr>
                <th>S/N</th>
                <th>Full Name</th>
                <th>Email</th>
                <th>Phone Number</th>
                <th>Address</th>
              </tr>
            </thead>
            <tbody>
              {marketers &&
                marketers.map((item, index) => (
                  <tr>
                    <td>{index + 1}</td>
                    <td>{item.name}</td>
                    <td>{item.email}</td>
                    <td>{item.phone_number}</td>
                    <td>{item.address}</td>
                  </tr>
                ))}
            </tbody>
          </Table>
          {marketers.length === 0 ? <p className="text-center mt-5 text-secondary">You have not registered any marketer yet, click the "Create New" button to create one.</p> : null}
        </div>
      </Card>
    </div>
  );
}
