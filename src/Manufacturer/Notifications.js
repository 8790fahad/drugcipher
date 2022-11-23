import moment from "moment";
import React, { useCallback, useEffect, useState } from "react";
import { Card, Col, Row } from "react-bootstrap";
import { Trash } from "react-feather";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import { Alert, Spinner } from "reactstrap";
import { deleteDrugInfo, getDrugs } from "../utils/contract";
import { _fetchApi } from "../utils/helper";
import { NotificationError, NotificationSuccess } from "../utils/Notification";
export default function Notifications() {
  const { info } = useSelector((state) => state.account.account);
  const [loadingDelete, setLoadingDelete] = useState(false);
  const [loading, setLoading] = useState(false);
  const [loadingScanDel, setLoadingScanDel] = useState(false);
  const [drugData, setDrugData] = useState([]);
  const [drugData1, setDrugData1] = useState([]);
  const [drugHistory, setDrugHistory] = useState([]);
  const today = moment().format("YYYY-MM-DD");
  const [loadingScan, setLoadingScan] = useState(false);
  const drugHistoryReportNotify = useCallback(() => {
    setLoadingScan(true);
    _fetchApi(
      `/v1/drug-history-report?company_id=${info.id}&query_type=notify`,
      (res) => {
        if (res.success && res.result !== null && res.result[0] !== null) {
          setDrugHistory([res.result]);
        }
        setLoadingScan(false);
      },
      (err) => {
        console.log(err);
        setLoadingScan(false);
      }
    );
  }, [info.id]);
  const drugHistoryReportNotifyUpdate = useCallback(() => {
    _fetchApi(
      `/v1/drug-history-report?company_id=${info.id}&query_type=notify_update`,
      (res) => {
        if (res.success) {
        }
      },
      (err) => {
        console.log(err);
      }
    );
  }, [info.id]);
  const drugHistoryReportDelete = useCallback(() => {
    setLoadingScanDel(true);
    _fetchApi(
      `/v1/drug-history-report?company_id=${info.id}&query_type=notify_delete`,
      (res) => {
        toast(
          <NotificationSuccess text="Scan drug history deleted successfully" />
        );
        setLoadingScanDel(false);
        drugHistoryReportNotifyUpdate();
        drugHistoryReportNotify();
      },
      (err) => {
        toast(
          <NotificationError text="Failed to delete scan  drug history info." />
        );
        setLoadingScanDel(false);
      }
    );
  }, [drugHistoryReportNotify, drugHistoryReportNotifyUpdate, info.id]);
  const getDrugInfoList = useCallback(async () => {
    try {
      setLoading(true);
      let list = await getDrugs(info.id);
      let arr = [];
      let arr1 = [];
      list &&
        list
          .filter((state) => state.company_id === info.id)
          .forEach((item) => {
            let d = moment(item.expiry_date).diff(today, "days");
            console.log(d);
            if (d <= 60 || !d > 0) {
              arr.push(item);
            } else if (d < 1) {
              arr1.push(item);
            }
          });
      setDrugData(arr);
      setDrugData1(arr1);
    } catch (error) {
      console.log({ error });
      setLoading(false);
    } finally {
      setLoading(false);
    }
  }, [info.id, today]);

  const deleteDrugInfoApi = async (id) => {
    console.log(id);
    setLoadingDelete(true);
    try {
      await deleteDrugInfo(id).then((resp) => getDrugInfoList());
      toast(<NotificationSuccess text="Drug info deleted successfully" />);
      setLoadingDelete(false);
    } catch (error) {
      toast(<NotificationError text="Failed to delete drug info." />);
    } finally {
      setLoadingDelete(false);
    }
  };

  useEffect(() => {
    getDrugInfoList();
    drugHistoryReportNotify();
  }, [drugHistoryReportNotify, getDrugInfoList]);
  useEffect(() => {
    setTimeout(() => {
      drugHistoryReportNotifyUpdate();
    }, 200);
  }, [drugHistoryReportNotifyUpdate]);
  return (
    <div>
      <Card className="man_card shadow p-3">
        <h3 className="man_card_title">Notifications</h3>
        <center>{loadingScan ? <Spinner size="sm" /> : null}</center>
        <h5 className="man_card_title">New Scans</h5>
        {drugHistory.length ? (
          drugHistory.map((item) => (
            <Row>
              <Col xl={10} lg={10} md={10} sm={10} xs={10}>
                <Card className="not_card p-3 mb-3 shadow">
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                    }}
                  >
                    <div>{item.drug_brand_name}</div>
                    <div>{item.generic_name}</div>
                    <div>{item.country ? item.country : "Anon"}</div>
                    <div>{moment(item.date).format("YYYY-MM-DD")}</div>
                  </div>
                </Card>
              </Col>
              <Col xl={2} lg={2} md={2} sm={2} xs={2}>
                <Card className="not_card p-3 mb-3 shadow">
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                    }}
                  >
                    <div>
                      <p className="m-0">
                        {!item.valid ? "Valid Scan" : "Invalid Scan"}
                      </p>
                    </div>
                    <div
                      onClick={drugHistoryReportDelete}
                      style={{ cursor: "pointer" }}
                    >
                      {loadingScanDel ? (
                        <Spinner size="sm" />
                      ) : (
                        <Trash className="grid" />
                      )}
                    </div>
                  </div>
                </Card>
              </Col>
            </Row>
          ))
        ) : (
          <Alert>
            <center>No new drug scan</center>
          </Alert>
        )}
        <hr></hr>
        <center>{loading ? <Spinner size="sm" /> : null}</center>
        <h5 className="man_card_title">About to expire</h5>
        {drugData.length ? (
          drugData.map((item) => (
            <Row>
              <Col xl={10} lg={10} md={10} sm={10} xs={10}>
                <Card className="not_card p-3 mb-3 shadow">
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                    }}
                  >
                    <div>{item.drug_brand_name}</div>
                    <div>{item.generic_name}</div>
                    <div>{item.nafdac_number}</div>
                    <div>{item.expiry_date}</div>
                  </div>
                </Card>
              </Col>
              <Col xl={2} lg={2} md={2} sm={2} xs={2}>
                <Card className="not_card p-3 mb-3 shadow">
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                    }}
                  >
                    <div>
                      <p className="m-0">{item.formulation_type}</p>
                    </div>
                    <div
                      onClick={() => {
                        deleteDrugInfoApi(item.id);
                      }}
                      style={{ cursor: "pointer" }}
                    >
                      {loadingScanDel ? (
                        <Spinner size="sm" />
                      ) : (
                        <Trash className="grid" />
                      )}
                    </div>
                  </div>
                </Card>
              </Col>
            </Row>
          ))
        ) : (
          <Alert>
            <center>No new drug about to expire</center>
          </Alert>
        )}
        <hr></hr>
        <h5 className="man_card_title">Expired Drugs</h5>
        {drugData1.length ? (
          drugData1.map((item) => (
            <Row>
              <Col xl={10} lg={10} md={10} sm={10} xs={10}>
                <Card className="not_card p-3 mb-3 shadow">
                  <div
                    style={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <div>{item.drug_brand_name}</div>
                    <div>{item.generic_name}</div>
                    <div>{item.nafdac_number}</div>
                    <div>{item.expiry_date}</div>
                  </div>
                </Card>
              </Col>
              <Col xl={2} lg={2} md={2} sm={2} xs={2}>
                <Card className="not_card p-3 mb-3 shadow">
                  <div
                    style={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <div>
                      <p className="m-0">{item.formulation_type}</p>
                    </div>
                    <div
                      style={{ cursor: "pointer" }}
                      onClick={() => {
                        deleteDrugInfoApi(item.id);
                      }}
                    >
                      <Trash className="grid" />
                    </div>
                  </div>
                </Card>
              </Col>
            </Row>
          ))
        ) : (
          <Alert>
            <center>No new drug expired Drugs</center>
          </Alert>
        )}
      </Card>
    </div>
  );
}
