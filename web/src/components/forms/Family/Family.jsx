import "./Family.css";
import marriedIcon from "../../../assets/images/person.png"; // Example icon paths
import childrenDobIcon from "../../../assets/images/children.png";
import calender from "../../../assets/images/calender.png";
import insuranceIcon from "../../../assets/images/insurance.png";
import emailIcon from "../../../assets/images/email.png";
import familycover from "../../../assets/images/family-cover.png";
import { useState } from "react";
import ReusableInput from "../../addons/Forms/Inputs/ReusableInput";
import FormContainer from "../../addons/Forms/Layout/FormContainer";

export function CoverForm() {
  const [formData, setFormData] = useState({
    married: "",
    childrenDOB: "",
    spouseDOB: "",
    insuranceType: "",
    email: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add form submission logic here
    console.log(formData);
  };

  return (
    <FormContainer formTitle="Cover" headerIcon={familycover}>
      {/* <div id="cover-form" className="container"> */}
      {/* <form> */}
      {/* <div className="cover-header">
            <img src={familycover} alt="Family cover" className="h-icon" />
            <h2></h2>
          </div> */}
      <ReusableInput label="Married" icon={marriedIcon} />
      <ReusableInput
        label="Number of Children"
        icon={childrenDobIcon}
        description="(Note: Proof of school will be required for children over 18
              years.Age limitis 25yrs)"
      />
      {/* <div className="form-group">
          <label htmlFor="married">Married</label>
          <div className="fam-input">
            <img src={marriedIcon} alt="Married Icon" className="icon" />
            <input type="text" id="married" className="" />
          </div>
        </div> */}
      {/* <div className="form-group">
          <label htmlFor="married">
            Number of Children{" "}
            <span className="text-muted">
              (Note: Proof of school will be required for children over 18
              years.Age limitis 25yrs)
            </span>
          </label>
          <div className="fam-input">
            <img
              src={childrenDobIcon}
              alt="No. of children Icon"
              className="icon"
            />
            <input type="text" id="married" className="" />
          </div>
        </div> */}
      <div className="dob-section">
        <ReusableInput label="Your Date of Birth" icon={calender} type="date" />
        <ReusableInput
          label="Spouse's Date of Birth"
          icon={calender}
          type="date"
        />
        {/* <div className="form-group">
            <label htmlFor="married">Your Date of Birth</label>
            <div className="fam-input">
              <img src={calender} alt="date Icon" className="icon" />
              <input type="date" id="spouse-dob" className="" />
            </div>
          </div> */}
        {/* <div className="form-group">
            <label htmlFor="married">Spouse's Date of Birth</label>
            <div className="fam-input">
              <img
                src={calender}
                alt="spouse datearried Icon"
                className="icon"
              />
              <input type="date" id="spouse-dob" className="" />
            </div>
          </div> */}
      </div>
      <div className="eml-section">
        <ReusableInput icon={insuranceIcon} label="Insurance" />
        <ReusableInput icon={emailIcon} type="email" label="Email" />
        {/* <div className="form-group">
            <label htmlFor="married">Insurance</label>
            <div className="fam-input">
              <img src={insuranceIcon} alt="Insurance Icon" className="icon" />
              <input type="text" id="spouse-dob" className="" />
            </div>
          </div> */}
        {/* <div className="form-group">
            <label htmlFor="married">Email</label>
            <div className="fam-input">
              <img src={emailIcon} alt="email Icon" className="icon" />
              <input type="email" id="spouse-dob" className="" />
            </div>
          </div> */}
      </div>

      {/* <div className="form-group">
          <label htmlFor="insurance">
            <img src={marriedIcon} alt="Insurance Icon" className="icon" />
            Insurance
          </label>
          <select id="insurance" className="">
            <option value="">Select Insurance</option>
            <option value="medical">Medical</option>
            <option value="dental">Dental</option>
            <option value="vision">Vision</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="email">
            <img src={marriedIcon} alt="Email Icon" className="icon" />
            Email
          </label>
          <input type="email" id="email" className="" />
        </div> */}
      {/* <div className="sbtn">
            <button type="submit" className="btn btn-primary">
              SUBMIT
            </button>
          </div> */}
      {/* </form> */}
      {/* </div> */}
    </FormContainer>
  );
}
