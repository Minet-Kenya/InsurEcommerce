import './Header.css';

import { LogoDefault, LogoWhite } from '../../components/addons/Logo/Logo';
import RedirectBtn from '../../components/addons/RedirectBtn/RedirectBtn';
import Navigation from '../../components/addons/Navigation/Navigation';
import SearchBar from '../../components/forms/SearchBar/SearchBar';
import { SidebarToggle } from '../Sidebar/Sidebar';
import Notifications from '../../components/addons/Notifications/Notifications';
import Messages from '../../components/addons/Messages/Messages';
import Profile from '../../components/addons/Profile/Profile';

export default function Header({ version, view }) {
    let headerContent = null;

    if (view === "Home") {
        headerContent = (
            <>
                <div className='navbar-wrapper ms-auto me-0'>
                    <Navigation />
                </div>
                <div className='redirectbtn-wrapper ms-auto me-0'>
                    <RedirectBtn to="/" text="Ecommerce" context={`${view === "Home" ? 'btn-light text-dark' : 'btn-primary text-white'}`} />
                </div>
            </>
        );
    } else if (view === "Retail") {
        headerContent = (
            <>
                <SidebarToggle />
                <div className="d-flex h-100 align-items-center ms-auto me-0">
                    <SearchBar />
                    <Notifications />
                    <Messages />
                    <Profile />
                </div>
            </>
        );
    }

    return (
        <header id="header" className={`header ${version === "v1" ? 'version1' : 'version2'} fixed-top pt-2 px-4`}>
            <div className="container-fluid d-flex h-100 align-items-center py-2">
                {version === "v1" ? <LogoDefault /> : <LogoWhite />}
                {headerContent}
            </div>
        </header>
    );
}
