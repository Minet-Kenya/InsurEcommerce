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
import "./UserPolicies.css";
import car from "../../assets/images/svgs/online-payment.png";
import { useNavigate } from "react-router-dom";
import {
  BASE_URL,
  BASE_URL_HOME,
  fetchData,
} from "../../components/utils/constants";

export function UserPolicies() {
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

export function UserPoliciesList() {
  const [policies, setPolicies] = useState([]);

  let authToken = JSON.parse(localStorage.getItem("authTokens"));

  useEffect(() => {
    const getPolicies = async () => {
      let response = await fetch(`${BASE_URL}/fetch-policies/`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${authToken.access}`,
        },
      });
      if (response.ok) {
        let policies = await response.json();
        setPolicies(policies);
        // console.log(policies);
      }
    };
    getPolicies();
  }, []);

  //   const getPolicies = async () => {
  //     await fetchData(`${BASE_URL}/fetch-policies/`, "GET", "", authToken.access)
  //       .then((response) => {
  //         let data = response.json();
  //         console.log(response.json());
  //       })
  //       .then((data) => {
  //         console.log(data);
  //         setPolicies(data);
  //       })
  //       .catch((error) => {
  //         // console.error("Error:", error);
  //       });
  //   };
  //   getPolicies();
  const PackageContent = ({ children }) => {
    return children;
  };

  //   const features = Array.from(
  //     new Set(packages1.flatMap((pkg) => Object.keys(pkg.features)))
  //   );

  const navigate = useNavigate();

  const viewPolicy = (policy_no) => {
    localStorage.setItem("policy_no", policy_no);

    // localStorage.setItem(
    //   "motor-policy",
    //   JSON.stringify({
    //     package_id: pkg.UnderwriterID,
    //     policy_name: pkg.Underwriter,
    //     price: pkg.Premiums,
    //     lossofUse: pkg.LossofUse,
    //   })
    // );
    navigate("/ecommerce/view-policy");
  };
  const viewPolicyClaim = (policy_no) => {
    localStorage.setItem("policy_no", policy_no);

    // localStorage.setItem(
    //   "motor-policy",
    //   JSON.stringify({
    //     package_id: pkg.UnderwriterID,
    //     policy_name: pkg.Underwriter,
    //     price: pkg.Premiums,
    //     lossofUse: pkg.LossofUse,
    //   })
    // );
    navigate("/ecommerce/view-policy-claim");
  };
  return (
    <>
      {/* <div>
        <PopUp isOpen={isOpen}>
          <div className="complete-purchase">
            <div>
              <h4 className="text-center">Calculating the Cover Price</h4>
              <img
                src={spinner2}
                alt="spinner"
                className="spinner-payment larger-spinner"
              />
            </div>
          </div>
        </PopUp>
      </div> */}
      <Sidebar view="UserPolicies" />
      <main id="dashboard" className="dashboard h-100 d-flex flex-column">
        <div className="pagetitle z-0">
          <h1 className="text-white">Our Solutions</h1>
          <nav>
            <ol className="breadcrumb">
              <li className="breadcrumb-item active text-secondary">
                Motor Insurance Quote Request
              </li>
            </ol>
          </nav>
        </div>
        <section
          className="flex-grow-1 container-fluid text-center d-flex flex-column  mb-3"
          data-aos="fade-in"
        >
          <div id="">
            <div
              className="boda-packages"
              style={{
                overflowX: "auto",
              }}
            >
              <div className="d-flex  align-items-center">
                <img
                  style={{ width: `33px`, marginRight: `11px` }}
                  src={coverform}
                  alt=""
                  className="mr-3 w-[44px]"
                  srcset=""
                />
                <h4>REQUESTED ANALYSIS</h4>
              </div>
              {policies.length === 0 && (
                <div className="empty-state">
                  <img src={emptystate} alt="empty-cart" />
                  <h5>No Policies Listed.</h5>
                </div>
              )}
              {policies.length > 0 && (
                <table className="package-table">
                  <thead>
                    {/* {
        "PolicyNo": "PC/01/1463534/1/2570",
        "INInsurers": "GEMINIA INSURANCE CO. LTD",
        "PolicyEnd": "31-12-2024",
        "Status": "Active",
        "ClassCovered": "COMP- MOTOR PRIVATE- GEMINIA"
    }, */}
                    <tr>
                      <th className="package-title"> Insurers</th>
                      <th className="package-title">Policy No.</th>
                      <th className="package-title">End Date</th>
                      <th className="package-title">Status</th>
                      <th className="empty-cell"></th>
                      <th className="empty-cell"></th>
                      <th className="empty-cell"></th>
                    </tr>
                  </thead>
                  <tbody>
                    {policies.map((a, index) => (
                      <tr key={index}>
                        <td className="feature-name">{a?.INInsurers}</td>
                        <td className="feature-description">{a?.PolicyNo}</td>
                        <td className="feature-description">{a?.PolicyEnd}</td>
                        <td className="feature-description">{a?.Status}</td>
                        <td className="feature-description">
                          <button
                            onClick={(e) => {
                              e.preventDefault();
                              //   choosePolicy(a);
                            }}
                            className="content choose-btn"
                          >
                            Renew
                          </button>
                        </td>
                        <td className="feature-description">
                          <button
                            onClick={(e) => {
                              e.preventDefault();
                              viewPolicy(a?.PolicyNo);
                            }}
                            className="content choose-btn"
                          >
                            View Policy
                          </button>
                        </td>
                        <td className="feature-description">
                          <button
                            onClick={(e) => {
                              e.preventDefault();
                              viewPolicyClaim(a?.PolicyNo);
                            }}
                            className="content choose-btn"
                          >
                            Claims
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              )}

              {/* <ReusablePackageTable packages={packages1} alternate={true}>
                {packages1.map((pr, i) => (
                  <PackageContent key={i} package={pr.title} feature="Premiums">
                    <div className="content price">{pr.premiums}</div>
                  </PackageContent>
                ))}

                {packages1.map((p, i) => (
                  <PackageContent key={i} package={p.title} feature="">
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        choosePolicy(p);
                      }}
                      className="content choose-btn"
                    >
                      Select
                    </button>
                  </PackageContent>
                ))}
              </ReusablePackageTable> */}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export function ViewUserPolicy() {
  const navigate = useNavigate();
  const [initiatePayment, setInitiatePayment] = useState(false);
  const [emailSent, setemailSent] = useState(false);
  const [sendingEmail, setsendingEmail] = useState(false);
  const [sendEmail, setsendEmail] = useState(false);
  const [emailFailed, setemailFailed] = useState(false);
  const [stkPush, setstkPush] = useState(false);

  const [paymentPhone, setPaymentPhone] = useState("");

  const [policyDetails, setpolicyDetails] = useState([]);

  let authToken = JSON.parse(localStorage.getItem("authTokens"));
  let [policyNo, setpolicyNo] = useState("");
  useEffect(() => {
    let policy_no = localStorage.getItem("policy_no");
    setpolicyNo(policy_no);
    const getUserData = async () => {
      let response = await fetch(
        `https://ussd.minet.co.ke/minetapi/portals/Policy_Notes.php?pol=${policy_no}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${authToken.access}`,
          },
        }
      );
      if (response.ok) {
        let profile = await response.json();
        setpolicyDetails(profile);
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

  // const transformedData = transformKeys(profile.personal_info);

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
          <h1 className="text-white">Policy No: {policyNo}</h1>
          <nav>
            <ol className="breadcrumb">
              <li className="breadcrumb-item active text-secondary">
                Policy details.
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
                  <h4>Policy Details</h4>
                </div>
                <div className="right-part">
                  {/* <button>Change Password</button> */}
                  {/* <button
                    onClick={(e) => {
                      e.preventDefault();
                      goToplaceClaim();
                    }}
                  >
                    Place Claim
                  </button> */}
                </div>
              </div>
              <div className="policy-checkout">
                <div className="left-part">
                  <div className="">{/* <h6>Personal Details</h6> */}</div>
                  {policyDetails.map((p, index) => (
                    <div key={index}>
                      <h6>{p?.header}</h6>
                      <p dangerouslySetInnerHTML={{ __html: p?.notes }}></p>
                    </div>
                  ))}
                  {/* <div className="policy-information">
                    <p>
                      <span> Email : </span> {profile.email}
                    </p>
                    <p>
                      <span> Name : </span> {profile.name}
                    </p>
                    <p>
                      <span> Username : </span> {profile.username}
                    </p>
                  </div> */}
                </div>
              </div>
              {/* <div className="policy-checkout">
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
              </div> */}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export function ViewPolicyClaims() {
  const navigate = useNavigate();
  const [initiatePayment, setInitiatePayment] = useState(false);
  const [emailSent, setemailSent] = useState(false);
  const [sendingEmail, setsendingEmail] = useState(false);
  const [sendEmail, setsendEmail] = useState(false);
  const [emailFailed, setemailFailed] = useState(false);
  const [stkPush, setstkPush] = useState(false);

  const [paymentPhone, setPaymentPhone] = useState("");

  const [policyDetails, setpolicyDetails] = useState([]);

  let authToken = JSON.parse(localStorage.getItem("authTokens"));
  let [policyNo, setpolicyNo] = useState("");
  useEffect(() => {
    let policy_no = localStorage.getItem("policy_no");
    setpolicyNo(policy_no);
    const getUserData = async () => {
      let response = await fetch(
        `https://ussd.minet.co.ke/minetapi/portals/ClaimsDetails.php`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${authToken.access}`,
          },
          body: JSON.stringify({
            policyid: policy_no,
          }),
        }
      );
      if (response.ok) {
        let claims = await response.json();
        if (claims.status === 1) {
          setpolicyDetails([]);
          return;
        }
        setpolicyDetails(claims);
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

  // const transformedData = transformKeys(profile.personal_info);

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

  function goToplaceClaim() {
    navigate("/ecommerce/place-claim");
  }

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
          <h1 className="text-white">Policy No: {policyNo}</h1>
          <nav>
            <ol className="breadcrumb">
              <li className="breadcrumb-item active text-secondary">
                Policy details.
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
                  <h4>Policy Claim Details</h4>
                </div>
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    goToplaceClaim();
                  }}
                >
                  Place Claim
                </button>
              </div>
              <div className="policy-checkout">
                <div className="left-part">
                  <div className="">{/* <h6>Personal Details</h6> */}</div>
                  {policyDetails.length === 0 ? (
                    <h6>No Claim found for this policy</h6>
                  ) : (
                    policyDetails.map((p, index) => (
                      <div key={index}>
                        <h6>{p?.PersonReporting}</h6>
                        <p>Status - {p?.Status} </p>
                        <p>Reporting Date - {p?.ReportingDate} </p>
                        <p>Loss Date - {p?.LossDate} </p>
                        <p>Risk No - {p?.RiskNo} </p>
                      </div>
                    ))
                  )}
                  {/* <div className="policy-information">
                    <p>
                      <span> Email : </span> {profile.email}
                    </p>
                    <p>
                      <span> Name : </span> {profile.name}
                    </p>
                    <p>
                      <span> Username : </span> {profile.username}
                    </p>
                  </div> */}
                </div>
              </div>
              {/* <div className="policy-checkout">
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
              </div> */}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
