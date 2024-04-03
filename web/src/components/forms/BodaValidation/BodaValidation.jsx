import React from "react";
import "./BodaValidation.css";
import FormContainer from "../../addons/Forms/Layout/FormContainer";
import {
  familycover,
  messageIcon,
  phoneIcon,
  coverform,
  caricon2,
  emailIcon,
  caricon1,
  calender,
} from "../../../utils/export-images";
import ReusableInput from "../../addons/Forms/Inputs/ReusableInput";

function BodaValidation() {
  return (
    // <FormContainer headerIcon={familycover} formTitle="Validation">
    //   <div className="boda-validation">
    //     <ReusableInput label="Cell Phone Number" icon={phoneIcon} />
    //     <ReusableInput label="ID Number" icon={messageIcon} />
    //     <ReusableInput label="Email Address" icon={emailIcon} />
    //     <ReusableInput label="Log Book No" icon={coverform} />
    //   </div>
    // </FormContainer>
    <div>
      <FormContainer
        headerIcon={familycover}
        formTitle="Motorcycle Cover Details"
      >
        <div className="helper-text">
          <p>Motorcycle Details</p>
        </div>
        <div className="boda-validation">
          <ReusableInput label="Registration Number *" icon={coverform} />

          <ReusableInput label="Log Book No" icon={messageIcon} />
          <ReusableInput label="Make" icon={caricon2} />
          <ReusableInput label="Manufacture Year *" icon={calender} />
          <ReusableInput label="Engine CC" icon={caricon1} />
        </div>
      </FormContainer>
    </div>
  );
}

export default BodaValidation;
