import { Outlet, useNavigate } from "react-router-dom";
import Header from "../../components/layout/Header/Header";
import Footer from "../../components/layout/Footer/Footer";
import Preloader from "../../components/addons/Preloader/Preloader";
import BackToTopBtn from "../../components/addons/BackToTopBtn/BackToTopBtn";
import Sidebar from "../../components/layout/Sidebar/Sidebar";
import {
  check,
  coverform,
  emailIcon,
  familycover,
  insuranceIcon,
  personicon,
  phoneIcon,
  spinner2,
} from "../../components/utils/export-images";
import ReusableInput from "../../components/addons/Forms/Inputs/ReusableInput";
import FormContainer from "../../components/addons/Forms/Layout/FormContainer";
import "./MedicalCover.css";
import ReusablePackageTable from "../../components/addons/PackagesTable/ReusablePackageTable";
import { useState } from "react";
import { useEffect } from "react";
import { BASE_URL, fetchData } from "../../components/utils/constants";
import { PopUp } from "../../components/addons/PopUp/PopUp";

export default function MedicalCover() {
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

export function MedicalCoverForm() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState(() => {
    const savedData = JSON.parse(localStorage.getItem("medical-cover-details"));
    return savedData || { marital_status: "" };
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    console.log(e.target.value);
  };
  const handlchecked = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.checked });
  };

  useEffect(() => {
    localStorage.setItem("medical-cover-details", JSON.stringify(formData));
  }, [formData]);

  const saveQouteDetails = (e) => {
    e.preventDefault();
    navigate("/ecommerce/medical-cover-packages");
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
                Motor Insurance Quote Request
              </li>
            </ol>
          </nav>
        </div>
        <section
          className="flex-grow-1 container-fluid text-center d-flex flex-column  mb-3"
          data-aos="fade-in"
        >
          <FormContainer onClick={saveQouteDetails}>
            <div className="sub-icon-header">
              <div className="input-container">
                <div>
                  <div className="input-automobile">
                    <ReusableInput
                      selectOptions={["Married", "Single"]}
                      label="Marital status.*"
                      icon={personicon}
                      value={formData.marital_status}
                      name="marital_status"
                      onChange={handleChange}
                    />
                    <ReusableInput
                      icon={personicon}
                      type="number"
                      label="Number of Children (Below 18 Years.)"
                      value={formData.no_of_children}
                      name="no_of_children"
                      onChange={handleChange}
                    />
                    <ReusableInput
                      icon={personicon}
                      type="number"
                      label="Age of Principal member"
                      value={formData.age_pricipal_member}
                      name="age_pricipal_member"
                      onChange={handleChange}
                    />
                    <ReusableInput
                      selectOptions={["Jubilee", "Single", "OLD MUTUAL"]}
                      icon={personicon}
                      label="Underwriters"
                      value={formData.underwriters}
                      name="underwriters"
                      onChange={handleChange}
                    />
                    <ReusableInput
                      icon={emailIcon}
                      label="Your Email"
                      value={formData.email}
                      name="email"
                      onChange={handleChange}
                    />
                  </div>
                </div>
              </div>
              <div className="input-container">
                <div className="input-automobile">
                  <ReusableInput
                    selectOptions={["Male", "Female"]}
                    label="Gender.*"
                    icon={personicon}
                    value={formData.gender}
                    name="gender"
                    onChange={handleChange}
                  />
                  <ReusableInput
                    type="number"
                    label="Number of Children (Above 18 Years.)"
                    icon={personicon}
                    value={formData.number_of_children}
                    name="number_of_children"
                    onChange={handleChange}
                  />
                  <ReusableInput
                    type="number"
                    label="Age of Spouse"
                    icon={personicon}
                    value={formData.spouse_age}
                    name="spouse_age"
                    onChange={handleChange}
                  />
                  <div className="medical-addons">
                    <div>
                      <input
                        type="checkbox"
                        id="optical"
                        class="styled-checkbox"
                        name="optical"
                        checked={formData.optical}
                        onChange={handlchecked}
                      />
                      <label for="optical" class="checkbox-label">
                        Include Optical
                      </label>
                    </div>
                    <div>
                      <input
                        type="checkbox"
                        id="dental"
                        class="styled-checkbox"
                        name="dental"
                        checked={formData.dental}
                        onChange={handlchecked}
                      />
                      <label for="dental" class="checkbox-label">
                        Include Dental
                      </label>
                    </div>
                    <div>
                      <input
                        type="checkbox"
                        id="maternity"
                        class="styled-checkbox"
                        checked={formData.maternity}
                        name="maternity"
                        onChange={handlchecked}
                      />
                      <label for="maternity" class="checkbox-label">
                        Include Maternity
                      </label>
                    </div>
                  </div>
                  <ReusableInput
                    label="Your Name"
                    icon={personicon}
                    value={formData.your_name}
                    name="your_name"
                    onChange={handleChange}
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

export function MedicalCoverPackages() {
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

  const [saveSuccess, setsaveSuccess] = useState(false);
  const [modalSuccess, setmodalSuccess] = useState(false);
  const [sendingEmail, setsendingEmail] = useState(false);

  const PackageContent = ({ children }) => {
    return children;
  };

  let savedMedicalPolicy = JSON.parse(
    localStorage.getItem("medical-cover-details")
  );

  const authToken = JSON.parse(localStorage.getItem("authTokens"));

  const features = Array.from(
    new Set(packages.flatMap((pkg) => Object.keys(pkg.features)))
  );

  const navigate = useNavigate();

  const choosePackage = async (pkg) => {
    // navigate("/ecommerce/home-insurance-packages");
    setsendingEmail(true);
    setmodalSuccess(true);
    await fetchData(
      `${BASE_URL}/other_policies/`,
      "POST",
      {
        policy_details: {
          name: "MINET HOME",
        },
        policy_type: "Medical Insurance",
        infomation_details: {
          ...savedMedicalPolicy,
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
      });

    localStorage.setItem(
      "medical_cover_policy",
      JSON.stringify({
        package_id: pkg.id,
        policy_name: pkg.title,
        price: pkg.premiums,
      })
    );
  };

  function doneButton() {
    setsaveSuccess(false);
    setmodalSuccess(false);
    setsendingEmail(false);
    navigate("/ecommerce/individual-solutions");
    localStorage.clear("medical-cover-details");
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
                {features.map((p, i) => (
                  <PackageContent key={i} package="" feature={p}>
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
              </ReusablePackageTable>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
