import { Outlet, useNavigate } from "react-router-dom";
import Header from "../../components/layout/Header/Header";
import Footer from "../../components/layout/Footer/Footer";
import Preloader from "../../components/addons/Preloader/Preloader";
import BackToTopBtn from "../../components/addons/BackToTopBtn/BackToTopBtn";
import Sidebar from "../../components/layout/Sidebar/Sidebar";
import {
  cc,
  coverform,
  emailIcon,
  familycover,
  insuranceIcon,
  map,
  moneyIcon,
  personicon,
  phoneIcon,
} from "../../components/utils/export-images";
import ReusableInput from "../../components/addons/Forms/Inputs/ReusableInput";
import FormContainer from "../../components/addons/Forms/Layout/FormContainer";
import ReusablePackageTable from "../../components/addons/PackagesTable/ReusablePackageTable";

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

  const saveQouteDetails = (e) => {
    e.preventDefault();
    // navigate("/ecommerce/home-insurance-packages");
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
            onClick={saveQouteDetails}
          >
            <div className="helper-text">
              <p>Fill in the details required</p>
            </div>

            <ReusableInput label="Full Name *" icon={personicon} />
            <ReusableInput label="Mobile Number *" icon={phoneIcon} />
            <ReusableInput label="Email *" icon={emailIcon} />
            <ReusableInput
              label="Destination (country of travel) *"
              icon={map}
            />
            <ReusableInput label="Purpose *" icon={cc} />
            <ReusableInput type="number" label="Number of Days *" icon={cc} />
            <ReusableInput type="date" label="Date of Departure *" icon={cc} />
            <ReusableInput type="date" label="Date of Return *" icon={cc} />
          </FormContainer>
        </section>
      </main>
    </>
  );
}
