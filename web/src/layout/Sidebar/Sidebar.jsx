import { Link } from 'react-router-dom';
import './Sidebar.css'

import SocialLinks from '../../components/addons/SocialLinks/SocialLinks';


export default function Sidebar() {
    return (
        <>
            <aside id="sidebar" className="sidebar d-flex flex-column z-2">
                <Link to="/" className="page-profile pb-1 d-block">
                    <div className="text-center">
                        <i className="bi bi-house-fill page-profile-logo text-primary"></i>
                        <h1 className="d-inline-block fs-4 text-dark text-uppercase">Home</h1>
                    </div>
                    <hr />
                </Link>
                <ul className="sidebar-nav p-0 m-0 list-unstyled" id="sidebar-nav">
                    <li className="nav-item">
                        <Link className="nav-link collapsed" href="/">
                            <i className="bi bi-house"></i>
                            <span>Home</span>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link collapsed" href="https://retail.minet.co.ke/Cart.php">
                            <i className="bi bi-cart4"></i>
                            <span>Cart</span>
                        </Link>
                    </li>
                    <li className="nav-heading text-uppercase fw-bold">Pages</li>
                    <li className="nav-item">
                        <Link className="nav-link collapsed" href="/retail">
                            <i className="bi bi-shield-lock"></i>
                            <span>Privacy Policy</span>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link collapsed" to="/landing/contact">
                            <i className="bi bi-envelope"></i>
                            <span>Contact</span>
                        </Link>
                    </li>
                </ul>
                <SocialLinks />
            </aside>
        </>
    );
}

export function SidebarToggle() {
    const toggleSidebar = () => {
        document.body.classList.toggle('toggle-sidebar');
    };

    return (
        <div>
            <i className="bi bi-list toggle-sidebar-btn" onClick={toggleSidebar}></i>
        </div>
    );
}
