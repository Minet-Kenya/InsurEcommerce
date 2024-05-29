import React, { useState } from "react";
import "./FormContainer.css";
import { spinner } from "../../../utils/export-images";

function FormContainer({
  children,
  headerIcon,
  action = "SUBMIT",
  formTitle,
  onClick,
}) {
  let [spiner, setSpinner] = useState(false);

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
          <button
            style={{
              display: "flex",
              gap: "11px",
              alignItems: "center",
            }}
            onClick={() => {
              setSpinner(true);
              setTimeout(() => {
                setSpinner(false);
              }, 3000);
            }}
            type="submit"
            className="btn btn-primary"
          >
            {action}
            {spiner && (
              <img src={spinner} alt="spinner" className="spinner-payment" />
            )}
          </button>
        </div>
      </form>
    </div>
  );
}

export default FormContainer;
