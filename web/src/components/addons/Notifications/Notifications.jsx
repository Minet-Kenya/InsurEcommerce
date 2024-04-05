import { Dropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import './Notifications.css';


export default function NotificationsNav() {
    // Function to truncate the text and add ellipsis if it exceeds a certain length
    const truncateText = (text, maxLength) => {
        if (text.length <= maxLength) {
            return text;
        }
        return text.substring(0, maxLength) + '...';
    };

    return (
        <Dropdown className='notifications'>
            <Dropdown.Toggle id="dropdown-notifications" className="nav-link bg-light me-0">
                <i className="bi bi-bell"></i>
                <span className="badge bg-primary badge-number">4</span>
            </Dropdown.Toggle>
            <Dropdown.Menu className="dropdown-menu-end dropdown-menu-arrow">
                <Dropdown.Header>
                    You have 4 new notifications
                    <Link to="#"><span className="badge rounded-pill bg-primary p-2 ms-2">View all</span></Link>
                </Dropdown.Header>
                <Dropdown.Divider />
                <Dropdown.Item className="notification-item">
                    <i className="bi bi-exclamation-circle text-warning"></i>
                    <div>
                        <h4>Lorem Ipsum</h4>
                        <p>{truncateText("Quae dolorem earum veritdccasfferatis oditseno", 30)}</p>
                        <p>30 min. ago</p>
                    </div>
                </Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item className="notification-item">
                    <i className="bi bi-x-circle text-danger"></i>
                    <div>
                        <h4>Atque rerum nesciunt</h4>
                        <p>{truncateText("Quae dolorem earum veritratis oditseno", 30)}</p>
                        <p>1 hr. ago</p>
                    </div>
                </Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item className="notification-item">
                    <i className="bi bi-check-circle text-success"></i>
                    <div>
                        <h4>Sit rerum fuga</h4>
                        <p>{truncateText("Quae dolorem earum vegwregvttritatis oditseno", 30)}</p>
                        <p>2 hrs. ago</p>
                    </div>
                </Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    );
}
