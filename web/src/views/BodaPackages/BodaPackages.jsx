import React from "react";
import ReusablePackageTable from "../../components/addons/PackagesTable/ReusablePackageTable";
import "./BodaPackages.css";
import { bodasterling } from "../../components/utils/export-images";

export function BodaPackages() {
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

  const features = Array.from(
    new Set(packages.flatMap((pkg) => Object.keys(pkg.features)))
  );

  return (
    <div id="border-packages-container">
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
              <button className="content choose-btn">My Choice</button>
            </PackageContent>
          ))}
        </ReusablePackageTable>
      </div>
    </div>
  );
}
