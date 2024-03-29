import { useState } from "react";
import { Link } from "react-router-dom";
import { LoginForm } from "../components/LoginForm";
import { SignupForm } from "../components/SignupForm";
import GoogleIcon from "@mui/icons-material/Google";
import { useGoogleSignIn } from "../hooks/useGoogleSignIn";
import { Loader } from "../components/Loader";
import "./Landing.css";
export const Landing = () => {
  const [isLogin, setIsLogin] = useState(false);
  const [isSignup, setIsSignup] = useState(false);
  const { login, isLoading } = useGoogleSignIn();
  const clearAll = () => {
    setIsLogin(false);
    setIsSignup(false);
  };
  return (
    <div className="Landing">
      <h1 className="Landing__title">The Cafe</h1>
      <div className="Landing__testaccount-container">
        <h1 className="Landing__testaccount">Just looking around?</h1>
        <Link to="/home">
          <button className="Landing__testaccountBtn">Test Account</button>
        </Link>
      </div>
      <div className="Landing__btn-container">
        <button
          onClick={() => {
            clearAll();
            setIsLogin(!isLogin);
          }}
          className="login-btn"
        >
          LOGIN
        </button>
        <button
          onClick={() => {
            clearAll();
            setIsSignup(!isSignup);
          }}
          className="signup-btn"
        >
          SIGNUP
        </button>
        <button className="google-btn" onClick={login}>
          {isLoading ? <Loader /> : <GoogleIcon />}
        </button>
      </div>
      <div>
        {isLogin && <LoginForm />}
        {isSignup && <SignupForm />}
      </div>
    </div>
  );
};
