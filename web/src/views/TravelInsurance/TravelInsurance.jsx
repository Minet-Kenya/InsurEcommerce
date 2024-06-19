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

export default function TravelInsurance() {
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

export function TravelInsuranceForm() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState(() => {
    const savedData = JSON.parse(localStorage.getItem("travel-cover-details"));
    return savedData || { full_names: "" };
  });

  const [saveSuccess, setsaveSuccess] = useState(false);
  const [modalSuccess, setmodalSuccess] = useState(false);
  const [sendingEmail, setsendingEmail] = useState(false);

  const authToken = JSON.parse(localStorage.getItem("authTokens"));

  useEffect(() => {
    localStorage.setItem("travel-cover-details", JSON.stringify(formData));
  }, [formData]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    // console.log(e.target.value);
  };

  const saveQouteDetails = async () => {
    // e.preventDefault();
    setsendingEmail(true);
    setmodalSuccess(true);
    await fetchData(
      `${BASE_URL}/other_policies/`,
      "POST",
      {
        policy_type: "Travel Insurance",
        infomation_details: {
          ...formData,
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

    // localStorage.setItem(
    //   "travel_cover_policy",
    //   JSON.stringify({
    //     package_id: pkg.id,
    //     policy_name: pkg.title,
    //     price: pkg.premiums,
    //   })
    // );
  };
  function doneButton() {
    setsaveSuccess(false);
    setmodalSuccess(false);
    setsendingEmail(false);
    navigate("/ecommerce/individual-solutions");
    localStorage.clear("travel-cover-details");
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
                Travel insurance Quote Request
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
            onClick={(e) => {
              e.preventDefault();
              saveQouteDetails();
            }}
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
              value={formData.mobile_name}
              name="mobile_name"
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
              label="Destination (country of travel) *"
              icon={map}
              value={formData.destination}
              name="destination"
              onChange={handleChange}
            />
            <ReusableInput
              selectOptions={["Medical", "Study", "Leisure", "Business"]}
              label="Purpose *"
              icon={cc}
              value={formData.purpose}
              name="purpose"
              onChange={handleChange}
            />
            <ReusableInput
              type="number"
              label="Number of Days *"
              icon={cc}
              value={formData.number_of_days}
              name="number_of_days"
              onChange={handleChange}
            />
            <ReusableInput
              type="date"
              label="Date of Departure *"
              icon={cc}
              value={formData.depature_date}
              name="depature_date"
              onChange={handleChange}
            />
            <ReusableInput
              type="date"
              label="Date of Return *"
              icon={cc}
              value={formData.return_date}
              name="return_date"
              onChange={handleChange}
            />
          </FormContainer>
        </section>
      </main>
    </>
  );
}
