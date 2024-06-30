import React from "react";

const DateInputComponent = ({ value, onChange, minAge }) => {
  const [error, setError] = React.useState("");
  const [isAllowed, setIsAllowed] = React.useState(true);

  const handleDateChange = (e) => {
    const inputDate = e.target.value;
    onChange(inputDate);

    if (!isValidDate(inputDate)) {
      setError("Invalid date format. Please use DD/MM/YYYY.");
      setIsAllowed(false);
      return;
    }

    const userAge = calculateAge(inputDate);
    if (userAge < minAge) {
      setError(`You must be at least ${minAge} years old.`);
      setIsAllowed(false);
    } else {
      setError("");
      setIsAllowed(true);
    }
  };

  const isValidDate = (dateStr) => {
    const regex = /^(\d{2})\/(\d{2})\/(\d{4})$/;
    if (!regex.test(dateStr)) {
      return false;
    }

    const [_, day, month, year] = dateStr.match(regex);
    const date = new Date(`${year}-${month}-${day}`);
    return (
      date &&
      date.getDate() == day &&
      date.getMonth() + 1 == month &&
      date.getFullYear() == year
    );
  };

  const calculateAge = (dateStr) => {
    const [day, month, year] = dateStr.split("/");
    const birthDate = new Date(`${year}-${month}-${day}`);
    const ageDiffMs = Date.now() - birthDate.getTime();
    const ageDate = new Date(ageDiffMs);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  };

  return (
    <div>
      <label>
        Enter your date of birth (DD/MM/YYYY):
        <input
          type="text"
          value={value}
          onChange={onChange}
          placeholder="DD/MM/YYYY"
        />
      </label>
      {error && <p style={{ color: "red" }}>{error}</p>}
      {isAllowed ? <p>Access granted.</p> : <p>Access denied.</p>}
    </div>
  );
};

export default DateInputComponent;
