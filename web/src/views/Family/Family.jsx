import "./Family.css";
import { CoverForm } from "../../components/forms/Family/Family";
import Header from "../../layout/Header/Header";
import Sidebar from "../../layout/Sidebar/Sidebar";
import { Outlet } from "react-router-dom";
import Footer from "../../layout/Footer/Footer";

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
