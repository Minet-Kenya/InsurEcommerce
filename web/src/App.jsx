import AOS from "aos";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "aos/dist/aos.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./App.scss";

import PrivateRoute from "./components/utils/PrivateRoute";
import { AuthProvider } from "./components/forms/Authentication/Authentication";

import Home, { Landing, Contact } from "./views/Home/Home";
import Auth from "./views/Auth/Auth";
import Ecommerce, {
  CorporateProduct,
  IndividualSolutions,
  Solutions,
} from "./views/Ecommerce/Ecommerce";
import {
  BodaPackages,
  BodaPersonalInfo,
  BodaPremiumPackages,
  CheckoutPage,
  MorePersonalDetails,
  MotorcycleDetails,
  MotorcycleInsurance,
  MotorcycleRiderCoverDetails,
  MotorcycleSolutions,
} from "./views/MotorcycleInsurance/MotorcycleInsurance";
import {
  MotorCoverForm,
  MotorInsuranceQuote,
  MotorPackages,
} from "./views/MotorInsurance/MotorInsurance";
import { MotorCheckoutPage } from "./views/MotorInsurance/MotorCheckoutPage";
import { CartPage } from "./views/CartPage/CartPage";
import EducationPolicy, {
  EducationPolicyForm,
} from "./views/EducationPolicy/EducationPolicy";
import { IndividualLifeForm } from "./views/IndividualLifeInsurance/IndividualLifeInsurance";
import {
  HomeInsuranceForm,
  HomeInsurancePackages,
} from "./views/HomeInsurance/HomeIsurance";
import {
  MedicalCoverForm,
  MedicalCoverPackages,
} from "./views/MedicalCover/MedicalCover";
import { TravelInsuranceForm } from "./views/TravelInsurance/TravelInsurance";
import { GolfCoverForm, GolfCoverPackages } from "./views/GolfCover/GolfCover";
import PersonalAccident, {
  PersonalAccidentForm,
  PersonalAccidentPackages,
} from "./views/PersonalAccident/PersonalAccident";
import ResetPassword from "./views/ResetPassword/ResetPassword";
import { ProfileTabs } from "./views/ProfilePage/ProfilePage";
import {
  UserPoliciesList,
  ViewPolicyClaims,
  ViewUserPolicy,
} from "./views/UserPolicies/UserPolicies";
import { AccountSettingsPage } from "./views/AccountSettings/AccountSettings";
import { CoperateMedicalCoverForm } from "./views/CoperateCover/CoperateCover";
import { GroupLifeForm } from "./views/GroupLife/GroupLife";
import { PlaceClaimForm } from "./views/PlaceClaim/PlaceClaim";

AOS.init({
  duration: 600,
  easing: "ease-in-out",
});

function App() {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          {/* Home View */}
          <Route path="/" element={<Home />}>
            <Route path="" element={<Landing />} />
            <Route path="contact" element={<Contact />} />
          </Route>

          {/* Ecommerce View */}
          <Route
            path="/ecommerce"
            element={
              // <PrivateRoute>
              <Ecommerce />
              // </PrivateRoute>
            }
          >
            <Route path="" element={<Solutions />} />
            <Route path="corporate-product" element={<CorporateProduct />} />
            <Route
              path="individual-solutions"
              element={<IndividualSolutions />}
            />
            <Route path="cart" element={<CartPage />} />
            <Route
              path="motorcycle-insurance"
              element={<MotorcycleSolutions />}
            />

            <Route
              path="motorcycle-personal-information"
              element={<BodaPersonalInfo />}
            />
            <Route
              path="motorcycle-cover-details"
              element={<MotorcycleDetails />}
            />
            <Route
              path="motorcycle-rider-details"
              element={<MotorcycleRiderCoverDetails />}
            />
            <Route
              path="motorcycle-more-personal-details"
              element={<MorePersonalDetails />}
            />
            <Route path="boda-boda-solution" element={<BodaPackages />} />
            <Route
              path="motorcycle-premium-insurance"
              element={<BodaPremiumPackages />}
            />
            <Route path="policy-check-out" element={<CheckoutPage />} />
            <Route
              path="motor-insurance-quote"
              element={<MotorInsuranceQuote />}
            />
            <Route
              path="motor-insurance-packages"
              element={<MotorPackages />}
            />
            <Route path="education-policy" element={<EducationPolicyForm />} />
            <Route
              path="individual-life-insurance"
              element={<IndividualLifeForm />}
            />
            <Route path="home-insurance" element={<HomeInsuranceForm />} />
            <Route
              path="home-insurance-packages"
              element={<HomeInsurancePackages />}
            />
            <Route path="medical-cover" element={<MedicalCoverForm />} />
            <Route
              path="medical-cover-packages"
              element={<MedicalCoverPackages />}
            />

            <Route path="travel-insurance" element={<TravelInsuranceForm />} />
            <Route path="golfers-insurance" element={<GolfCoverForm />} />
            <Route
              path="golfers-insurance-packages"
              element={<GolfCoverPackages />}
            />
            <Route
              path="personal-accident-insurance"
              element={<PersonalAccidentForm />}
            />
            <Route
              path="coperatate-medical-cover"
              element={<CoperateMedicalCoverForm />}
            />
            <Route path="group-life" element={<GroupLifeForm />} />
            <Route path="place-claim" element={<PlaceClaimForm />} />

            <Route
              path="personal-accident-packages"
              element={<PersonalAccidentPackages />}
            />
            <Route
              path="motor-insurance-coverform"
              element={<MotorCoverForm />}
            />
            <Route path="motor-checkout" element={<MotorCheckoutPage />} />
            <Route path="profile" element={<ProfileTabs />} />
            <Route path="user-policies" element={<UserPoliciesList />} />
            <Route path="view-policy" element={<ViewUserPolicy />} />
            <Route path="view-policy-claim" element={<ViewPolicyClaims />} />

            <Route path="account-settings" element={<AccountSettingsPage />} />
          </Route>

          {/* Auth View */}
          <Route path="/auth" element={<Auth />} />
          <Route path="/reset-password" element={<ResetPassword />} />
        </Routes>
      </AuthProvider>
    </Router>
  );
}

export default App;
