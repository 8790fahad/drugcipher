import React, { useState } from "react";
import { useEffect } from "react";
import { useCallback } from "react";
import { Card, Col, Row, Table } from "react-bootstrap";
import { toast } from "react-toastify";
import { CardBody, Spinner } from "reactstrap";
import { _fetchApi } from "../../utils/helper";
import logo from "../../image/DRUG CIPHER (2).png";

import {
  NotificationError,
  // NotificationSuccess,
} from "../../utils/Notification";
import { ArrowLeftCircle, Eye } from "react-feather";
// import useQuery from "../../hooks/useQuery";
import { useNavigate } from "react-router-dom";

export default function KYCApproval() {
  // const query = useQuery()
  const navigate = useNavigate()

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
  // const approve = (item) => {
  //   _updateApi(
  //     "/v1/approved-kyc",
  //     item,
  //     (reps) => {
  //       if (reps.success) {
  //         toast(<NotificationSuccess text="Approved Successfully" />);
  //         setLoading(false);
  //         getPendingKYC();
  //       }
  //     },
  //     (err) => {
  //       console.error(err);
  //       toast(<NotificationError text="Failed, try again" />);
  //       setLoading(false);
  //     }
  //   );
  // };
  // const reject = (item) => {
  //   _updateApi(
  //     "/v1/reject-kyc",
  //     item,
  //     (reps) => {
  //       if (reps.success) {
  //         toast(<NotificationSuccess text="Approved Successfully" />);
  //         setLoading(false);
  //         getPendingKYC();
  //       }
  //     },
  //     (err) => {
  //       console.error(err);
  //       toast(<NotificationError text="Failed, try again" />);
  //       setLoading(false);
  //     }
  //   );
  // };
  useEffect(() => {
    getPendingKYC();
  }, [getPendingKYC]);
  return (
    <div className="container">
      <Card className="KYC_card shadow p-3">
        <div>
          <Row>
            <Col md={6} sm={6} xs={6}>
              <div onClick={() => navigate('/')} style={{ width: 'fit-content', cursor: 'pointer' }} data-toggle="tooltip"
                data-placement="bottom"
                title="Goto Home">
                <img
                  src={logo}
                  style={{ width: 70, borderRadius: 10 }}
                  alt=""
                  className="shadow"


                />{" "}
                <h4
                  style={{
                    display: "inline-block",
                    color: "rgb(3, 66, 110)",
                    marginRight: 30,
                  }}
                  className='dc'
                >
                  DrugCipher
                </h4>
              </div>
            </Col>
            <Col md={6} sm={6} xs={6}>
              <ArrowLeftCircle className='shadow p-3' size='4em' style={{ color: 'rgb(3, 66, 110)', float: 'right', cursor: 'pointer' }} onClick={() => navigate(-1)} />
            </Col>
          </Row>
        </div>
        <h3 className="man_card_title mt-4">KYC Approval</h3>
        <CardBody>
          {loading ? (
            <center>
              <Spinner />
            </center>
          ) : null}
          <Table hover responsive className="table" size="">
            <thead className="">
              <tr>
                <th className="">Company Name</th>
                <th className="">Company Phone</th>
                <th className="">Company Email</th>
                <th className="">Company Country</th>
                {/* <th className="">Pharmacist License</th>
                <th className="">superintendent License</th> */}
                <th className="">View</th>
              </tr>
            </thead>
            <tbody>
              {result.length
                ? result.map((item, index) => (
                  <tr key={index}>
                    <td>{item.company_name}</td>
                    <td>{item.company_phone}</td>
                    <td>{item.company_email}</td>
                    <td>{item.company_country}</td>
                    {/* <td>{item.pl_url}</td>
                    <td>{item.sp_url}</td> */}
                    <td className="">
                      {/* <button
                        className="man_button"
                        onClick={() => {
                          approve(item);
                        }}
                        style={{ marginRight: 10 }}
                      >
                        Approve{' '}<CheckCircle />
                      </button>
                      <button
                        onClick={() => {
                          reject(item);
                        }}
                        className='man_button'
                      >
                        Reject{' '}<XCircle />
                      </button> */}
                      <button className='man_button' onClick={() => navigate(`/view-KYC-approval?companyName=${item.company_name}&companyPhone=${item.company_phone}&companyEmail=${item.company_email}&companyCountry=${item.company_country}&pl_url=${item.pl_url}&sp_url=${item.sp_url}`)}><Eye size='1em' />{' '}View</button>
                    </td>
                  </tr>
                ))
                : null}
            </tbody>
          </Table>
        </CardBody>
      </Card>
      <div className='text-center text-secondary'>
        <p>Copyright © {new Date().getFullYear()} DrugCipher. All rights reserved.</p>
      </div>
    </div>
  );
}
