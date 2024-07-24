import { useState, useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../Contexts/AuthProvider";

const title = "Register";
const socialTitle = "Signup with social media";
const btnText = "SignUp Now";

const Signup = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const { signInWithGmail, login } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/"; // Adjust this based on your routing setup

  const handleSignup = (e) => {
    e.preventDefault();
    // Handle signup logic here
  };

  const handleRegister = () => {
    signInWithGmail()
      .then((result) => {
        const user = result.user;
        navigate(from, { replace: true });
      })
      .catch((err) => {
        const errorMessage = err.message;
        setErrorMessage("Please provide a valid email and password");
      });
  };

  return (
    <div className="login-section padding-tb section-bg">
      <div className="container">
        <div className="account-wrapper">
          <h3 className="title">{title}</h3>
          <form className="account-form" onSubmit={handleSignup}>
            <div className="form-group">
              <input
                type="text"
                name="name"
                id="name"
                placeholder="User Name"
                required
              />
            </div>

            <div className="form-group">
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Email Address"
                required
              />
            </div>
            <div className="form-group">
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Password"
                required
              />
            </div>
            <div className="form-group">
              <input
                type="password"
                name="confirmpassword"
                id="confirmpassword"
                placeholder="Confirm Password"
                required
              />
            </div>
            {/* showing message */}
            <div>
              {errorMessage && (
                <div className="error-message text-danger">{errorMessage}</div>
              )}
            </div>

            <div className="form-group">
              <button type="submit" className="d-block lab-btn">
                <span>{btnText}</span>
              </button>
            </div>
          </form>

          {/* account bottom */}

          <div className="account-bottom">
            <span className="d-block cate pt-10">
              Have an Account? <Link to="/login">Login</Link>
            </span>
            <span className="or">
              <span>or</span>
            </span>
            {/* social icons */}

            <h5 className="subtitle">{socialTitle}</h5>
            <ul className="lab-ul social-icons justify-content-center">
              <li>
                <button href="/" className="github" onClick={handleRegister}>
                  <i className="icofont-github"></i>
                </button>
              </li>
              <li>
                <a href="/" className="facebook">
                  <i className="icofont-facebook"></i>
                </a>
              </li>
              <li>
                <a href="/" className="linkedin">
                  <i className="icofont-linkedin"></i>
                </a>
              </li>
              <li>
                <a href="/" className="instagram">
                  <i className="icofont-instagram"></i>
                </a>
              </li>
              <li>
                <a href="/" className="pinterest">
                  <i className="icofont-pinterest"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
