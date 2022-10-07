import React from "react";
import PropTypes from "prop-types";
// import { utils } from "near-api-js";
import { Card, Button, Col, Stack } from "react-bootstrap";

const Product = ({ product, buy, index, increaseQty, decreaseQty }) => {
  const {
    selling_price,
    balance,
    generic_name,
    drug_name,
    image,
    owner,
    sold,
  } = product;

  const triggerBuy = () => {
    buy(product);
  };

  return (
    <Col>
      <Card className=" h-100">
        <Card.Header>
          <Stack
            direction="horizontal"
            gap={2}
            style={{ display: "flex", justifyContent: "space-between" }}
          >
            <span className="font-monospace text-secondary">{owner}</span>
            <div className="text-end">
              <i
                className="bi bi-plus"
                style={{ cursor: "pointer" }}
                onClick={() => {
                  increaseQty(index);
                }}
              ></i>
              <input
                type="text"
                className="text-center "
                value={sold}
                name="sold"
                style={{
                  width: "35px",
                  border: "solid",
                  borderRadius: "20px",
                  height: "20px",
                }}
              />
              <i
                className="bi bi-dash"
                style={{ cursor: "pointer" }}
                onClick={() => {
                  decreaseQty(index);
                }}
              ></i>
            </div>
          </Stack>
        </Card.Header>
        <div className=" ratio ratio-4x3">
          <img src={image} alt={generic_name} style={{ objectFit: "cover" }} />
        </div>
        <Card.Body className="d-flex  flex-column text-center">
          <Card.Title>{generic_name}</Card.Title>
          <Card.Text className="flex-grow-1 ">{drug_name}</Card.Text>
          <Card.Text className="text-secondary">
            <span>Quantity Available {balance}</span>
          </Card.Text>
          <Button
            variant="outline-dark"
            onClick={triggerBuy}
            className="w-100 py-3"
          >
            Buy for {selling_price} NEAR
            {/* {utils.format.formatNearAmount(selling_price)} NEAR */}
          </Button>
        </Card.Body>
      </Card>
    </Col>
  );
};

Product.propTypes = {
  product: PropTypes.instanceOf(Object).isRequired,
  buy: PropTypes.func.isRequired,
};

export default Product;
