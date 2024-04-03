import React from "react";
import FormContainer from "../../addons/Forms/Layout/FormContainer";
import {
  caricon1,
  coverform,
  personicon,
  calender,
  formtype,
  caricon2,
  globeIcon,
  cc,
} from "../../../utils/export-images";
import "./Automotive.css";
import ReusableInput from "../../addons/Forms/Inputs/ReusableInput";

function Automotive() {
  return (
    <FormContainer formTitle="">
      <div className="automotive-header">
        <h6>
          Automobile || Cover - Automobile || Underwriter - Old Mutual General
          Insurance Kenya Limited
        </h6>
      </div>
      <div className="sub-icon-header">
        <div className="auto-mobile">
          <img src={caricon1} alt="Auto Mobile Details" />
          <h6>Auto Mobile Details</h6>
        </div>
        <div className="auto-mobile">
          <img src={coverform} alt="Policy Details" />
          <h6>Policy Details</h6>
        </div>
      </div>
      <div className="input-container">
        <div className="input-automobile">
          <ReusableInput icon={personicon} label="Registration Number *" />
          <ReusableInput icon={caricon2} label="Make" />
          <ReusableInput icon={cc} label="Engine No" />
          <ReusableInput icon={globeIcon} label="Manufacture Year *" />
          <ReusableInput icon={cc} label="Engine CC" />
          <ReusableInput icon={personicon} label="Passangers *" />
        </div>
        <div className="input-automobile">
          <ReusableInput label="Value of Motor *" icon={caricon2} />
          <ReusableInput label="Log Book No" icon={coverform} />
          <ReusableInput label="Policy Type *" icon={coverform} />
          <ReusableInput label="Motor Type *" icon={caricon2} />
          <ReusableInput label="Cover Type *" icon={formtype} />
          <ReusableInput label="Policy Period From *" icon={calender} />
        </div>
      </div>
    </FormContainer>
  );
}

export default Automotive;
