import './Header.css'
import logo_full from '../../assets/images/logo-full.png'
import logo_full_white from '../../assets/images/logo-full-white.png'
import logo_small from '../../assets/images/logo-small.png'
import logo_small_white from '../../assets/images/logo-small-white.png'


function Header() {
    return (
        <header id="header" className="fixed-top w-100 pt-2 px-4">
            <div className="container-fluid d-flex align-items-center justify-content-between py-2">
                <a href="{% url 'index' %}" className="logo m-0 p-0 d-none d-lg-block">
                    <img src={logo_full}
                        width="250px"
                        height=""
                        alt="logo"
                        className="inner-pages img-fluid" />
                    <img src={logo_full_white}
                        width="250px"
                        height=""
                        alt="logo"
                        className="homepage img-fluid" />
                </a>
                <a href="{% url 'index' %}" className="logo m-0 p-0 d-block d-lg-none">
                    <img src={logo_small}
                        width="70px"
                        height=""
                        alt="logo"
                        className="inner-pages img-fluid" />
                    <img src={logo_small_white}
                        width="70px"
                        height=""
                        alt="logo"
                        className="homepage img-fluid" />
                </a>
                <nav id="navbar" className="navbar p-0">
                    <ul className="d-lg-flex m-0 p-0 list-unstyled align-items-center">
                        <li>
                            <a className="nav-link" href="{% url 'index' %}"><span className="bi bi-house-door-fill">&nbsp;&nbsp;Home</span></a>
                        </li>
                        <li>
                            <a className="nav-link" href="{% url 'contact' %}"><span className="bi bi-telephone-fill">&nbsp;&nbsp;Contact</span></a>
                        </li>
                        <li>
                            <a className="nav-link" href="{% url 'login' %}">
                                <span className="bi bi-person-check-fill">&nbsp;&nbsp;Login</span>
                            </a>
                        </li>
                        <li>
                            <a className="nav-link" href="{% url 'signup' %}">
                                <span className="bi bi-person-plus-fill">&nbsp;&nbsp;Sign Up</span>
                            </a>
                        </li>
                        <li>
                            <a className="nav-link" href="{% url 'profile' %}">
                                <span className="bi bi-person-fill">&nbsp;&nbsp;Profile</span>
                            </a>
                        </li>
                        <li>
                            <a className="nav-link" href="{% url 'logout' %}">
                                <span className="bi bi-box-arrow-right">&nbsp;&nbsp;Logout</span>
                            </a>
                        </li>
                    </ul>
                    <i className="bi bi-list mobile-nav-toggle"></i>
                </nav>
                <a className="btn-getstarted text-decoration-none" href="{% url 'retail' %}">
                    <h2 className="fs-6 m-0">Ecommerce</h2>
                </a>
            </div>
        </header>
    );
}

export default Header;