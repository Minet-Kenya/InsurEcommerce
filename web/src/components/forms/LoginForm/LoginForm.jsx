import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./LoginForm.css";


export default function LoginForm() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const response = await login(username, password);
    if (response.status === 200) {
      setIsLoggedIn(true);
    }
  };

  return (
    <>
      {isLoggedIn ? (
        <div>Hello {username}</div>
      ) : (
        <form
          id="loginform"
          className="loginform row g-3"
          method="post"
          onSubmit={handleFormSubmit}
          noValidate
        >
          <div className="mt-2 loading text-center d-none">
            <div className="spinner-border text-primary" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
          <div className="mt-2 alert alert-danger text-center d-none"></div>
          <div className="mt-2 alert alert-success text-center d-none"></div>
          <div className="col-12 form-floating mt-3">
            <input
              type="text"
              name="email"
              id="login_email"
              className="form-control"
              placeholder="name@example.com"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              autoFocus
            />
            <label htmlFor="login_email">Your Email</label>
            <div className="invalid-feedback">Please enter a valid email</div>
          </div>
          <div className="col-12 form-floating mt-3">
            <input
              type="password"
              name="password"
              id="login_password"
              className="form-control"
              placeholder="Your password"
              autoComplete="current-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <label htmlFor="login_password">Your password</label>
            <div className="invalid-feedback">Please enter our password</div>
          </div>
          <div className="col-12 recaptcha px-5 py-1 d-flex justify-content-sm-between align-items-center">
            <div
              className="g-recaptcha"
              data-sitekey=""
              data-callback="enableBtn"
              data-expired-callback="disableBtn"
            ></div>
          </div>
          <div className="col-12 btns d-flex flex-column flex-sm-row justify-content-center align-items-center">
            <button
              type="submit"
              className="btn btn-primary text-white text-uppercase w-100 mb-3 mb-sm-0"
            >
              Login
            </button>
            <Link
              to="/"
              className="d-block d-sm-none btn btn-primary text-white text-uppercase w-100 ms-sm-4"
            >
              Go Back
            </Link>
          </div>
        </form>
      )}
    </>
  );
}

const API_URL = "http://127.0.0.1:8000";

export const axiosInstance = axios.create({
  baseURL: API_URL,
  withCredentials: true, // this is a must - read about it below
  headers: {
    "Content-Type": "application/json",
  },
});

const login = async (username, password) => {
  const response = await axiosInstance.post(`/api/login/`, {
    username: username,
    password: password,
  });

  return response;
};
