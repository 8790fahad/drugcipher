import React from 'react'
import { Card, Col, Row } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { generateOptionToStringFor } from 'react-typeahead/lib/accessor';
import logo from "../image/DRUG CIPHER (2).png";
import wallet from "../image/wallet.png";
import connectwallet from "../image/connectwallet.png";

export default function ClaimToken() {
  const goTo = useNavigate()
  const account = window.walletConnection.account();

  return (
    <div className='container'>
      <Card className="KYC_card shadow p-3">
        <Row>
          <Col md={6} sm={6} xs={6}>
            <div onClick={() => goTo('/')} style={{ width: 'fit-content', cursor: 'pointer' }} data-toggle="tooltip"
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
            <a href='https://drugcipher.com' target='_blank'>
              <button className='man_button' style={{ float: 'right', cursor: 'pointer' }}>
                Go To The App
              </button>
            </a>
          </Col>
        </Row>
        {account.accountId
          ?
          <div className='text-center' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '70vh' }}>
            <div>
              <div className='text-center'>
                <img src={wallet} alt='wallet' className='wallet' />
              </div>
              <div>
                <h1 className='connect'>Congratulations!</h1>
              </div>
              <p>Congratulations! You have successfully received token from DrugCipher.</p>
              <button className='shadow claim_button' onClick={() => goTo('')}>Claim Token</button>
            </div>
          </div>
          :
          <div className='text-center' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '70vh' }}>
            <div>
              <div className='text-center'>
                <img src={connectwallet} alt='wallet' className='wallet connectwallet' />
              </div>
              <div>
                <h1 className='connect'>Connect Wallet</h1>
              </div>
              <p>Connect your wallet to claim your NEAR token.</p>
              <button className='shadow claim_button' onClick={() => goTo('')}>Connect Wallet</button>
            </div>
          </div>
        }
      </Card>
      <div className='text-center text-secondary'>
        <p>Copyright © {new Date().getFullYear()} DrugCipher. All rights reserved.</p>
      </div>
    </div>
  )
}
