import logoFull from "../../../assets/images/logo-full.png";
import logoFullWhite from "../../../assets/images/logo-full-white.png";
import logoSmall from "../../../assets/images/logo-small.png";
import logoSmallWhite from "../../../assets/images/logo-small-white.png";

export function LogoDefault() {
  return (
    <>
      <a href="/" rel="noreferrer" className="logo m-0 p-0 d-none d-lg-block">
        <img
          src={logoFull}
          width="250px"
          height=""
          alt="logo"
          className="img-fluid"
        />
      </a>
      <a href="/" rel="noreferrer" className="logo m-0 p-0 d-block d-lg-none">
        <img
          src={logoSmall}
          width="70px"
          height=""
          alt="logo"
          className="img-fluid"
        />
      </a>
    </>
  );
}

export function LogoWhite() {
  return (
    <>
      <a href="/" rel="noreferrer" className="logo m-0 p-0 d-none d-lg-block">
        <img
          src={logoFullWhite}
          width="250px"
          height=""
          alt="logo"
          className="img-fluid"
        />
      </a>
      <a href="/" rel="noreferrer" className="logo m-0 p-0 d-block d-lg-none">
        <img
          src={logoSmallWhite}
          width="70px"
          height=""
          alt="logo"
          className="img-fluid"
        />
      </a>
    </>
  );
}
