import './Header.css';

import { LogoDefault, LogoWhite } from '../../components/addons/Logo/Logo';
import RedirectBtn from '../../components/addons/RedirectBtn/RedirectBtn';
import Navigation from '../../components/addons/Navigation/Navigation';
import SearchBar from '../../components/forms/SearchBar/SearchBar';

export default function Header({ version, view }) {
    let headerContent = null;

    if (view === "Home") {
        headerContent = (
            <>
                <Navigation />
                <RedirectBtn to="/retail" text="Ecommerce" />
            </>
        );
    } else if (view === "Retail") {
        headerContent = (
            <>
                <i className="bi bi-list toggle-sidebar-btn text-dark"></i>
                <SearchBar />
                <RedirectBtn to="/landing" text="Home" />
            </>
        );
    }

    return (
        <header id="header" className={`header ${version === "v1" ? 'version1' : 'version2'} fixed-top pt-2 px-4`}>
            <div className="container-fluid d-flex align-items-center py-2">
                {version === "v1" ? <LogoDefault /> : <LogoWhite />}
                {headerContent}
            </div>
        </header>
    );
}
