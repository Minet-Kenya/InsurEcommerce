import { useState } from 'react';
import { Tab, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import './Auth.css'

import logo from '../../assets/images/logo-small.png';

import RedirectBtn from '../../components/RedirectBtn/RedirectBtn';
import { LoginForm, SignupForm } from '../../forms/Authentication/Authentication';
import BackToTopBtn from '../../components/BackToTopBtn/BackToTopBtn';
import Preloader from '../../components/Preloader/Preloader';


function Auth() {
    const [activeTab, setActiveTab] = useState('login');

    const handleSignupLinkClick = () => {
        setActiveTab("signup");
    };

    const handleLoginLinkClick = () => {
        setActiveTab("login");
    };

    return (
        <>
            <main id="auth" className="container-fluid flex-grow-1">
                <section className="h-100 row d-flex justify-content-center align-items-center" data-aos="fade-in">
                    <div className="col-12 col-sm-10 col-md-8 col-lg-6 my-4">
                        <Tab.Container defaultActiveKey={activeTab} activeKey={activeTab} onSelect={key => setActiveTab(key)}>
                            <Nav variant="pills" className="mb-2 position-relative">
                                <Nav.Item>
                                    <Nav.Link eventKey="login">Login</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="signup">Sign Up</Nav.Link>
                                </Nav.Item>
                            </Nav>
                            <Tab.Content>
                                <Tab.Pane eventKey="login" className='card'>
                                    <div className="card-body d-flex flex-column align-items-center justify-content-center py-4">
                                        <Header authview="Login" />
                                        <LoginForm />
                                        <div className="mt-4 col-12 d-sm-table text-center">
                                            <div className="d-sm-table-cell mb-2 mb-sm-0 border-end border-secondary">
                                                <span className="form-text">Don't have an account? <Link to="#" onClick={handleSignupLinkClick}>Sign up here</Link></span>
                                            </div>
                                            <div className="d-sm-table-cell">
                                                <span className="form-text">Request <Link to="">Password Reset</Link></span>
                                            </div>
                                        </div>
                                    </div>
                                </Tab.Pane>
                                <Tab.Pane eventKey="signup" className='card'>
                                    <div className="card-body d-flex flex-column align-items-center justify-content-center py-4">
                                        <Header authview="Sign Up" />
                                        <SignupForm />
                                        <div className="mt-4 col-12 d-sm-table text-center">
                                            <div className="d-sm-table-cell mb-2 mb-sm-0 border-end border-secondary">
                                                <span className="form-text">Already have an account? <Link to="#" onClick={handleLoginLinkClick}>Login here</Link></span>
                                            </div>
                                            <div className="d-sm-table-cell">
                                                <span className="form-text">Request <Link to="">Password Reset</Link></span>
                                            </div>
                                        </div>
                                    </div>
                                </Tab.Pane>
                            </Tab.Content>
                        </Tab.Container>
                    </div>
                </section>
            </main>

            <BackToTopBtn />
            <Preloader />
        </>
    );
}

function Header(props) {
    return (
        <>
            <div id="authheader" className="inner-pages pb-2 w-100">
                <div className="d-flex align-items-center justify-content-between">
                    <a href="https://www.minet.com/kenya/" target='_blank' rel='noreferrer' className="d-none d-sm-block logo d-flex align-items-center ms-2 w-auto">
                        <img src={logo} alt="" width="" height="" />
                    </a>
                    <h5 className="d-block flex-grow-1 card-title fw-bold text-center fs-4">{props.authview === 'Sign Up' ? "Create an account" : "Login to Your Account"}</h5>
                    <RedirectBtn to="/" text="Go Back" />
                </div>
                <p className="text-center small">{props.authview === 'Sign Up' ? "Enter your personal details to create account" : "Enter your email & password to login"}</p>
            </div>
        </>
    );
}

export default Auth;