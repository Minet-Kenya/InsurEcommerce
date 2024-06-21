import { useState } from "react";
import { Tab, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

// import "/Auth.css";

import logoSmall from "../../assets/images/logo-small.png";

import RedirectBtn from "../../components/addons/RedirectBtn/RedirectBtn";
import BackToTopBtn from "../../components/addons/BackToTopBtn/BackToTopBtn";
import {
  LoginForm,
  SignupForm,
} from "../../components/forms/Authentication/Authentication";
import { fetchData } from "../../components/utils/constants";

export default function ResetPassword() {
  const [activeTab, setActiveTab] = useState("login");
  const [phoneNumber, setphoneNumber] = useState("");

  function handleInput(e) {
    setphoneNumber(e.target.value);
  }
  async function handleSubmit(params) {
    await fetchData(
      `https://ussd.minet.co.ke/minetapi/portals/ResetPassword.php?User=${phoneNumber}`,
      "POST"
    )
      .then((data) => {
        console.log(data);
        if (data.status === 0) {
        }
      })
      .catch((err) => {
        console.log(err);
      });
    // console.log(phoneNumber);
  }

  return (
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
                      {/* <>
                        <div className="mt-2 loading text-center d-none">
                          <div
                            className="spinner-border text-primary"
                            role="status"
                          >
                            <span className="visually-hidden">Loading...</span>
                          </div>
                        </div>
                        <div className="mt-2 alert alert-danger text-center d-none"></div>
                        <div className="mt-2 alert alert-success text-center d-none"></div>
                      </> */}
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
                          Already have an Account? <Link to="/auth">Login</Link>
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
