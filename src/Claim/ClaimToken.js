import React, { useCallback } from "react";
import { Card, Col, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { generateOptionToStringFor } from "react-typeahead/lib/accessor";
import logo from "../image/DRUG CIPHER (2).png";
import wallet from "../image/wallet.png";
import connectwallet from "../image/connectwallet.png";
import useQuery from "../hooks/useQuery";
import { _fetchApi } from "../utils/helper";
import { NotificationError, NotificationSuccess } from "../utils/Notification";
import { toast } from "react-toastify";
import { claimToken } from "../utils/contract";

export default function ClaimToken() {
  const query = useQuery();
  const id = query.get("id");
  const [loading, setLoading] = useState(false);
  const goTo = useNavigate();
  const account = window.walletConnection.account();

  const claimStatusVerify = useCallback(() => {
    _fetchApi(
      `/v1/claim-api-verify?id=${id}&query_type=verify`,
      (res) => {
        if (res.success) {
        }
      },
      (err) => {
        console.log(err);
      }
    );
  }, [id]);
  const claim = async (id, price) => {
    try {
      await claimToken({
        id,
        price,
      });
      toast(<NotificationSuccess text="Product bought successfully" />);
    } catch (error) {
      toast(<NotificationError text="Failed to purchase product." />);
    } finally {
      setLoading(false);
    }
  };

  const claimStatusUpdate = useCallback(
    (sucess = (f) => f, error = (f) => f) => {
      _fetchApi(
        `/v1/claim-api-verify?id=${id}&query_type=update`,
        (res) => {
          if (res.success) {
            sucess();
          }
        },
        (err) => {
          error();
          console.log(err);
        }
      );
    },
    [id]
  );

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
            <div>
              <div className="text-center">
                <img src={wallet} alt="wallet" className="wallet" />
              </div>
              <div>
                <h1 className="connect">Congratulations!</h1>
              </div>
              <p>
                Congratulations! You have successfully received token from
                DrugCipher.
              </p>
              <button className="shadow claim_button" onClick={() => goTo("")}>
                Claim Token
              </button>
            </div>
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
              <button className="shadow claim_button" onClick={() => goTo("")}>
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
