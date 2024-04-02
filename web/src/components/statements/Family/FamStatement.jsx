import "./FamStatement.css";
import anylisisIcon from "../../../assets/images/aalysiss.png";
import webIcon from "../../../assets/images/web.png";
import sideImage from "../../../assets/images/side-mage.png";
import metrics from "../../../assets/images/metrics.png";
import familycover from "../../../assets/images/family-cover.png";

function FamStatement() {
  const items = [
    { name: "Inpatient Limits(Per Family Kshs)", price: "-----------" },
    { name: "Inpatient only Premiums(Per Family Kshs)", price: "-----------" },
    { name: "Outpatient Limits (Kshs) ", price: "-----------" },
    {
      name: "Outpatient only Premiums (Per Person Kshs)",
      price: "-----------",
    },
  ];

  const total = "-----------";

  return (
    <div id="statement">
      <div className="top-header">
        <div className="left-part ">
          <img className="st-icon" src={familycover} alt="analysis-icon" />
          <h4>Requested Analysis</h4>
        </div>
        <div className="right-part">
          <button>Edit Quote</button>
          <button>Send this quote to email</button>
        </div>
      </div>
      <div className="header-section">
        <div className="left-part">
          <div className="analysis-icon">
            <img className="st-icon" src={anylisisIcon} alt="analysis-icon" />
            <h4>Requested Analysis</h4>
          </div>
          <div className="">
            <div className="">
              <span> Principal Age :</span> 29
            </div>
            <div className="">
              <span>Spouse Age :</span> 33
            </div>
            <div className="">
              <span>Family Size :</span> M+2
            </div>
            <div className="">
              <span>Email :</span> rkiama@apn.co.ke
            </div>
            <div className="">
              <span>Underwriter :</span> UAP SME,
            </div>
          </div>
        </div>
        <div className="right-part">
          <img src={sideImage} alt="side-mage" />
        </div>
      </div>
      <div className="header-section">
        <div>
          <div className="analysis-icon">
            <img className="st-icon" src={webIcon} alt="analysis-icon" />
            <h4>Analysis</h4>
          </div>
        </div>
      </div>
      <div className="receipt-container">
        <div className="left-part">
          <table className="table">
            <thead>
              <tr>
                <th colSpan="2" className="receipt-header">
                  UAP SME
                </th>
              </tr>
            </thead>
            <tbody>
              {items.map((item, index) => (
                <tr key={index}>
                  <td>{item.name}</td>
                  <td>{item.price}</td>
                </tr>
              ))}
            </tbody>
            <tfoot>
              <tr>
                <td>TOTAL PREMIUM (Kshs)</td>
                <td>{total}</td>
              </tr>
            </tfoot>
          </table>
        </div>
        <div className="right-part">
          <img src={metrics} alt="side-mage" />
        </div>
      </div>
    </div>
  );
}

export default FamStatement;
