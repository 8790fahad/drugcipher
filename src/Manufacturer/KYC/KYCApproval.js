import React, { useState } from "react";
import { useEffect } from "react";
import { useCallback } from "react";
import { Card, Col, Form, Row, Table } from "react-bootstrap";
import { toast } from "react-toastify";
import { Button, CardBody, CardHeader, Spinner } from "reactstrap";
import { _fetchApi, _updateApi } from "../../utils/helper";
import {
  NotificationError,
  NotificationSuccess,
} from "../../utils/Notification";
export default function KYCApproval() {
  const [result, setResult] = useState([]);
  const [loading, setLoading] = useState(false);
  const getPendingKYC = useCallback(() => {
    setLoading(true);
    _fetchApi(
      "/v1/get-pending-kyc",
      (reps) => {
        if (reps.success) {
          setResult(reps.result);
          setLoading(false);
        }
      },
      (err) => {
        console.error(err);
        toast(<NotificationError text="Failed, try again" />);
        setLoading(false);
      }
    );
  }, []);
  const approve = (item) => {
    _updateApi(
      "/v1/approved-kyc",
      item,
      (reps) => {
        if (reps.success) {
          toast(<NotificationSuccess text="Approved Successfully" />);
          setLoading(false);
          getPendingKYC();
        }
      },
      (err) => {
        console.error(err);
        toast(<NotificationError text="Failed, try again" />);
        setLoading(false);
      }
    );
  };
  const reject = (item) => {
    _updateApi(
      "/v1/reject-kyc",
      item,
      (reps) => {
        if (reps.success) {
          toast(<NotificationSuccess text="Approved Successfully" />);
          setLoading(false);
          getPendingKYC();
        }
      },
      (err) => {
        console.error(err);
        toast(<NotificationError text="Failed, try again" />);
        setLoading(false);
      }
    );
  };
  useEffect(() => {
    getPendingKYC();
  }, [getPendingKYC]);
  return (
    <div className="container">
      <Card className="KYC_card shadow p-3">
        <CardHeader>KYC List</CardHeader>
        <CardBody>
          {loading ? (
            <center>
              <Spinner />
            </center>
          ) : null}
          <Table>
            <thead>
              <th className="text-center">Company Name</th>
              <th className="text-center">Company Phone</th>
              <th className="text-center">Company Email</th>
              <th className="text-center">Company Country</th>
              <th className="text-center">View</th>
            </thead>
            <tbody>
              {result.length
                ? result.map((item, index) => (
                    <tr key={index}>
                      <td>{item.company_name}</td>
                      <td>{item.company_phone}</td>
                      <td>{item.company_email}</td>
                      <td>{item.company_country}</td>
                      <td className="text-center">
                        <Button
                          className="ml-2"
                          onClick={() => {
                            approve(item);
                          }}
                        >
                          Approve
                        </Button>
                        <Button
                          onClick={() => {
                            reject(item);
                          }}
                        >
                          Reject
                        </Button>
                      </td>
                    </tr>
                  ))
                : null}
            </tbody>
          </Table>
        </CardBody>
      </Card>
    </div>
  );
}
