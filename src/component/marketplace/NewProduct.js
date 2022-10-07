import React, { useState } from "react";
import {
  Button,
  Card,
  Col,
  Container,
  FloatingLabel,
  Form,
  Row,
  Spinner,
} from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { setDrug } from "../../utils/marketplace";
import {
  NotificationError,
  NotificationSuccess,
} from "../../utils/Notification";

function NewProduct() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    drug_name: "",
    price: "0",
    expiry_date: "",
    selling_price: "",
    supplier_name: "",
    generic_name: "",
    unit_of_issue: "",
    balance: 0,
    image: "",
    reorder_level: "",
    
  });
  const [loading, setLoading] = useState(false);
  const handleChange = ({ target: { name, value } }) => {
    setForm((p) => ({ ...p, [name]: value }));
  };

  const isFormFilled = () =>
    form.drug_name &&
    form.image &&
    form.balance &&
    form.selling_price &&
    form.price;

  const addProduct = async (data) => {
    
    try {
      setLoading(true);
      await setDrug(data).then((resp) => {
        console.log(resp);
        // navigate(-1);
      });
      toast(<NotificationSuccess text="Drug added successfully." />);
      navigate(-1);
    } catch (error) {
      console.log({ error });
      toast(<NotificationError text="Failed to create a drug." />);
      setLoading(false);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container className="mt-2">
      <Card centered>
        <Card.Header>
          <Card.Title>
            <Row>
              <Col md={5}>
                <Button size="sm" variant="dark" onClick={() => navigate(-1)}>
                  Back <i className="bi arrow-back" />
                </Button>
              </Col>
              <Col md={2}>
                <div className="text-center">New Drug</div>
              </Col>
            </Row>
          </Card.Title>
        </Card.Header>
        <Form>
          <Card.Body>
            <Row>
              <Col sm={6}>
                <FloatingLabel
                  controlId="inputSupplierName"
                  label="Supplier Name"
                  className="mb-3"
                >
                  <Form.Control
                    type="text"
                    name="supplier_name"
                    onChange={handleChange}
                    className="size-sm"
                    value={form.supplier_name}
                    placeholder="Enter  supplier name"
                  />
                </FloatingLabel>
              </Col>
              <Col sm={6}>
                <FloatingLabel
                  controlId="inputDrugName"
                  label="Drug Name"
                  className="mb-3"
                >
                  <Form.Control
                    type="text"
                    name="drug_name"
                    onChange={handleChange}
                    className="size-sm"
                    value={form.drug_name}
                    placeholder="Enter drug name"
                  />
                </FloatingLabel>
              </Col>
              <Col sm={6}>
                <FloatingLabel
                  controlId="inputGenericName"
                  label="Generic Name"
                  className="mb-3"
                >
                  <Form.Control
                    type="text"
                    name="generic_name"
                    onChange={handleChange}
                    className="size-sm"
                    value={form.generic_name}
                    placeholder="Enter generic name"
                  />
                </FloatingLabel>
              </Col>
              <Col sm={6}>
                <FloatingLabel
                  controlId="inputreoderLevel"
                  label="Reorder Level"
                  className="mb-3"
                >
                  <Form.Control
                    type="text"
                    name="reorder_level"
                    onChange={handleChange}
                    className="size-sm"
                    value={form.reorder_level}
                    placeholder="Enter reoder level"
                  />
                </FloatingLabel>
              </Col>
              <Col sm={6}>
                <FloatingLabel
                  controlId="inputDrugImage"
                  label="Image Url"
                  className="mb-3"
                >
                  <Form.Control
                    type="text"
                    name="image"
                    onChange={handleChange}
                    className="size-sm"
                    value={form.image}
                    placeholder="Enter image url"
                  />
                </FloatingLabel>
              </Col>
              <Col sm={6}>
                <FloatingLabel
                  controlId="inputDrugQuantity"
                  label="Quantity"
                  className="mb-3"
                >
                  <Form.Control
                    type="number"
                    name="balance"
                    onChange={handleChange}
                    className="size-sm"
                    value={form.balance}
                    placeholder="Enter Quantity"
                  />
                </FloatingLabel>
              </Col>
              <Col sm={6}>
                <FloatingLabel
                  controlId="inputDrugPrice"
                  label="Price"
                  className="mb-3"
                >
                  <Form.Control
                    type="text"
                    name="price"
                    onChange={handleChange}
                    className="size-sm"
                    value={form.price}
                    placeholder="Enter price"
                  />
                </FloatingLabel>
              </Col>
              <Col sm={6}>
                <FloatingLabel
                  controlId="inputDrugSellingPrice"
                  label="Selling Price"
                  className="mb-3"
                >
                  <Form.Control
                    type="text"
                    name="selling_price"
                    onChange={handleChange}
                    className="size-sm"
                    value={form.selling_price}
                    placeholder="Enter selling price"
                  />
                </FloatingLabel>
              </Col>
              <Col sm={6}>
                <FloatingLabel
                  controlId="inputUOI"
                  label="Unit of issue"
                  className="mb-3"
                >
                  <Form.Control
                    type="number"
                    name="unit_of_issue"
                    onChange={handleChange}
                    className="size-sm"
                    value={form.unit_of_issue}
                    placeholder="Enter unit of issue"
                  />
                </FloatingLabel>
              </Col>
              <Col sm={6}>
                <FloatingLabel
                  controlId="inputExpiryDate"
                  label="Expiry Date"
                  className="mb-3"
                >
                  <Form.Control
                    type="date"
                    name="expiry_date"
                    onChange={handleChange}
                    className="size-sm"
                    value={form.expiry_date}
                    placeholder="Enter expiry date"
                  />
                </FloatingLabel>
              </Col>
            </Row>
          </Card.Body>
        </Form>
        <Card.Footer>
          <div className="text-center">
            <Button
              variant="dark"
              disabled={!isFormFilled()}
              onClick={() => {
                addProduct(form);
              }}
            >
              {loading ? (
                <Spinner
                  animation="border"
                  role="status"
                  size="sm"
                  className="opacity-25"
                />
              ) : (
                "Save product"
              )}
            </Button>
          </div>
        </Card.Footer>
      </Card>
    </Container>
  );
}

export default NewProduct;
