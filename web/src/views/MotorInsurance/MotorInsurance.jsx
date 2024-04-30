import BackToTopBtn from "../../components/addons/BackToTopBtn/BackToTopBtn";
import Preloader from "../../components/addons/Preloader/Preloader";
import Footer from "../../components/layout/Footer/Footer";
import { Link, Outlet } from "react-router-dom";
import Header from "../../components/layout/Header/Header";
import Sidebar from "../../components/layout/Sidebar/Sidebar";
import {
  calender,
  caricon1,
  caricon2,
  cc,
  coverform,
  familycover,
  formtype,
  globeIcon,
  insuranceIcon,
  moneyIcon,
  personicon,
} from "../../components/utils/export-images";
import ReusableInput from "../../components/addons/Forms/Inputs/ReusableInput";
import FormContainer from "../../components/addons/Forms/Layout/FormContainer";
import ReusablePackageTable from "../../components/addons/PackagesTable/ReusablePackageTable";
import { PopUp } from "../../components/addons/PopUp/PopUp";
import { useEffect, useState } from "react";
import "./MotorInsurance.css";
import car from "../../assets/images/svgs/online-payment.png";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../../components/utils/constants";

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

  const saveQouteDetails = () => {
    navigate("/ecommerce/motor-insurance-packages");
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
            />
            <ReusableInput
              selectOptions={[
                "Comprehensive",
                "TPO",
                "Third Party Fire and Theft",
              ]}
              label="POLICY COVER"
              icon={insuranceIcon}
            />
            <ReusableInput label="MAKE" icon={caricon2} />
            <ReusableInput label="CAR VALUE IN SHILLINGS" icon={moneyIcon} />
            <ReusableInput label="MAKE YEAR" icon={calender} />
          </FormContainer>
        </section>
      </main>
    </>
  );
}

export function MotorPackages() {
  const [packages1, setPackages] = useState([]);

  useEffect(() => {
    const getMotorPackages = async () => {
      await fetch(`${BASE_URL}/packages/motor/`)
        .then((response) => response.json())
        .then((data) => {
          const updatedPackages = data.map((packages) => ({
            ...packages,
            features: {
              ...packages.features,
            },
          }));
          console.log(updatedPackages);
          setPackages(updatedPackages);
          // setPackages((prevPackages) => [
          //   {
          //     features: {
          //       Premiums: "",
          //       "": "",
          //     },
          //   },
          //   ,
          //   ...data,
          // ]);
        })
        .catch((error) => console.error("Error:", error));
    };
    getMotorPackages();
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
    new Set(packages.flatMap((pkg) => Object.keys(pkg.features)))
  );

  const navigate = useNavigate();

  const choosePackage = (event) => {
    event.preventDefault();
    navigate("/ecommerce/motor-insurance-coverform");
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
                      onClick={choosePackage}
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

export function MotorCoverForm() {
  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = (event) => {
    event.preventDefault();
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div>
        <PopUp isOpen={isOpen} onClose={togglePopup}>
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
          <FormContainer onClick={togglePopup}>
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
                      label="Registration Number *"
                    />
                    <ReusableInput icon={caricon2} label="Make" />
                    <ReusableInput icon={cc} label="Engine No" />
                    <ReusableInput
                      icon={globeIcon}
                      label="Manufacture Year *"
                    />
                    <ReusableInput icon={cc} label="Engine CC" />
                    <ReusableInput icon={personicon} label="Passangers *" />
                  </div>
                </div>
              </div>
              <div className="input-container">
                <div className="auto-mobile">
                  <img src={coverform} alt="Policy Details" />
                  <h6>Policy Details</h6>
                </div>
                <div className="input-automobile">
                  <ReusableInput label="Value of Motor *" icon={caricon2} />
                  <ReusableInput label="Log Book No" icon={coverform} />
                  <ReusableInput label="Policy Type *" icon={coverform} />
                  <ReusableInput label="Motor Type *" icon={caricon2} />
                  <ReusableInput label="Cover Type *" icon={formtype} />
                  <ReusableInput label="Policy Period From *" icon={calender} />
                </div>
              </div>
            </div>
          </FormContainer>
        </section>
      </main>
    </>
  );
}
