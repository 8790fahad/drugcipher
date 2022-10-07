import React, { useEffect, useCallback, useState } from "react";
import { Container } from "react-bootstrap";
import { login, accountBalance } from "./utils/helper";
import coverImg from "./image/drugs.jpeg";
import "./App.css";
import Cover from "./utils/Cover";
import Products from "./component/marketplace/Products";
import NavBar from "./component/marketplace/Nav";
import LandingPage from "./LandingPage/LandingPage";
import Pharmacy from "./MarketPlace/Pharmacy";
import AppNavigation from "./Routes/AppNavigation";
// import Web3 from "./LandingPage/Web3";
// import Dc from "./LandingPage/Dc";

const App = function AppWrapper() {
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
  //..
  return (
    <div className='' style={{ margin: 0 }}>
      {/* {account.accountId ? (
        <Container fluid="md">
          <NavBar balance={balance} />
          <main>
            <Products />
          </main>
        </Container>
      ) : (
        <Cover name="Drug Tracker" login={login} coverImg={coverImg} />
      )} */}
      {/* <LandingPage /> */}
      {/* <Pharmacy/> */}
      <AppNavigation />
    </div>
  );
};

export default App;
