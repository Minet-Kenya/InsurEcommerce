import { Link } from 'react-router-dom';

/**
 * Redirect Button Component
 * 
 * @param {string} view - The view/page in which the button is. Can be 'Home', 'Auth' or 'Retail'.
 * @param {string} to - The URL to redirect to.
 * @param {string} text - The text to display on the button.
 * @param {string} context - Additional bootstrap classes (e.g btn-primary, text-white, etc) to apply to the button.
 * @returns {JSX.Element} JSX element representing the redirect button.
 */
export default function RedirectBtn({ view, to, text, context }) {
    return (
        <Link
            id="redirectbtn"
            className={`redirectbtn btn ${context} ${view === 'Auth' ? 'd-none d-sm-block' : ''} text-decoration-none`}
            to={to}
        >
            <h2 className="fs-6 m-0">{text}</h2>
        </Link>
    );
}
