import { Dropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom'

import './Messages.css'

import defaultprofileimg from '../../../assets/images/default-profile.jpg'


export default function MessagesNav() {

    const truncateText = (text, maxLength) => {
        if (text.length <= maxLength) {
            return text;
        }
        return text.substring(0, maxLength) + '...';
    };

    return (
        <Dropdown className='messages'>
            <Dropdown.Toggle id="dropdown-messages" className="nav-link bg-light ms-4 me-0">
                <i className="bi bi-chat-left-text"></i>
                <span className="badge bg-success badge-number">3</span>
            </Dropdown.Toggle>
            <Dropdown.Menu className="dropdown-menu-end dropdown-menu-arrow">
                <Dropdown.Header>
                    You have 3 new notifications
                    <Link to="#"><span className="badge rounded-pill bg-primary p-2 ms-2">View all</span></Link>
                </Dropdown.Header>
                <Dropdown.Divider />
                <Dropdown.Item className="message-item">
                    <Link>
                        <img src={defaultprofileimg} width="" height="" alt="" className="rounded-circle" />
                        <div>
                            <h4>Maria Hudson</h4>
                            <p>{truncateText("Velit asperiores et ducimus soluta repudiandae labore officia est ut", 30)}</p>
                            <p>4 hrs. ago</p>
                        </div>
                    </Link>
                </Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item className="message-item">
                    <Link>
                        <img src={defaultprofileimg} width="" height="" alt="" className="rounded-circle" />
                        <div>
                            <h4>Anna Nelson</h4>
                            <p>{truncateText("Velit asperiores et ducimus soluta repudiandae labore officia est ut", 30)}</p>
                            <p>6 hrs. ago</p>
                        </div>
                    </Link>
                </Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item className="message-item">
                    <Link>
                        <img src={defaultprofileimg} width="" height="" alt="" className="rounded-circle" />
                        <div>
                            <h4>David Muldon</h4>
                            <p>{truncateText("Velit asperiores et ducimus soluta repudiandae labore officia est ut", 30)}</p>
                            <p>8 hrs. ago</p>
                        </div>
                    </Link>
                </Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    );
}