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
  messageIcon,
  emailIcon,
  phoneIcon,
  map,
  pinLocation,
  profile,
} from "../../../utils/export-images";
import "./Automotive.css";
import ReusableInput from "../../addons/Forms/Inputs/ReusableInput";

function Automotive() {
  return (
    <FormContainer>
      <div className="automotive-header">
        <h6>
          Automobile || Cover - Automobile || Underwriter - Old Mutual General
          Insurance Kenya Limited
        </h6>
      </div>
      <div className="sub-icon-header">
        <div className="input-container">
          <div className="auto-mobile">
            <img src={caricon1} alt="Auto Mobile Details" />
            <h6>Auto Mobile Details</h6>
          </div>
          <div>
            <div className="input-automobile">
              <ReusableInput icon={personicon} label="Registration Number *" />
              <ReusableInput icon={caricon2} label="Make" />
              <ReusableInput icon={cc} label="Engine No" />
              <ReusableInput icon={globeIcon} label="Manufacture Year *" />
              <ReusableInput icon={cc} label="Engine CC" />
              <ReusableInput icon={personicon} label="Passangers *" />
            </div>
          </div>
        </div>
        <div className="input-container">
          <div className="auto-mobile">
            <img src={coverform} alt="Policy Details" />
            <h6>Policy Details</h6>
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
      </div>
    </FormContainer>

    // <FormContainer
    //   action="Accept Terms and submit your request as at 2023 | 07 | 06 | 10:34: 52"
    //   headerIcon={coverform}
    //   formTitle="Personal Information"
    // >
    //   <div className="sub-icon-header">
    //     <div className="input-container">
    //       <ReusableInput icon={personicon} label="First Name *" />
    //       <ReusableInput icon={personicon} label="Second Name" />
    //       <ReusableInput icon={personicon} label="Last Name" />
    //       <ReusableInput icon={messageIcon} label="ID Number *" />
    //       <ReusableInput icon={personicon} label="KRA PIN *" />
    //       <ReusableInput icon={emailIcon} label="Email Address" />
    //       <ReusableInput icon={phoneIcon} label="Owner Cell Phone No *" />
    //     </div>
    //     <div className="input-container">
    //       <ReusableInput label="Cell Phone Number *" icon={phoneIcon} />
    //       <ReusableInput label="Date of Birth *" icon={personicon} />
    //       <ReusableInput label="Gender" icon={personicon} />
    //       <ReusableInput label="County Of Residence *" icon={map} />
    //       <ReusableInput label="Postal Address Code *" icon={pinLocation} />
    //       <ReusableInput
    //         label="National ID (PDF or Image Only) *"
    //         type="file"
    //         icon={profile}
    //       />
    //       <ReusableInput
    //         label="Driving Licence (PDF or Image only)"
    //         type="file"
    //         icon={profile}
    //       />
    //     </div>
    //   </div>
    //   <div className="terms">
    //     <h6>Acceptance Terms</h6>
    //     <p>
    //       I/We the undersigned do hereby warrant the truth and correctness of
    //       all the above statements and particulars and I /We declare that I/We
    //       have not withheld any material information. I/We undertake that the
    //       motor cycle(s) to be insured shall not be driven by any person who to
    //       my / our knowledge has been refused any motor vehicle insurance or
    //       continuance thereat. And I/We agree that the above proposal and this
    //       warranty and declaration shall be the basis of the contract between me
    //       / us and the Monarch Insurance Company Limited and I/We agree to abide
    //       by the terms and conditions of the policy issued in answer to this
    //       proposal
    //     </p>
    //   </div>
    // </FormContainer>

    // ------

    //     <FormContainer headerIcon={coverform} formTitle="Motorcycle Cover Details">
    //       <div className="sub-icon-header">
    //         <div className="input-container">
    //           <div className="auto-mobile">
    //             <h6>Motorcycle & Rider Details</h6>
    //           </div>
    //           <div>
    //             <div className="input-automobile">
    //               <ReusableInput
    //                 icon={personicon}
    //                 label="Is the motor cycle(s) fitted with ANTI-THEFT device(s)? Give Details *"
    //               />
    //               <ReusableInput
    //                 icon={caricon2}
    //                 label="Is the motor cycle normally packed within your premises overnight? *"
    //               />
    //               <ReusableInput
    //                 icon={cc}
    //                 label="State name and address of Owner of motor cycle: *"
    //               />
    //               <ReusableInput
    //                 icon={globeIcon}
    //                 label="Person in whose name motor cycle is registered: *"
    //               />
    //               <ReusableInput
    //                 icon={cc}
    //                 label="Any finance company or other person financially interested? *"
    //               />
    //             </div>
    //           </div>
    //         </div>
    //         <div className="input-container">
    //           <div className="auto-mobile">
    //             <h6>Motorcycle Details</h6>
    //           </div>
    //           <div className="input-automobile">
    //             <ReusableInput
    //               label="Are you a licensed rider? *"
    //               icon={caricon2}
    //             />
    //             <ReusableInput
    //               label="How long have you been riding motor cycles continuously? *"
    //               icon={coverform}
    //             />
    //             <ReusableInput
    //               label="Will the motor cycle be solely ridden by you? *"
    //               icon={coverform}
    //             />
    //             <ReusableInput label="If not, then by whom? *" icon={caricon2} />
    //             <ReusableInput
    //               label="Do you or does any other person who to your knowledge will ride,
    // suffer from defective vision or hearing or from any physical infirmity? *"
    //               icon={formtype}
    //             />
    //           </div>
    //         </div>
    //       </div>
    //     </FormContainer>
  );
}

export default Automotive;
