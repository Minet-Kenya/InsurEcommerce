// import ReCAPTCHA from "react-google-recaptcha";
import { Link } from 'react-router-dom'
import './Authentication.css'

export function LoginForm() {
    return (
        <>
            <form id="loginform" className="authform row g-3"
                method="post"
                action=""
                noValidate>
                <div className="mt-2 loading text-center d-none">
                    <div className="spinner-border text-primary" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                </div>
                <div className="mt-2 alert alert-danger text-center d-none"></div>
                <div className="mt-2 alert alert-success text-center d-none"></div>
                <div className="col-12 form-floating mt-3">
                    <input type="text" name="email" id="login_email" className='form-control' placeholder='name@example.com' required autoFocus />
                    <label htmlFor="login_email">Your Email</label>
                    <div className="invalid-feedback">Please enter a valid email</div>
                </div>
                <div className="col-12 form-floating mt-3">
                    <input type="password" name="password" id="login_password" className="form-control" placeholder='Your password' autoComplete='current-password' required />
                    <label htmlFor="login_password">Your password</label>
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
                    <Link to="/landing" className="d-block d-sm-none btn btn-primary text-white text-uppercase w-100 ms-sm-4">Go Back</Link>
                </div>
            </form>
        </>
    );
}

export function SignupForm() {
    return (
        <>
            <form id="signupform" className="authform row g-3"
                method="post"
                action=""
                noValidate>
                <>
                    <div className="mt-2 loading text-center d-none">
                        <div className="spinner-border text-primary" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                    </div>
                    <div className="mt-2 alert alert-danger text-center d-none"></div>
                    <div className="mt-2 alert alert-success text-center d-none"></div>
                </>
                <>
                    <div className="col-12 col-md-6">
                        <label htmlFor="yourName" className="form-label">Your Name</label>
                        <input type="text" name="name" className="form-control" id="yourName" required />
                        <div className="invalid-feedback">Please, enter your name!</div>
                    </div>
                </>
                <>
                    <div className="col-12 col-md-6">
                        <label htmlFor="yourEmail" className="form-label">Your Email</label>
                        <input type="email"
                            name="email"
                            className="form-control"
                            id="yourEmail"
                            required />
                        <div className="invalid-feedback">Please enter a valid Email adddress!</div>
                    </div>
                </>
                <>
                    <div className="col-12 col-md-6">
                        <label htmlFor="yourUsername" className="form-label">Username</label>
                        <input type="text"
                            name="username"
                            className="form-control"
                            id="yourUsername"
                            required />
                        <div className="invalid-feedback">Please choose a username.</div>
                    </div>
                </>
                <>
                    <div className="col-12 col-md-6">
                        <label htmlFor="yourPassword" className="form-label">Password</label>
                        <input type="password"
                            name="password"
                            className="form-control"
                            id="yourPassword"
                            required />
                        <div className="invalid-feedback">Please enter your password!</div>
                    </div>
                </>
                <>
                    <div className="col-12">
                        <div className="form-check">
                            <input className="form-check-input"
                                name="terms"
                                type="checkbox"
                                value=""
                                id="acceptTerms"
                                required />
                            <label className="form-check-label ms-3" htmlFor="acceptTerms">
                                I agree and accept the <Link to="#">terms and conditions</Link>
                            </label>
                            <div className="invalid-feedback">You must agree before submitting.</div>
                        </div>
                    </div>
                </>
                <div className="col-12 btns d-flex flex-column flex-sm-row justify-content-center align-items-center">
                    <button type="submit" className="btn btn-primary text-white text-uppercase w-100 mb-3 mb-sm-0">Create Account</button>
                    <Link to="/landing" className="d-block d-sm-none btn btn-primary text-white text-uppercase w-100 ms-sm-4">Go Back</Link>
                </div>
            </form>
        </>
    );
}

export function Logout() {
    return (
        <>
        </>
    );
}

// function Recaptcha() {
//     const onChange = (value) => {
//         console.log("Captcha value:", value);
//     }

//     return (<>
//         <ReCAPTCHA sitekey="Your client site key" onChange={onChange} />
//     </>);
// }