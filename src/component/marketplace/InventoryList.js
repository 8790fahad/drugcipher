import React, { useCallback, useEffect, useState } from "react";
import {
  Alert,
  Button,
  Card,
  Col,
  Form,
  Row,
  Spinner,
  Table,
} from "react-bootstrap";
import moment from "moment";
import { useNavigate } from "react-router-dom";
import {
  getDrugs,
  updateDrugPrice,
  viewDrugHistory,
} from "../../utils/contract";
import useQuery from "../../hooks/useQuery";
import Loader from "../../utils/loader";
import DrugAlert from "./DrugAlert";
import DaterangeSelector from "./DateRange";
function InventoryList() {
  const navigate = useNavigate();
  const query = useQuery();
  const drug_code = query.get("drug_code");
  const [loading, setLoading] = useState(false);
  const [drugs, setDrugs] = useState([]);
  const [reorderDrugs, setReorderDrug] = useState([]);
  const [updateLoading, setUpdateLoading] = useState(false);
  const [expiredDrug, setExpiredDrug] = useState([]);
  const getDrugsList = useCallback(async () => {
    try {
      setLoading(true);
      let drugs = await getDrugs();
      console.log(drugs);
      const arr = [];
      const reoder = [];
      const expired = [];
      drugs && drugs.map((item) => arr.push({ ...item, enable: false }));
      setDrugs(arr);
      drugs.forEach((item) => {
        if (item.reorder_level >= item.balance) {
          reoder.push(item);
        }
      });
      drugs.forEach((item) => {
        if (moment().add("1", "month").diff(item.expiry_date) > 0) {
          expired.push(item);
        }
      });
      setReorderDrug(reoder);
      setExpiredDrug(expired);
    } catch (error) {
      console.log({ error });
      setLoading(false);
    } finally {
      setLoading(false);
    }
  }, []);
  const updateSellingPrice = async (item_code, new_price) => {
    try {
      setUpdateLoading(true);
      // await updateDrugPrice(item_code, new_price);
      getDrugsList();
    } catch {
      setUpdateLoading(false);
    } finally {
      setUpdateLoading(false);
    }
  };

  useEffect(() => {
    getDrugsList();
  }, [getDrugsList]);
  const enableEdit = (item, index) => {
    const arr = [];
    drugs.forEach((ite, ind) => {
      if (index === ind) {
        arr.push({ ...item, enable: !item.enable });
      } else {
        arr.push({ ...ite, enable: false });
      }
    });
    setDrugs(arr);
  };
  const ChangeSellingPrice = (item, index, value) => {
    const arr = [];
    drugs.forEach((ite, ind) => {
      if (index === ind) {
        arr.push({ ...item, selling_price: value });
      } else {
        arr.push(ite);
      }
    });
    setDrugs(arr);
  };
  return (
    <div className=" m-0 row mt-3">
      <div className="col-md-2">
        <DrugAlert title="Reorder Alert">
          <ul style={{ padding: 2 }}>
            {reorderDrugs.map((item, i) => (
              <Table key={i}>
                {item.drug_name}{" "}
                <b>{`(Quantity Remaining  ${item.balance})`}</b>
              </Table>
            ))}
          </ul>
        </DrugAlert>
      </div>
      <div className="col-md-8">
        <Card centered style={{ height: "97vh" }}>
          <Card.Header>
            <Card.Title>
              <Row>
                <Col md={5}>
                  <Button size="sm" variant="dark" onClick={() => navigate(-1)}>
                    Back <i className="bi arrow-back" />
                  </Button>
                </Col>
                <Col md={3}>
                  <div className="text-center">
                    {!drug_code ? "Drugs Inventory" : "Drug History"}
                  </div>
                </Col>
              </Row>
            </Card.Title>
          </Card.Header>
          <Card.Body>
            {!drug_code ? (
              <Button
                variant="dark"
                size="sm"
                onClick={() => {
                  navigate("/add-new-drug");
                }}
              >
                Add New Drug
              </Button>
            ) : null}
            {loading && drug_code === null ? <Loader /> : ""}
            {!drug_code ? (
              <Table striped bordered className="mt-2">
                <thead>
                  <tr>
                    <th className="text-center">Edit</th>
                    <th className="text-center">Supplier Name</th>
                    <th className="text-center">Drug Name</th>
                    <th className="text-center">Quantity</th>
                    <th className="text-center">Selling Price</th>
                    <th className="text-center">Owner</th>
                    <th className="text-center">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {drugs &&
                    drugs.map((item, index) => (
                      <tr key={index}>
                        <td className="text-center">
                          {item.enable ? (
                            <>
                              <Button
                                size="sm"
                                variant="dark"
                                onClick={() => {
                                  updateSellingPrice(
                                    item.drug_code,
                                    item.selling_price
                                  );
                                }}
                              >
                                {updateLoading ? (
                                  <Spinner
                                    animation="border"
                                    role="status"
                                    size="sm"
                                    className="opacity-25"
                                  ></Spinner>
                                ) : (
                                  "Update"
                                )}
                              </Button>
                              {"  "}
                              <Button
                                size="sm"
                                variant="outline-dark"
                                outline
                                onClick={() => {
                                  enableEdit(item, index);
                                }}
                              >
                                Cancel
                              </Button>
                            </>
                          ) : (
                            <Button
                              size="sm"
                              variant="dark"
                              onClick={() => {
                                enableEdit(item, index);
                              }}
                            >
                              edit
                            </Button>
                          )}
                        </td>
                        <td>{item.supplier_name}</td>
                        <td>{`${item.drug_name} (${item.generic_name})`}</td>
                        <td className="text-center">{item.balance}</td>
                        <td className="text-end">
                          {item.enable ? (
                            <Form.Control
                              type="number"
                              placeholder="Enter Selling Price"
                              size="sm"
                              value={item.selling_price}
                              onChange={({ target: { value } }) => {
                                ChangeSellingPrice(item, index, value);
                              }}
                              className="text-end"
                            />
                          ) : (
                            item.selling_price
                          )}
                        </td>
                        <td>{item.owner}</td>
                        <td className="text-center">
                          <Button
                            size="sm"
                            variant="dark"
                            onClick={() => {
                              navigate(
                                `/inventory?drug_code=${item.drug_code}`
                              );
                            }}
                          >
                            view
                          </Button>
                        </td>
                      </tr>
                    ))}
                </tbody>
              </Table>
            ) : (
              <DrugHistoryTable drug_code={drug_code} />
            )}

            {!drugs.length && drug_code === null ? (
              <Alert size="sm" className="text-center">
                {" "}
                No data to display
              </Alert>
            ) : (
              ""
            )}
          </Card.Body>
        </Card>
      </div>
      <div className="col-md-2">
        <DrugAlert title="Expiry Alert">
          <ul style={{ padding: 2 }}>
            {expiredDrug.map((drug, i) => (
              <Table key={i}>
                {drug.drug_name}{" "}
                <b>{`(Expires ${moment(drug.expiry_date)
                  .endOf("day")
                  .fromNow()})`}</b>
              </Table>
            ))}
          </ul>
        </DrugAlert>
      </div>
    </div>
  );
}

const DrugHistoryTable = ({ drug_code }) => {
  const today = moment().format("YYYY-MM-DD");
  const _today = moment(today).add("1", "months").format("YYYY-MM-DD");
  const _from = moment(today).subtract("6", "months").format("YYYY-MM-DD");
  const [range, setRange] = useState({ from: _from, to: _today });
  const [drugs, setDrugs] = useState([]);
  const [loading, setLoading] = useState(false);
  const handleRangeChange = ({ target: { name, value } }) => {
    setRange((p) => ({ ...p, [name]: value }));
  };
  const _viewDrugHistory = useCallback(async () => {
    try {
      setLoading(true);
      const arr = []
      // await viewDrugHistory();
      console.log(arr);
      const _arr = [];
      arr.forEach((item) => {
        if (
          moment(item.receive_date).isBetween(range.from, range.to) &&
          item.drug_code === drug_code
        ) {
          _arr.push(item);
        }
      });
      setDrugs(_arr);
    } catch (error) {
      console.log({ error });
      setLoading(false);
    } finally {
      setLoading(false);
    }
  }, [drug_code, range.to, range.from]);
  useEffect(() => {
    _viewDrugHistory();
  }, [_viewDrugHistory]);
  return (
    <>
      <DaterangeSelector
        from={range.from}
        to={range.to}
        handleChange={handleRangeChange}
      />
      {loading ? <Loader /> : ""}
      <Table striped bordered className="mt-2">
        <thead>
          <tr>
            <th className="text-center">Receive Date</th>
            <th className="text-center">Drug Name</th>
            <th className="text-center">Qty In</th>
            <th className="text-center">Qty Out</th>
            <th className="text-center">Selling Price</th>
            <th className="text-center">Owner</th>
          </tr>
        </thead>
        <tbody>
          {drugs &&
            drugs.map((item, index) => (
              <tr key={index}>
                <td className="text-end">{item.receive_date}</td>
                <td>{item.drug_name}</td>
                <td className="text-center">{item.qty_in}</td>
                <td className="text-center">{item.qty_out}</td>
                <td className="text-end">{item.selling_price}</td>
                <td>{item.owner}</td>
              </tr>
            ))}
        </tbody>
      </Table>
      {!drugs.length ? (
        <Alert size="sm" className="text-center">
          {" "}
          No data to display
        </Alert>
      ) : (
        ""
      )}
    </>
  );
};

export default InventoryList;
