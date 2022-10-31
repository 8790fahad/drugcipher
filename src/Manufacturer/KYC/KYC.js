import { useRef, useState } from "react";
import { toast } from "react-toastify";
import { _postApi } from "../../utils/helper";
import {
  NotificationError,
  NotificationSuccess,
} from "../../utils/Notification";
import Final from "./Final";
import Step1 from "./Step1";
import Step2 from "./Step2";
function KYC() {
  const name = useRef(null);
  const address = useRef(null);
  const country = useRef(null);
  const email = useRef(null);
  const [formData, setFormData] = useState({
    companyName: "",
    companyAddress: "",
    companyCountry: "",
    companyEmail: "",
    companyPhone: "",
    companyWebsite: "",
  });
  const [loading, setLoading] = useState(false);
  const handleChange = ({ target: { name, value } }) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const [step, setstep] = useState(1);

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

  const previousStep = () => {
    setstep(step - 1);
  };

  switch (step) {
    case 1:
      return (
        <Step1
          nextStep={nextStep}
          handleChange={handleChange}
          values={formData}
          loading={loading}
          name={name}
          address={address}
          country={country}
          email={email}
        />
      );
    case 2:
      return <Step2 nextStep={nextStep} previousStep={previousStep} />;
    case 3:
      return <Final />;
    default:
      return <div className="App"></div>;
  }
}

export default KYC;
