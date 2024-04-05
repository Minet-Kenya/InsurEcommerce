import ReusableInput from "../../addons/Forms/Inputs/ReusableInput";
import FormContainer from "../../addons/Forms/Layout/FormContainer";
import familycover from "../../../assets/images/family-cover.png";
import carIcon2 from "../../../assets/images/motors/car-icon2.png";
import calender from "../../../assets/images/calender.png";

import insuranceIcon from "../../../assets/images/insurance.png";

import "./MotorsForm.css";
import { caricon1, moneyIcon } from "../../utils/export-images";

function MotorsForm() {
  return (
    <FormContainer
      headerIcon={familycover}
      formTitle="QUOTE REQUEST
    "
    >
      <div className="helper-text">
        <p>Fill in the details required</p>
      </div>
      <ReusableInput label="VEHICLE USE" icon={caricon1} />
      <ReusableInput label="POLICY COVER" icon={insuranceIcon} />
      <ReusableInput label="MAKE" icon={carIcon2} />
      <ReusableInput label="CAR VALUE IN SHILLINGS" icon={moneyIcon} />
      <ReusableInput label="MAKE YEAR" icon={calender} />
    </FormContainer>
  );
}

export default MotorsForm;
