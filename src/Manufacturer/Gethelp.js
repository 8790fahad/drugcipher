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
import { Send, X } from "react-feather";

export default function Gethelp() {
  let _form = { email: "", message: "", id: uuid4() }
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
              How do I know if my account is approved?
            </Accordion.Header>
            <Accordion.Body className="GH">
              Once your account is approved by <b>drugcipher</b>, a link that contains your account passphrase will be sent to the email you registered with.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>
              I cant see where to connect my NEAR  wallet?
            </Accordion.Header>
            <Accordion.Body className="GH">
              After you log in, look to the top right corner of <b>DrugCipher</b>, you will see "Account" menu, click on it, it will drop down some menus. You will find connect to NEAR menu there.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header>
              How do I see the full details of my registered drug?
            </Accordion.Header>
            <Accordion.Body className="GH">
             In the "Registered Drugs" table, there is an icon under "Actions" column. Click the icon, and it will open where you can see drug data.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3">
            <Accordion.Header>
              How do I get the DrugCipher mobile app?
            </Accordion.Header>
            <Accordion.Body className="GH">
              You can get DrugCipher mobile app on AppStore or Playstore.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="4">
            <Accordion.Header>
              Can I export my drug data?
            </Accordion.Header>
            <Accordion.Body className="GH">
              Yes, you can. If you navigate to "Registered Drugs", you will see "Export As" button. Click on it, it will allow you to download your drug data.
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
              <X />{' '}Close
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
