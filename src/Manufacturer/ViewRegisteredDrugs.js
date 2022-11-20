import React, { useCallback } from "react";
import { Card, Col, Form, Row } from "react-bootstrap";
// import DrugTable from './DrugTable'
import { useNavigate } from "react-router-dom";
import { Dropdown, DropdownMenu, DropdownToggle, Spinner } from "reactstrap";
import { useState } from "react";
import { Table } from "reactstrap";
import "./DrugTable.css";
import Modal from "react-bootstrap/Modal";
import { Send, X } from "react-feather";
import { CSVLink } from "react-csv";
import { Grid } from "react-feather";
import { getDrugs, recallDrug } from "../utils/contract";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { NotificationError, NotificationSuccess } from "../utils/Notification";
import { toast } from "react-toastify";

export default function ViewRegisteredDrugs() {
  const navigate = useNavigate();
  const { info } = useSelector((state) => state.account.account);
  const [dropdown, setdropdown] = useState(false);
  const [loading, setLoading] = useState(false);
  const [drugData, setDrugData] = useState([]);
  const [modal, setModal] = useState(false);
  const [item, setItem] = useState(false);
  const [loadingRemark, setLoadingRemark] = useState(false);
  const [remark, setRemark] = useState("");
  const handleClose = () => {
    setModal(!modal);
  };
  const toggle1 = () => {
    setdropdown(!dropdown);
  };
  const toggle2 = (index) => {
    let arr = [];
    drugData &&
      drugData.forEach((item, ind) => {
        if (index === ind) {
          console.log(index, ind);
          arr.push({ ...item, toggle: true });
        } else {
          arr.push({ ...item, toggle: false });
        }
      });
    setDrugData(arr);
  };
  const getDrugInfoList = useCallback(async () => {
    try {
      setLoading(true);
      let list = await getDrugs(info.id);
      let arr = [];
      list &&
        list
          .filter((state) => state.company_id === info.id)
          .forEach((item) => {
            arr.push({ ...item, toggle: false });
          });
      setDrugData(arr);
    } catch (error) {
      console.log({ error });
      setLoading(false);
    } finally {
      setLoading(false);
    }
  }, [info.id]);
  useEffect(() => {
    getDrugInfoList();
  }, [getDrugInfoList]);
  const onChange = ({ target: { value } }) => {
    setRemark(value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoadingRemark(true);
    recallDrug({
      drug_id: item.id,
      remark,
    })
      .then((resp) => {
        console.log(resp);
        toast(<NotificationSuccess text="Drug recall successfully." />);
        setLoadingRemark(false);
        getDrugInfoList();
        handleClose();
      })
      .catch((err) => {
        console.log(err);
        toast(<NotificationError text="Failed to recall drug." />);
        setLoadingRemark(false);
      });
  };
  return (
    <div>

      <Card className="man_card shadow p-3">
        <Row>
          <Col xl={6} lg={6} md={6} sm={6} xs={6}>
            <h3 className="man_card_title">Registered Drugs</h3>
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
                            data={drugData}
                            filename={"Drugs Data"}
                            className="text-dark"
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
                  onClick={() => navigate("/register-new-drug")}
                >
                  Create New
                </button>
              </div>
            </div>
          </Col>
        </Row>
        <div className="mt-3">
          <center>{loading ? <Spinner size="lg" /> : null}</center>
          <Table hover responsive className="table" size="">
            <thead className="">
              <tr>
                <th>S/N</th>
                <th>Drug Name</th>
                <th>Drug Generic Name</th>
                <th>Manufactured Date</th>
                <th>Expiry date</th>
                <th>Dosages</th>
                <th className="text-center">Action</th>
              </tr>
            </thead>
            <tbody>
              {drugData &&
                drugData.map((item, index) => (
                  <tr className={`${item.status ? "bg-danger text-white" : ""}`}>
                    <td>{index + 1}</td>
                    <td>{item.drug_brand_name}</td>
                    <td>{item.generic_name}</td>
                    <td>{item.date_manufacture}</td>
                    <td className="text">{item.expiry_date}</td>
                    <td>{item.unit_packaging}</td>
                    <td className="text-center">
                      <Dropdown
                        toggle={() => toggle2(index)}
                        isOpen={item.toggle}
                      >
                        <DropdownToggle data-toggle="dropdown" tag="span">
                          <Grid className="grid" />
                        </DropdownToggle>
                        <DropdownMenu className="dropdown_menu shadow">
                          <div className="">
                            <div
                              className="drop_down_item"
                              onClick={() => {
                                setModal(true);
                                setItem(item);
                              }}
                            >
                              <span className="p-3">Recall Drug</span>
                            </div>
                            <div
                              className="drop_down_item"
                              onClick={() => {
                                navigate(`/overview?id=${item.id}`);
                              }}
                            >
                              <span className="p-3">Overview</span>
                            </div>
                          </div>
                        </DropdownMenu>
                      </Dropdown>
                    </td>
                  </tr>
                ))}
            </tbody>
          </Table>
          {drugData.length === 0 ? (
            <p className="text-center mt-5 text-secondary">
              You have not registered any drug yet, click the "Create New"
              button to create one.
            </p>
          ) : null}
        </div>
      </Card>
      <Modal show={modal} onHide={handleClose}>
        <Form onSubmit={handleSubmit}>
          <Modal.Header closeButton>
            <Modal.Title>Recall Drug</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <textarea
              placeholder="Remark in details"
              style={{ height: 150 }}
              className="man_input_fields mt-4"
              onChange={onChange}
              name="message"
              required
            ></textarea>
          </Modal.Body>
          <Modal.Footer>
            <button className="man_button" onClick={handleClose}>
              <X /> Close
            </button>
            <button
              type="submit"
              disabled={loadingRemark}
              className="man_button"
            >
              {loadingRemark ? <Spinner size="sm" /> : <Send />} Send
            </button>
          </Modal.Footer>
          ``
        </Form>
      </Modal>
    </div>
  );
}
