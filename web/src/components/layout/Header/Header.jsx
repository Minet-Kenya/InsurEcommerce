import React from "react";
import './Header.css';

import { LogoDefault, LogoWhite } from '../../addons/Logo/Logo';
import RedirectBtn from '../../addons/RedirectBtn/RedirectBtn';
import Navigation from '../../addons/Navigation/Navigation';
import Notifications from '../../addons/Notifications/Notifications';
import Messages from '../../addons/Messages/Messages';
import Profile from '../../addons/Profile/Profile';
import SearchbarForm from '../../forms/Searchbar/Searchbar';

import { SidebarToggle } from '../Sidebar/Sidebar';


export default function Header({ version, view }) {
    let headerContent = null;


    if (view === "Home") {
        headerContent = (
            <>
                <div className='navbar-wrapper ms-auto me-0'>
                    <Navigation />
                </div>
                <div className='redirectbtn-wrapper ms-auto me-0'>
                    <RedirectBtn to="/ecommerce" text="Ecommerce" context={`${version === "v2" ? 'btn-light text-dark' : 'btn-primary text-white'}`} />
                </div>
            </>
        );
    } else if (view === "Retail") {
        headerContent = (
            <>
                <SidebarToggle />
                <div className="d-flex h-100 align-items-center ms-auto me-0">
                    <SearchbarForm />
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
