import React, { useEffect } from "react";
import Button from "../CustomFiles/Button";
import "../CustomFiles/InputFields.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useState } from "react";
export default function NewsLetter() {
  useEffect(() => {
    AOS.init();
  }, []);
  let _form =
  {
    email: ""
  }
  const [sendEmail, setSendEmail] = useState(_form);
  const handleChange = ({ target: { name, value } }) => {
    setSendEmail((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
    console.log(sendEmail)

    fetch(`https://drugcipher.herokuapp.com/newsletter`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(sendEmail)
    })
      .then(raw => raw.json())
      .then(resp => {
        console.log(resp)
      })
      .catch(e => {
        console.log(e)
      })
  }
  return (
    <div className="text-center news_letter_section p-5">
      <h1
        className="heading_two"
        data-aos="fade-down"
        data-aos-easing="linear"
        data-aos-duration="1500"
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
        name='email'
        value={sendEmail.email}
        onChange={handleChange}
      />
      <Button
        className={"market_place_btn mt-2"}
        style={{ marginLeft: 10 }}
        btnText={"Subscribe"}
        onClick={handleSubmit}
      />
    </div>
  );
}
