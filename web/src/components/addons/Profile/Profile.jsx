import { Dropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom'

import './Profile.css'

import defaultprofileimg from '../../../assets/images/default-profile.jpg'


export default function ProfileNav() {
    return (
        <Dropdown className='profile'>
            <Dropdown.Toggle className="nav-link nav-profile bg-light ms-4 me-0">
                <div className='h-100 d-flex align-items-center'>
                    <img src={defaultprofileimg}
                        width=""
                        height="35px"
                        alt="Profile"
                        className="rounded-circle" />
                </div>
            </Dropdown.Toggle>
            <Dropdown.Menu className="dropdown-menu-end dropdown-menu-arrow">
                <Dropdown.Header>
                    <h6>John Doe</h6>
                </Dropdown.Header>
                <Dropdown.Divider />
                <Dropdown.Item className="dropdown-item d-flex align-items-center">
                    <Link className='link-dark'>
                        <i className="bi bi-person"></i>
                        <span>My Profile</span>
                    </Link>
                </Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item className="dropdown-item d-flex align-items-center">
                    <Link className='link-dark'>
                        <i className="bi bi-gear"></i>
                        <span>Account Settings</span>
                    </Link>
                </Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item className="dropdown-item d-flex align-items-center">
                    <Link className='link-dark'>
                        <i className="bi bi-question-circle"></i>
                        <span>Need Help?</span>
                    </Link>
                </Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item className="dropdown-item d-flex align-items-center">
                    <Link className='link-dark' to="/">
                        <i className="bi bi-box-arrow-right"></i>
                        <span>Sign Out</span>
                    </Link>
                </Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown >
    );
}