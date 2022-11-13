import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { Dropdown, DropdownMenu, DropdownToggle } from "reactstrap";
import { useState } from "react";
import { Table } from "reactstrap";
import "./DrugTable.css";
// import { drugData } from './drugData'
import { CSVLink } from "react-csv";
import { useCallback } from "react";
import { getMarketer } from "../utils/helper";
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
        }
      },
      (err) => {
        console.error(err);
        toast(<NotificationError text="Failed, try again" />);
        setLoading(false);
      }
    );
  });

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
          <Table hover responsive className="table" size="">
            <thead className="">
              <tr>
                <th>S/N</th>
                <th>Company Name</th>
                <th>Marketer Full Name</th>
                <th>Marketer Phone</th>
                <th>Marketer Email</th>
                <th>Marketer Address</th>
                <th>License</th>
              </tr>
            </thead>
            <tbody>
              {marketers.map((item, index) => (
                <tr>
                  <td>{index + 1}</td>
                  <td>{item.companyName}</td>
                  <td>{item.marketerFullName}</td>
                  <td>{item.marketerPhone}</td>
                  <td>{item.marketerEmail}</td>
                  <td>{item.marketerAddress}</td>
                  <td>{item.license}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </Card>
    </div>
  );
}
