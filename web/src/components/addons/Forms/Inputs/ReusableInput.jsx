import React, { useState } from "react";
import "./ReusableInput.css";

function ReusableInput({
  icon,
  label,
  description,
  type = "text",
  onChange,
  value,
  name,
  normalPlaceholder = "Type inside here",
  required = false,
  selectOptions = [],
}) {
  const [year, setYear] = useState(new Date().getFullYear());
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
          {selectOptions.length > 0 ? (
            <select
              required={required}
              id={name}
              name={name}
              onChange={onChange}
              value={value}
            >
              <option value="">Select option</option>
              {selectOptions.map((option, index) => (
                <option
                  key={index}
                  value={option.value ? option.value : option}
                >
                  {option.name ? option.name : option}
                </option>
              ))}
            </select>
          ) : type === "year" ? (
            <input
              type="number"
              required={required}
              id={name}
              min="1800"
              placeholder={year}
              name={name}
              value={value}
              onChange={onChange}
            />
          ) : (
            <input
              type={type}
              required={required}
              id={name}
              name={name}
              className=""
              value={value}
              onChange={onChange}
              placeholder={normalPlaceholder}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default ReusableInput;
