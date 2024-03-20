// Node modules
import { Link } from 'react-router-dom'

// CSS
import './Auth.css'

// Assets
import logo from '../../assets/images/logo-full.png';

// Utility Components
import { Preloader } from '../../utils/Preloader/Preloader';

export function Auth() {
    return (
        <>
            <Preloader />

            <main id="auth" className="container-fluid flex-grow-1">
                <section className="h-100 row d-flex justify-content-center align-items-center">
                    <div className="col-12 col-sm-10 col-md-8 col-lg-6">
                        {/* <Tabs */}
                        <ul className="nav nav-pills mb-2 position-relative">
                            <li>
                                <a className="nav-link active"
                                    data-bs-toggle="pill"
                                    href="#loginform">Login</a>
                            </li>
                            <li>
                                <a className="nav-link" data-bs-toggle="pill" href="#signupform">Sign Up</a>
                            </li>
                        </ul>
                        {/* ======= Login ======= */}
                        <Login />
                        {/* ======= Sign up ======= */}
                        <SignUp />
                    </div>
                </section>
            </main>
        </>
    );
}

export function Login() {
    return (
        <>
            <div id="loginform" className="card student fade show active">
                            <div className="card-body d-flex flex-column align-items-center justify-content-center text-center">
                                <div className="pb-2">
                                    <div className="d-flex align-items-center">
                                        <Link to="/"
                                            className="d-block logo d-flex align-items-center w-auto">
                                            <img src={logo} alt="" width="" height="" />
                                        </Link>
                                        <h5 className="flex-grow-1 card-title text-center pb-0 fs-4">Login to Your Account</h5>
                                    </div>
                                    <p className="text-center small">Enter your username or email & password to login</p>
                                </div>
                                <form className="row g-3 loginform"
                                    method="post"
                                    action=""
                                    novalidate>
                                    <div className="mt-2 loading text-center d-none">
                                        <div className="spinner-border text-primary" role="status">
                                            <span className="visually-hidden">Loading...</span>
                                        </div>
                                    </div>
                                    <div className="mt-2 alert alert-danger text-center d-none"></div>
                                    <div className="mt-2 alert alert-success text-center d-none"></div>
                                    <div className="col-12 form-floating mt-3">
                                        <input type="text" name="username" id="id_username" className='form-control' placeholder='name@example.com' required autoFocus />
                                        <label for="id_username">Your username / Email</label>
                                        <div className="invalid-feedback">Please enter a valid email</div>
                                    </div>
                                    <div className="col-12 form-floating mt-3">
                                        <input type="password" name="password" id="id_password" className="form-control" placeholder='Your password' autoComplete='current-password' required />
                                        <label for="id_password">Your password</label>
                                        <div className="invalid-feedback">Please enter our password</div>
                                    </div>
                                    <div className="col-12 recaptcha px-5 py-1 d-flex justify-content-sm-between align-items-center">
                                        <div className="g-recaptcha"
                                            data-sitekey=""
                                            data-callback="enableBtn"
                                            data-expired-callback="disableBtn"></div>
                                    </div>
                                    <div className="col-12 btns d-flex flex-column flex-sm-row justify-content-center align-items-center">
                                        <button type="submit" className="btn btn-primary text-white text-uppercase w-100 mb-3 mb-sm-0">Login</button>
                                        <Link to="/"
                                            className="btn btn-primary text-white text-uppercase w-100 ms-sm-4">Back to Homepage</Link>
                                    </div>
                                    <div className="col-12 d-sm-table text-center">
                                        <div className="d-sm-table-row">
                                            <div className="d-sm-table-cell mb-2 mb-sm-0 border-end border-secondary">
                                                <span className="form-text">Not a member? <Link to="">Sign up here</Link></span>
                                            </div>
                                            <div className="d-sm-table-cell">
                                                <span className="form-text">Request <Link to="">Password Reset</Link></span>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
        </>
    );
}

export function SignUp() {
    return (
        <>
            <div id="signupform" className="card student fade show active">
                            <div className="card-body d-flex flex-column align-items-center justify-content-center text-center">
                                <div className="pb-2">
                                    <div className="d-flex align-items-center">
                                        <Link to="/"
                                            className="d-block logo d-flex align-items-center w-auto">
                                            <img src={logo} alt="" width="" height="" />
                                        </Link>
                                        <h5 className="flex-grow-1 card-title text-center pb-0 fs-4">Login to Your Account</h5>
                                    </div>
                                    <p className="text-center small">Enter your username or email & password to login</p>
                                </div>
                                <form className="row g-3 signupform"
                                    method="post"
                                    action=""
                                    novalidate>
                                    <div className="mt-2 loading text-center d-none">
                                        <div className="spinner-border text-primary" role="status">
                                            <span className="visually-hidden">Loading...</span>
                                        </div>
                                    </div>
                                    <div className="mt-2 alert alert-danger text-center d-none"></div>
                                    <div className="mt-2 alert alert-success text-center d-none"></div>
                                    <div className="col-12 form-floating mt-3">
                                        <input type="text" name="username" id="id_username" className='form-control' placeholder='name@example.com' required autoFocus />
                                        <label for="id_username">Your username / Email</label>
                                        <div className="invalid-feedback">Please enter a valid email</div>
                                    </div>
                                    <div className="col-12 form-floating mt-3">
                                        <input type="password" name="password" id="id_password" className="form-control" placeholder='Your password' autoComplete='current-password' required />
                                        <label for="id_password">Your password</label>
                                        <div className="invalid-feedback">Please enter our password</div>
                                    </div>
                                    <div className="col-12 recaptcha px-5 py-1 d-flex justify-content-sm-between align-items-center">
                                        <div className="g-recaptcha"
                                            data-sitekey=""
                                            data-callback="enableBtn"
                                            data-expired-callback="disableBtn"></div>
                                    </div>
                                    <div className="col-12 btns d-flex flex-column flex-sm-row justify-content-center align-items-center">
                                        <button type="submit" className="btn btn-primary text-white text-uppercase w-100 mb-3 mb-sm-0">Login</button>
                                        <Link to="/"
                                            className="btn btn-primary text-white text-uppercase w-100 ms-sm-4">Back to Homepage</Link>
                                    </div>
                                    <div className="col-12 d-sm-table text-center">
                                        <div className="d-sm-table-row">
                                            <div className="d-sm-table-cell mb-2 mb-sm-0 border-end border-secondary">
                                                <span className="form-text">Not a member? <Link to="">Sign up here</Link></span>
                                            </div>
                                            <div className="d-sm-table-cell">
                                                <span className="form-text">Request <Link to="">Password Reset</Link></span>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
        </>
    );
}

export function Logout() {
    return (
        <>
            <main id="auth" className="container-fluid flex-grow-1">
                <h1>Logout</h1>
            </main>
        </>
    );
}
