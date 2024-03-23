import { useState } from 'react';
import { Tab, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Auth.css'

import logoSmall from '../../assets/images/logo-small.png';

import { LoginForm, SignupForm } from '../../components/forms/Authentication/Authentication';
import RedirectBtn from '../../components/addons/RedirectBtn/RedirectBtn';
import BackToTopBtn from '../../components/addons/BackToTopBtn/BackToTopBtn';


function Auth() {
    const [activeTab, setActiveTab] = useState('login');

    const handleSignupLinkClick = () => {
        setActiveTab("signup");
    };

    const handleLoginLinkClick = () => {
        setActiveTab("login");
    };

    return (
        <div className='vh-100 d-flex flex-column'>
            <main id="auth" className="auth flex-grow-1 position-relative container-fluid">
                <section className="h-100 row d-flex align-items-center justify-content-center py-3" data-aos="fade-in">
                    <div className='col-12 col-sm-10 col-md-8 col-lg-6'>
                        <Tab.Container defaultActiveKey={activeTab} activeKey={activeTab} onSelect={key => setActiveTab(key)} >
                            <Nav variant="pills" className="mb-2 position-relative d-flex justify-content-center">
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
                                        <TitleHeader authview="Login" />
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
                                        <TitleHeader authview="Sign Up" />
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
        </div>
    );
}

function TitleHeader(props) {
    return (
        <>
            <section id="titleheader" className="titleheader pb-2 w-100">
                <div className="d-flex align-items-center justify-content-between">
                    <a href="https://www.minet.com/kenya/" target='_blank' rel='noreferrer' className="d-none d-sm-block logo d-flex align-items-center ms-2 w-auto">
                        <img src={logoSmall} alt="" width="" height="" />
                    </a>
                    <h5 className="d-block card-title flex-grow-1 fw-bold text-center fs-4">{props.authview === 'Sign Up' ? "Create an account" : "Login to Your Account"}</h5>
                    <RedirectBtn to="/landing" text="Go Back" view="Auth" />
                </div>
                <p className="text-center small">{props.authview === 'Sign Up' ? "Enter your personal details to create account" : "Enter your email & password to login"}</p>
            </section>
        </>
    );
}

export default Auth;