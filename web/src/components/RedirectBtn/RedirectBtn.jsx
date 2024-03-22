import { Link } from 'react-router-dom';

import './RedirectBtn.css'

function RedirectBtn(props) {
    return (
        <>
            <Link className="redirectbtn text-decoration-none" to={props.to}>
                <h2 className="fs-6 m-0">{props.text}</h2>
            </Link>
        </>
    );
}

export default RedirectBtn;