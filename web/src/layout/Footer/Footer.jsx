import { Link } from 'react-router-dom';
import SocialLinks from '../../components/addons/SocialLinks/SocialLinks';
import "./Footer.css";

export default function Footer({ version, view }) {
    let footerContent = null;

    switch (view) {
        case "Home":
            footerContent = (
                <div className='ps-md-5'>
                    <SocialLinks view="Home" />
                </div>
            );
            break;

        case "Retail":
            footerContent = (
                <>
                    <div className="copyright">
                        <span>All rights reserved</span> ©️ 2024<span className="current-year"></span> <strong className="px-1">Minet Kenya</strong>
                    </div>
                    <div className="credits pt-2">
                        <small>Designed by <Link to="#" className="pe-none">Minet Kenya IT Department</Link></small>
                    </div>
                </>
            );
            break;

        default:
            footerContent = null; // Set default content or leave it as null if no match
    }

    return (
        <>
            <footer id="footer" className={`footer mt-auto py-2 ${version === "v1" ? "version1 bg-secondary" : "version2 bg-primary"}`}>
                {footerContent}
            </footer>
        </>
    );
}
