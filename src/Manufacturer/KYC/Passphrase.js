import React, { useState } from "react";
import { Card, Col, Form, Row } from "react-bootstrap";
import { Copy, RefreshCcw } from "react-feather";
import logo from "../../image/DRUG CIPHER (2).png";
import useQuery from "../../hooks/useQuery";
import { recoverAccount, _fetchApi } from "../../utils/helper";
import { toast } from "react-toastify";
import {
  NotificationError,
  NotificationSuccess,
} from "../../utils/Notification";
import { Spinner } from "reactstrap";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
export default function Passphrase({ nextStep }) {
  // const navigate = useNavigate()

  const query = useQuery();
  const passphrase = query.get("pass");
  const id = query.get("id");
  const load = useSelector((state) => state.account.loading);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const submitForm = (e) => {
    e.preventDefault();
    dispatch(
      recoverAccount(passphrase, () => {
        navigate("/registered-drugs");
      })
    );
  };
  const regenerate = () => {
    setLoading(true);
    _fetchApi(
      `/v1/regenerate-passphrase?id=${id}`,
      (reps) => {
        if (reps.success) {
          toast(<NotificationSuccess text="Regenerated Successfully" />);
          setLoading(false);
          navigate(`/account/passphrass?pass=${reps.pass}&id=${id}`);
        }
      },
      (err) => {
        console.error(err);
        toast(<NotificationError text="Failed, try again" />);
        setLoading(false);
      }
    );
  };
  const copy = () => {
    navigator.clipboard.writeText(passphrase.join(" "));
  };
  return (
    <Form className="container" onSubmit={submitForm}>
      <Card className="KYC_card shadow p-3">
        <div>
          <img
            src={logo}
            style={{ width: 70, borderRadius: 10 }}
            alt=""
            className="shadow"
            onClick={()=>navigate('/')}

          />{" "}
          <h4
            style={{
              display: "inline",
              color: "rgb(3, 66, 110)",
              marginRight: 30,
            }}
          >
            Drug Cipher
          </h4>
        </div>
        <div className="mt-3 ">
          <Row className="mt-3">
            <Col md={6} cl controlId="validationCustom03">
              <p className="thankyou">Passphrase</p>
              <p style={{ textAlign: "justify" }}>
                Copy the following words 'Passphrase' and{" "}
                <b>
                  save them in a very secure place. Anyone who have acess to
                  this words will have access to your account.
                </b>{" "}
                You will be asked to use the 'Passphrase' when login to your
                account!
              </p>
              <Card className="pp_card p-2 shadow">
                <Row>
                  {passphrase.split(" ").length
                    ? passphrase.split(" ").map((item, index) => (
                        <Col md={4}>
                          <p className="word p-2">
                            {index + 1}: {item}
                          </p>
                        </Col>
                      ))
                    : null}
                  <div
                    style={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <span
                      className="man_button"
                      style={{ cursor: "pointer" }}
                      onClick={copy}
                    >
                      {/* < ToastContainer /> */}
                      <Copy /> Copy
                    </span>
                    <span
                      onClick={regenerate}
                      className="man_button"
                      style={{ cursor: "pointer" }}
                    >
                      {loading ? <Spinner /> : <RefreshCcw />} Regenerate
                    </span>
                  </div>
                </Row>
              </Card>
            </Col>
          </Row>
        </div>
        <div className="mt-3">
          <button
            type="submit"
            className="man_button"
            style={{ float: "right" }}
          >
            {load ? <Spinner size="sm" /> : null} Go to the app
          </button>
        </div>
      </Card>
    </Form>
  );
}
