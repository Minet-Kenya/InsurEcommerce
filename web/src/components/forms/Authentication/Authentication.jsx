import React, {
  createContext,
  useEffect,
  useState,
  useContext,
  useCallback,
} from "react";
import { Link, useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";

import "./Authentication.css";
import { BASE_URL, BASE_URL_HOME } from "../../utils/constants";

const AuthContext = createContext();

export default AuthContext;

export function AuthProvider({ children }) {
  // State to store authentication tokens retrieved from localStorage
  let [authTokens, setAuthTokens] = useState(() =>
    localStorage.getItem("authTokens")
      ? JSON.parse(localStorage.getItem("authTokens"))
      : null
  );

  // State to store user information decoded from authentication tokens
  let [user, setUser] = useState(() =>
    localStorage.getItem("authTokens")
      ? jwtDecode(localStorage.getItem("authTokens"))
      : null
  );

  // State to manage loading state
  let [loading, setLoading] = useState(true);

  // Hook to enable navigation within the application
  let navigate = useNavigate();

  // Function to handle user login
  let loginUser = async (e) => {
    e.preventDefault();
    try {
      // Make a POST request to authenticate user
      let response = await fetch(`${BASE_URL_HOME}users/auth/token/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: e.target.username.value,
          password: e.target.password.value,
          role: "CLIENT",
        }),
      });

      let data = await response.json();

      if (response.status === 200) {
        // Set authentication tokens and user information upon successful login
        setAuthTokens(data);
        setUser(jwtDecode(data.access));
        localStorage.setItem("authTokens", JSON.stringify(data));
        navigate("/ecommerce");
      } else {
        alert("Something went wrong");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Something went wrong");
    }
  };

  // Function to handle user logout
  let logoutUser = useCallback(() => {
    setAuthTokens(null);
    setUser(null);
    localStorage.removeItem("authTokens");
    navigate("/");
  }, [setAuthTokens, setUser, navigate]);

  // Function to update authentication tokens
  let updateToken = useCallback(async () => {
    // console.log("Update token called");
    let response = await fetch(`${BASE_URL_HOME}users/auth/token/refresh/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        refresh: authTokens?.refresh,
      }),
    });
    let data = await response.json();
    if (response.status === 200) {
      setAuthTokens(data);
      setUser(jwtDecode(data.access));
      localStorage.setItem("authTokens", JSON.stringify(data));
    } else {
      // logoutUser();
    }
    if (loading) {
      setLoading(false); // Set loading to false after calling updateToken
    }
  }, [authTokens, logoutUser, loading]);

  // Effect hook to update tokens and manage loading state
  useEffect(() => {
    if (loading) {
      updateToken();
    }
    let fourMinutes = 1000 * 60 * 4;
    let interval = setInterval(() => {
      if (authTokens) {
        updateToken();
      }
    }, fourMinutes);
    return () => clearInterval(interval);
  }, [authTokens, updateToken, loading]); // Include loading in the dependency array

  // Context data to be passed down to child components
  let contextData = {
    user: user,
    authTokens: authTokens,
    loginUser: loginUser,
    logoutUser: logoutUser,
  };

  // Return the AuthContext provider with context data
  return (
    <AuthContext.Provider value={contextData}>
      {loading ? null : children}
    </AuthContext.Provider>
  );
}

export function LoginForm() {
  let { loginUser } = useContext(AuthContext);

  return (
    <>
      <form
        id="loginform"
        className="authform row g-3"
        method="post"
        onSubmit={loginUser}
        noValidate
      >
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
          <div className="col-12 form-floating mt-3">
            <input
              type="text"
              name="username"
              id="login_username"
              className="form-control"
              placeholder="name@example.com 0r 07xxxxxx"
              required
              autoFocus
            />
            <label htmlFor="login_username">Enter Your Phone Number </label>
            <div className="invalid-feedback">
              Please enter a valid phone number
            </div>
          </div>
        </>
        <>
          <div className="col-12 form-floating mt-3">
            <input
              type="password"
              name="password"
              id="login_password"
              className="form-control"
              placeholder="Your password"
              autoComplete="current-password"
              required
            />
            <label htmlFor="login_password">Your password</label>
            <div className="invalid-feedback">Please enter our password</div>
          </div>
        </>
        <>
          <div className="col-12 form-floating mt-3">
            <input
              type="text"
              name="role"
              id="login_role"
              defaultValue="CLIENT"
              hidden
            />
          </div>
        </>
        <>
          <div className="col-12 recaptcha px-5 py-1 d-flex justify-content-sm-between align-items-center">
            <div
              className="g-recaptcha"
              data-sitekey=""
              data-callback="enableBtn"
              data-expired-callback="disableBtn"
            ></div>
          </div>
        </>
        <>
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
        </>
      </form>
    </>
  );
}

export function SignupForm({ afterRegister }) {
  const [full_name, setFullName] = useState("");
  const [username, setUsername] = useState("");
  const [krapin, setKraPin] = useState("");
  const [dob, setdob] = useState("");
  const [idNumber, setidNumber] = useState("");
  const [address, setaddress] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [has_agreed, setHasAgreed] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  let navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;

    setError(null); // clear previous
    setSuccess(null); // clear previous

    if (!form.checkValidity()) {
      e.stopPropagation();
      form.classList.add("was-validated");
    } else {
      try {
        setLoading(true);

        // Prepare form data
        const formData = new FormData();
        formData.append("name", full_name);
        formData.append("email", email);
        formData.append("username", username);
        formData.append("password", password);
        formData.append("krapin", krapin);
        formData.append("idNumber", idNumber);
        formData.append("dob", dob);
        formData.append("address", address);

        // Send form data to backend
        const signupResponse = await fetch(`${BASE_URL}/register/`, {
          method: "POST",
          body: formData,
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

          form.classList.remove("was-validated");
          // navigate("/auth");
          afterRegister();
        } else if (responseData.errors) {
          setError(responseData.errors.email[0].message); // Handle error
          form.classList.add("was-validated");
        } else {
          throw new Error("Failed to read 'message' or 'errors' field");
        }

        setLoading(false);
      } catch (error) {
        setError("Failed to send email");
        console.error("Error sending email:", error);
      }
    }
  };

  return (
    <>
      <form
        id="signupform"
        className="authform row g-3"
        onSubmit={handleSubmit}
        method="post"
        action=""
        noValidate
      >
        <div className="my-2">
          {success && (
            <div className="alert alert-success text-center">{success}</div>
          )}
          {error && (
            <div className="alert alert-danger text-center">{error}</div>
          )}
          {loading && (
            <div className="loading text-center">
              <div className="spinner-border text-primary" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            </div>
          )}
        </div>

        {/* Full Name */}

        <div className="col-12 col-md-6">
          <label htmlFor="signup_full_name" className="form-label">
            Your Name
          </label>

          <input
            type="text"
            id="signup_full_name"
            value={full_name}
            onChange={(e) => setFullName(e.target.value)}
            className="form-control"
            required
          />

          <div className="invalid-feedback">Please enter your full name!</div>
        </div>

        {/* Email */}

        <div className="col-12 col-md-6">
          <label htmlFor="signup_Email" className="form-label">
            Your Email
          </label>

          <input
            type="email"
            id="signup_email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="form-control"
            required
          />

          <div className="invalid-feedback">
            Please enter a valid Email adddress!
          </div>
        </div>

        {/* Username */}

        <div className="col-12 col-md-6">
          <label htmlFor="signup_username" className="form-label">
            Phone Number
          </label>

          <input
            type="tel"
            id="signup_username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="form-control"
            required
          />

          <div className="invalid-feedback">Please choose a username.</div>
        </div>

        {/* Password */}

        <div className="col-12 col-md-6">
          <label htmlFor="yourPassword" className="form-label">
            Password
          </label>

          <input
            type="password"
            id="signup_password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="form-control"
            required
          />

          <div className="invalid-feedback">Please enter your password!</div>
        </div>

        <div className="col-12 col-md-6">
          <label htmlFor="yourPassword" className="form-label">
            KRA Pin
          </label>

          <input
            type="text"
            id="kra_pin"
            value={krapin}
            onChange={(e) => setKraPin(e.target.value)}
            className="form-control"
            required
          />

          <div className="invalid-feedback">Please enter your kra pin!</div>
        </div>
        <div className="col-12 col-md-6">
          <label htmlFor="yourPassword" className="form-label">
            Id Number
          </label>

          <input
            type="text"
            id="id_number"
            value={idNumber}
            onChange={(e) => setidNumber(e.target.value)}
            className="form-control"
            required
          />

          <div className="invalid-feedback">Please enter your ID number!</div>
        </div>

        {/* Has Agreed */}

        <div className="col-12 col-md-6">
          <label htmlFor="yourPassword" className="form-label">
            Date of Birth
          </label>

          <input
            type="date"
            id="date_of_birth"
            value={dob}
            onChange={(e) => setdob(e.target.value)}
            className="form-control"
            required
          />

          <div className="invalid-feedback">
            Please enter your date of birth!
          </div>
        </div>
        <div className="col-12 col-md-6">
          <label htmlFor="yourPassword" className="form-label">
            Location Adress
          </label>

          <input
            type="text"
            id="date_of_birth"
            value={address}
            onChange={(e) => setaddress(e.target.value)}
            className="form-control"
            required
          />

          <div className="invalid-feedback">Please enter location address!</div>
        </div>

        <div className="col-12">
          <div className="form-check">
            <input
              type="checkbox"
              id="signup_agreeterms"
              value={has_agreed}
              onChange={(e) => setHasAgreed(e.target.value)}
              className="form-check-input"
              required
            />

            <label className="form-check-label ms-3" htmlFor="acceptTerms">
              I agree and accept the <Link to="#">terms and conditions</Link>
            </label>

            <div className="invalid-feedback">
              You must agree before submitting.
            </div>
          </div>
        </div>

        {/* Submit */}

        <div className="col-12 btns d-flex flex-column flex-sm-row justify-content-center align-items-center">
          <button
            className="btn btn-primary text-white text-uppercase w-100 mb-3 mb-sm-0"
            disabled={loading}
          >
            Create Account
          </button>

          <Link
            to="/"
            className="d-block d-sm-none btn btn-primary text-white text-uppercase w-100 ms-sm-4"
          >
            Go Back
          </Link>
        </div>
      </form>
    </>
  );
}
