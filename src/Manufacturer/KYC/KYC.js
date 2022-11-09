import { useState } from "react";
import { toast } from "react-toastify";
import { apiURL, _postApi } from "../../utils/helper";
import {
  NotificationError,
  NotificationSuccess,
} from "../../utils/Notification";
import { v4 as uuid4 } from "uuid";
import Final from "./Final";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
function KYC() {
  const [formData, setFormData] = useState({
    companyName: "",
    companyAddress: "",
    companyCountry: "",
    companyEmail: "",
    companyPhone: "",
    companyWebsite: "",
    companyId: uuid4(),
  });
  const [selectedFilePL, setSelectedFilePL] = useState(null);
  const [selectedFileSP, setSelectedFileSP] = useState(null);
  const [loading, setLoading] = useState(false);
  const handleChange = ({ target: { name, value } }) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const [step, setstep] = useState(1);

  const onFileChangePL = (event) => {
    setSelectedFilePL(event.target.files[0]);
  };
  const onFileChangeSP = (event) => {
    setSelectedFileSP(event.target.files[0]);
  };
  const nextStep = (e) => {
    e.preventDefault();
    setLoading(true);
    _postApi(
      "/v1/create-company",
      formData,
      (res) => {
        if (res.success) {
          setLoading(false);
          setstep(step + 1);
          toast(<NotificationSuccess text="Next" />);
        }
      },
      (err) => {
        console.log(err);
        setLoading(false);
        toast(<NotificationError text="Failed, try again" />);
      }
    );
  };

  const onFileUploadPL = (e) => {
    e.preventDefault();
    setLoading(true);
    // Create an object of formData
    let _formData = new FormData();
    // // Update the formData object
    _formData.append("image",selectedFilePL );
    fetch(
      `${apiURL}/v1/upload-pl-url?companyId=${formData.companyId}&companyEmail=${formData.companyEmail}&companyName=${formData.companyName}`,
      {
        method: "PUT",
        body: _formData,
        // headers: {
        //   'Content-Type': 'multipart/form-data',
        //   accept: 'application/json',
        // },
      }
    )
      .then((raw) => raw.json())
      .then((res) => {
        if (res.success) {
          setLoading(false);
          setstep(step + 1);
          toast(<NotificationSuccess text="Next" />);
        }
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
        toast(<NotificationError text="Failed, try again" />);
      });
  };

  const onFileUploadSP = (e) => {
    e.preventDefault();
    setLoading(true);
    // Create an object of formData
    let _formData = new FormData();
    // // Update the formData object
    _formData.append("image",selectedFileSP );
    fetch(
      `${apiURL}/v1/upload-sp-url?companyId=${formData.companyId}&companyEmail=${formData.companyEmail}&companyName=${formData.companyName}`,
      {
        method: "PUT",
        body: _formData,
        // headers: {
        //   'Content-Type': 'multipart/form-data',
        //   accept: 'application/json',
        // },
      }
    )
      .then((raw) => raw.json())
      .then((res) => {
        console.log(res)
        if (res.success) {
          setLoading(false);
          setstep(step + 1);
          // toast(<NotificationSuccess text="Next" />);
        }
      })
      .catch((err) => {
        setLoading(false);
        toast(<NotificationError text="Failed, try again" />);
      });
  };

  switch (step) {
    case 1:
      return (
        <Step1
          nextStep={nextStep}
          handleChange={handleChange}
          values={formData}
          loading={loading}
        />
      );
    case 2:
      return (
        <>
          <Step2
            onFileChangePL={onFileChangePL}
            selectedFilePL={selectedFilePL}
            onFileUploadPL={onFileUploadPL}
            loading={loading}
          />
        </>
      );
    case 3:
      return (
        <Step3
          onFileUploadSP={onFileUploadSP}
          onFileChangeSP={onFileChangeSP}
          loading={loading}
          selectedFileSP={selectedFileSP}
        />
      );
    case 4:
      return <Final />;
    default:
      return <div className="App"></div>;
  }
}

export default KYC;
