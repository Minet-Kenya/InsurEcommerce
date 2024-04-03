import React from "react";
import "./ReusableInput.css";

function ReusableInput({ icon, label, description, type = "text" }) {
  return (
    <div className="input-container">
      <div className="form-group">
        <label htmlFor={label}>
          {label}
          <span className="text-muted">{description}</span>
        </label>
        <div className="fam-input">
          <div className="icon-container">
            <img src={icon} alt={label} className="icon" />
          </div>
          <input type={type} id={label} className="" />
        </div>
      </div>
    </div>
  );
}

export default ReusableInput;
