import * as React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import App from "./App";
import InventoryList from "./component/marketplace/InventoryList";
import NewProduct from "./component/marketplace/NewProduct";

export const RouteApp = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={<Navigate replace to="/drugcipher" />}
      />
      <Route path="/drugcipher" element={<App />} />
      <Route path="/inventory" element={<InventoryList />} />
      <Route path="/add-new-drug" element={<NewProduct />} />
    </Routes>
  );
};
