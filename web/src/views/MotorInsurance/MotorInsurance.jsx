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
import "./MotorInsurance.css";
import car from "../../assets/images/svgs/online-payment.png";
import { useNavigate } from "react-router-dom";
import {
  BASE_URL,
  BASE_URL_HOME,
  fetchData,
} from "../../components/utils/constants";

export function MotorInsurance() {
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

export function MotorInsuranceQuote() {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState(() => {
    const savedData = JSON.parse(localStorage.getItem("motor-cover-details"));
    return savedData || { vehicle_use: "" };
  });

  useEffect(() => {
    localStorage.setItem("motor-cover-details", JSON.stringify(formData));
  }, [formData]);

  const saveQouteDetails = (e) => {
    e.preventDefault();
    setIsOpen(true);

    setTimeout(() => {
      setIsOpen(false);
      navigate("/ecommerce/motor-insurance-packages");
    }, 3000);
  };
  const proceedMotorCheckout = (event) => {
    event.preventDefault();
    navigate("/ecommerce/motor-checkout");
    // setIsOpen(!isOpen);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    // console.log(e.target.value);
  };

  return (
    <>
      {/* <div>
        <PopUp isOpen={isOpen}>
          <div className="complete-purchase">
            <div>
              <h4 className="text-center">Calculating the Cover Price</h4>
              <div className="car-empty-state">
                <img src={car} />
              </div>
              <h6>Motor Details Added</h6>
              <img
                src={spinner2}
                alt="spinner"
                className="spinner-payment larger-spinner"
              />
            </div>
          </div>
        </PopUp>
      </div> */}
      <Sidebar view="MotorInsurance" />
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
              selectOptions={["Motor Commercial", "Motor Private"]}
              label="VEHICLE USE"
              icon={caricon1}
              name="vehicle_use"
              value={formData.vehicle_use}
              onChange={handleChange}
            />
            <ReusableInput
              selectOptions={[
                { name: "Comprehensive Cover", value: "Comprehensive" },
                { name: "Third Party Only Cover", value: "TPO" },
                { name: "Third Party Fire and Theft Cover", value: "TPOFT" },
              ]}
              label="POLICY COVER"
              name="policy_type"
              value={formData.policy_type}
              icon={insuranceIcon}
              onChange={handleChange}
            />
            <ReusableInput
              label="MAKE e.g Toyota,Nisssan"
              name="make"
              icon={caricon2}
              value={formData.make}
              onChange={handleChange}
            />
            <ReusableInput
              // selectOptions={["500k-1.5M", "1.6M- 2M", "2.1M-3.5M"]}
              type="number"
              label="CAR VALUE IN SHILLINGS"
              icon={moneyIcon}
              name="car_value"
              value={formData.car_value}
              onChange={handleChange}
            />
            <ReusableInput
              type="year"
              value={formData.manufacture_year}
              onChange={handleChange}
              label="MAKE YEAR"
              name="manufacture_year"
              icon={calender}
            />
          </FormContainer>
        </section>
      </main>
    </>
  );
}

export function MotorPackages() {
  const [packages1, setPackages] = useState([]);
  const [analysis, setAnalysis] = useState([]);
  const [noanalysis, setnoAnalysis] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const savedData = JSON.parse(localStorage.getItem("motor-cover-details"));

  let authToken = JSON.parse(localStorage.getItem("authTokens"));

  useEffect(() => {
    const getMotorPackages = async () => {
      await fetch(`${BASE_URL}/packages/Motor/`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${authToken.access}`,
        },
      })
        .then((response) => response.json())
        .then((data) => {
          const updatedPackages = data.map((packages) => ({
            ...packages,
            features: {
              ...packages.features,
              Premiums: "",
              "": "",
            },
          }));
          // console.log(updatedPackages);
          setPackages(updatedPackages);
        })
        .catch((error) => console.error("Error:", error));
    };
    const getAnalysis = async () => {
      setIsOpen(true);
      await fetch(
        `https://collaborationkenya.minet.com/minetapi/motor_analysis.php`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            Vehicleuse: savedData.vehicle_use,
            PolicyCover: savedData.policy_type,
            Make: savedData.make,
            CarValue: savedData.car_value,
            MakeYear: savedData.manufacture_year,
          }),
        }
      )
        .then((response) => response.json())
        .then((data) => {
          // console.log(data);
          if (data.status === "0") {
            setnoAnalysis(data.message);
          } else {
            setAnalysis([...data]);
            // console.log(analysis);
          }
          setIsOpen(false);
        })
        .catch((error) => {
          // console.error("Error:", error);
          setIsOpen(false);
        });
    };
    // getMotorPackages();
    getAnalysis();
  }, []);
  const packages = [
    {
      title: "Basic Premium ",
      features: {
        "DIRECTLINE ASSURANCE": "35,000.00",
        "FIDELITY SHIELD INSURANCE CO.": "57,500.00",
      },
    },
    {
      title: "Excess Protector",
      features: {
        "DIRECTLINE ASSURANCE": "0.00",
      },
    },
    {
      title: "PVT",
      Premiums: "Kshs 4,556 ",

      features: {
        "DIRECTLINE ASSURANCE": "0.00",
      },
    },
    {
      title: "Loss of Use",
      features: {
        "DIRECTLINE ASSURANCE": "0.00",
      },
    },
    {
      title: "Total Premiums",
      features: {
        "DIRECTLINE ASSURANCE": "0.00",
      },
    },
    {
      title: "",
      features: {
        "DIRECTLINE ASSURANCE": "",
      },
    },
  ];

  const PackageContent = ({ children }) => {
    return children;
  };

  const features = Array.from(
    new Set(packages1.flatMap((pkg) => Object.keys(pkg.features)))
  );

  const navigate = useNavigate();

  const choosePackage = (pkg) => {
    // console.log(pkg);
    // localStorage.setItem(
    //   "motor-policy",
    //   JSON.stringify({
    //     package_id: pkg.id,
    //     policy_name: pkg.title,
    //     price: pkg.premiums,
    //   })
    // );
    localStorage.setItem(
      "motor-policy",
      JSON.stringify({
        package_id: pkg.UnderwriterID,
        policy_name: pkg.Underwriter,
        price: pkg.Premiums,
        lossofUse: pkg.LossofUse,
      })
    );
    navigate("/ecommerce/motor-insurance-coverform");
  };

  return (
    <>
      <div>
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
      </div>
      <Sidebar view="MotorInsurance" />
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
              {noanalysis && (
                <div className="empty-state">
                  <img src={emptystate} alt="empty-cart" />
                  <h5>Underwriters not Listed.</h5>
                </div>
              )}
              {analysis.length > 0 && (
                <table className="package-table">
                  <thead>
                    <tr>
                      <th className="package-title"> Underwriters</th>
                      <th className="package-title">Loss of use</th>
                      <th className="package-title">Premiums</th>
                      <th className="empty-cell"></th>
                    </tr>
                  </thead>
                  <tbody>
                    {analysis.map((a, index) => (
                      <tr key={index}>
                        <td className="feature-name">{a?.Underwriter}</td>
                        <td className="feature-description">{a?.LossofUse}</td>
                        <td className="feature-description">
                          Ksh {a?.Premiums}
                        </td>
                        <td className="feature-description">
                          <button
                            onClick={(e) => {
                              e.preventDefault();
                              choosePackage(a);
                            }}
                            className="content choose-btn"
                          >
                            Select
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
                        choosePackage(p);
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

export function MotorCoverForm() {
  const navigate = useNavigate();

  const [isOpen, setIsOpen] = useState(false);

  const [formData, setFormData] = useState(() => {
    const savedData = JSON.parse(localStorage.getItem("motor-cover-details"));
    return savedData || { registration_no: "" };
  });
  const [formError, setFormError] = useState("");

  const motor_policy = JSON.parse(localStorage.getItem("motor-policy"));
  const motor_cover_details = JSON.parse(
    localStorage.getItem("motor-cover-details")
  );
  const authToken = JSON.parse(localStorage.getItem("authTokens"));

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    // console.log(e.target.value);
  };

  useEffect(() => {
    localStorage.setItem("motor-cover-details", JSON.stringify(formData));
  }, [formData]);

  function saveMotocycleDetails(e) {
    e.preventDefault();
    const requiredFields = [
      "registration_no",
      "make",
      "engine_no",
      "manufacture_year",
      "engine_cc",
      "car_value",
      "policy_type",
      // "motor_type",
      "policy_period",
    ];

    // const hasEmptyFields = requiredFields.some((field) => !formData[field]);

    // console.log(formData);

    // if (hasEmptyFields) {
    //   // console.log("hahahdhd");
    //   setFormError("Please fill in all required fields.");
    //   return;
    // }else{

    // }
    setIsOpen(!isOpen);
  }
  const motor_details = {
    package_details: motor_policy.package_id,
    ...motor_cover_details,
  };

  async function savePendingInfoData() {
    // console.log(motor_details);

    await fetchData(
      `${BASE_URL}/motor-cover-details/`,
      "POST",
      motor_details,
      authToken.access
    )
      .then((data) => {
        // console.log("Data:", data);

        localStorage.setItem("motor-policy-id", data.id);
        let cart = JSON.parse(localStorage.getItem("cart"));
        if (cart) {
          // console.log(cart);
          // cart.push(motor_policy);
          localStorage.setItem("cart", JSON.stringify(cart));
        } else {
          localStorage.setItem("cart", JSON.stringify([motor_policy]));
        }
      })
      .catch((error) => {
        // console.log(Object.values(error));
      });
  }

  async function updatePolicyData() {
    let getId = localStorage.getItem("motor-policy-id");
    // console.log(getId);
    await fetchData(
      `${BASE_URL}/motor-cover-details/${getId}/`,
      "PATCH",
      motor_details,
      authToken.access
    )
      .then((data) => {
        // console.log("Data:", data);
      })
      .catch((error) => {
        // console.log(Object.values(error));
      });
  }

  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);

  const proceedMotorCheckout = (event) => {
    event.preventDefault();

    setIsOpen(!isOpen);
    let getSavedStatus = localStorage.getItem("motor-saved-status");
    if (getSavedStatus === "true") {
      updatePolicyData();

      // console.log("Already saved data");
    } else {
      localStorage.setItem("motor-saved-status", "true");
      // console.log("Saving data");
      savePendingInfoData();
    }
    let is_edit = queryParams.get("edit");
    if (is_edit) {
      navigate("/ecommerce/motor-checkout");
    } else {
      navigate("/ecommerce/motor-checkout");
    }
  };

  return (
    <>
      <div>
        <PopUp isOpen={isOpen} onClose={proceedMotorCheckout}>
          <div className="complete-purchase">
            <div>
              <h4 className="text-center">Complete Payment</h4>
              <div className="car-empty-state">
                <img src={car} />
              </div>
              <h6>Motor Details Added</h6>
              <p>Premiums = Kshs 35,397.50</p>
              <button className="btn btn-primary ">Proceed and Buy</button>
            </div>
          </div>
        </PopUp>
      </div>
      <Sidebar view="MotorInsurance" />
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
          <FormContainer onClick={proceedMotorCheckout}>
            <div className="automotive-header">
              <h4>
                Automobile || Cover - Automobile || Underwriter - Old Mutual
                General Insurance Kenya Limited
              </h4>
            </div>
            <div className="sub-icon-header">
              <div className="input-container">
                <div className="auto-mobile">
                  <img src={caricon1} alt="Auto Mobile Details" />
                  <h6>Auto Mobile Details</h6>
                </div>
                <div>
                  <div className="input-automobile">
                    <ReusableInput
                      icon={personicon}
                      value={formData.registration_no}
                      name="registration_no"
                      onChange={handleChange}
                      label="Registration Number *"
                    />
                    <ReusableInput
                      value={formData.make}
                      name="make"
                      onChange={handleChange}
                      icon={caricon2}
                      label="Make e.g Toyota,Nisssan"
                    />
                    <ReusableInput
                      value={formData.engine_no}
                      name="engine_no"
                      onChange={handleChange}
                      icon={cc}
                      label="Engine No"
                    />
                    <ReusableInput
                      icon={globeIcon}
                      value={formData.manufacture_year}
                      name="manufacture_year"
                      type="year"
                      onChange={handleChange}
                      label="Manufacture Year *"
                    />

                    {/* <ReusableInput icon={personicon} label="Passangers *" /> */}
                  </div>
                </div>
              </div>
              <div className="input-container">
                <div className="auto-mobile">
                  <img src={coverform} alt="Policy Details" />
                  <h6>Policy Details</h6>
                </div>
                <div className="input-automobile">
                  <ReusableInput
                    value={formData.car_value}
                    name="car_value"
                    onChange={handleChange}
                    type="number"
                    label="Value of Motor *"
                    icon={caricon2}
                  />
                  {/* <ReusableInput label="Log Book No" icon={coverform} /> */}
                  {/* <ReusableInput
                    value={formData.policy_type}
                    name="policy_type"
                    onChange={handleChange}
                    label="Policy Type *"
                    icon={coverform}
                  /> */}
                  <ReusableInput
                    selectOptions={[
                      { name: "Comprehensive Cover", value: "Comprehensive" },
                      { name: "Third Party Only Cover", value: "TPO" },
                      {
                        name: "Third Party Fire and Theft Cover",
                        value: "TPOFT",
                      },
                    ]}
                    label="Policy Type *"
                    name="policy_type"
                    value={formData.policy_type}
                    icon={insuranceIcon}
                    onChange={handleChange}
                  />
                  {/* <ReusableInput
                    value={formData.motor_type}
                    name="motor_type"
                    onChange={handleChange}
                    label="Motor Type *"
                    icon={caricon2}
                  /> */}
                  {/* <ReusableInput
                  value={formData.cover_type}
                  name="cover_type"
                  onChange={handleChange}
                  label="Cover Type *" icon={formtype} /> */}
                  <ReusableInput
                    icon={cc}
                    value={formData.engine_cc}
                    name="engine_cc"
                    onChange={handleChange}
                    label="Engine CC"
                  />
                  <ReusableInput
                    type="date"
                    value={formData.policy_period}
                    name="policy_period"
                    onChange={handleChange}
                    label="Policy Period From *"
                    icon={calender}
                  />
                </div>
              </div>
            </div>
          </FormContainer>
        </section>
      </main>
    </>
  );
}

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
    navigate(`/ecommerce/motor-insurance-coverform?${queryParams.toString()}`);
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
    // console.log(cart);

    // Save the updated cart back to local storage
    // localStorage.setItem("cart", JSON.stringify(cart));
    localStorage.clear("motor-policy-id");
    localStorage.clear("motor-cover-details");
    localStorage.clear("motor-saved-status");
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
