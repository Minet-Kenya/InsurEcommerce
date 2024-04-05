import "./Motors.css";
import MotorsForm from "../../components/forms/Motors/MotorsForm";
import Header from "../../components/layout/Header/Header";
import Sidebar from "../../components/layout/Sidebar/Sidebar";
import Footer from "../../components/layout/Footer/Footer";

function Motors() {
  return (
    // <div id="motors" className="">
    //   <MotorsForm />
    // </div>
    <div className=" d-flex flex-column">
      <Header view="Retail" version="v1" />

      <div className="d-flex">
        <Sidebar />
        <div
          id="motors"
          className="d-flex flex-grow-1 mheader position-relative"
        >
          <MotorsForm />
        </div>
      </div>
      <Footer view="Retail" version="v1" />
    </div>
  );
}

export default Motors;
