import React, { useState } from "react";
import { Card, Col, Row } from "react-bootstrap";
import logo from "../../image/DRUG CIPHER (2).png";
import { useNavigate } from "react-router-dom";
import Dropzone from "react-dropzone";
import { Label } from "reactstrap";

// import MyDropzone from './MyDropZone';
export default function Step2({
  nextStep,
  previousStep,
  handleChange,
  values,
}) {
  const navigate = useNavigate();
  const [fileNames, setFileNames] = useState([]);
  const handleDrop = (acceptedFiles) =>{
    console.log(acceptedFiles);
    setFileNames(acceptedFiles.map((file) => file.name));
  }
   
  return (
    <form className="container" onSubmit={nextStep}>
      <Card className="KYC_card shadow p-3">
        <div>
          <img
            src={logo}
            style={{ width: 70, borderRadius: 10 }}
            alt=""
            className="shadow"
          />{" "}
          <h4
            style={{
              display: "inline",
              color: "rgb(3, 66, 110)",
              marginRight: 30,
            }}
          >
            Drug Cipher
          </h4>
        </div>
        <h3 className="man_card_title mt-4">KYC - Step 2 of 3</h3>

        <div className="mt-3">
          <Row className="m-3">
            <label className="p-0">
              Premises License<b style={{ color: "red" }}>*</b>
            </label>
            <Dropzone
              onDrop={handleDrop}
              accept="image/*"
              minSize={1024}
              maxSize={3072000}
            >
              {({
                getRootProps,
                getInputProps,
                isDragActive,
                isDragAccept,
                isDragReject,
              }) => {
                const additionalClass = isDragAccept
                  ? "accept"
                  : isDragReject
                  ? "reject"
                  : "";

                return (
                  <div
                    {...getRootProps({
                      className: `dropzone ${additionalClass}`,
                    })}
                  >
                    <input {...getInputProps()} />
                    <span>{isDragActive ? "📂" : "📁"}</span>
                    <p>Drag'n'drop files, or click to select files</p>
                    <div style={{ color: "black" }}>
                      <strong>Files:</strong>
                      <div>
                        {fileNames.map((fileName) => (
                          <p className="m-0" key={fileName}>
                            {fileName}
                          </p>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              }}
            </Dropzone>
          </Row>
        </div>
        <div className="mt-3">
          <button
            type="submit"
            className="man_button"
            style={{ float: "Left" }}
            onClick={previousStep}
          >
            Previous
          </button>
          <button
            type="submit"
            className="man_button"
            style={{ float: "right" }}
          >
            Register
          </button>
        </div>
      </Card>
    </form>
  );
}
