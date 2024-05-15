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
  required = false,
  selectOptions = [],
}) {
  const [year, setYear] = useState(new Date().getFullYear());

  const handleChange = (event) => {
    setYear(event.target.value);
    onChange && onChange(event);
  };

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
            >
              <option value="">Select option</option>
              {selectOptions.map((option, index) => (
                <option key={index} value={option}>
                  {option}
                </option>
              ))}
            </select>
          ) : type === "year" ? (
            <input
              type="number"
              required={required}
              id={name}
              name={name}
              value={year}
              onChange={handleChange}
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
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default ReusableInput;
