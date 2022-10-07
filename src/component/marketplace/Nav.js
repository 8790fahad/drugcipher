import React, { useState, useCallback, useEffect } from "react";
import { Container, Navbar, Button } from "react-bootstrap";
import { accountBalance, login, logout as destroy } from "../../utils/helper";
import Wallet from "../Wallet";
function NavBar() {
  const account = window.walletConnection.account();
  const [balance, setBalance] = useState("0");
  const getBalance = useCallback(async () => {
    if (account.accountId) {
      setBalance(await accountBalance());
    }
  }, [account.accountId]);

  useEffect(() => {
    getBalance();
  }, [getBalance]);
  return (
    <Navbar >
      <Container>
        <Navbar.Brand href="/near-maketplace-dapp" className="fw-bold">Drug Tracker</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          {account.accountId ? (
            <Wallet
              address={account.accountId}
              amount={balance}
              symbol="NEAR"
              destroy={destroy}
            />
          ) : (
            <Button
              onClick={login}
              variant="outline-dark"
              className="rounded-pill px-3 mt-3"
            >
              Connect Wallet
            </Button>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
