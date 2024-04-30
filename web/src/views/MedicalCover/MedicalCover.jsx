import { Outlet, useNavigate } from "react-router-dom";
import Header from "../../components/layout/Header/Header";
import Footer from "../../components/layout/Footer/Footer";
import Preloader from "../../components/addons/Preloader/Preloader";
import BackToTopBtn from "../../components/addons/BackToTopBtn/BackToTopBtn";
import Sidebar from "../../components/layout/Sidebar/Sidebar";
import {
  coverform,
  emailIcon,
  familycover,
  insuranceIcon,
  personicon,
  phoneIcon,
} from "../../components/utils/export-images";
import ReusableInput from "../../components/addons/Forms/Inputs/ReusableInput";
import FormContainer from "../../components/addons/Forms/Layout/FormContainer";
import "./MedicalCover.css";
import ReusablePackageTable from "../../components/addons/PackagesTable/ReusablePackageTable";

export default function MedicalCover() {
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

export function MedicalCoverForm() {
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
          <FormContainer onClick={saveQouteDetails}>
            <div className="sub-icon-header">
              <div className="input-container">
                <div>
                  <div className="input-automobile">
                    <ReusableInput
                      selectOptions={["Married", "Single"]}
                      label="Marital status.*"
                      icon={personicon}
                    />
                    <ReusableInput
                      icon={personicon}
                      type="number"
                      label="Number of Children (Below 18 Years.)"
                    />
                    <ReusableInput
                      icon={personicon}
                      label="Age of Principal member"
                    />
                    <ReusableInput
                      selectOptions={["Jubilee", "Single", "OLD MUTUAL"]}
                      icon={personicon}
                      label="Underwriters"
                    />
                    <ReusableInput icon={emailIcon} label="Your Email" />
                  </div>
                </div>
              </div>
              <div className="input-container">
                <div className="input-automobile">
                  <ReusableInput
                    selectOptions={["Male", "Female"]}
                    label="Marital status.*"
                    icon={personicon}
                  />
                  <ReusableInput
                    type="number"
                    label="Number of Children (Above 18 Years.)"
                    icon={personicon}
                  />
                  <ReusableInput
                    type="number"
                    label="Age of Spouse"
                    icon={personicon}
                  />
                  <div className="medical-addons">
                    <div>
                      <input
                        type="checkbox"
                        id="myCheckbox"
                        class="styled-checkbox"
                      />
                      <label for="myCheckbox" class="checkbox-label">
                        Include Optical
                      </label>
                    </div>
                    <div>
                      <input
                        type="checkbox"
                        id="myCheckbox"
                        class="styled-checkbox"
                      />
                      <label for="myCheckbox" class="checkbox-label">
                        Include Dental
                      </label>
                    </div>
                    <div>
                      <input
                        type="checkbox"
                        id="myCheckbox"
                        class="styled-checkbox"
                      />
                      <label for="myCheckbox" class="checkbox-label">
                        Include Maternity
                      </label>
                    </div>
                  </div>
                  <ReusableInput label="Your Name" icon={personicon} />
                </div>
              </div>
            </div>
          </FormContainer>
        </section>
      </main>
    </>
  );
}

export function MedicalCoverPackages() {
  // const [packages1, setPackages] = useState([]);

  // useEffect(() => {
  //   const getMotorPackages = async () => {
  //     await fetch(`${BASE_URL}/packages/motor/`)
  //       .then((response) => response.json())
  //       .then((data) => {
  //         const updatedPackages = data.map((packages) => ({
  //           ...packages,
  //           features: {
  //             ...packages.features,
  //           },
  //         }));
  //         console.log(updatedPackages);
  //         setPackages(updatedPackages);
  //         // setPackages((prevPackages) => [
  //         //   {
  //         //     features: {
  //         //       Premiums: "",
  //         //       "": "",
  //         //     },
  //         //   },
  //         //   ,
  //         //   ...data,
  //         // ]);
  //       })
  //       .catch((error) => console.error("Error:", error));
  //   };
  //   getMotorPackages();
  // }, []);
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

  const navigate = useNavigate();

  const choosePackage = (event) => {
    event.preventDefault();
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
                Motor Insurance Quote Request
              </li>
            </ol>
          </nav>
        </div>
        <section
          className="flex-grow-1 container-fluid text-center d-flex flex-column  mb-3"
          data-aos="fade-in"
        >
          <div id="">
            <div className="boda-packages">
              <div className="d-flex  align-items-center">
                <img
                  style={{ width: `33px`, marginRight: `11px` }}
                  src={coverform}
                  alt=""
                  className="mr-3 w-[44px]"
                  srcset=""
                />
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
                    <button
                      onClick={choosePackage}
                      className="content choose-btn"
                    >
                      My Choice
                    </button>
                  </PackageContent>
                ))}
              </ReusablePackageTable>
              <ReusablePackageTable packages={packages}>
                {/* {packages.map((pr, i) => (
                <PackageContent key={i} package={pr.title} feature="Premiums">
                  <div className="content price">{pr.Premiums}</div>
                </PackageContent>
              ))} */}

                {features.map((p, i) => (
                  <PackageContent key={i} package="" feature={p}>
                    <button
                      onClick={choosePackage}
                      className="content choose-btn"
                    >
                      My Choice
                    </button>
                  </PackageContent>
                ))}
              </ReusablePackageTable>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
