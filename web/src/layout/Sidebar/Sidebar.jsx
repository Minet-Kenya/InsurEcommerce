import { Link } from 'react-router-dom';
import SocialLinks from '../../components/addons/SocialLinks/SocialLinks';
import './Sidebar.css'

export default function Sidebar() {
    return (
        <aside id="sidebar" class="sidebar d-flex flex-column">
            <ul class="sidebar-nav" id="sidebar-nav">
                <li class="nav-item">
                    <Link className="nav-link collapsed" to="/">
                        <i class="bi bi-grid"></i>
                        <span>Solutions</span>
                    </Link>
                </li>
                <li class="nav-item">
                    <Link className="nav-link collapsed" to="">
                        <i class="bi bi-cart4"></i>
                        <span>Cart</span>
                    </Link>
                </li>

                {/* Shared Pages */}
                <li class="nav-heading">Pages</li>
                {/* <li class="nav-item">
                    <Link className="nav-link collapsed" to="">
                        <i class="bi bi-person"></i>
                        <span>Profile</span>
                    </Link>
                </li>
                <li class="nav-item">
                    <Link className="nav-link collapsed" to="">
                        <i class="bi bi-bell"></i>
                        <span>Notifications</span>
                    </Link>
                </li>
                <li class="nav-item">
                    <Link className="nav-link collapsed" to="">
                        <i class="bi bi-chat-left-text"></i>
                        <span>Messages</span>
                    </Link>
                </li> */}
                <li class="nav-item">
                    <Link className="nav-link collapsed" to="">
                        <i class="bi bi-question-circle"></i>
                        <span>F.A.Q</span>
                    </Link>
                </li>
                <li class="nav-item">
                    <Link className="nav-link collapsed" to="/landing/contact">
                        <i class="bi bi-envelope"></i>
                        <span>Contact</span>
                    </Link>
                </li>
                <li class="nav-item">
                    <Link className="nav-link collapsed" to="/landing">
                        <i class="bi bi-box-arrow-right"></i>
                        <span>Logout</span>
                    </Link>
                </li>
            </ul>

            <div className='mt-auto pb-4'>
                <SocialLinks />
            </div>
        </aside>
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
