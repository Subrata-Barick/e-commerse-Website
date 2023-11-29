import React,{useState,useContext} from 'react';
import { useNavigate,useLocation } from 'react-router-dom';
import { AuthContext } from "../contexts/AuthProvider";
import { Link } from 'react-router-dom';
const title = "Register";
const socialTitle = "Login with Social Media";
const btnText = "Signup Now";

const Signup = () => {
    const [errorMessage, setErrorMessage] = useState("");
  
    const { signUpWithGmail, createUser } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || "/";
    const handleRegister=(event)=>{signUpWithGmail().then((result) => {
        const user = result.user;
        navigate(from, { replace: true }).catch((error) => {
          const errorMsg = error.message;
          setErrorMessage("Please Provide valid email & password");
        });
      });

    }
    const handleSignup=(event)=>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const confirmPassword=form.confirmPassword.value;
        if(password!==confirmPassword){
            setErrorMessage("Password doesn't match! Please, Provide a correct password! ")
        }else{
            setErrorMessage('');
            createUser(email,password).then((userCredential)=>{
                const user=userCredential.user;
                alert('Account created Successfully Done!!!')
                navigate(from,{replace:true})
            }).catch((error)=>{
                console.log(error.message);
                alert(`${error.message}`)
            })

        }

    }
  return (
    <div> <div className="login-section padding-tb section-bg">
    <div className="container">
      <div className="account-wrapper">
        <h3 className="title">{title}</h3>
        <form className="account-form" onSubmit={handleSignup}>
          <div className="form-group">
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Full name*"
              required
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email Address*"
              required
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Password*"
              required
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              name="confirmPassword"
              id="confirmPassword"
              placeholder="ConfirmPassword*"
              required
            />
          </div>
          {/*showing message */}
          <div>
            {errorMessage && (
              <div className="error-message text-danger mb-1">
                {errorMessage}
              </div>
            )}
          </div>
         
          <div className="form-group">
            <button type="submit" className="d-block lab-btn">
              <span>{btnText}</span>
            </button>
          </div>
        </form>
        {/* account button*/}
        <div className="account-bottom">
          <span className="d-block cate pt-10">
           Have an Account?{ }  <Link to="/login"><b>Login</b></Link>
          </span>
          <span className="or">
            <span>or</span>
          </span>
          {/*social login */}
          <h5 className="subtitle">{socialTitle}</h5>
          <ul className="lab-ul social-icons justify-content-center">
            <li>
              <button className="github" onClick={handleRegister}>
                <i className="icofont-github"></i>
              </button>
            </li>
            <li>
              <a href="/" className="facebook">
                <i className="icofont-facebook"></i>
              </a>
            </li>
            <li>
              <a href="/" className="twitter">
                <i className="icofont-twitter"></i>
              </a>
            </li>
            <li>
              <a href="/" className="instagram">
                <i className="icofont-instagram"></i>
              </a>
            </li>
            <li>
              <a href="/" className="linkedin">
                <i className="icofont-linkedin"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div></div>
  )
}

export default Signup