import React, { useState } from "react";
import { Card, Col, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import logo from "../image/DRUG CIPHER (2).png";
import wallet from "../image/wallet.png";
import checkedwallet from "../image/checkedwallet.png";
import connectwallet from "../image/connectwallet.png";
import useQuery from "../hooks/useQuery";
import { login, _fetchApi } from "../utils/helper";
import { NotificationError } from "../utils/Notification";
import { toast } from "react-toastify";
import { claimToken } from "../utils/contract";
import { Spinner } from "reactstrap";

export default function ClaimToken() {
  const query = useQuery();
  const id = query.get("id");
  const [loading, setLoading] = useState(false);
  const [_claim, setClaim] = useState(false);
  const goTo = useNavigate();
  const account = window.walletConnection.account();
  const _fun = async () => {
    try {
      await claimToken("0.01", account.accountId).then(() => {
        _fetchApi(
          `/v1/claim-api-verify?id=${id}&query_type=update`,
          (res) => {
            if (res.success) {
              setClaim(true);
            }
          },
          (err) => {
            console.log(err);
            setLoading(false);
            toast(<NotificationError text="Error Occured" />);
          }
        );
      });
    } catch (error) {
      setLoading(false);
      toast(<NotificationError text="Error Occured" />);
    } finally {
      setLoading(false);
      toast(<NotificationError text="Error Occured" />);
    }
  };

  const claim = () => {
    setLoading(true);
    _fetchApi(
      `/v1/claim-api-verify?id=${id}&query_type=verify`,
      (res) => {
        if (res.success && res.result.length) {
          _fun();
        } else {
          toast(<NotificationError text="Claimed Already" />);
        }
      },
      (err) => {
        console.log(err);
        setLoading(false);
      }
    );
  };

  return (
    <div className="container">
      <Card className="KYC_card shadow p-3">
        <Row>
          <Col md={6} sm={6} xs={6}>
            <div
              onClick={() => goTo("/")}
              style={{ width: "fit-content", cursor: "pointer" }}
              data-toggle="tooltip"
              data-placement="bottom"
              title="Goto Home"
            >
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
                className="dc"
              >
                DrugCipher
              </h4>
            </div>
          </Col>
          <Col md={6} sm={6} xs={6}>
            <button
              className="man_button"
              style={{ float: "right", cursor: "pointer" }}
              onClick={() => goTo("/")}
            >
              Go To The App
            </button>
          </Col>
        </Row>
        {account.accountId ? (
          <div
            className="text-center"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "70vh",
            }}
          >
            {!_claim ? (
              <div>
                <div className="text-center">
                  <img src={wallet} alt="wallet" className="wallet" />
                </div>
                <div>
                  <h1 className="connect">Congratulations!</h1>
                </div>
                <p>
                  Congratulations! You have successfully received token from
                  DrugCipher. Click the below button to continue.
                </p>
                <button
                  className="shadow claim_button"
                  onClick={claim}
                  disabled={loading}
                >
                  {!loading ? "Claim Token" : <Spinner size="sm" />}
                </button>
              </div>
            ) : (
              <div
                className="text-center"
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  height: "70vh",
                }}
              >
                <div>
                  <div className="text-center">
                    <img
                      src={checkedwallet}
                      alt="wallet"
                      className="wallet connectwallet"
                    />
                  </div>
                  <div>
                    <h1 className="connect">Claimed</h1>
                  </div>
                  <p>You have already claimed your NEAR token.</p>
                </div>
              </div>
            )}
          </div>
        ) : (
          <div
            className="text-center"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "70vh",
            }}
          >
            <div>
              <div className="text-center">
                <img
                  src={connectwallet}
                  alt="wallet"
                  className="wallet connectwallet"
                />
              </div>
              <div>
                <h1 className="connect">Connect Wallet</h1>
              </div>
              <p>Connect your wallet to claim your NEAR token.</p>
              <button className="shadow claim_button" onClick={login}>
                Connect Wallet
              </button>
            </div>
          </div>
        )}
      </Card>
      <div className="text-center text-secondary">
        <p>
          Copyright © {new Date().getFullYear()} DrugCipher. All rights
          reserved.
        </p>
      </div>
    </div>
  );
}
