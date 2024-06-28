import { Outlet, useNavigate } from "react-router-dom";
import Header from "../../components/layout/Header/Header";
import Footer from "../../components/layout/Footer/Footer";
import Preloader from "../../components/addons/Preloader/Preloader";
import BackToTopBtn from "../../components/addons/BackToTopBtn/BackToTopBtn";
import Sidebar from "../../components/layout/Sidebar/Sidebar";
import {
  check,
  emailIcon,
  familycover,
  insuranceIcon,
  personicon,
  phoneIcon,
  spinner2,
} from "../../components/utils/export-images";
import ReusableInput from "../../components/addons/Forms/Inputs/ReusableInput";
import FormContainer from "../../components/addons/Forms/Layout/FormContainer";
import { PopUp } from "../../components/addons/PopUp/PopUp";
import { useEffect, useState } from "react";
import { BASE_URL, fetchData } from "../../components/utils/constants";

export default function CoperateMedicalCover() {
  return (
    <>
      <div id="retail" className="retail vh-100 d-flex flex-column">
        <Header view="Retail" version="v1" />
        <div className="flex-grow-1 mheader position-relative">
          <Outlet />
        </div>
        <Footer view="Retail" version="v1" />
      </div>
      <Preloader />
      <BackToTopBtn />
    </>
  );
}

export function CoperateMedicalCoverForm() {
  const navigate = useNavigate();
  const [saveSuccess, setsaveSuccess] = useState(false);
  const [modalSuccess, setmodalSuccess] = useState(false);
  const [sendingEmail, setsendingEmail] = useState(false);
  const authToken = JSON.parse(localStorage.getItem("authTokens"));

  const [formData, setFormData] = useState(() => {
    const savedData = JSON.parse(localStorage.getItem("education-policy"));
    return savedData || { email: "" };
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    // console.log(e.target.value);
  };

  useEffect(() => {
    localStorage.setItem("education-policy", JSON.stringify(formData));
  }, [formData]);

  let savedCoperateMedicalCover = JSON.parse(
    localStorage.getItem("education-policy")
  );

  const saveQouteDetails = async (e) => {
    e.preventDefault();
    setsendingEmail(true);
    setmodalSuccess(true);

    // navigate("/ecommerce/motor-insurance-packages");
    await fetchData(
      `${BASE_URL}/education-policies/`,
      "POST",
      savedCoperateMedicalCover,
      authToken.access
    )
      .then((data) => {
        // console.log("Data:", data);
        if (data) {
          setsaveSuccess(true);
          setsendingEmail(false);
        }
      })
      .catch((error) => {
        setsendingEmail(false);
        // console.log(Object.values(error));
      });
  };

  function doneButton() {
    setsaveSuccess(false);
    setmodalSuccess(false);
    setsendingEmail(false);
    navigate("/ecommerce/corporate-product");
    localStorage.removeItem("education-policy");
  }

  return (
    <>
      <PopUp isOpen={modalSuccess}>
        {sendingEmail && (
          <div>
            <h4 className="text-center">Sending quote to your email</h4>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <img
                src={spinner2}
                alt="spinner"
                className="spinner-payment larger-spinner"
              />
            </div>
          </div>
        )}
        {saveSuccess && (
          <div>
            <h4 className="text-center">Success, Request Updated</h4>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <img src={check} alt="spinner" className=" larger-spinner" />
            </div>

            <div
              style={{
                textAlign: "center",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <p
                style={{
                  width: "93%",
                }}
              >
                We will have our agents contact you within 24 hours. we have
                sent the quatation to your email
              </p>
            </div>
            <div>
              <div className="payment-actions">
                <button
                  onClick={doneButton}
                  style={{
                    margin: "0 auto",
                  }}
                  className="cancel-payment"
                >
                  Done
                </button>
              </div>
            </div>
          </div>
        )}
      </PopUp>
      <Sidebar view="MotorInsurance" />
      <main id="dashboard" className="dashboard h-100 d-flex flex-column">
        <div className="pagetitle z-0">
          <h1 className="text-white">Our Solutions</h1>
          <nav>
            <ol className="breadcrumb">
              <li className="breadcrumb-item active text-secondary">
                Education policy Quote Request
              </li>
            </ol>
          </nav>
        </div>
        <section
          className="flex-grow-1 container-fluid text-center d-flex flex-column  mb-3"
          data-aos="fade-in"
        >
          <FormContainer
            headerIcon={familycover}
            formTitle="QUOTE REQUEST
      "
            onClick={saveQouteDetails}
          >
            <div className="helper-text">
              <p>Fill in the details required</p>
            </div>
            <ReusableInput
              label="Company Name *"
              icon={personicon}
              value={formData.full_names}
              name="full_names"
              onChange={handleChange}
            />
            <ReusableInput
              type="tel"
              label="Mobile Number *"
              icon={phoneIcon}
              value={formData.phone_number}
              name="phone_number"
              onChange={handleChange}
            />
            <ReusableInput
              type="tel"
              label="Email *"
              icon={emailIcon}
              value={formData.email}
              name="email"
              onChange={handleChange}
            />

            <ReusableInput
              selectOptions={[
                "Education Savings Plan",
                "Whole Life Plan",
                "Last Expense",
              ]}
              label="Which Plan would you like to learn more about *"
              icon={insuranceIcon}
              value={formData.plan_type}
              name="plan_type"
              onChange={handleChange}
            />
            <ReusableInput
              label="Use this space to give us further details *"
              icon={insuranceIcon}
              value={formData.addational_info}
              name="addational_info"
              onChange={handleChange}
            />
          </FormContainer>
        </section>
      </main>
    </>
  );
}
