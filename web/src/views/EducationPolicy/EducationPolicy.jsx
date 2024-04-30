import { Outlet, useNavigate } from "react-router-dom";
import Header from "../../components/layout/Header/Header";
import Footer from "../../components/layout/Footer/Footer";
import Preloader from "../../components/addons/Preloader/Preloader";
import BackToTopBtn from "../../components/addons/BackToTopBtn/BackToTopBtn";
import Sidebar from "../../components/layout/Sidebar/Sidebar";
import {
  emailIcon,
  familycover,
  insuranceIcon,
  personicon,
  phoneIcon,
} from "../../components/utils/export-images";
import ReusableInput from "../../components/addons/Forms/Inputs/ReusableInput";
import FormContainer from "../../components/addons/Forms/Layout/FormContainer";

export default function EducationPolicy() {
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

export function EducationPolicyForm() {
  const navigate = useNavigate();

  const saveQouteDetails = (e) => {
    e.preventDefault();
    // navigate("/ecommerce/motor-insurance-packages");
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
            <ReusableInput label="Full Name *" icon={personicon} />
            <ReusableInput
              type="tel"
              label="Mobile Number *"
              icon={phoneIcon}
            />
            <ReusableInput type="tel" label="Email *" icon={emailIcon} />

            <ReusableInput
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
            />
          </FormContainer>
        </section>
      </main>
    </>
  );
}
