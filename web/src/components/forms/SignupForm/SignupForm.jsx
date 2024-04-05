// import ReCAPTCHA from "react-google-recaptcha";
import React, { useState } from 'react';
import { Link } from 'react-router-dom'

import './SignupForm.css'


export default function SignupForm() {

    const [full_name, setFullName] = useState("");
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [has_agreed, setHasAgreed] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const form = e.target;

        setError(null); // clear previous 
        setSuccess(null); // clear previous 

        if (!form.checkValidity()) {
            e.stopPropagation();
            form.classList.add('was-validated');
        } else {

            try {
                setLoading(true);

                // Prepare form data
                const formData = new FormData();
                formData.append('full_name', full_name);
                formData.append('email', email);
                formData.append('username', username);
                formData.append('password', password);

                // Send form data to backend
                const signupResponse = await fetch('http:127.0.0.1:8000/api/register/', {
                    method: 'POST',
                    body: formData
                });
                const responseData = await signupResponse.json();
                if (responseData.message) {
                    setSuccess(responseData.message); // Handle success

                    // Reset form fields
                    setFullName("");
                    setEmail("");
                    setUsername("");
                    setPassword("");
                    setHasAgreed("");

                    form.classList.remove('was-validated');

                } else if (responseData.errors) {
                    setError(responseData.errors.email[0].message); // Handle error
                    form.classList.add('was-validated');
                } else {
                    throw new Error("Failed to read 'message' or 'errors' field");
                }

                setLoading(false);

            } catch (error) {
                setError("Failed to send email");
                console.error('Error sending email:', error);
            }

        }
    };

    return (
        <>
            <form id="signupform" className="signupform row g-3" onSubmit={handleSubmit}
                method="post"
                action=""
                noValidate>
                <div className="my-2">
                    {success && <div className="alert alert-success text-center">{success}</div>}
                    {error && <div className="alert alert-danger text-center">{error}</div>}
                    {loading && <div className="loading text-center"><div className="spinner-border text-primary" role="status"><span className="visually-hidden">Loading...</span></div></div>}
                </div>

                {/* Full Name */}

                <div className="col-12 col-md-6">
                    <label htmlFor="signup_full_name" className="form-label">Your Name</label>

                    <input type="text" id="signup_full_name"
                        value={full_name}
                        onChange={(e) => setFullName(e.target.value)}
                        className="form-control"
                        required />

                    <div className="invalid-feedback">Please enter your full name!</div>
                </div>

                {/* Email */}

                <div className="col-12 col-md-6">
                    <label htmlFor="signup_Email" className="form-label">Your Email</label>

                    <input type="email" id="signup_email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="form-control"
                        required />

                    <div className="invalid-feedback">Please enter a valid Email adddress!</div>
                </div>

                {/* Username */}

                <div className="col-12 col-md-6">
                    <label htmlFor="signup_username" className="form-label">Username</label>

                    <input type="text" id="signup_username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        className="form-control"
                        required />

                    <div className="invalid-feedback">Please choose a username.</div>
                </div>

                {/* Password */}

                <div className="col-12 col-md-6">
                    <label htmlFor="yourPassword" className="form-label">Password</label>

                    <input type="password" id="signup_password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="form-control"
                        required />

                    <div className="invalid-feedback">Please enter your password!</div>
                </div>

                {/* Has Agreed */}

                <div className="col-12">
                    <div className="form-check">
                        <input type="checkbox" id="signup_agreeterms"
                            value={has_agreed}
                            onChange={(e) => setHasAgreed(e.target.value)}
                            className="form-check-input"
                            required />

                        <label className="form-check-label ms-3" htmlFor="acceptTerms">
                            I agree and accept the <Link to="#">terms and conditions</Link>
                        </label>

                        <div className="invalid-feedback">You must agree before submitting.</div>
                    </div>
                </div>

                {/* Submit */}

                <div className="col-12 btns d-flex flex-column flex-sm-row justify-content-center align-items-center">

                    <button className="btn btn-primary text-white text-uppercase w-100 mb-3 mb-sm-0" disabled={loading}>Create Account</button>

                    <Link to="/" className="d-block d-sm-none btn btn-primary text-white text-uppercase w-100 ms-sm-4">Go Back</Link>

                </div>
            </form >
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