import { useState } from "react";
import Final from "./Final";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
function KYC() {
    const [formData, setFormData] = useState({
        companyName: "",
        companyAddress: "",
        companyCountry: "",
        CompanyEmail: "",
        companyPhone: "",
        companyWesite: ""
    })
    const handleChange = ({ target: { name, value } }) => {
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const [step, setstep] = useState(1);



    const nextStep = () => {
        setstep(step + 1);
    };

    const previousStep = () => {
        setstep(step - 1);
    };



    switch (step) {
        case 1:
            return (
                <Step1 nextStep={nextStep} handleChange={handleChange} values={formData} />
            );
        case 2:
            return (
                <Step2 nextStep={nextStep} handleChange={handleChange} values={formData} />
            );
        case 3:
            return (
                <Step3 nextStep={nextStep} handleChange={handleChange} values={formData} />
            );
        case 4:
            return (
                <Final />
            );
        default:
            return (
                <div className="App">
                </div>
            );
    }
}

export default KYC;
