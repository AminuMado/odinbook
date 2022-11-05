import { useState } from "react";
import { LoginForm } from "../components/LoginForm";
import { Modal } from "../components/Modal";
import { SignupForm } from "../components/SignupForm";
import "./Landing.css";
export const Landing = () => {
  const [isLogin, setIsLogin] = useState(true);
  return (
    <>
      <Modal />
      <div className="Landing">
        <h1 className="Landing__title">The Cafe</h1>
        <div className="Landing__btn-container">
          <button className="login-btn">LOGIN</button>
          <button className="signup-btn">SIGNUP</button>
        </div>
        <div className="Landing__testaccount-container">
          <h1 className="Landing__testaccount">Just looking around?</h1>
          <button className="Landing__testaccountBtn">Test Account</button>
        </div>
      </div>
    </>
  );
};
