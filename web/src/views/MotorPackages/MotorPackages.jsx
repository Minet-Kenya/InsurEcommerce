import React from "react";
import ReusablePackageTable from "../../components/addons/PackagesTable/ReusablePackageTable";
import "./MotorPackages.css";
import { bodasterling, coverform } from "../../utils/export-images";

const MotorPackages = () => {
  const packages = [
    {
      title: "Basic Premium ",
      features: {
        "DIRECTLINE ASSURANCE": "35,000.00",
        "FIDELITY SHIELD INSURANCE CO.": "57,500.00",
      },
    },
    {
      title: "Excess Protector",
      features: {
        "DIRECTLINE ASSURANCE": "0.00",
      },
    },
    {
      title: "PVT",
      Premiums: "Kshs 4,556 ",

      features: {
        "DIRECTLINE ASSURANCE": "0.00",
      },
    },
    {
      title: "Loss of Use",
      features: {
        "DIRECTLINE ASSURANCE": "0.00",
      },
    },
    {
      title: "Total Premiums",
      features: {
        "DIRECTLINE ASSURANCE": "0.00",
      },
    },
    {
      title: "",
      features: {
        "DIRECTLINE ASSURANCE": "",
      },
    },
  ];

  const PackageContent = ({ children }) => {
    return children;
  };

  const features = Array.from(
    new Set(packages.flatMap((pkg) => Object.keys(pkg.features)))
  );

  return (
    <div id="border-packages-container">
      <div className="boda-packages">
        <div className="d-flex package-header   align-items-center">
          <img src={coverform} alt="" className="mr-3" srcset="" />
          <h4>REQUESTED ANALYSIS</h4>
        </div>
        <ReusablePackageTable packages={packages}>
          {/* {packages.map((pr, i) => (
            <PackageContent key={i} package={pr.title} feature="Premiums">
              <div className="content price">{pr.Premiums}</div>
            </PackageContent>
          ))} */}

          {features.map((p, i) => (
            <PackageContent key={i} package="" feature={p}>
              <button className="content choose-btn">My Choice</button>
            </PackageContent>
          ))}
        </ReusablePackageTable>
      </div>
    </div>
  );
};

export default MotorPackages;
