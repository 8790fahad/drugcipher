import React from "react";
import Button from "../CustomFiles/Button";
import "../CustomFiles/InputFields.css";
import { useState } from "react";
import { toast } from "react-toastify";
import { NotificationError, NotificationSuccess } from "../utils/Notification";
import { _postApi } from "../utils/helper";
import { Form } from "reactstrap";
export default function NewsLetter() {
  let _form = {
    email: "",
  };
  const [sendEmail, setSendEmail] = useState(_form);
  const [loading, setLoading] = useState(false);
  const handleChange = ({ target: { name, value } }) => {
    setSendEmail((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true);
    _postApi(
      "/v1/create-news-letter",
      { email: sendEmail.email },
      (res) => {
        if (res.success) {
          toast(<NotificationSuccess text="Successfully" />);
          setLoading(false);
          setSendEmail(_form);
        }
      },
      (err) => {
        toast(<NotificationError text="Failed, try again" />);
        setLoading(false);
        console.log(err);
      }
    );
  };
  return (
    <Form onSubmit={handleSubmit}>
      <div className="text-center news_letter_section p-5">
        <h1
          className="heading_two"
        >
          Newsletter
        </h1>
        <p className="sub_heading text-white">
          Subscribe to our news letter for more updates
        </p>
        <input
          type="email"
          placeholder="example@mail.com"
          className="input_fields"
          name="email"
          value={sendEmail.email}
          onChange={handleChange}
          required
        />
        <Button
          className={"market_place_btn mt-2"}
          style={{ marginLeft: 10 }}
          btnText={"Subscribe"}
          loading={loading}
          type="submit"
        />
      </div>
    </Form>
  );
}
