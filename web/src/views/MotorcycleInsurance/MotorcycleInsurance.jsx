import React, { useState, useEffect } from "react";
import Header from "../../components/layout/Header/Header";
import Preloader from "../../components/addons/Preloader/Preloader";
import BackToTopBtn from "../../components/addons/BackToTopBtn/BackToTopBtn";
import Footer from "../../components/layout/Footer/Footer";
import { Link, Outlet, useLocation } from "react-router-dom";
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
  sideImage,
  webIcon,
  metrics,
  anylisisIcon,
  shareForm,
  spinner,
  spinner2,
  check,
  cross,
} from "../../components/utils/export-images";
import ReusablePackageTable from "../../components/addons/PackagesTable/ReusablePackageTable";
import FormContainer from "../../components/addons/Forms/Layout/FormContainer";
import ReusableInput from "../../components/addons/Forms/Inputs/ReusableInput";
import { useNavigate } from "react-router-dom";
import BaseURL, {
  BASE_URL,
  BASE_URL_HOME,
  fetchData,
} from "../../components/utils/constants";
import { PopUp } from "../../components/addons/PopUp/PopUp";

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
  const navigate = useNavigate();
  let authToken = JSON.parse(localStorage.getItem("authTokens"));

  useEffect(() => {
    const getBodaPackages = async () => {
      await fetch(`${BASE_URL}/packages/Motorcycle/`, {
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
    };
    getBodaPackages();
  }, []);

  const PackageContent = ({ children }) => {
    return children;
  };

  const features = Array.from(
    new Set(packages1.flatMap((pkg) => Object.keys(pkg.features)))
  );

  const choosePackage = (pkg) => {
    // console.log(id);
    localStorage.setItem(
      "policy",
      JSON.stringify({
        package_id: pkg.id,
        policy_name: pkg.title,
        price: pkg.premiums,
      })
    );
    navigate("/ecommerce/motorcycle-cover-details");
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
  const [formData, setFormData] = useState(() => {
    const savedData = JSON.parse(localStorage.getItem("cover-details"));
    return savedData || { registration_no: "" };
  });
  const [formError, setFormError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    localStorage.setItem("cover-details", JSON.stringify(formData));
  }, [formData]);

  function saveMotocycleDetails(e) {
    e.preventDefault();
    const requiredFields = [
      "registration_no",
      "log_book_no",
      "make",
      "manufacture_year",
      "manufacture_year",
      "engine_cc",
      "values_sum",
      "cover_type",
    ];

    const hasEmptyFields = requiredFields.some((field) => !formData[field]);

    // console.log(formData);

    if (hasEmptyFields) {
      // console.log("hahahdhd");
      setFormError("Please fill in all required fields.");
      return;
    }
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
              {formError ?? (
                <div className="error-text">
                  <p>{formError}</p>
                </div>
              )}
              <div className="boda-validation">
                <ReusableInput
                  label="Registration Number *"
                  icon={coverform}
                  value={formData.registration_no}
                  name="registration_no"
                  onChange={handleChange}
                />
                <ReusableInput
                  label="Log Book No"
                  icon={messageIcon}
                  value={formData.log_book_no}
                  name="log_book_no"
                  onChange={handleChange}
                />
                <ReusableInput
                  label="Make"
                  icon={caricon2}
                  value={formData.make}
                  name="make"
                  onChange={handleChange}
                />
                <ReusableInput
                  type="date"
                  label="Manufacture Year *"
                  icon={calender}
                  value={formData.manufacture_year}
                  name="manufacture_year"
                  onChange={handleChange}
                />
                <ReusableInput
                  label="Engine CC"
                  icon={caricon1}
                  value={formData.engine_cc}
                  name="engine_cc"
                  onChange={handleChange}
                />
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
                  value={formData.values_sum}
                  name="values_sum"
                  onChange={handleChange}
                />
                <ReusableInput
                  label="Cover Type *"
                  icon={cc}
                  value={formData.cover_type}
                  name="cover_type"
                  onChange={handleChange}
                  required={true}
                />
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
  const [formData, setFormData] = useState(() => {
    const savedData = JSON.parse(localStorage.getItem("motor-rider-details"));
    return savedData || { antitheft_details: "" };
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    localStorage.setItem("motor-rider-details", JSON.stringify(formData));
  }, [formData]);

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
              formTitle="Motorcycle & Rider Details
              "
              onClick={saveMotocycleRiderDetails}
            >
              <div className="sub-icon-header">
                <div className="input-container">
                  <div className="auto-mobile">
                    <h6>Motorcycle Details</h6>
                  </div>
                  <div>
                    <div className="input-automobile">
                      <ReusableInput
                        selectOptions={["Yes", "No"]}
                        icon={personicon}
                        label="Is the motor cycle(s) fitted with ANTI-THEFT device(s)? Give Details *
                        "
                        value={formData.antitheft_details}
                        name="antitheft_details"
                        onChange={handleChange}
                      />
                      <ReusableInput
                        selectOptions={["Yes", "No"]}
                        icon={caricon2}
                        label="Is the motor cycle normally packed within your premises overnight? *"
                        value={formData.areaof_packing}
                        name="areaof_packing"
                        onChange={handleChange}
                      />
                      <ReusableInput
                        icon={cc}
                        label="State name and address of Owner of motor cycle: *"
                        value={formData.name_address}
                        name="name_address"
                        onChange={handleChange}
                      />
                      <ReusableInput
                        icon={globeIcon}
                        label="Person in whose name motor cycle is registered: *"
                        value={formData.registration_name}
                        name="registration_name"
                        onChange={handleChange}
                      />
                      <ReusableInput
                        icon={cc}
                        label="Any finance company or other person financially interested? *"
                        value={formData.finacial_intrest}
                        name="finacial_intrest"
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                </div>
                <div className="input-container">
                  <div className="auto-mobile">
                    <h6>Rider Details</h6>
                  </div>
                  <div className="input-automobile">
                    <ReusableInput
                      selectOptions={["Yes", "No"]}
                      label="Are you a licensed rider? *"
                      icon={caricon2}
                      value={formData.licensed_rider}
                      name="licensed_rider"
                      onChange={handleChange}
                    />
                    <ReusableInput
                      label="How long have you been riding motor cycles continuously? *"
                      icon={coverform}
                      value={formData.timeof_riding}
                      name="timeof_riding"
                      onChange={handleChange}
                    />
                    <ReusableInput
                      selectOptions={["Yes", "No"]}
                      label="Will the motor cycle be solely ridden by you? *"
                      icon={coverform}
                      value={formData.only_rider}
                      name="only_rider"
                      onChange={handleChange}
                    />
                    <ReusableInput
                      label="If not, then by whom? *"
                      icon={caricon2}
                      value={formData.other_rider}
                      name="other_rider"
                      onChange={handleChange}
                    />
                    <ReusableInput
                      label="Do you or does any other person who to your knowledge will ride,
    suffer from defective vision or hearing or from any physical infirmity? *"
                      icon={formtype}
                      value={formData.defective_issues}
                      name="defective_issues"
                      onChange={handleChange}
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
  const navigate = useNavigate();

  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);

  const savedData = JSON.parse(localStorage.getItem("personal-details"));
  const [formData, setFormData] = useState(() => {
    return savedData || { first_name: "" };
  });

  const [selectedIdFile, setselectedIdFile] = useState(null);
  const [selectedDlFile, setselectedDlFile] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    localStorage.setItem("personal-details", JSON.stringify(formData));
  }, [formData]);

  const handleIdFileInputChange = (e) => {
    const file = e.target.files[0];
    // console.log(file);
    if (file) {
      setselectedIdFile(file.name);

      // Convert the image to a Base64 string
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64String = reader.result;
        localStorage.setItem("selectedIdImage", base64String);
        // alert("Image saved to local storage");
      };
      reader.readAsDataURL(file); // Directly read the selected file as a data URL
    }
  };

  const handleDlFileInputChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setselectedDlFile(file.name);
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64String = reader.result;
        localStorage.setItem("selectedDlImage", base64String);
        // alert("Image saved to local storage");
      };
      reader.readAsDataURL(file);
    }
  };

  const personal_info = JSON.parse(localStorage.getItem("personal-details"));
  const cover_details = JSON.parse(localStorage.getItem("cover-details"));
  const policy_details = JSON.parse(localStorage.getItem("policy"));
  const motorcycle_and_rider_details = JSON.parse(
    localStorage.getItem("motor-rider-details")
  );
  let authToken = JSON.parse(localStorage.getItem("authTokens"));
  const motorcycle_policy = {
    ...cover_details,
    motorcycle_and_rider_details,
    policy_details,
    package_details: policy_details.package_id,
  };

  const saveDetails = async () => {
    await fetchData(
      `${BASE_URL}/motorcycle-cover-details/`,
      "POST",
      motorcycle_policy,
      authToken.access
    )
      .then((data) => {
        // console.log("Data:", data);
        if (data.errors?.registration_no) {
          alert(
            "Motor cycle details with this registration number already exists."
          );
          navigate("/ecommerce/motorcycle-cover-details");
          return;
        }
        localStorage.setItem("motorcycle-policy-id", data.id);
        localStorage.setItem("motorcycle-saved-status", "true");

        let cart = JSON.parse(localStorage.getItem("cart"));
        if (cart) {
          // console.log(cart);
          cart.push(policy_details);
          localStorage.setItem("cart", JSON.stringify(cart));
        } else {
          localStorage.setItem("cart", JSON.stringify([motorcycle_policy]));
        }

        navigate("/ecommerce/policy-check-out");
      })
      .catch((error) => {
        console.error("Error:", error);
      });
    // navigate("/ecommerce/policy-check-out");

    // let is_edit = queryParams.get("edit");
    // if (is_edit) {
    //   navigate("/ecommerce/policy-check-out");
    // } else {

    // }
  };

  async function updateMotocylePolicy() {
    let getId = localStorage.getItem("motorcycle-policy-id");
    // console.log(getId);
    await fetchData(
      `${BASE_URL}/motorcycle-cover-details/${getId}/`,
      "PATCH",
      motorcycle_policy,
      authToken.access
    )
      .then((data) => {
        // console.log("Data:", data);
        navigate("/ecommerce/policy-check-out");
      })
      .catch((error) => {
        // console.log(Object.values(error));
      });
  }

  const proceedCheckout = (event) => {
    event.preventDefault();

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

    const hasEmptyFields = requiredFields.some((field) =>
      console.log(!formData[field])
    );
    console.log(hasEmptyFields);

    if (hasEmptyFields) {
      alert("Please fill in all required fields.");
      return;
    }

    let getSavedStatus = localStorage.getItem("motorcycle-saved-status");
    if (getSavedStatus === "true") {
      updateMotocylePolicy();
      // console.log("Already saved data");
    } else {
      // console.log("Saving data");
      saveDetails();
    }
  };

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
          <div>
            <FormContainer
              action="Accept Terms and submit your request as at 2023 | 07 | 06 | 10:34: 52"
              headerIcon={coverform}
              formTitle="Personal Information"
              onClick={proceedCheckout}
            >
              <div className="sub-icon-header">
                <div className="input-container">
                  <ReusableInput
                    icon={personicon}
                    label="First Name *"
                    value={formData.first_name}
                    name="first_name"
                    onChange={handleChange}
                  />
                  <ReusableInput
                    icon={personicon}
                    label="Second Name"
                    value={formData.second_name}
                    name="second_name"
                    onChange={handleChange}
                  />
                  <ReusableInput
                    icon={personicon}
                    label="Last Name"
                    value={formData.last_name}
                    name="last_name"
                    onChange={handleChange}
                  />
                  <ReusableInput
                    icon={messageIcon}
                    label="ID Number *"
                    value={formData.id_number}
                    name="id_number"
                    onChange={handleChange}
                  />
                  <ReusableInput
                    icon={personicon}
                    label="KRA PIN *"
                    value={formData.kra_pin}
                    name="kra_pin"
                    onChange={handleChange}
                  />
                  <ReusableInput
                    icon={emailIcon}
                    label="Email Address"
                    value={formData.email_address}
                    name="email_address"
                    onChange={handleChange}
                  />
                  <ReusableInput
                    icon={phoneIcon}
                    label="Owner Cell Phone No *"
                    value={formData.phone_number}
                    name="phone_number"
                    onChange={handleChange}
                  />
                </div>
                <div className="input-container">
                  <ReusableInput
                    label="Cell Phone Number *"
                    icon={phoneIcon}
                    value={formData.second_phonenumber}
                    name="second_phonenumber"
                    onChange={handleChange}
                  />
                  <ReusableInput
                    type="date"
                    label="Date of Birth *"
                    icon={personicon}
                    value={formData.date_of_birth}
                    name="dob"
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
                    label="County Of Residence *"
                    icon={map}
                    value={formData.residence}
                    name="residence"
                    onChange={handleChange}
                  />
                  <ReusableInput
                    label="Postal Address Code *"
                    icon={pinLocation}
                    value={formData.postal_adresss}
                    name="postal_adresss"
                    onChange={handleChange}
                  />
                  <ReusableInput
                    label="National ID (PDF or Image Only) *"
                    type="file"
                    icon={profile}
                    name="file_id"
                    // value={selectedIdFile}
                    onChange={handleIdFileInputChange}
                  />
                  {/* {selectedIdFile ?? <span>ID Photo: {selectedIdFile}</span>} */}

                  <ReusableInput
                    label="Driving Licence (PDF or Image only)"
                    type="file"
                    icon={profile}
                    name="file_dl"
                    onChange={handleDlFileInputChange}
                    // value={selectedDlFile}
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

export function CheckoutPage() {
  const navigate = useNavigate();
  const [initiatePayment, setInitiatePayment] = useState(false);
  const [paymentPhone, setPaymentPhone] = useState("");

  const [emailSent, setemailSent] = useState(false);
  const [sendingEmail, setsendingEmail] = useState(false);
  const [sendEmail, setsendEmail] = useState(false);
  const [emailFailed, setemailFailed] = useState(false);
  const [stkPush, setstkPush] = useState(false);

  const handlePhoneInput = (e) => {
    setPaymentPhone(e.target.value);
  };

  const cancelPayment = () => {
    setInitiatePayment(false);
  };

  const initiatePolicyPayment = () => {
    setInitiatePayment(true);
  };

  const personal_info = JSON.parse(localStorage.getItem("personal-details"));
  const cover_details = JSON.parse(localStorage.getItem("cover-details"));
  const policy_details = JSON.parse(localStorage.getItem("policy"));
  const motorcycle_and_rider_details = JSON.parse(
    localStorage.getItem("motor-rider-details")
  );

  let authToken = JSON.parse(localStorage.getItem("authTokens"));

  const motorcycle_policy_details = {
    ...cover_details,
    motorcycle_and_rider_details,
    policy_details,
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

  const transformedData = transformKeys(personal_info);

  const savePolicyDetails = async () => {
    console.log(motorcycle_policy_details);
    // 1. save policy details

    // await fetchData(
    //   `${BASE_URL}/motorcycle-cover-details/`,
    //   "POST",
    //   motorcycle_policy_details,
    //   authToken.access
    // )
    //   .then((data) => console.log("Data:", data))
    //   .catch((error) => console.error("Error:", error));

    // 2. save transaction details
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
        setstkPush(false);

        console.log("Data:", data);
      })
      .catch((error) => {
        setstkPush(false);

        console.error("Error:", error);
      });
  };

  const editData = () => {
    // const queryParams = new URLSearchParams({
    //   edit: true,
    //   // key2: "value2"
    // });
    navigate(`/ecommerce/motorcycle-cover-details/`);
    // navigate("/ecommerce/motor-insurance-coverform");
  };

  async function sendMotorcycleEmail() {
    const getSavedPolicyId = localStorage.getItem("motorcycle-policy-id");
    setsendEmail(true);
    setsendingEmail(true);
    await fetchData(
      `${BASE_URL}/send-policy-email/motorcycle/${getSavedPolicyId}/`,
      "POST",
      {},
      authToken.access
    )
      .then((data) => {
        // console.log("Data:", data);
        setemailSent(true);
        setsendingEmail(false);
        setemailFailed(false);
      })
      .catch((error) => {
        setemailSent(false);
        setemailFailed(true);
        setsendingEmail(false);

        // console.error("Error:", error);
      });
  }

  function doneButton() {
    setsendEmail(false);
    setsendingEmail(false);
    setemailSent(false);

    // let cart = JSON.parse(localStorage.getItem("cart"));
    // let getSavedPolicy = JSON.parse(localStorage.getItem("policy"));

    // cart = cart.filter(
    //   (item) => item.policy_name !== getSavedPolicy.policy_name
    // );
    // console.log(cart);

    // Save the updated cart back to local storage
    // localStorage.setItem("cart", JSON.stringify(cart));
    // localStorage.removeItem("motorcycle-policy-id");
    localStorage.removeItem("motor-rider-details");
    localStorage.removeItem("cover-details");
    localStorage.removeItem("motorcycle-saved-status");
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
            <button onClick={savePolicyDetails} className="initiate-payment">
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
                  <button onClick={sendMotorcycleEmail}>
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
