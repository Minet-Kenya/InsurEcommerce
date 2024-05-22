import "./CartPage.css";
import { PopUp } from "../../components/addons/PopUp/PopUp";
import ReusableInput from "../../components/addons/Forms/Inputs/ReusableInput";
import Sidebar from "../../components/layout/Sidebar/Sidebar";
import Header from "../../components/layout/Header/Header";
import { Outlet, useNavigate } from "react-router-dom";
import Preloader from "../../components/addons/Preloader/Preloader";
import BackToTopBtn from "../../components/addons/BackToTopBtn/BackToTopBtn";
import Footer from "../../components/layout/Footer/Footer";
import { useState } from "react";
import {
  BASE_URL,
  BASE_URL_HOME,
  fetchData,
} from "../../components/utils/constants";
import {
  cancelIcon,
  emptystate,
  familycover,
  money2,
  spinner,
} from "../../components/utils/export-images";

export function Cart() {
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

export function CartPage() {
  const navigate = useNavigate();
  const [initiatePayment, setInitiatePayment] = useState(false);
  const [paymentPhone, setPaymentPhone] = useState("");

  // Function to load cart items from local storage

  const handlePhoneInput = (e) => {
    setPaymentPhone(e.target.value);
  };

  const cancelPayment = () => {
    setInitiatePayment(false);
  };

  const initiatePolicyPayment = (policy) => {
    console.log(policy);
    setInitiatePayment(true);
  };

  const personal_info = JSON.parse(localStorage.getItem("personal-details"));
  const cover_details = JSON.parse(localStorage.getItem("cover-details"));
  const policy_details = JSON.parse(localStorage.getItem("policy"));
  const motorcycle_and_rider_details = JSON.parse(
    localStorage.getItem("motor-rider-details")
  );

  const [cart, setCart] = useState(() => {
    let savedCartItems = JSON.parse(localStorage.getItem("cart"));
    return savedCartItems || [];
  });

  let authToken = JSON.parse(localStorage.getItem("authTokens"));

  const motorcycle_policy_details = {
    ...cover_details,
    motorcycle_and_rider_details,
    policy_details,
    package_details: policy_details?.package_id,
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

  const transformedData = transformKeys(personal_info);

  const editData = () => {
    navigate("/ecommerce/motorcycle-cover-details");
  };

  const savePolicyDetails = async () => {
    console.log(motorcycle_policy_details);
    // 1. save policy details

    await fetchData(
      `${BASE_URL}/motorcycle-cover-details/`,
      "POST",
      motorcycle_policy_details,
      authToken.access
    )
      .then((data) => console.log("Data:", data))
      .catch((error) => console.error("Error:", error));

    // 2. save transaction details
    await fetchData(
      `${BASE_URL_HOME}base/transactions/`,
      "POST",
      {
        amount: policy_details.price,
        payment_number: paymentPhone,
        payment_status: "PENDING",
      },
      authToken.access
    )
      .then((data) => console.log("Data:", data))
      .catch((error) => console.error("Error:", error));
  };

  function removePolicy(id) {
    const updatedCart = [...cart];
    updatedCart.splice(id, 1);
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
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
            icon={money2}
            label="Enter phone number to pay from"
          />
          <div className="payment-actions">
            <button onClick={cancelPayment} className="cancel-payment">
              Cancel
            </button>
            <button onClick={savePolicyDetails} className="initiate-payment">
              Initiate Payment
              <img src={spinner} alt="spinner" className="spinner-payment" />
            </button>
          </div>
        </div>
      </PopUp>
      <Sidebar view="CartPage" />
      <main id="dashboard" className="dashboard h-100 d-flex flex-column">
        <div className="pagetitle z-0">
          <h1 className="text-white">Cart</h1>
          <nav>
            <ol className="breadcrumb">
              <li className="breadcrumb-item active text-secondary">
                Cart Policy
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
                  <h4>Cart Summary</h4>
                </div>
                <div className="right-part">
                  {/* <button onClick={editData}>Edit Quote</button>
                  <button>Send this quote to email</button>
                  <button onClick={initiatePolicyPayment} className="buyButton">
                    Buy Policy
                  </button> */}
                </div>
              </div>

              {cart?.length > 0 ? (
                <div>
                  {cart.map((item, index) => (
                    <div key={index} className="policy-cart">
                      <div className="">
                        <h6>Policy Details</h6>
                        <div className="">
                          <p>
                            <span> Policy Name :</span>
                            {item?.policy_name}
                          </p>
                          <button
                            onClick={() => {
                              removePolicy(index);
                            }}
                            className=" cart-action"
                          >
                            Remove
                          </button>
                        </div>
                      </div>
                      <div className=" cart-right">
                        <div className=" ">
                          <p>
                            <span> Policy Price : </span> Ksh
                            {item?.price}
                          </p>
                          <button
                            onClick={() => {
                              initiatePolicyPayment(item);
                            }}
                            className="cartbuyButton"
                          >
                            Buy Policy
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="empty-state">
                  <img src={emptystate} alt="empty-cart" />
                  <h5>No policies in the cart</h5>
                </div>
              )}

              {/* <div className="policy-checkout">
                <div className="left-part">
                  <div className="">
                    <h6>Personal Information</h6>
                  </div>
                  <div className="policy-information">
                    {transformedData &&
                      Object.entries(transformedData ?? {}).map(
                        ([key, value], index) => (
                          <p key={index}>
                            <span>{key ?? ""} : </span> {value ?? ""}
                          </p>
                        )
                      )}
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
