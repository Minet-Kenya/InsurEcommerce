import { Link } from 'react-router-dom';
import './RedirectBtn.css'


export default function RedirectBtn({ view, to, text }) {
    return (
        <>
            <Link id="redirectbtn" className={`redirectbtn text-decoration-none ms-auto me-0 ${view === 'Auth' ? 'd-none d-sm-block' : ''}`} to={to}>
                <h2 className="fs-6 m-0">{text}</h2>
            </Link>
        </>
    );
}