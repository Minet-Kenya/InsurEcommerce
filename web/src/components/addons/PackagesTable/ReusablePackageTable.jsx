import React from "react";
import "./ReusablePackageTable.css";

const ReusablePackageTable = ({ children, packages }) => {
  const features = Array.from(
    new Set(packages.flatMap((pkg) => Object.keys(pkg.features)))
  );

  return (
    <table className="package-table">
      <thead>
        <tr>
          <th className="empty-cell"></th> {/* Empty cell for package titles */}
          {packages.map((pkg, index) => (
            <th key={index} className="package-title">
              {pkg.title}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {features.map((feature, index) => (
          <tr key={index}>
            <td className="feature-name">{feature}</td>{" "}
            {/* Feature name column */}
            {packages.map((pkg, pkgIndex) => (
              <td key={pkgIndex} className="feature-description">
                {pkg.features[feature] || ""} {/* Description or placeholder */}
                {/* Slot children in content cell */}
                {React.Children.toArray(children).filter(
                  (child) =>
                    child.props.package === pkg.title &&
                    child.props.feature === feature
                )}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ReusablePackageTable;
