import { Outlet, useNavigate } from "react-router-dom";
import Header from "../../components/layout/Header/Header";
import Footer from "../../components/layout/Footer/Footer";
import Preloader from "../../components/addons/Preloader/Preloader";
import BackToTopBtn from "../../components/addons/BackToTopBtn/BackToTopBtn";
import Sidebar from "../../components/layout/Sidebar/Sidebar";
import {
  cc,
  check,
  coverform,
  cross,
  emailIcon,
  familycover,
  insuranceIcon,
  map,
  money2,
  moneyIcon,
  personicon,
  phoneIcon,
  spinner2,
} from "../../components/utils/export-images";
import ReusableInput from "../../components/addons/Forms/Inputs/ReusableInput";
import FormContainer from "../../components/addons/Forms/Layout/FormContainer";
import ReusablePackageTable from "../../components/addons/PackagesTable/ReusablePackageTable";
import { useEffect } from "react";
import { useState } from "react";
import { PopUp } from "../../components/addons/PopUp/PopUp";
import { BASE_URL, fetchData } from "../../components/utils/constants";

export default function PersonalAccident() {
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

export function PersonalAccidentForm() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState(() => {
    const savedData = JSON.parse(
      localStorage.getItem("personal-accident-details")
    );
    return savedData || { full_names: "" };
  });

  useEffect(() => {
    localStorage.setItem("personal-accident-details", JSON.stringify(formData));
  }, [formData]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    // console.log(e.target.value);
  };

  const saveQouteDetails = (e) => {
    e.preventDefault();
    navigate("/ecommerce/personal-accident-packages");
  };
  return (
    <>
      <Sidebar view="MotorInsurance" />
      <main id="dashboard" className="dashboard h-100 d-flex flex-column">
        <div className="pagetitle z-0">
          <h1 className="text-white">Our Solutions</h1>
          <nav>
            <ol className="breadcrumb">
              <li className="breadcrumb-item active text-secondary">
                Personal Accident Quote Request
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
            formTitle="QUOTE REQUEST      "
            onClick={saveQouteDetails}
          >
            <div className="helper-text">
              <p>Fill in the details required</p>
            </div>

            <ReusableInput
              label="Full Name *"
              icon={personicon}
              value={formData.full_names}
              name="full_names"
              onChange={handleChange}
            />
            <ReusableInput
              label="Mobile Number *"
              icon={phoneIcon}
              value={formData.mobile_number}
              name="mobile_number"
              onChange={handleChange}
            />
            <ReusableInput
              label="Email *"
              icon={emailIcon}
              value={formData.email}
              name="email"
              onChange={handleChange}
            />
            <ReusableInput
              selectOptions={["Male", "Female"]}
              label="Gender"
              icon={personicon}
              value={formData.gender}
              name="gender"
              onChange={handleChange}
            />
            <ReusableInput
              label="Occupation"
              icon={cc}
              value={formData.occupation}
              name="occupation"
              onChange={handleChange}
            />
            <ReusableInput
              selectOptions={["500,000", "1,000,000", "2,000,000"]}
              label="Cover Options *"
              icon={cc}
              value={formData.cover_options}
              name="cover_options"
              onChange={handleChange}
            />
          </FormContainer>
        </section>
      </main>
    </>
  );
}

export function PersonalAccidentPackages() {
  // const [packages1, setPackages] = useState([]);

  // useEffect(() => {
  //   const getMotorPackages = async () => {
  //     await fetch(`${BASE_URL}/packages/motor/`)
  //       .then((response) => response.json())
  //       .then((data) => {
  //         const updatedPackages = data.map((packages) => ({
  //           ...packages,
  //           features: {
  //             ...packages.features,
  //           },
  //         }));
  //         console.log(updatedPackages);
  //         setPackages(updatedPackages);
  //         // setPackages((prevPackages) => [
  //         //   {
  //         //     features: {
  //         //       Premiums: "",
  //         //       "": "",
  //         //     },
  //         //   },
  //         //   ,
  //         //   ...data,
  //         // ]);
  //       })
  //       .catch((error) => console.error("Error:", error));
  //   };
  //   getMotorPackages();
  // }, []);
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
    new Set(packages.flatMap((pkg) => Object.keys(pkg.features)))
  );

  const navigate = useNavigate();

  const savedData = JSON.parse(
    localStorage.getItem("personal-accident-details")
  );

  const [saveSuccess, setsaveSuccess] = useState(false);
  const [modalSuccess, setmodalSuccess] = useState(false);
  const [sendingEmail, setsendingEmail] = useState(false);
  const [emailFailed, setemailFailed] = useState(false);

  const authToken = JSON.parse(localStorage.getItem("authTokens"));

  const choosePackage = async () => {
    setsendingEmail(true);
    setmodalSuccess(true);
    await fetchData(
      `${BASE_URL}/other_policies/`,
      "POST",
      {
        policy_type: "Personal Accident",
        infomation_details: {
          ...savedData,
        },
      },
      authToken.access
    )
      .then((data) => {
        if (data) {
          setsaveSuccess(true);
          setsendingEmail(false);
        }
      })
      .catch((err) => {
        setsendingEmail(false);
        setemailFailed(true);
      });

    // localStorage.setItem(
    //   "travel_cover_policy",
    //   JSON.stringify({
    //     package_id: pkg.id,
    //     policy_name: pkg.title,
    //     price: pkg.premiums,
    //   })
    // );
    // navigate("/ecommerce/home-insurance-packages");
  };

  function doneButton() {
    setsaveSuccess(false);
    setmodalSuccess(false);
    setsendingEmail(false);
    navigate("/ecommerce/individual-solutions");
    localStorage.clear("golf-cover-details");
  }

  return (
    <>
      <PopUp isOpen={modalSuccess}>
        {emailFailed && (
          <div>
            <h4 className="text-center">
              Something wrong happened. Try again Later
            </h4>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <img src={cross} alt="spinner" className=" larger-spinner" />
            </div>
            <div>
              <div className="payment-actions">
                <button
                  onClick={() => {
                    setsaveSuccess(false);
                    setmodalSuccess(false);
                    setsendingEmail(false);
                    setemailFailed(false);
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
                Quatation sent to your email. We will contact you within 24
                hours. Thanks.
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
            <div className="boda-packages">
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
              <ReusablePackageTable packages={packages}>
                {/* {packages.map((pr, i) => (
              <PackageContent key={i} package={pr.title} feature="Premiums">
                <div className="content price">{pr.Premiums}</div>
              </PackageContent>
            ))} */}

                {features.map((p, i) => (
                  <PackageContent key={i} package="" feature={p}>
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        choosePackage();
                      }}
                      className="content choose-btn"
                    >
                      My Choice
                    </button>
                  </PackageContent>
                ))}
              </ReusablePackageTable>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
