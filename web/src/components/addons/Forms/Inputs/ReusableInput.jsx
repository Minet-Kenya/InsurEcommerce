import React from "react";
import "./ReusableInput.css";

function ReusableInput({
  icon,
  label,
  description,
  type = "text",
  onChange,
  value,
  name,
  required = false,
}) {
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
          <input
            type={type}
            required={required}
            id={name}
            name={name}
            className=""
            value={value}
            onChange={onChange}
          />
        </div>
      </div>
    </div>
  );
}

export default ReusableInput;
