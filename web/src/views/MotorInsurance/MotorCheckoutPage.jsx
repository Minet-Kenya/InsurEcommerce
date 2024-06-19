import Sidebar from "../../components/layout/Sidebar/Sidebar";
import {
  check,
  cross,
  familycover,
  money2,
  spinner,
  spinner2,
} from "../../components/utils/export-images";
import ReusableInput from "../../components/addons/Forms/Inputs/ReusableInput";
import { PopUp } from "../../components/addons/PopUp/PopUp";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  BASE_URL,
  BASE_URL_HOME,
  fetchData,
} from "../../components/utils/constants";

export function MotorCheckoutPage() {
  const navigate = useNavigate();
  const [initiatePayment, setInitiatePayment] = useState(false);
  const [emailSent, setemailSent] = useState(false);
  const [sendingEmail, setsendingEmail] = useState(false);
  const [sendEmail, setsendEmail] = useState(false);
  const [emailFailed, setemailFailed] = useState(false);
  const [stkPush, setstkPush] = useState(false);

  const [paymentPhone, setPaymentPhone] = useState("");

  const handlePhoneInput = (e) => {
    setPaymentPhone(e.target.value);
  };

  const cancelPayment = () => {
    setInitiatePayment(false);
  };

  const initiatePolicyPayment = () => {
    setInitiatePayment(true);
  };

  const motor_details = JSON.parse(localStorage.getItem("motor-cover-details"));
  const policy_details = JSON.parse(localStorage.getItem("motor-policy"));

  let authToken = JSON.parse(localStorage.getItem("authTokens"));

  const motor_policy_details = {
    ...motor_details,
    package_details: policy_details.package_id,
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

  const transformedData = transformKeys(motor_details);

  const editData = () => {
    const queryParams = new URLSearchParams({
      edit: true,
      // key2: "value2"
    });
    navigate(`/ecommerce/motor-insurance-coverform/`);
    // navigate(`/ecommerce/motor-insurance-coverform?${queryParams.toString()}`);
    // navigate("/ecommerce/motor-insurance-coverform");
  };

  // async function sendEmailQuatation(id) {
  //   await fetchData(
  //     `${BASE_URL}/send-policy-email/motor/${id}`,
  //     "POST",
  //     authToken.access
  //   )
  //     .then((data) => console.log("Data:", data))
  //     .catch((error) => console.error("Error:", error));
  // }
  const triggerStkPush = async () => {
    if (!paymentPhone) {
      alert("Kindly enter your phone number");
      return;
    }
    // console.log(motor_policy_details);
    // 1. save policy details
    // await fetchData(
    //   `${BASE_URL}/motor-cover-details/`,
    //   "POST",
    //   motor_policy_details,
    //   authToken.access
    // )
    //   .then((data) => console.log("Data:", data))
    //   .catch((error) => console.error("Error:", error));
    // // 2. save transaction details
    setstkPush(true);
    await fetchData(
      `${BASE_URL_HOME}base/transactions/`,
      "POST",
      {
        amount: policy_details.price,
        payment_number: paymentPhone,
        payment_status: "Pending",
      },
      authToken.access
    )
      .then((data) => {
        console.log("Data:", data);
        setstkPush(false);
      })
      .catch((error) => {
        console.error("Error:", error);
        setstkPush(false);
      });
  };

  const getSavedPolicy = JSON.parse(localStorage.getItem("motor-policy"));
  async function sendQouteToEmail() {
    const getSavedPolicyId = localStorage.getItem("motor-policy-id");

    // console.log(getSavedPolicy);
    setsendEmail(true);
    setsendingEmail(true);
    await fetchData(
      `${BASE_URL}/send-motor-policy-email/`,
      "POST",
      {
        policy_name: getSavedPolicy.policy_name,
        price: getSavedPolicy.price,
        car_value: motor_details.car_value,
        engine_cc: motor_details.engine_cc,
        make: motor_details.make,
        manufacture_year: motor_details.manufacture_year,
        policy_type: motor_details.policy_type,
        registration_no: motor_details.registration_no,
        vehicle_use: motor_details.vehicle_use,
      },
      authToken.access
    )
      .then((data) => {
        // console.log("Data:", data);
        if (data.errors?.error) {
          setemailSent(false);
          setsendingEmail(false);
          setemailFailed(true);
          return;
        }
        setemailSent(true);
        setsendingEmail(false);
      })
      .catch((error) => {
        setemailSent(false);
        setsendingEmail(false);
        setemailFailed(true);

        // console.error("Error:", error);
      });
  }

  function doneButton() {
    setsendEmail(false);
    setsendingEmail(false);
    setemailSent(false);
    // let cart = JSON.parse(localStorage.getItem("cart"));
    // cart = cart.filter(
    //   (item) => item.policy_name !== getSavedPolicy.policy_name
    // );
    // // console.log(cart);
    // // Save the updated cart back to local storage
    // localStorage.setItem("cart", JSON.stringify(cart));
    // localStorage.removeItem("motor-policy-id");
    localStorage.removeItem("motor-cover-details");
    localStorage.removeItem("motor-saved-status");
    // localStorage.removeItem("motor-policy");
    navigate("/ecommerce/individual-solutions");
  }

  return (
    <>
      <PopUp isOpen={initiatePayment}>
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
      </PopUp>
      <div>
        <PopUp isOpen={sendEmail}>
          <div className="complete-purchase">
            <div>
              {/* <div className="car-empty-state">
              <img src={car} />
            </div>
            <h6>Motor Details Added</h6> */}
              {sendingEmail && (
                <div>
                  <h4 className="text-center">Sending quote to your email</h4>

                  <img
                    src={spinner2}
                    alt="spinner"
                    className="spinner-payment larger-spinner"
                  />
                </div>
              )}
              {emailSent && (
                <div>
                  <h4 className="text-center">Email sent succesfully</h4>

                  <img src={check} alt="spinner" className=" larger-spinner" />
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
              {emailFailed && (
                <div>
                  <h4 className="text-center">
                    Something wrong happened. Try again Later
                  </h4>

                  <img src={cross} alt="spinner" className=" larger-spinner" />
                  <div>
                    <div className="payment-actions">
                      <button
                        onClick={() => {
                          setsendEmail(false);
                        }}
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
              )}
            </div>
          </div>
        </PopUp>
      </div>
      <Sidebar view="MotorcycleInsurance" />
      <main id="dashboard" className="dashboard h-100 d-flex flex-column">
        <div className="pagetitle z-0">
          <h1 className="text-white">Policy Check Out</h1>
          <nav>
            <ol className="breadcrumb">
              <li className="breadcrumb-item active text-secondary">
                Policy Checkout details.
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
                  <h4>Requested Summary</h4>
                </div>
                <div className="right-part">
                  <button onClick={editData}>Edit Quote</button>
                  <button onClick={sendQouteToEmail}>
                    Send this quote to email
                  </button>
                  <button onClick={initiatePolicyPayment} className="buyButton">
                    Buy Policy
                  </button>
                </div>
              </div>
              <div className="policy-checkout">
                <div className="left-part">
                  <div className="">
                    <h6>Policy Details</h6>
                  </div>
                  <div className="policy-information">
                    <p>
                      <span> Policy Name : </span> {policy_details.policy_name}
                    </p>
                    <p>
                      <span> Policy Price : </span> {policy_details.price}
                    </p>
                  </div>
                </div>
              </div>
              <div className="policy-checkout">
                <div className="left-part">
                  <div className="">
                    <h6>Personal Information</h6>
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
