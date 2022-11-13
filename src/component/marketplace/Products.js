import React, { useEffect, useState, useCallback } from "react";
import { toast } from "react-toastify";
import AddProduct from "./AddProduct";
import Product from "./Product";
import { Row } from "react-bootstrap";
import { buyDrug, createProduct, getDrugs } from "../../utils/contract";
import Loader from "../../utils/loader";
import {
  NotificationError,
  NotificationSuccess,
} from "../../utils/Notification";

const Products = () => {
  const [drugs, setDrugs] = useState([]);
  const [loading, setLoading] = useState(false);

  const getProducts = useCallback(async () => {
    try {
      setLoading(true);
      const drugs = await getDrugs();
      const arr = [];
      drugs.forEach((item) => {
        arr.push({ ...item, sold: 1 });
      });
      setDrugs(arr);
    } catch (error) {
      console.log({ error });
    } finally {
      setLoading(false);
    }
  }, []);
  const increaseQty = (index) => {
    const arr = [];
    drugs.forEach((item, ind) => {
      if (ind === index) {
        arr.push({ ...item, sold: item.sold + 1 });
      } else {
        arr.push(item);
      }
    });
    console.log(arr);
    setDrugs(arr);
  };
  const decreaseQty = (index) => {
    const arr = [];
    drugs.forEach((item, ind) => {
      if (ind === index) {
        arr.push({ ...item, sold: item.sold - 1 });
      } else {
        arr.push(item);
      }
    });
    console.log(arr);
    setDrugs(arr);
  };
  const addProduct = async (data) => {
    try {
      setLoading(true);
      createProduct(data).then((resp) => {
        getProducts();
      });
      toast(<NotificationSuccess text="Product added successfully." />);
    } catch (error) {
      console.log({ error });
      toast(<NotificationError text="Failed to create a product." />);
    } finally {
      setLoading(false);
    }
  };

  const buy = async (drug) => {
    try {
      await buyDrug({ drug, qty: drug.sold }).then((resp) => getProducts());
      toast(<NotificationSuccess text="Product bought successfully" />);
    } catch (error) {
      toast(<NotificationError text="Failed to purchase product." />);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getProducts();
  }, [getProducts]);

  return (
    <>
      {!loading ? (
        <>
          <div className="d-flex justify-content-between align-items-center mb-4">
            <h1 className="fs-4 fw-bold mb-0">Buy Drug</h1>
            <AddProduct save={addProduct} />
          </div>
          <Row xs={1} sm={2} lg={3} className="g-3  mb-5 g-xl-4 g-xxl-5">
            {drugs.map((_product, ind) => (
              <Product
                index={ind}
                increaseQty={increaseQty}
                decreaseQty={decreaseQty}
                product={{
                  ..._product,
                }}
                buy={buy}
              />
            ))}
          </Row>
        </>
      ) : (
        <Loader />
      )}
    </>
  );
};

export default Products;
