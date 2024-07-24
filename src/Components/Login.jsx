import React, { useContext, useState } from "react";
import { AuthContext } from "../Contexts/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";

const title  = "Login"
const  socilTitle = "Login with social media"
const  btnText = "Login Now"

const socialList = [
  { iconName: "icofont-facebook", siteLink: "#", className: "facebook" },
  { iconName: "icofont-twitter", siteLink: "#", className: "twitter" },
  { iconName: "icofont-linkedin", siteLink: "#", className: "linkedin" },
  { iconName: "icofont-instagram", siteLink: "#", className: "instagram" },
  { iconName: "icofont-pinterest", siteLink: "#", className: "pinterest" },
];

const Login = () => {
const [errorMessage, setErrorMessage] = useState(" ")
const {signInWithGmail,login} =  useContext(AuthContext);

const  location = useLocation();

const navigate  = useNavigate();

const from  =  location.state?.from?.pathname || "/"

const handlelogin = (e) => {

 e.preventDefault();

 const  form = e.target;
//  console.log(form)
 const email = form.email.value;
//  console.log(email)
const password = form.password.value;
// console.log(email,password)
login(email,password).then((result) => {
  const user = result.user;
  alert("Login Successfull")
  navigate(from,{replace : true})
}) .catch((err) => {
    const errorMessage = err.message;
    setErrorMessage("Please Provided valid email and Password");
})


}


const handleRegister = () => {
  signInWithGmail
  ()
  .then((result) => {
    const user = result.user;
    navigate(from , {replace:true})

  }) .catch((err) => {
       const errorMessage = err.message;
       setErrorMessage("Please Provided valid email and Password");
  })

    

}

  return (
    <>
      <div className="login-section padding-tb section-bg">
                <div className="container">
                   <div className="account-wrapper">
                           <h3 className="title">{title}</h3>
                           <form className="account-form" onSubmit={handlelogin}>
                               <div className="form-group">
                                   <input type="email"  name="email" id="email" placeholder="Email Address * "  required />
                               </div>
                               <div className="form-group">
                                   <input type="password"  name="password" id="password" placeholder="Password * "  required />
                               </div>
                               {/* showing message */}
                               <div>
                                {
                                    errorMessage  && (
                                        <div className="error-message text-danger">
                                             {errorMessage}
                                         </div>
                                     )
                                }
                               </div>
                               <div className="form-group">
                                   <div className="d-flex justify-content-between flex-wrap pt-sm-2"> 
                                    <div className="checkgroup">
                                      <input type="checkbox" name="remember"  id="remember" />
                                      <label htmlFor="remember">Remember me</label>
                                     </div>

                                     <Link to="/forgetpassword">Forget Password</Link>
                                   </div>
                               </div>
                               <div className="form-group">
                                   <button type="submit" className="d-block lab-btn "><span>{btnText}</span></button>
                               </div>
                           </form>

                           {/* account bottom */}

                           <div className="account-bottom">
                                 <span className="d-block cate pt-10">
                                    Dont Have an Account <Link to="/sign-up">Sign Up</Link>
                                 </span>
                                 <span className="or">
                                         <span>or</span>
                                 </span>
                                 {/* social icons */}

                                 <h5 className="subtitle">{socilTitle}</h5>
                                 <ul className="lab-ul social-icons justify-content-center">
                                    <li>
                                    <button href="/" className="github"  onClick={handleRegister}><i className="icofont-github"></i></button>
                                    </li>
                                    <li>
                                    <a href="/" className="facebook"><i className="icofont-facebook"></i></a>
                                    </li>
                                    <li>
                                    <a href="/" className="linkedin"><i className="icofont-linkedin"></i></a>
                                    </li>
                                    <li>
                                    <a href="/" className="instagram"><i className="icofont-instagram"></i></a>
                                    </li>
                                    <li>
                                    <a href="/" className="pinterest"><i className="icofont-pinterest"></i></a>
                                    </li>
                                 </ul>
                           </div> 

                   </div>
                </div>
      </div>
    </>
  )
};

export default Login;
