import "./Family.css";
import { CoverForm } from "../../components/forms/Family/Family";
import { Outlet } from "react-router-dom";
import Header from "../../components/layout/Header/Header";
import Footer from "../../components/layout/Footer/Footer";
import Sidebar from "../../components/layout/Sidebar/Sidebar";

const FamilyPage = () => {
  return (
    <div className=" d-flex flex-column">
      <Header view="Retail" version="v1" />

      <div className="d-flex">
        <Sidebar />
        <div
          id="fami-page"
          className="d-flex flex-grow-1 mheader position-relative"
        >
          <CoverForm />
        </div>
      </div>
      <Footer view="Retail" version="v1" />
    </div>
  );
};
export default FamilyPage;
