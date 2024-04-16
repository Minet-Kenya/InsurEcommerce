import React, { useState, useEffect } from "react";
import Header from "../../components/layout/Header/Header";
import Preloader from "../../components/addons/Preloader/Preloader";
import BackToTopBtn from "../../components/addons/BackToTopBtn/BackToTopBtn";
import Footer from "../../components/layout/Footer/Footer";
import { Link, Outlet } from "react-router-dom";
import "./MotorcycleInsurance.css";
import Sidebar from "../../components/layout/Sidebar/Sidebar";
import {
  bodasterling,
  calender,
  caricon1,
  caricon2,
  cc,
  coverform,
  emailIcon,
  familycover,
  formtype,
  globeIcon,
  iconBoda,
  iconBodaPremium,
  map,
  messageIcon,
  money2,
  personicon,
  phoneIcon,
  pinLocation,
  profile,
  shareForm,
} from "../../components/utils/export-images";
import ReusablePackageTable from "../../components/addons/PackagesTable/ReusablePackageTable";
import FormContainer from "../../components/addons/Forms/Layout/FormContainer";
import ReusableInput from "../../components/addons/Forms/Inputs/ReusableInput";
import { useNavigate } from "react-router-dom";
import BaseURL from "../../components/utils/constants";

export function MotorcycleInsurance() {
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

export function MotorcycleSolutions() {
  return (
    <>
      <Sidebar view="MotorcycleInsurance" />
      <main id="dashboard" className="dashboard h-100 d-flex flex-column">
        <div className="pagetitle z-0">
          <h1 className="text-white">Our Solutions</h1>
          <nav>
            <ol className="breadcrumb">
              <li className="breadcrumb-item active text-secondary">
                Motorcycle Solutions
              </li>
            </ol>
          </nav>
        </div>
        <section
          className="flex-grow-1 container-fluid text-center d-flex flex-column  mb-3"
          data-aos="fade-in"
        >
          <div className="row g-4 ">
            <div className="col-4 col-sm-3 col-xl-2 d-flex ">
              <Link
                className="solutions-img education-policy position-relative d-flex flex-column justify-content-center align-items-center rounded shadow"
                to="/ecommerce/boda-boda-solution"
              >
                <img
                  src={iconBoda}
                  width=""
                  height=""
                  alt="education-policy icon"
                  className="img-fluid"
                />
                <h2 className="mt-2">Boda Boda Solution</h2>
              </Link>
            </div>
            <div className="col-4 col-sm-3 col-xl-2 d-flex ">
              <Link
                className="solutions-img education-policy position-relative d-flex flex-column justify-content-center align-items-center rounded shadow"
                to="/ecommerce/motorcycle-premium-insurance"
              >
                <img
                  src={iconBodaPremium}
                  width=""
                  height=""
                  alt="education-policy icon"
                  className="img-fluid"
                />
                <h2 className="mt-2">Motorcycle Insurance Premium</h2>
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export function BodaPackages() {
  const [packages1, setPackages] = useState([]);

  useEffect(() => {
    fetch(`${BaseURL}/packages/boda-boda`)
      .then((response) => response.json())
      .then((data) => {
        const updatedPackages = data.map((packages) => ({
          ...packages,
          features: {
            Premiums: "",
            "": "",
            ...packages.features,
          },
        }));
        // console.log(updatedPackages);
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
  }, []);

  // const packages1 = [

  //   {
  //     title: "Fully Comprehensive insurance",
  //     Premiums: "Kshs 6,576",
  //     features: {
  //       "Feature 3": "Description 3 for Package B",
  //     },
  //   },
  // {
  //   title: "PACKAGE 3",
  //   Premiums: "Kshs 4,556 ",

  //   features: {
  //     "Feature 3": "Description 3 for Package B",
  //   },
  // },
  // {
  //   title: "PACKAGE 4",
  //   Premiums: "Kshs 3,556",
  //   features: {
  //     "Feature 3": "Description 3 for Package B",
  //   },
  // },
  // {
  //   title: "PACKAGE 5",
  //   Premiums: "Kshs 1,500",
  //   features: {
  //     "Feature 3": "Description 3 for Package B",
  //   },
  // },
  // ];

  const PackageContent = ({ children }) => {
    return children;
  };

  const features = Array.from(
    new Set(packages1.flatMap((pkg) => Object.keys(pkg.features)))
  );

  const choosePackage = (id) => {
    console.log(id);
  };

  return (
    <>
      {" "}
      <Sidebar view="MotorcycleInsurance" />
      <main id="dashboard" className="dashboard h-100 d-flex flex-column">
        <div className="pagetitle z-0">
          <h1 className="text-white">Our Solutions</h1>
          <nav>
            <ol className="breadcrumb">
              <li className="breadcrumb-item active text-secondary">
                Boda Boda Finance Packages
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
              <div className="d-flex package-header justify-content-center align-items-center">
                <img src={bodasterling} alt="" className="mr-3" srcset="" />
                <h4>MINET BODA BODA FINANCE PACKAGES</h4>
              </div>
              <ReusablePackageTable packages={packages1}>
                {packages1.map((pr, i) => (
                  <PackageContent key={i} package={pr.title} feature="Premiums">
                    <div className="content price">{pr.premiums}</div>
                  </PackageContent>
                ))}

                {packages1.map((p, i) => (
                  <PackageContent key={i} package={p.title} feature="">
                    <button
                      onClick={() => {
                        choosePackage(p.id);
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

export function BodaPremiumPackages() {
  const packages = [
    {
      title: "PACKAGE  1",
      Premiums: "Kshs 7,576",
      features: {
        Premiums: "",
        "": "",
        "Own Damages and Partial Theft": "Description 3 for Package A",
      },
    },
    {
      title: "PACKAGE 2",
      Premiums: "Kshs 6,576",

      features: {
        "Feature 3": "Description 3 for Package B",
      },
    },
    {
      title: "PACKAGE 3",
      Premiums: "Kshs 4,556 ",

      features: {
        "Feature 3": "Description 3 for Package B",
      },
    },
    {
      title: "PACKAGE 4",
      Premiums: "Kshs 3,556",
      features: {
        "Feature 3": "Description 3 for Package B",
      },
    },
    {
      title: "PACKAGE 5",
      Premiums: "Kshs 1,500",
      features: {
        "Feature 3": "Description 3 for Package B",
      },
    },
  ];

  const PackageContent = ({ children }) => {
    return children;
  };
  const navigate = useNavigate();

  const features = Array.from(
    new Set(packages.flatMap((pkg) => Object.keys(pkg.features)))
  );

  const choosePackage = () => {
    navigate("/ecommerce/motorcycle-personal-information");
  };

  return (
    <>
      {" "}
      <Sidebar view="MotorcycleInsurance" />
      <main id="dashboard" className="dashboard h-100 d-flex flex-column">
        <div className="pagetitle z-0">
          <h1 className="text-white">Our Solutions</h1>
          <nav>
            <ol className="breadcrumb">
              <li className="breadcrumb-item active text-secondary">
                Motorcycles Premium Packages
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
              <div className="d-flex package-header justify-content-center align-items-center">
                <img src={bodasterling} alt="" className="mr-3" srcset="" />
                <h4>Raida Sure Packages</h4>
              </div>
              <ReusablePackageTable packages={packages}>
                {packages.map((pr, i) => (
                  <PackageContent key={i} package={pr.title} feature="Premiums">
                    <div className="content price">{pr.Premiums}</div>
                  </PackageContent>
                ))}

                {packages.map((p, i) => (
                  <PackageContent key={i} package={p.title} feature="">
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

export function BodaPersonalInfo() {
  const navigate = useNavigate();

  function savePersonalDetails() {
    navigate("/ecommerce/motorcycle-cover-details");
  }

  return (
    <>
      <Sidebar view="MotorcycleInsurance" />
      <main id="dashboard" className="dashboard h-100 d-flex flex-column">
        <div className="pagetitle z-0">
          <h1 className="text-white">Our Solutions</h1>
          <nav>
            <ol className="breadcrumb">
              <li className="breadcrumb-item active text-secondary">
                Personal Information
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
            formTitle="Validation"
            onClick={savePersonalDetails}
          >
            <div className="boda-validation">
              <ReusableInput label="Cell Phone Number" icon={phoneIcon} />
              <ReusableInput label="ID Number" icon={messageIcon} />
              <ReusableInput label="Email Address" icon={emailIcon} />
              <ReusableInput label="Log Book No" icon={coverform} />
            </div>
          </FormContainer>
        </section>
      </main>
    </>
  );
}

export function MotorcycleDetails() {
  const navigate = useNavigate();

  function saveMotocycleDetails() {
    navigate("/ecommerce/motorcycle-rider-details");
  }
  return (
    <>
      <Sidebar view="MotorcycleInsurance" />
      <main id="dashboard" className="dashboard h-100 d-flex flex-column">
        <div className="pagetitle z-0">
          <h1 className="text-white">Our Solutions</h1>
          <nav>
            <ol className="breadcrumb">
              <li className="breadcrumb-item active text-secondary">
                Motorcycle Cover Details
              </li>
            </ol>
          </nav>
        </div>
        <section
          className="flex-grow-1 container-fluid text-center d-flex flex-column  mb-3"
          data-aos="fade-in"
        >
          <div>
            <FormContainer
              headerIcon={familycover}
              formTitle="Motorcycle Cover Details"
              onClick={saveMotocycleDetails}
            >
              <div className="helper-text">
                <p>Motorcycle Details</p>
              </div>
              <div className="boda-validation">
                <ReusableInput label="Registration Number *" icon={coverform} />
                <ReusableInput label="Log Book No" icon={messageIcon} />
                <ReusableInput label="Make" icon={caricon2} />
                <ReusableInput label="Manufacture Year *" icon={calender} />
                <ReusableInput label="Engine CC" icon={caricon1} />
              </div>
              <div>
                <div className="cover-header">
                  <img
                    src={shareForm}
                    alt="Policy Details"
                    className="h-icon"
                  />
                  <h2>Policy Details</h2>
                </div>
                <ReusableInput
                  label="Sum Insured (Value of the Motor Cycle) *"
                  icon={money2}
                />
                <ReusableInput label="Cover Type *" icon={cc} />
              </div>
            </FormContainer>
          </div>
        </section>
      </main>
    </>
  );
}

export function MotorcycleRiderCoverDetails() {
  const navigate = useNavigate();

  function saveMotocycleRiderDetails() {
    navigate("/ecommerce/motorcycle-more-personal-details");
  }
  return (
    <>
      <Sidebar view="MotorcycleInsurance" />
      <main id="dashboard" className="dashboard h-100 d-flex flex-column">
        <div className="pagetitle z-0">
          <h1 className="text-white">Our Solutions</h1>
          <nav>
            <ol className="breadcrumb">
              <li className="breadcrumb-item active text-secondary">
                Motorcycle & Rider Details
              </li>
            </ol>
          </nav>
        </div>
        <section
          className="flex-grow-1 container-fluid text-center d-flex flex-column  mb-3"
          data-aos="fade-in"
        >
          <div>
            <FormContainer
              headerIcon={coverform}
              formTitle="Motorcycle Cover Details"
              onClick={saveMotocycleRiderDetails}
            >
              <div className="sub-icon-header">
                <div className="input-container">
                  <div className="auto-mobile">
                    <h6>Motorcycle & Rider Details</h6>
                  </div>
                  <div>
                    <div className="input-automobile">
                      <ReusableInput
                        icon={personicon}
                        label="Is the motor cycle(s) fitted with ANTI-THEFT device(s)? Give Details *"
                      />
                      <ReusableInput
                        icon={caricon2}
                        label="Is the motor cycle normally packed within your premises overnight? *"
                      />
                      <ReusableInput
                        icon={cc}
                        label="State name and address of Owner of motor cycle: *"
                      />
                      <ReusableInput
                        icon={globeIcon}
                        label="Person in whose name motor cycle is registered: *"
                      />
                      <ReusableInput
                        icon={cc}
                        label="Any finance company or other person financially interested? *"
                      />
                    </div>
                  </div>
                </div>
                <div className="input-container">
                  <div className="auto-mobile">
                    <h6>Motorcycle Details</h6>
                  </div>
                  <div className="input-automobile">
                    <ReusableInput
                      label="Are you a licensed rider? *"
                      icon={caricon2}
                    />
                    <ReusableInput
                      label="How long have you been riding motor cycles continuously? *"
                      icon={coverform}
                    />
                    <ReusableInput
                      label="Will the motor cycle be solely ridden by you? *"
                      icon={coverform}
                    />
                    <ReusableInput
                      label="If not, then by whom? *"
                      icon={caricon2}
                    />
                    <ReusableInput
                      label="Do you or does any other person who to your knowledge will ride,
    suffer from defective vision or hearing or from any physical infirmity? *"
                      icon={formtype}
                    />
                  </div>
                </div>
              </div>
            </FormContainer>
          </div>
        </section>
      </main>
    </>
  );
}

export function MorePersonalDetails() {
  return (
    <>
      <Sidebar view="MotorcycleInsurance" />
      <main id="dashboard" className="dashboard h-100 d-flex flex-column">
        <div className="pagetitle z-0">
          <h1 className="text-white">Our Solutions</h1>
          <nav>
            <ol className="breadcrumb">
              <li className="breadcrumb-item active text-secondary">
                Motorcycle & Rider Details
              </li>
            </ol>
          </nav>
        </div>
        <section
          className="flex-grow-1 container-fluid text-center d-flex flex-column  mb-3"
          data-aos="fade-in"
        >
          <div>
            <FormContainer
              action="Accept Terms and submit your request as at 2023 | 07 | 06 | 10:34: 52"
              headerIcon={coverform}
              formTitle="Personal Information"
            >
              <div className="sub-icon-header">
                <div className="input-container">
                  <ReusableInput icon={personicon} label="First Name *" />
                  <ReusableInput icon={personicon} label="Second Name" />
                  <ReusableInput icon={personicon} label="Last Name" />
                  <ReusableInput icon={messageIcon} label="ID Number *" />
                  <ReusableInput icon={personicon} label="KRA PIN *" />
                  <ReusableInput icon={emailIcon} label="Email Address" />
                  <ReusableInput
                    icon={phoneIcon}
                    label="Owner Cell Phone No *"
                  />
                </div>
                <div className="input-container">
                  <ReusableInput label="Cell Phone Number *" icon={phoneIcon} />
                  <ReusableInput label="Date of Birth *" icon={personicon} />
                  <ReusableInput label="Gender" icon={personicon} />
                  <ReusableInput label="County Of Residence *" icon={map} />
                  <ReusableInput
                    label="Postal Address Code *"
                    icon={pinLocation}
                  />
                  <ReusableInput
                    label="National ID (PDF or Image Only) *"
                    type="file"
                    icon={profile}
                  />
                  <ReusableInput
                    label="Driving Licence (PDF or Image only)"
                    type="file"
                    icon={profile}
                  />
                </div>
              </div>
              <div className="terms">
                <h6>Acceptance Terms</h6>
                <p>
                  I/We the undersigned do hereby warrant the truth and
                  correctness of all the above statements and particulars and I
                  /We declare that I/We have not withheld any material
                  information. I/We undertake that the motor cycle(s) to be
                  insured shall not be driven by any person who to my / our
                  knowledge has been refused any motor vehicle insurance or
                  continuance thereat. And I/We agree that the above proposal
                  and this warranty and declaration shall be the basis of the
                  contract between me / us and the Monarch Insurance Company
                  Limited and I/We agree to abide by the terms and conditions of
                  the policy issued in answer to this proposal
                </p>
              </div>
            </FormContainer>
          </div>
        </section>
      </main>
    </>
  );
}
