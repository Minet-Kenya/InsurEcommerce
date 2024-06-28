import { useState } from "react";
import { Tab, Nav } from "react-bootstrap";
import { Link, Navigate, useNavigate } from "react-router-dom";

// import "/Auth.css";

import logoSmall from "../../assets/images/logo-small.png";

import RedirectBtn from "../../components/addons/RedirectBtn/RedirectBtn";
import BackToTopBtn from "../../components/addons/BackToTopBtn/BackToTopBtn";
import {
  LoginForm,
  SignupForm,
} from "../../components/forms/Authentication/Authentication";
import {
  BASE_URL,
  BASE_URL_HOME,
  fetchData,
} from "../../components/utils/constants";
import { PopUp } from "../../components/addons/PopUp/PopUp";
import { check, cross, spinner2 } from "../../components/utils/export-images";

export default function ResetPassword() {
  const [activeTab, setActiveTab] = useState("login");
  const [phoneNumber, setphoneNumber] = useState("");
  const [resetSent, setresetSent] = useState(false);
  const [resetError, setresetError] = useState(false);
  const [loadingReset, setloadingReset] = useState(false);

  let navigate = useNavigate();

  function handleInput(e) {
    setphoneNumber(e.target.value);
  }
  async function handleSubmit() {
    setloadingReset(true);
    setresetSent(true);

    await fetchData(`${BASE_URL_HOME}/reset-password/`, "POST", {
      phone_number: phoneNumber,
    })
      .then((data) => {
        // console.log(data);

        if (data.errors) {
          setresetError(true);
          setresetSent(true);
          setloadingReset(false);

          return;
        }
        setresetSent(true);
        setloadingReset(false);
      })
      .catch((err) => {
        console.log(err);
      });
    // console.log(phoneNumber);
  }

  function doneButton() {
    navigate("/auth");
    setresetError(false);
    setresetSent(false);
    setloadingReset(false);
  }

  return (
    <>
      <PopUp isOpen={resetSent}>
        <div>
          {resetError ? (
            <p className="text-center">
              User does not exist. Kindly Register first.
            </p>
          ) : loadingReset ? (
            <p></p>
          ) : (
            <p className="text-center">
              Password Reset was succesfull. SMS with the new password has been
              sent to your phone.{" "}
            </p>
          )}

          {resetError ? (
            <img
              style={{
                display: "flex",
                justifyContent: "center",
              }}
              src={cross}
              alt="spinner"
              className=" larger-spinner"
            />
          ) : loadingReset ? (
            <div>
              <img
                style={{
                  display: "flex",
                  justifyContent: "center",
                }}
                src={spinner2}
                alt="spinner"
                className="spinner-payment larger-spinner"
              />
            </div>
          ) : (
            <img
              style={{
                display: "flex",
                justifyContent: "center",
              }}
              src={check}
              alt="spinner"
              className=" larger-spinner"
            />
          )}

          <div>
            <div className="payment-actions">
              <button
                onClick={doneButton}
                style={{
                  margin: "0 auto",
                }}
                className="cancel-payment"
              >
                Ok
              </button>
            </div>
          </div>
        </div>
      </PopUp>
      <div className="vh-100 d-flex flex-column">
        <main
          id="auth"
          className="auth flex-grow-1 position-relative container-fluid"
        >
          <section
            className="h-100 row d-flex align-items-center justify-content-center py-3"
            data-aos="fade-in"
          >
            <div className="col-12 col-sm-10 col-md-8 col-lg-6">
              <Tab.Container
                defaultActiveKey={activeTab}
                activeKey={activeTab}
                onSelect={(key) => setActiveTab(key)}
              >
                <Tab.Content>
                  <Tab.Pane eventKey="login" className="card">
                    <div className="card-body d-flex flex-column align-items-center justify-content-center py-4">
                      <TitleHeader authview="Login" />
                      <form
                        id="loginform"
                        className="authform row g-3"
                        onSubmit={(e) => {
                          e.preventDefault();
                          handleSubmit();
                        }}
                        noValidate
                      >
                        <>
                          <div className="col-12 form-floating mt-3">
                            <input
                              type="text"
                              name="username"
                              id="login_username"
                              className="form-control"
                              placeholder="name@example.com 0r 07xxxxxx"
                              required
                              autoFocus
                              onChange={handleInput}
                            />
                            <label htmlFor="login_username">
                              Enter Your Phone Number
                            </label>
                            <div className="invalid-feedback">
                              Please enter a valid phone number
                            </div>
                          </div>
                        </>

                        <>
                          <div className="col-12 form-floating mt-3">
                            <input
                              type="text"
                              name="role"
                              id="login_role"
                              defaultValue="CLIENT"
                              hidden
                            />
                          </div>
                        </>
                        <>
                          <div className="col-12 recaptcha px-5 py-1 d-flex justify-content-sm-between align-items-center">
                            <div
                              className="g-recaptcha"
                              data-sitekey=""
                              data-callback="enableBtn"
                              data-expired-callback="disableBtn"
                            ></div>
                          </div>
                        </>
                        <>
                          <div className="col-12 btns d-flex flex-column flex-sm-row justify-content-center align-items-center">
                            <button
                              type="submit"
                              className="btn btn-primary text-white text-uppercase w-100 mb-3 mb-sm-0"
                            >
                              Reset Password
                            </button>
                            <Link
                              to="/"
                              className="d-block d-sm-none btn btn-primary text-white text-uppercase w-100 ms-sm-4"
                            >
                              Go Back
                            </Link>
                          </div>
                        </>
                      </form>
                      <div className="mt-4 col-12 d-sm-table text-center">
                        <div className="d-sm-table-cell mb-2 mb-sm-0 border-end border-secondary">
                          <span
                            style={{
                              marginRight: "15px",
                            }}
                            className="form-text "
                          >
                            Already have an Account?{" "}
                            <Link to="/auth">Login</Link>
                          </span>
                          {/* <span className="form-text m ">
                          Or <Link to="">Login</Link>
                        </span> */}
                        </div>
                        <div className="d-sm-table-cell"></div>
                      </div>
                    </div>
                  </Tab.Pane>
                </Tab.Content>
              </Tab.Container>
            </div>
          </section>
        </main>

        <BackToTopBtn />
      </div>
    </>
  );
}

function TitleHeader(props) {
  return (
    <>
      <section id="titleheader" className="titleheader pb-2 w-100">
        <div className="d-flex align-items-center justify-content-between">
          <a
            href="https://www.minet.com/kenya/"
            target="_blank"
            rel="noreferrer"
            className="d-none d-sm-block logo d-flex align-items-center ms-2 w-auto"
          >
            <img src={logoSmall} alt="" width="" height="" />
          </a>
          <h5 className="d-block card-title flex-grow-1 fw-bold text-center fs-4">
            Reset Password
          </h5>
          <RedirectBtn to="/" text="Go Back" view="Auth" />
        </div>
        <p className="text-center small">
          Enter your phonenumber where you will receive a new password
        </p>
      </section>
    </>
  );
}
