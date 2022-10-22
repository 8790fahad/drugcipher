import React, { useEffect } from "react";
import Button from "../CustomFiles/Button";
import "../CustomFiles/InputFields.css";
import AOS from "aos";
import "aos/dist/aos.css";
export default function NewsLetter() {
  useEffect(() => {
    AOS.init();
  }, []);
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
      />
      <Button
        className={"market_place_btn mt-2"}
        style={{ marginLeft: 10 }}
        btnText={"Subscribe"}
      />
    </div>
  );
}
