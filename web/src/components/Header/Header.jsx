import { Link } from 'react-router-dom'

import './Header.css'
// import logoFull from '../../assets/images/logo-full.png'
import logoFullWhite from '../../assets/images/logo-full-white.png'
// import logoSmall from '../../assets/images/logo-small.png'
import logoSmallWhite from '../../assets/images/logo-small-white.png'


export function Header() {

    // const logo = document.body.id !== 'index' ? logoFull : logoFullWhite;
    // const logo_small = document.body.id !== 'index' ? logoSmall : logoSmallWhite;

    return (
        <header id="header" className="fixed-top w-100 pt-2 px-4">
            <div className="container-fluid d-flex align-items-center justify-content-between py-2">

                <Link to="/" className="logo m-0 p-0 d-none d-lg-block">
                    <img src={logoFullWhite}
                        width="250px"
                        height=""
                        alt="logo"
                        className="inner-pages img-fluid" />
                </Link>
                <Link to="/" className="logo m-0 p-0 d-block d-lg-none">
                    <img src={logoSmallWhite}
                        width="70px"
                        height=""
                        alt="logo"
                        className="inner-pages img-fluid" />
                </Link>
                <nav id="navbar" className="navbar p-0">
                    <ul className="d-lg-flex m-0 p-0 list-unstyled align-items-center">
                        <li>
                            <Link className="nav-link" to="/"><span className="bi bi-house-door-fill">&nbsp;&nbsp;Home</span></Link>
                        </li>
                        <li>
                            <Link className="nav-link" to="/contact"><span className="bi bi-telephone-fill">&nbsp;&nbsp;Contact</span></Link>
                        </li>
                        <li>
                            <Link className="nav-link" to="/">
                                <span className="bi bi-person-check-fill">&nbsp;&nbsp;Login</span>
                            </Link>
                        </li>
                        <li>
                            <Link className="nav-link" to="/">
                                <span className="bi bi-person-plus-fill">&nbsp;&nbsp;Sign Up</span>
                            </Link>
                        </li>
                        <li>
                            <Link className="nav-link" to="/">
                                <span className="bi bi-person-fill">&nbsp;&nbsp;Profile</span>
                            </Link>
                        </li>
                        <li>
                            <Link className="nav-link" to="/">
                                <span className="bi bi-box-arrow-right">&nbsp;&nbsp;Logout</span>
                            </Link>
                        </li>
                    </ul>
                    <i className="bi bi-list mobile-nav-toggle"></i>
                </nav>
                <Link className="btn-getstarted text-decoration-none" to="/">
                    <h2 className="fs-6 m-0">Ecommerce</h2>
                </Link>
            </div>
        </header>
    );
}
