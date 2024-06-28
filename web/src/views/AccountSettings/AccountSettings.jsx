import BackToTopBtn from "../../components/addons/BackToTopBtn/BackToTopBtn";
import Preloader from "../../components/addons/Preloader/Preloader";
import Footer from "../../components/layout/Footer/Footer";
import { Link, Outlet, useLocation } from "react-router-dom";
import Header from "../../components/layout/Header/Header";
import Sidebar from "../../components/layout/Sidebar/Sidebar";
import {
  calender,
  caricon1,
  caricon2,
  cc,
  check,
  coverform,
  cross,
  emptystate,
  familycover,
  formtype,
  globeIcon,
  insuranceIcon,
  money2,
  moneyIcon,
  personicon,
  spinner,
  spinner2,
} from "../../components/utils/export-images";
import ReusableInput from "../../components/addons/Forms/Inputs/ReusableInput";
import FormContainer from "../../components/addons/Forms/Layout/FormContainer";
import ReusablePackageTable from "../../components/addons/PackagesTable/ReusablePackageTable";
import { PopUp } from "../../components/addons/PopUp/PopUp";
import { useEffect, useState } from "react";
import "./AccountSettings.css";
import car from "../../assets/images/svgs/online-payment.png";
import { useNavigate } from "react-router-dom";
import {
  BASE_URL,
  BASE_URL_HOME,
  fetchData,
} from "../../components/utils/constants";

export function AccountSettings() {
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

export function AccountSettingsPage() {
  const navigate = useNavigate();
  const [initiatePayment, setInitiatePayment] = useState(false);
  const [emailSent, setemailSent] = useState(false);
  const [sendingEmail, setsendingEmail] = useState(false);
  const [sendEmail, setsendEmail] = useState(false);
  const [emailFailed, setemailFailed] = useState(false);
  const [stkPush, setstkPush] = useState(false);

  const [paymentPhone, setPaymentPhone] = useState("");

  const [profile, setprofile] = useState({});

  let authToken = JSON.parse(localStorage.getItem("authTokens"));

  useEffect(() => {
    const getUserData = async () => {
      let response = await fetch(`${BASE_URL_HOME}user/`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${authToken.access}`,
        },
      });
      if (response.ok) {
        let profile = await response.json();
        setprofile(profile);
        // console.log(profile);
      }
    };
    getUserData();
  }, []);

  const handlePhoneInput = (e) => {
    setPaymentPhone(e.target.value);
  };

  const cancelPayment = () => {
    setInitiatePayment(false);
  };

  const initiatePolicyPayment = () => {
    setInitiatePayment(true);
  };

  function transformKeys(obj) {
    const newObj = {};

    for (const key in obj) {
      if (obj.hasOwnProperty(key)) {
        // Replace underscores with spaces and capitalize the first letter of each word
        const newKey = key
          .replace(/_/g, " ")
          .replace(/\b\w/g, (l) => l.toUpperCase());
        newObj[newKey] = obj[key];
      }
    }

    return newObj;
  }

  const transformedData = transformKeys(profile.personal_info);

  const editData = () => {};

  // async function sendEmailQuatation(id) {
  //   await fetchData(
  //     `${BASE_URL}/send-policy-email/motor/${id}`,
  //     "POST",
  //     authToken.access
  //   )
  //     .then((data) => console.log("Data:", data))
  //     .catch((error) => console.error("Error:", error));
  // }

  const triggerStkPush = async () => {};

  async function sendQouteToEmail() {}

  function doneButton() {}

  return (
    <>
      {/* <PopUp isOpen={initiatePayment}>
        <div className="payment-modal">
          <h5>Complete Policy Payment</h5>
          <ReusableInput
            value={paymentPhone}
            onChange={handlePhoneInput}
            type="tel"
            required={true}
            icon={money2}
            label="Enter phone number to pay from"
          />
          <div className="payment-actions">
            <button onClick={cancelPayment} className="cancel-payment">
              Cancel
            </button>
            <button onClick={triggerStkPush} className="initiate-payment">
              Initiate Payment
              {stkPush && (
                <img src={spinner} alt="spinner" className="spinner-payment" />
              )}
            </button>
          </div>
        </div>
      </PopUp> */}

      <Sidebar view="MotorcycleInsurance" />
      <main id="dashboard" className="dashboard h-100 d-flex flex-column">
        <div className="pagetitle z-0">
          <h1 className="text-white">My Account</h1>
          <nav>
            <ol className="breadcrumb">
              <li className="breadcrumb-item active text-secondary">
                Account details.
              </li>
            </ol>
          </nav>
        </div>
        <section
          className="flex-grow-1 container-fluid text-center d-flex flex-column  mb-3"
          data-aos="fade-in"
        >
          <div>
            <div id="statement">
              <div className="top-header">
                <div className="left-part ">
                  <img
                    className="st-icon"
                    src={familycover}
                    alt="analysis-icon"
                  />
                  <h4>Account Settings</h4>
                </div>
                <div className="right-part">
                  <button>Change Password</button>
                  <button>Edit Profile</button>
                </div>
              </div>
              <div className="policy-checkout">
                <div className="left-part">
                  <div className="">
                    <h6>Personal Details</h6>
                  </div>
                  <div className="policy-information">
                    <p>
                      <span> Email : </span> {profile.email}
                    </p>
                    <p>
                      <span> Name : </span> {profile.name}
                    </p>
                    <p>
                      <span> Username : </span> {profile.username}
                    </p>
                  </div>
                </div>
              </div>
              <div className="policy-checkout">
                <div className="left-part">
                  <div className="">
                    <h6>Addational Information</h6>
                  </div>
                  <div className="policy-information">
                    {Object.entries(transformedData ?? {}).map(
                      ([key, value], index) => (
                        <p key={index}>
                          <span>{key ?? ""} : </span> {value ?? ""}
                        </p>
                      )
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
