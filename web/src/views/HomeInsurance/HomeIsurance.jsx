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
  map,
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
import { BASE_URL, fetchData } from "../../components/utils/constants";
import { PopUp } from "../../components/addons/PopUp/PopUp";

export default function HomeInsurance() {
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

export function HomeInsuranceForm() {
  const navigate = useNavigate();

  const authToken = JSON.parse(localStorage.getItem("authTokens"));

  const [formData, setFormData] = useState(() => {
    const savedData = JSON.parse(localStorage.getItem("home-cover-details"));
    return savedData || { car_ownership: "" };
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    // console.log(e.target.value);
  };

  useEffect(() => {
    localStorage.setItem("home-cover-details", JSON.stringify(formData));
  }, [formData]);

  const saveQouteDetails = async (e) => {
    e.preventDefault();

    navigate("/ecommerce/home-insurance-packages");
  };
  return (
    <>
      <Sidebar view="homeInsurance" />
      <main id="dashboard" className="dashboard h-100 d-flex flex-column">
        <div className="pagetitle z-0">
          <h1 className="text-white">Our Solutions</h1>
          <nav>
            <ol className="breadcrumb">
              <li className="breadcrumb-item active text-secondary">
                home Insurance Quote Request
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
              selectOptions={["Home Owner", "Tenant"]}
              label="Ownership Type"
              icon={insuranceIcon}
              value={formData.car_ownership}
              name="car_ownership"
              onChange={handleChange}
            />

            <ReusableInput
              selectOptions={["Nairobi", "Mombasa", "Kisumu"]}
              label="Location of Property"
              icon={map}
              value={formData.location_property}
              name="location_property"
              onChange={handleChange}
            />
            <ReusableInput
              label="Value of the Building (Own)"
              icon={moneyIcon}
              value={formData.building_value}
              name="building_value"
              type="number"
              normalPlaceholder="Total Building Value in Kenya shillings"
              onChange={handleChange}
            />
            <ReusableInput
              label="Total Content Value in Ksh"
              icon={moneyIcon}
              value={formData.content_value}
              type="number"
              normalPlaceholder="Total Content Value in Kenya shillings"
              name="content_value"
              onChange={handleChange}
            />
            <ReusableInput
              label="All Risk Value (portable Items) in Ksh"
              icon={moneyIcon}
              value={formData.risk_value}
              normalPlaceholder="Total Risks Value in Kenya shillings"
              type="number"
              name="risk_value"
              onChange={handleChange}
            />
            <ReusableInput
              label="WIBA"
              icon={personicon}
              value={formData.wiba}
              name="wiba"
              onChange={handleChange}
              normalPlaceholder="Number of Employees to be covered"
              type="number"
            />
            {/* <ReusableInput
              label="Total Content Value in Ksh"
              icon={moneyIcon}
              value={formData.content_value}
              name="content_value"
              onChange={handleChange}
            /> */}
            <ReusableInput
              type="tel"
              label="Contact Details (Phone Number)"
              icon={phoneIcon}
              value={formData.phone_number}
              name="phone_number"
              onChange={handleChange}
              normalPlaceholder="Your Phone Number"
            />
            {/* <ReusableInput type="tel" label="Email *" icon={emailIcon} /> */}

            {/* <ReusableInput
              selectOptions={[
                "Education Savings Plan",
                "Whole Life Plan",
                "Last Expense",
              ]}
              label="Which Plan would you like to learn more about *"
              icon={insuranceIcon}
            />
            <ReusableInput
              label="Use this space to give us further details *
"
              icon={insuranceIcon}
            /> */}
          </FormContainer>
        </section>
      </main>
    </>
  );
}

export function HomeInsurancePackages() {
  // const [packages1, setPackages] = useState([]);

  // useEffect(() => {
  //   const gethomePackages = async () => {
  //     await fetch(`${BASE_URL}/packages/home/`)
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
  //   gethomePackages();
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

  const features = Array.from(
    new Set(packages.flatMap((pkg) => Object.keys(pkg.features)))
  );

  const navigate = useNavigate();

  let savedHousePolicy = JSON.parse(localStorage.getItem("home-cover-details"));

  const authToken = JSON.parse(localStorage.getItem("authTokens"));

  const choosePackage = async (pkg) => {
    setsendingEmail(true);
    setmodalSuccess(true);
    await fetchData(
      `${BASE_URL}/other_policies/`,
      "POST",
      {
        policy_details: {
          name: "MINET HOME",
        },
        policy_type: "Home Insurance",
        infomation_details: {
          ...savedHousePolicy,
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
      "home_cover_policy",
      JSON.stringify({
        package_id: pkg.id,
        policy_name: pkg.title,
        price: pkg.premiums,
      })
    );
    // navigate("/ecommerce/home-insurance-packages");
  };

  function doneButton() {
    setsaveSuccess(false);
    setmodalSuccess(false);
    setsendingEmail(false);
    navigate("/ecommerce/individual-solutions");
    localStorage.removeItem("home-cover-details");
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
      <Sidebar view="homeInsurance" />
      <main id="dashboard" className="dashboard h-100 d-flex flex-column">
        <div className="pagetitle z-0">
          <h1 className="text-white">Our Solutions</h1>
          <nav>
            <ol className="breadcrumb">
              <li className="breadcrumb-item active text-secondary">
                Home Insurance Quote Request
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
