import { Link } from 'react-router-dom';
import SocialLinks from '../../components/addons/SocialLinks/SocialLinks';

export default function Footer({ version, view }) {
    let footerComponent = null;
    if (view === "Home") {
        footerComponent = (
            <footer className={`ps-md-5 pb-4 pt-2 mt-auto ${version === "v1" ? "version1" : "version2 bg-primary"}`}>
                <SocialLinks view="Home" />
            </footer>
        );
    } else if (view === "Retail") {
        footerComponent = (
            <footer id="footer" className="footer mt-auto py-2 text-center text-white">
                <div className="copyright">
                    <span>All rights reserved</span> ©️ 2023<span className="current-year"></span> <strong className="px-1">Minet Group</strong>
                </div>
                <div className="credits pt-2 fs-6">
                    <small>Designed by <Link to="#" className="pe-none">Minet Kenya IT Department</Link></small>
                </div>
            </footer>
        );
    }
    return (
        <>
            {footerComponent}
        </>
    );
}
