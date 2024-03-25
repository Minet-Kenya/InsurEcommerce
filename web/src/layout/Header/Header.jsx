import './Header.css'


import { LogoDefault, LogoWhite } from '../../components/addons/Logo/Logo';
import RedirectBtn from '../../components/addons/RedirectBtn/RedirectBtn';
import Navigation from '../../components/addons/Navigation/Navigation';


export default function Header(props) {
    return (
        <header id="header" className={`header ${props.version === "v1" ? 'version1' : 'version2'} fixed-top pt-2 px-4`}>
            <div className="container-fluid d-flex align-items-center justify-content-between py-2">

                {props.version === "v1" ? <LogoDefault /> : <LogoWhite />}

                {props.view === "Home" ? <Navigation /> : null}

                <RedirectBtn to="/retail" text="Ecommerce" />

            </div>
        </header>
    );
}