import React from "react";
import "./FormContainer.css";

function FormContainer({
  children,
  headerIcon,
  action = "SUBMIT",
  formTitle,
  onClick,
}) {
  return (
    <div id="cover-form" className="container">
      <form onSubmit={onClick}>
        <div className="cover-header">
          {headerIcon ? (
            <img src={headerIcon} alt={formTitle} className="h-icon" />
          ) : (
            ""
          )}
          <h2>{formTitle}</h2>
        </div>
        {children}
        <div className="sbtn">
          <button type="submit" className="btn btn-primary">
            {action}
          </button>
        </div>
      </form>
    </div>
  );
}

export default FormContainer;
