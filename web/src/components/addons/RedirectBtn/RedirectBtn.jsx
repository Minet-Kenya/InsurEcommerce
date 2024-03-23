import { Link } from 'react-router-dom';
import './RedirectBtn.css'


function RedirectBtn(props) {
    return (
        <>
            <Link id="redirectbtn" className={`redirectbtn text-decoration-none ${props.view === 'Auth' ? 'd-none d-sm-block' : ''}`} to={props.to}>
                <h2 className="fs-6 m-0">{props.text}</h2>
            </Link>
        </>
    );
}


export default RedirectBtn;