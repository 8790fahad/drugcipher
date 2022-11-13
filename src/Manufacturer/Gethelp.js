import React from "react";
import { useState } from "react";
import { Card, Col, Row } from "react-bootstrap";
import "./DrugTable.css";
import "./Manufacturer.css";
import Accordion from "react-bootstrap/Accordion";
import Modal from "react-bootstrap/Modal";
import { _postApi } from "../utils/helper";
import { v4 as uuid4 } from "uuid";
import { Form, Spinner } from "reactstrap";
import { toast } from "react-toastify";
import { NotificationError, NotificationSuccess } from "../utils/Notification";
import { Send } from "react-feather";

export default function Gethelp() {
    let _form ={ email: "", message: "", id: uuid4() }
  const [form, setForm] = useState(_form);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [loading, setLoading] = useState(false);
  const onChange = ({ target: { name, value } }) => {
    setForm((p) => ({ ...p, [name]: value }));
  };
  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true);
    _postApi(
      "/v1/add-message",
      form,
      (reps) => {
        if (reps.success) {
          setLoading(false);
          toast(<NotificationSuccess text="Message sent successfully" />);
          setForm(_form)
          handleClose()
        }
      },
      (err) => {
        console.error(err);
        toast(<NotificationError text="Failed, try again" />);
        setLoading(false);
      }
    );
  };

  // const [validated, setValidated] = useState(false);

  // const handleSubmit = (event) => {
  //     const form = event.currentTarget;{
  //         navigate("/GH")
  //     }
  // };

  return (
    <>
      <Card className="man_card shadow p-3">
        <Row className="m-0 p-0">
          <Col
            md={12}
            style={{ display: "flex", justifyContent: "space-between" }}
          >
            <h3 className="man_card_title">Frequently Helped Questions</h3>
            <button className="MT" onClick={handleShow}>
              Message
            </button>
          </Col>
          {/* <Col md={6}>
        <div style={{ float: 'right', display: 'flex' }}>```````````````````
            <div style={{ display: 'inline' }}>
                <Dropdown toggle={toggle1} isOpen={dropdown}>
                    <DropdownToggle
                        data-toggle="dropdown"
                        tag="span"
                    >
                        <button className='man_button' style={{ marginRight: 5 }} >Export As</button>
                    </DropdownToggle>
                    <DropdownMenu className='dropdown_menu shadow mt-3'>
                        <div className=''>
                            <div className='drop_down_item'>
                                <span className='p-3'>
                                    <CSVLink data={drugData} filename={'Drugs Data'} className='csv'>CSV</CSVLink>
                                </span>
                            </div>
                        </div>
                    </DropdownMenu>
                </Dropdown>
            </div>
            <div style={{ display: 'inline' }}>
                <button className='man_button' onClick={() => navigate('/register-new-drug')}>Create New</button>
            </div>
        </div>
    </Col> */}
        </Row>
        {/* <DrugTable /> */}
        <Accordion>
          <Accordion.Item eventKey="0">
            <Accordion.Header>
              How do I check if my payment is being comfirmed?
            </Accordion.Header>
            <Accordion.Body className="GH">
              Click on Transactions on the menu to get all your transactions and
              their statuses. You can also filter the list with date range
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>
              My State Dues are not showing on the app, what should I do?
            </Accordion.Header>
            <Accordion.Body className="GH">
              First check your profile and confirm that you have selected your
              State of Practice and the appropriate Practice and Interest
              Groups. If by then you still cannot find your State Dues, then the
              neccessary payment information has not been provided by your State
              Chairman, we are still collecting this information from individual
              Chairman, so you may want to check back later.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header>
              How do I get the receipt for my payment?
            </Accordion.Header>
            <Accordion.Body className="GH">
              An automated email of your transaction receipt would be sent to
              your registered email, you can also download a copy of the receipt
              anytime from the app, simply go to the History option on the menu
              and select the particular transaction, then click on Download
              Receipt button provided.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3">
            <Accordion.Header>
              How do I retrieve my Username or Password?
            </Accordion.Header>
            <Accordion.Body className="GH">
              As long as you still remember your email, you can simply use the
              Forgot Password link on the login page, an automated email would
              be sent to your registered email address with your username and
              also an instruction on how you can reset your password.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="4">
            <Accordion.Header>
              What are the options of payment?
            </Accordion.Header>
            <Accordion.Body className="GH">
              You can either pay with your Debit/Credit card, Bank Transfer or
              even USSD Code or any of the other options available in the app.
              Simply click the Change Payment Method at the bottom of the page
              to get other payment options.
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </Card>
      <Modal show={show} onHide={handleClose}>
        <Form onSubmit={handleSubmit}>
          <Modal.Header closeButton>
            <Modal.Title>Send a message </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {/* <Form>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control
                            className='none'
                                type="email"
                                placeholder="name@example.com"
                                autoFocus />
                        </Form.Group>
                        <Form.Group
                            className="mb-3"
                            controlId="exampleForm.ControlTextarea1"
                        >
                            <Form.Label>Explain in details</Form.Label>
                            <Form.Control as="textarea" rows={3} />
                        </Form.Group>
                    </Form> */}
            <input
              type="email"
              placeholder="example@gmail.com"
              className="man_input_fields"
              onChange={onChange}
              name="email"
              required
            />
            <textarea
              placeholder="explain in details"
              style={{ height: 150 }}
              className="man_input_fields mt-4"
              onChange={onChange}
              name="message"
              required
            ></textarea>
          </Modal.Body>
          <Modal.Footer>
            <button className="man_button" onClick={handleClose}>
              Close
            </button>
            <button type="submit" disabled={loading} className="man_button">
              {loading ? <Spinner size="sm" /> : <Send />} Send
            </button>
          </Modal.Footer>
          ``
        </Form>
      </Modal>
    </>
  );
}
